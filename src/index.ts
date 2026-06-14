import { OpenAPIHono } from "@hono/zod-openapi";
import { Scalar } from "@scalar/hono-api-reference";
import { logger } from "hono/logger";
import { productsRoute } from "./modules/products/route";
import { helloRoute } from "./modules/hello/route";
import { cors } from "hono/cors";

const app = new OpenAPIHono();

app.use(logger());

export const appRoute = app
  .route("/hello", helloRoute)
  .route("/products", productsRoute);

app.use(
  "*",
  cors({
    origin: ["http://localhost:5173"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  }),
);

// API Docs
app.doc("/openapi.json", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Nexara API",
    description:
      "Modern Mobile-First Ecommerce & Smart Comparison Platform for Gadgets",
  },
});

app.get("/", Scalar({ url: "/openapi.json" }));

export default app;
