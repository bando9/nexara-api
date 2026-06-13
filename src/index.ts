import { OpenAPIHono } from "@hono/zod-openapi";
import { Scalar } from "@scalar/hono-api-reference";
import { logger } from "hono/logger";

const app = new OpenAPIHono();

app.use(logger());

app.openapi(
  {
    method: "get",
    path: "/hello",
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

// API Docs
app.doc("/openapi.json", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Nexara API",
    description: "-",
  },
});

app.get("/", Scalar({ url: "/openapi.json" }));

export default app;
