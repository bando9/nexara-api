import { OpenAPIHono } from "@hono/zod-openapi";
import { prisma } from "../../lib/prisma";

export const productsRoute = new OpenAPIHono();
const tags = ["products"];

productsRoute.openapi(
  {
    method: "get",
    path: "/",
    description: "get products",
    tags,
    responses: {
      200: {
        description: "Successfully get products",
      },
    },
  },
  async (c) => {
    const products = await prisma.product.findMany();
    return c.json(products, 200);
  },
);

// TODO: POST, PUT, DELETE
