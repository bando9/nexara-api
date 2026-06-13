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

  for (const product of rawProducts) {
    const upsertProduct = await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: {
        name: product.name,
        slug: product.slug,
        description: product.description,
        isActive: product.isActive,

        categorySlug: product.categorySlug,
        brandSlug: product.brandSlug,

        productVariants: {
          create: product.variants,
        },

        productSpecifications: {
          create: product.specs,
        },

        productImages: {
          create: product.images,
        },
      },
    });
    console.log(`product: ${upsertProduct.name}`);
  }

  console.log(`Seeding Finished!`);
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
