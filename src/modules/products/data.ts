import { ProductsType } from "./schema";

export const rawProducts: ProductsType = [
  {
    name: "iPhone 17 Pro Max",
    slug: "iphone-17-pro-max",
    description:
      "Smartphone flagship terbaru dengan material Titanium Grade 5 dan chip A19 Pro.",
    categorySlug: "smartphone",
    brandSlug: "apple",
    isActive: true,
    variants: [
      {
        sku: "APL-IP17PM-256-NAT",
        price: 26999000,
        stockQuantity: 15,
        color: "Natural Titanium",
        storage: "256GB",
        isDefault: true,
      },
      {
        sku: "APL-IP17PM-512-NAT",
        price: 30499000,
        stockQuantity: 8,
        color: "Natural Titanium",
        storage: "512GB",
        isDefault: false,
      },
      {
        sku: "APL-IP17PM-256-BLK",
        price: 26999000,
        stockQuantity: 12,
        color: "Black Titanium",
        storage: "256GB",
        isDefault: false,
      },
    ],
    specs: [
      { specName: "Chipset", specValue: "Apple A19 Pro" },
      { specName: "RAM", specValue: "12 GB" },
      { specName: "Layar", specValue: "6.9 inch Super Retina XDR OLED" },
    ],
    images: [
      { imageUrl: "/images/products/ip17pm-nat-1.webp", isPrimary: true },
      { imageUrl: "/images/products/ip17pm-nat-2.webp", isPrimary: false },
    ],
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    slug: "samsung-galaxy-s24-ultra",
    description:
      "Era baru AI mobile dengan Galaxy AI. Dilengkapi S Pen bawaan dan kamera 200MP.",
    categorySlug: "smartphone",
    brandSlug: "samsung",
    isActive: true,
    variants: [
      {
        sku: "SMG-S24U-256-GRY",
        price: 21999000,
        stockQuantity: 25,
        color: "Titanium Gray",
        storage: "256GB",
        isDefault: true,
      },
      {
        sku: "SMG-S24U-512-GRY",
        price: 23999000,
        stockQuantity: 10,
        color: "Titanium Gray",
        storage: "512GB",
        isDefault: false,
      },
    ],
    specs: [
      { specName: "Chipset", specValue: "Snapdragon 8 Gen 3 for Galaxy" },
      { specName: "RAM", specValue: "12 GB" },
      { specName: "Kamera Utama", specValue: "200 MP" },
    ],
    images: [{ imageUrl: "/images/products/s24u-gry-1.webp", isPrimary: true }],
  },
  {
    name: "Samsung 45W Power Adapter",
    slug: "samsung-45w-power-adapter",
    description:
      "Pengisian daya super cepat 45W untuk perangkat Galaxy yang kompatibel.",
    categorySlug: "aksesoris",
    brandSlug: "samsung",
    isActive: true,
    variants: [
      {
        sku: "SMG-CHG-45W-BLK",
        price: 499000,
        stockQuantity: 100,
        color: "Black",
        storage: null,
        isDefault: true,
      },
    ],
    specs: [
      { specName: "Daya Output", specValue: "45W Super Fast Charging 2.0" },
      { specName: "Tipe Konektor", specValue: "USB Type-C" },
    ],
    images: [{ imageUrl: "/images/products/smg-45w-1.webp", isPrimary: true }],
  },
  {
    name: "Spigen Ultra Hybrid",
    slug: "spigen-ultra-hybrid-ip17pm",
    description:
      "Casing bening anti-kuning dengan perlindungan drop test militer.",
    categorySlug: "aksesoris",
    brandSlug: "spigen",
    isActive: true,
    variants: [
      {
        sku: "SPG-UH-IP17PM-CLR",
        price: 299000,
        stockQuantity: 50,
        color: "Crystal Clear",
        storage: null,
        isDefault: true,
      },
    ],
    specs: [
      { specName: "Material", specValue: "TPU Bumper + Polycarbonate Back" },
      { specName: "Kompatibilitas", specValue: "iPhone 17 Pro Max" },
    ],
    images: [{ imageUrl: "/images/products/spg-uh-1.webp", isPrimary: true }],
  },
];
