import { OpenAPIHono } from "@hono/zod-openapi";
import { prisma } from "../../lib/prisma";
import {
  AddProductBodySchema,
  GetProductQuerySchema,
  ProductSchema,
  ProductsSchema,
} from "./schema";
import slugify from "slugify";

export const productsRoute = new OpenAPIHono();

const tags = ["Products"];

productsRoute.openapi(
  {
    method: "get",
    path: "/",
    description: "get products",
    tags,
    request: {
      query: GetProductQuerySchema,
    },
    responses: {
      200: {
        description: "Successfully get products",
        content: { "application/json": { schema: ProductsSchema } },
      },
      400: {
        description: "Failed get products",
      },
    },
  },
  async (c) => {
    const {
      q,
      sort,
      sortOrder,
      category,
      brand,
      minPrice,
      maxPrice,
      limit,
      page,
    } = c.req.valid("query");

    let whereCondition: any = {};
    let prismaOrderBy: any = {};

    try {
      if (q && q.trim() == "") {
        const searchQuery = q?.trim();

        whereCondition.OR = [
          { name: { contains: searchQuery, mode: "insensitive" } },
          { slug: { contains: searchQuery, mode: "insensitive" } },
          { brandSlug: { contains: searchQuery, mode: "insensitive" } },
          { categorySlug: { contains: searchQuery, mode: "insensitive" } },
        ];
      }

      if (minPrice !== undefined || maxPrice !== undefined) {
        whereCondition.price = {};
        if (minPrice !== undefined) {
          whereCondition.price.gte = minPrice;
        }
        if (maxPrice !== undefined) {
          whereCondition.price.lte = maxPrice;
        }
      }

      switch (sort) {
        case "createdAt": {
          prismaOrderBy = {
            createdAt: sortOrder,
          };
        }

        case "price": {
          prismaOrderBy = {
            price: sortOrder,
          };
        }

        case "name": {
          prismaOrderBy = {
            slug: sortOrder,
          };
        }
      }

      if (category) {
        whereCondition.categorySlug = {
          in: category.split(",").map((category) => category.trim()),
        };
      }

      if (brand) {
        whereCondition.brandSlug = {
          in: brand.split(",").map((brand) => brand.trim()),
        };
      }

      const skip = (page - 1) * limit;

      const products = await prisma.product.findMany({
        take: limit,
        skip,
        where: whereCondition,
        orderBy: prismaOrderBy,
        include: { variants: true, specifications: true },
      });

      const totalCount = await prisma.product.count({
        where: whereCondition,
      });
      const totalPages = Math.ceil(totalCount / limit);

      return c.json(products, 200, {
        "x-total-item": totalCount.toString(),
        "x-page": page.toString(),
        "x-limit": limit.toString(),
        "x-total-pages": totalPages.toString(),
      });
    } catch (error) {
      console.log(error);
      return c.json(error, 400);
    }
  },
);

productsRoute.openapi(
  {
    method: "post",
    path: "/",
    tags,
    description: "",
    request: {
      body: {
        content: { "application/json": { schema: AddProductBodySchema } },
      },
    },
    responses: {
      201: {
        description: "Product created succesfully!",
        content: { "application/json": { schema: ProductSchema } },
      },
      400: {
        description: "Bad request create product",
      },
    },
  },
  async (c) => {
    try {
      const body = c.req.valid("json");

      const generatedSlug = slugify(body.name, { lower: true, strict: true });

      const startPrice = Math.min(
        ...body.productVariants.map((value) => value.price),
      );

      const newProduct = await prisma.product.create({
        data: {
          name: body.name,
          slug: generatedSlug,
          description: body.description,
          isActive: body.isActive,
          categorySlug: body.categorySlug,
          brandSlug: body.brandSlug,
          price: startPrice,

          productVariants: {
            create: body.productVariants,
          },
          productSpecifications: { create: body.productSpecifications },
          productImages: { create: body.productImages },
        },
        include: {
          productVariants: true,
          productSpecifications: true,
          productImages: true,
          category: { select: { name: true } },
          brand: { select: { name: true } },
        },
      });

      return c.json(newProduct, 201);
    } catch (error: any) {
      if (error.code === "P2002") {
        return c.json(
          {
            message: "Product was added before",
          },
          400,
        );
      }

      console.error(error);
      return c.json({ message: "Server error" }, 500);
    }
  },
);

// TODO: PUT, DELETE
