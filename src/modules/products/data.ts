import { SeedProductsType } from "./schema";

export const rawProducts: SeedProductsType = [
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

  {
    name: "iPhone 17 Pro",
    slug: "iphone-17-pro",
    description:
      "Performa Pro dalam ukuran yang lebih compact. Chip A19 Pro dan sistem kamera canggih.",
    categorySlug: "smartphone",
    brandSlug: "apple",
    isActive: true,
    variants: [
      {
        sku: "APL-IP17P-128-NAT",
        price: 22999000,
        stockQuantity: 20,
        color: "Natural Titanium",
        storage: "128GB",
        isDefault: true,
      },
      {
        sku: "APL-IP17P-256-NAT",
        price: 24999000,
        stockQuantity: 15,
        color: "Natural Titanium",
        storage: "256GB",
        isDefault: false,
      },
    ],
    specs: [
      { specName: "Chipset", specValue: "Apple A19 Pro" },
      { specName: "Layar", specValue: "6.3 inch Super Retina XDR OLED" },
    ],
    images: [
      { imageUrl: "/images/products/ip17p-nat-1.webp", isPrimary: true },
    ],
  },
  {
    name: "iPhone 17",
    slug: "iphone-17",
    description:
      "Desain aluminium elegan dengan kemampuan fotografi luar biasa dari kamera 48MP.",
    categorySlug: "smartphone",
    brandSlug: "apple",
    isActive: true,
    variants: [
      {
        sku: "APL-IP17-128-BLU",
        price: 16999000,
        stockQuantity: 30,
        color: "Blue",
        storage: "128GB",
        isDefault: true,
      },
      {
        sku: "APL-IP17-256-BLU",
        price: 18999000,
        stockQuantity: 25,
        color: "Blue",
        storage: "256GB",
        isDefault: false,
      },
    ],
    specs: [
      { specName: "Chipset", specValue: "Apple A18 Bionic" },
      { specName: "RAM", specValue: "8 GB" },
    ],
    images: [{ imageUrl: "/images/products/ip17-blu-1.webp", isPrimary: true }],
  },
  {
    name: "Samsung Galaxy Z Fold 6",
    slug: "samsung-galaxy-z-fold-6",
    description:
      "Produktivitas tanpa batas dengan layar lipat super lebar dan form factor yang lebih tipis.",
    categorySlug: "smartphone",
    brandSlug: "samsung",
    isActive: true,
    variants: [
      {
        sku: "SMG-ZFD6-256-SIL",
        price: 25999000,
        stockQuantity: 10,
        color: "Silver Shadow",
        storage: "256GB",
        isDefault: true,
      },
      {
        sku: "SMG-ZFD6-512-SIL",
        price: 27999000,
        stockQuantity: 5,
        color: "Silver Shadow",
        storage: "512GB",
        isDefault: false,
      },
    ],
    specs: [
      { specName: "Chipset", specValue: "Snapdragon 8 Gen 3" },
      { specName: "Layar Utama", specValue: "7.6 inch Dynamic AMOLED 2X" },
    ],
    images: [
      { imageUrl: "/images/products/zfold6-sil-1.webp", isPrimary: true },
    ],
  },
  {
    name: "Xiaomi 14 Ultra",
    slug: "xiaomi-14-ultra",
    description:
      "Kamera Leica Summilux optical lens terbaik untuk pengalaman fotografi profesional.",
    categorySlug: "smartphone",
    brandSlug: "xiaomi",
    isActive: true,
    variants: [
      {
        sku: "XIA-14U-512-BLK",
        price: 18999000,
        stockQuantity: 15,
        color: "Black",
        storage: "512GB",
        isDefault: true,
      },
    ],
    specs: [
      { specName: "Chipset", specValue: "Snapdragon 8 Gen 3" },
      { specName: "Kamera Utama", specValue: "50 MP (1-inch sensor)" },
    ],
    images: [
      { imageUrl: "/images/products/xia14u-blk-1.webp", isPrimary: true },
    ],
  },
  {
    name: "Xiaomi 14",
    slug: "xiaomi-14",
    description: "Compact flagship dengan lensa optik Leica generasi terbaru.",
    categorySlug: "smartphone",
    brandSlug: "xiaomi",
    isActive: true,
    variants: [
      {
        sku: "XIA-14-256-GRN",
        price: 11999000,
        stockQuantity: 25,
        color: "Jade Green",
        storage: "256GB",
        isDefault: true,
      },
    ],
    specs: [
      { specName: "Chipset", specValue: "Snapdragon 8 Gen 3" },
      { specName: "Baterai", specValue: "4610 mAh, 90W Fast Charging" },
    ],
    images: [
      { imageUrl: "/images/products/xia14-grn-1.webp", isPrimary: true },
    ],
  },
  {
    name: "POCO X6 Pro 5G",
    slug: "poco-x6-pro",
    description: "Performa buas untuk gaming dengan chipset Dimensity seri 8.",
    categorySlug: "smartphone",
    brandSlug: "xiaomi",
    isActive: true,
    variants: [
      {
        sku: "XIA-PX6P-256-YEL",
        price: 4999000,
        stockQuantity: 50,
        color: "POCO Yellow",
        storage: "256GB",
        isDefault: true,
      },
      {
        sku: "XIA-PX6P-512-YEL",
        price: 5499000,
        stockQuantity: 30,
        color: "POCO Yellow",
        storage: "512GB",
        isDefault: false,
      },
    ],
    specs: [
      { specName: "Chipset", specValue: "Dimensity 8300 Ultra" },
      { specName: "RAM", specValue: "12 GB" },
    ],
    images: [{ imageUrl: "/images/products/px6p-yel-1.webp", isPrimary: true }],
  },
  {
    name: "Redmi Note 13 Pro 5G",
    slug: "redmi-note-13-pro-5g",
    description: "Kamera 200MP OIS super jernih dengan layar AMOLED 1.5K.",
    categorySlug: "smartphone",
    brandSlug: "xiaomi",
    isActive: true,
    variants: [
      {
        sku: "XIA-RN13P-256-BLK",
        price: 4399000,
        stockQuantity: 65,
        color: "Midnight Black",
        storage: "256GB",
        isDefault: true,
      },
    ],
    specs: [
      { specName: "Chipset", specValue: "Snapdragon 7s Gen 2" },
      { specName: "Kamera Utama", specValue: "200 MP OIS" },
    ],
    images: [
      { imageUrl: "/images/products/rn13p-blk-1.webp", isPrimary: true },
    ],
  },
  {
    name: "ASUS ROG Phone 8 Pro",
    slug: "asus-rog-phone-8-pro",
    description:
      "Beyond Gaming. Desain premium yang dilengkapi AniMe Vision mini-LED display.",
    categorySlug: "smartphone",
    brandSlug: "asus",
    isActive: true,
    variants: [
      {
        sku: "ASU-ROG8P-512-BLK",
        price: 19999000,
        stockQuantity: 12,
        color: "Phantom Black",
        storage: "512GB",
        isDefault: true,
      },
      {
        sku: "ASU-ROG8P-1TB-BLK",
        price: 23999000,
        stockQuantity: 5,
        color: "Phantom Black",
        storage: "1TB",
        isDefault: false,
      },
    ],
    specs: [
      { specName: "Chipset", specValue: "Snapdragon 8 Gen 3" },
      { specName: "RAM", specValue: "16 GB" },
      { specName: "Refresh Rate", specValue: "165Hz" },
    ],
    images: [
      { imageUrl: "/images/products/rog8p-blk-1.webp", isPrimary: true },
    ],
  },
  {
    name: "ASUS Zenfone 11 Ultra",
    slug: "asus-zenfone-11-ultra",
    description:
      "Ukuran layar lebih besar, baterai tahan lama, dan AI pintar dari ASUS.",
    categorySlug: "smartphone",
    brandSlug: "asus",
    isActive: true,
    variants: [
      {
        sku: "ASU-ZF11U-256-BLU",
        price: 12999000,
        stockQuantity: 15,
        color: "Skyline Blue",
        storage: "256GB",
        isDefault: true,
      },
    ],
    specs: [
      { specName: "Chipset", specValue: "Snapdragon 8 Gen 3" },
      { specName: "Baterai", specValue: "5500 mAh" },
    ],
    images: [
      { imageUrl: "/images/products/zf11u-blu-1.webp", isPrimary: true },
    ],
  },

  {
    name: "AirPods Pro (2nd Gen) USB-C",
    slug: "airpods-pro-2-usb-c",
    description:
      "Kualitas audio menakjubkan dengan Active Noise Cancellation 2x lebih baik.",
    categorySlug: "audio-tws",
    brandSlug: "apple",
    isActive: true,
    variants: [
      {
        sku: "APL-APP2-WHT",
        price: 3999000,
        stockQuantity: 40,
        color: "White",
        storage: null,
        isDefault: true,
      },
    ],
    specs: [
      { specName: "Konektivitas", specValue: "Bluetooth 5.3" },
      { specName: "Fitur", specValue: "Active Noise Cancellation" },
    ],
    images: [{ imageUrl: "/images/products/app2-wht-1.webp", isPrimary: true }],
  },
  {
    name: "Samsung Galaxy Buds2 Pro",
    slug: "samsung-galaxy-buds2-pro",
    description:
      "Pengalaman audio Hi-Fi 24-bit yang immersif dengan desain ergonomis.",
    categorySlug: "audio-tws",
    brandSlug: "samsung",
    isActive: true,
    variants: [
      {
        sku: "SMG-GB2P-PPL",
        price: 2799000,
        stockQuantity: 25,
        color: "Bora Purple",
        storage: null,
        isDefault: true,
      },
      {
        sku: "SMG-GB2P-BLK",
        price: 2799000,
        stockQuantity: 30,
        color: "Graphite",
        storage: null,
        isDefault: false,
      },
    ],
    specs: [
      { specName: "Konektivitas", specValue: "Bluetooth 5.3" },
      { specName: "Fitur Khusus", specValue: "Intelligent ANC" },
    ],
    images: [{ imageUrl: "/images/products/gb2p-ppl-1.webp", isPrimary: true }],
  },
  {
    name: "Xiaomi Buds 4 Pro",
    slug: "xiaomi-buds-4-pro",
    description: "TWS premium dengan dukungan Hi-Res Audio Wireless dan LDAC.",
    categorySlug: "audio-tws",
    brandSlug: "xiaomi",
    isActive: true,
    variants: [
      {
        sku: "XIA-B4P-GLD",
        price: 2499000,
        stockQuantity: 20,
        color: "Star Gold",
        storage: null,
        isDefault: true,
      },
    ],
    specs: [
      { specName: "Konektivitas", specValue: "Bluetooth 5.3" },
      { specName: "Baterai", specValue: "Hingga 38 Jam (dengan case)" },
    ],
    images: [{ imageUrl: "/images/products/b4p-gld-1.webp", isPrimary: true }],
  },
  {
    name: "Samsung Galaxy Buds FE",
    slug: "samsung-galaxy-buds-fe",
    description:
      "Desain wingtip yang pas di telinga, suara bass yang kuat, dan fitur ANC.",
    categorySlug: "audio-tws",
    brandSlug: "samsung",
    isActive: true,
    variants: [
      {
        sku: "SMG-GBFE-WHT",
        price: 1399000,
        stockQuantity: 60,
        color: "White",
        storage: null,
        isDefault: true,
      },
    ],
    specs: [
      { specName: "Konektivitas", specValue: "Bluetooth 5.2" },
      { specName: "Fitur", specValue: "Active Noise Cancellation" },
    ],
    images: [{ imageUrl: "/images/products/gbfe-wht-1.webp", isPrimary: true }],
  },
  {
    name: "AirPods (3rd Gen)",
    slug: "airpods-3rd-gen",
    description:
      "Desain baru dengan Spatial Audio dan baterai yang lebih tahan lama.",
    categorySlug: "audio-tws",
    brandSlug: "apple",
    isActive: true,
    variants: [
      {
        sku: "APL-AP3-WHT",
        price: 2999000,
        stockQuantity: 35,
        color: "White",
        storage: null,
        isDefault: true,
      },
    ],
    specs: [
      { specName: "Fitur", specValue: "Personalized Spatial Audio" },
      { specName: "Ketahanan", specValue: "Tahan Air & Keringat (IPX4)" },
    ],
    images: [{ imageUrl: "/images/products/ap3-wht-1.webp", isPrimary: true }],
  },

  {
    name: "Apple 20W USB-C Power Adapter",
    slug: "apple-20w-usb-c-adapter",
    description:
      "Pengisian daya cepat dan efisien untuk iPhone dan iPad Anda di rumah.",
    categorySlug: "aksesoris",
    brandSlug: "apple",
    isActive: true,
    variants: [
      {
        sku: "APL-CHG-20W-WHT",
        price: 449000,
        stockQuantity: 150,
        color: "White",
        storage: null,
        isDefault: true,
      },
    ],
    specs: [
      { specName: "Daya Output", specValue: "20W" },
      { specName: "Tipe Konektor", specValue: "USB Type-C" },
    ],
    images: [
      { imageUrl: "/images/products/apl20w-wht-1.webp", isPrimary: true },
    ],
  },
  {
    name: "Anker 735 Charger (Nano II 65W)",
    slug: "anker-735-nano-ii-65w",
    description:
      "Satu charger untuk semua. Isi daya laptop, tablet, dan smartphone sekaligus.",
    categorySlug: "aksesoris",
    brandSlug: "anker",
    isActive: true,
    variants: [
      {
        sku: "ANK-CHG-65W-BLK",
        price: 699000,
        stockQuantity: 40,
        color: "Black",
        storage: null,
        isDefault: true,
      },
    ],
    specs: [
      { specName: "Daya Output", specValue: "65W" },
      { specName: "Port", specValue: "2x USB-C, 1x USB-A" },
    ],
    images: [
      { imageUrl: "/images/products/ank65w-blk-1.webp", isPrimary: true },
    ],
  },
  {
    name: "Xiaomi 67W Charging Combo",
    slug: "xiaomi-67w-combo",
    description:
      "Paket adapter dan kabel original Xiaomi untuk pengisian super cepat.",
    categorySlug: "aksesoris",
    brandSlug: "xiaomi",
    isActive: true,
    variants: [
      {
        sku: "XIA-CHG-67W-WHT",
        price: 349000,
        stockQuantity: 60,
        color: "White",
        storage: null,
        isDefault: true,
      },
    ],
    specs: [
      { specName: "Daya Output", specValue: "67W" },
      { specName: "Include Kabel", specValue: "Ya (USB-A to Type-C)" },
    ],
    images: [
      { imageUrl: "/images/products/xia67w-wht-1.webp", isPrimary: true },
    ],
  },
  {
    name: "Apple USB-C Woven Charge Cable (1m)",
    slug: "apple-usb-c-woven-cable-1m",
    description:
      "Kabel anyaman premium untuk sinkronisasi dan pengisian daya perangkat USB-C.",
    categorySlug: "aksesoris",
    brandSlug: "apple",
    isActive: true,
    variants: [
      {
        sku: "APL-CBL-C2C-1M-WHT",
        price: 349000,
        stockQuantity: 120,
        color: "White",
        storage: null,
        isDefault: true,
      },
    ],
    specs: [
      { specName: "Panjang", specValue: "1 Meter" },
      { specName: "Tipe Konektor", specValue: "USB-C to USB-C" },
    ],
    images: [
      { imageUrl: "/images/products/aplcbl-wht-1.webp", isPrimary: true },
    ],
  },
  {
    name: "Spigen Tough Armor Galaxy S24 Ultra",
    slug: "spigen-tough-armor-s24u",
    description:
      "Perlindungan maksimal dengan teknologi bantalan udara dan kickstand terintegrasi.",
    categorySlug: "aksesoris",
    brandSlug: "spigen",
    isActive: true,
    variants: [
      {
        sku: "SPG-TA-S24U-BLK",
        price: 459000,
        stockQuantity: 35,
        color: "Black",
        storage: null,
        isDefault: true,
      },
      {
        sku: "SPG-TA-S24U-GM",
        price: 459000,
        stockQuantity: 20,
        color: "Gunmetal",
        storage: null,
        isDefault: false,
      },
    ],
    specs: [
      { specName: "Material", specValue: "TPU + Polycarbonate" },
      { specName: "Kompatibilitas", specValue: "Samsung Galaxy S24 Ultra" },
    ],
    images: [
      { imageUrl: "/images/products/spg-ta-s24u-1.webp", isPrimary: true },
    ],
  },
  {
    name: "Anker PowerCore 10000 PD Redux",
    slug: "anker-powercore-10000-pd-redux",
    description:
      "Powerbank ringkas dengan kapasitas besar dan dukungan Power Delivery.",
    categorySlug: "aksesoris",
    brandSlug: "anker",
    isActive: true,
    variants: [
      {
        sku: "ANK-PB-10K-BLK",
        price: 599000,
        stockQuantity: 50,
        color: "Black",
        storage: null,
        isDefault: true,
      },
    ],
    specs: [
      { specName: "Kapasitas", specValue: "10000 mAh" },
      { specName: "Output Maksimal", specValue: "25W Fast Charge" },
    ],
    images: [
      { imageUrl: "/images/products/ank-pb10k-blk-1.webp", isPrimary: true },
    ],
  },
  {
    name: "Anker 622 Magnetic Battery (MagGo)",
    slug: "anker-622-maggo",
    description:
      "Powerbank magnetik tipis khusus untuk iPhone dengan penyangga lipat serbaguna.",
    categorySlug: "aksesoris",
    brandSlug: "anker",
    isActive: true,
    variants: [
      {
        sku: "ANK-PB-MAG-WHT",
        price: 899000,
        stockQuantity: 40,
        color: "White",
        storage: null,
        isDefault: true,
      },
      {
        sku: "ANK-PB-MAG-BLU",
        price: 899000,
        stockQuantity: 25,
        color: "Blue",
        storage: null,
        isDefault: false,
      },
    ],
    specs: [
      { specName: "Kapasitas", specValue: "5000 mAh" },
      { specName: "Fitur", specValue: "Magnetic Wireless + Kickstand" },
    ],
    images: [
      { imageUrl: "/images/products/ank-maggo-wht-1.webp", isPrimary: true },
    ],
  },
  {
    name: "Xiaomi 20000mAh Power Bank 3 Pro",
    slug: "xiaomi-20000mah-power-bank-3-pro",
    description:
      "Daya super besar yang mampu mengisi ulang daya laptop dan perangkat cerdas lainnya.",
    categorySlug: "aksesoris",
    brandSlug: "xiaomi",
    isActive: true,
    variants: [
      {
        sku: "XIA-PB-20K-BLK",
        price: 499000,
        stockQuantity: 45,
        color: "Black",
        storage: null,
        isDefault: true,
      },
    ],
    specs: [
      { specName: "Kapasitas", specValue: "20000 mAh" },
      { specName: "Output Maksimal", specValue: "45W (Bisa untuk Laptop)" },
    ],
    images: [
      { imageUrl: "/images/products/xia-pb20k-blk-1.webp", isPrimary: true },
    ],
  },
];
