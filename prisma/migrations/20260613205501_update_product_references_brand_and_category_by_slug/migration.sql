/*
  Warnings:

  - You are about to drop the column `brandId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `brandSlug` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categorySlug` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_brandId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "brandId",
DROP COLUMN "categoryId",
ADD COLUMN     "brandSlug" TEXT NOT NULL,
ADD COLUMN     "categorySlug" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categorySlug_fkey" FOREIGN KEY ("categorySlug") REFERENCES "Category"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_brandSlug_fkey" FOREIGN KEY ("brandSlug") REFERENCES "Brand"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
