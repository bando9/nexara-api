import { OpenAPIHono } from "@hono/zod-openapi";

export const helloRoute = new OpenAPIHono();

const tags = ["Hello"];

helloRoute.openapi(
  {
    method: "get",
    path: "/",
    tags,
    description: "get hello",
    responses: {
      200: {
        description: "Successfully get hello",
      },
    },
  },
  (c) => {
    const text = "Hello, Nexara here! :)";
    return c.json(text, 200);
  },
);
