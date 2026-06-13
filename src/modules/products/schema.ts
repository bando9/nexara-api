import { z } from "@hono/zod-openapi";

// Variant
export const VariantSchema = z.object({
  sku: z.string().openapi({ example: "SMG-S24U-256-GRY" }),
  price: z.int().openapi({ example: 21999000 }),
  stockQuantity: z.int().openapi({ example: 25 }).default(0),
  color: z.string().openapi({ example: "Titanium Gray" }).nullable(),
  storage: z.string().openapi({ example: "256GB" }).nullable(),
  isDefault: z.boolean().default(false),
});

export const VariantsSchema = z.array(VariantSchema);

// Specification
export const SpecificationSchema = z.object({
  specName: z.string().openapi({ example: "Chipset" }),
  specValue: z.string().openapi({ example: "Apple A19 Pro" }),
});
export const SpecificationsSchema = z.array(SpecificationSchema);

export const ImageSchema = z.object({
  imageUrl: z
    .string()
    .openapi({ example: "/images/products/ip17pm-nat-1.webp" }),
  isPrimary: z.boolean(),
});
export const ImagesSchema = z.array(ImageSchema);

// Product
export const ProductSchema = z.object({
  //   id: z.string(),
  name: z.string().openapi({ example: "iPhone 17 Pro Max" }),
  slug: z.string().openapi({ example: "iphone-17-pro-max" }),
  description: z.string().openapi({
    example:
      "Smartphone flagship terbaru dengan material Titanium Grade 5 dan chip A19 Pro.",
  }),
  categorySlug: z.string().openapi({ example: "smartphone" }),
  brandSlug: z.string().openapi({ example: "apple" }),
  isActive: z.boolean().default(true),
  variants: VariantsSchema,
  specs: SpecificationsSchema,
  images: ImagesSchema,
});

export const ProductsSchema = z.array(ProductSchema);

export type ProductType = z.infer<typeof ProductSchema>;
export type ProductsType = z.infer<typeof ProductsSchema>;
