import { OpenAPIHono } from "@hono/zod-openapi";
import { prisma } from "../../lib/prisma";

export const categoryRoute = new OpenAPIHono();

const tags = ["Categories"];

categoryRoute.openapi(
  {
    method: "get",
    path: "/",
    tags,
    description: "get categories",
    responses: {
      200: {
        description: "Successfully get categories",
      },
    },
  },
  async (c) => {
    const categories = await prisma.category.findMany();
    return c.json(categories, 200);
  },
);
