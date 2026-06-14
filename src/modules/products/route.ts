import { OpenAPIHono } from "@hono/zod-openapi";
import { prisma } from "../../lib/prisma";
import { ProductQuerySchema, ProductsSchema } from "./schema";

export const productsRoute = new OpenAPIHono();
const tags = ["Products"];

productsRoute.openapi(
  {
    method: "get",
    path: "/",
    description: "get products",
    tags,
    request: {
      query: ProductQuerySchema,
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
    const { q } = c.req.valid("query");

    // TODO: sort: createdAt, price, name.
    // TODO: sortOrder: desc, asc
    // TODO: filter: range-price, variant-color, category, brand, variant-storage

    let whereCondition: any = {};

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

      // switch(sort){
      //   case "createdAt": {

      //   }
      // }

      const products = await prisma.product.findMany({
        where: whereCondition,
        orderBy: {
          price: "desc",
        },
        include: { productVariants: true },
      });

      return c.json(products, 200);
    } catch (error) {
      console.log(error);
      return c.json(error, 400);
    }
  },
);

// TODO: POST, PUT, DELETE
