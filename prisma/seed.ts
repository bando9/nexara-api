import { prisma } from "../src/lib/prisma";
import { brands } from "../src/modules/brands/data";
import { categories } from "../src/modules/categories/data";
import { rawProducts } from "../src/modules/products/data";

import slugify from "slugify";

async function main() {
  console.log("Seeding process...");

  console.log(`\nSeeding brand...`);

  for (const brand of brands) {
    const upsertBrand = await prisma.brand.upsert({
      where: { slug: brand.slug },
      create: brand,
      update: brand,
    });

    console.log(`Brand: ${upsertBrand.slug}`);
  }

  console.log(`\nSeeding category...`);
  for (const category of categories) {
    const upsertCategory = await prisma.category.upsert({
      where: { slug: category.slug },
      create: category,
      update: category,
    });

    console.log(`Category: ${upsertCategory.slug}`);
  }

  console.log(`\nSeeding product...`);
  for (const product of rawProducts) {
    const slug = slugify(product.name);
    const upsertProduct = await prisma.product.create({
      data: {
        name: product.name,
        slug,
        categorySlug: product.categorySlug,
        brandSlug: product.brandSlug,

        productVariants: {
          create: {
            sku: product.sku,
            price: product.price,
            stockQuantity: product.stock,
            isDefault: true,
          },
        },

        productSpecifications: {
          create: product.specs.map((spec) => ({
            specName: spec.n,
            specValue: spec.v,
          })),
        },
      },
    });
    console.log(`Product: ${upsertProduct.name}`);
  }

  console.log(`\nFinish Seeding`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
