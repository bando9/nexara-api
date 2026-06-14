import { OpenAPIHono } from "@hono/zod-openapi";
import { prisma } from "../../lib/prisma";

export const brandRoute = new OpenAPIHono();

const tags = ["Brands"];

brandRoute.openapi(
  {
    method: "get",
    path: "/",
    tags,
    description: "get brands",
    responses: {
      200: {
        description: "Successfully get brands",
      },
    },
  },
  async (c) => {
    const brands = await prisma.brand.findMany();
    return c.json(brands, 200);
  },
);
