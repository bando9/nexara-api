import { z } from "@hono/zod-openapi";

// Variant
export const VariantSchema = z.object({
  id: z.string(),
  sku: z.string().openapi({ example: "SMG-S24U-256-GRY" }),
  price: z.number().int().positive().openapi({ example: 21999000 }),
  stockQuantity: z
    .number()
    .int()
    .nonnegative()
    .default(0)
    .openapi({ example: 25 }),
  color: z.string().optional().nullable().openapi({ example: "Titanium Gray" }),
  storage: z.string().optional().nullable().openapi({ example: "256GB" }),
  isDefault: z.boolean().default(false),
});

export const VariantsSchema = z.array(VariantSchema);

// Specification
export const SpecificationSchema = z.object({
  id: z.string(),
  specName: z.string().openapi({ example: "Chipset" }),
  specValue: z.string().openapi({ example: "Apple A19 Pro" }),
});
export const SpecificationsSchema = z.array(SpecificationSchema);

export const ImageSchema = z.object({
  imageUrl: z
    .string()
    .openapi({ example: "/images/products/ip17pm-nat-1.webp" }),
  isPrimary: z.boolean().default(false),
});
export const ImagesSchema = z.array(ImageSchema);

// Product
export const ProductSchema = z.object({
  id: z.string(),
  name: z.string().openapi({ example: "iPhone 17 Pro Max" }),
  slug: z.string().openapi({ example: "iphone-17-pro-max" }),
  description: z.string().openapi({
    example:
      "Smartphone flagship terbaru dengan material Titanium Grade 5 dan chip A19 Pro.",
  }),
  categorySlug: z.string().openapi({ example: "smartphone" }),
  brandSlug: z.string().openapi({ example: "apple" }),
  isActive: z.boolean().default(true),
  price: z.int(),
  variants: VariantsSchema,
  specifications: SpecificationsSchema,
  images: ImagesSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const ProductsSchema = z.array(ProductSchema);

// Seed Product
export const SeedProductSchema = ProductSchema.omit({
  id: true,
  price: true,
  createdAt: true,
  updatedAt: true,
});
export const SeedProductsSchema = z.array(SeedProductSchema);

// Product Query
export const GetProductQuerySchema = z.object({
  page: z.coerce.number().min(1).optional().default(1),
  limit: z.coerce.number().min(1).max(100).optional().default(10),
  minPrice: z.coerce.number().min(0).optional(),
  maxPrice: z.coerce.number().min(0).optional(),
  sort: z.enum(["createdAt", "price", "name"]).optional().default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).optional().default("desc"),
  category: z.coerce.string().optional(),
  brand: z.coerce.string().optional(),
  q: z.string().optional(),
});

// Create Product Query
export const AddProductBodySchema = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
  isActive: z.boolean().default(true),
  categorySlug: z.string(),
  brandSlug: z.string(),
  productVariants: VariantsSchema.min(1),
  productSpecifications: SpecificationsSchema.optional(),
  productImages: ImagesSchema.min(1),
});

// Delete Product Query

export type ProductType = z.infer<typeof ProductSchema>;
export type ProductsType = z.infer<typeof ProductsSchema>;
export type SeedProductType = z.infer<typeof SeedProductSchema>;
export type SeedProductsType = z.infer<typeof SeedProductsSchema>;
