const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  // Clear existing data first
  console.log("🧹 Clearing existing data...");
  await prisma.productSpec.deleteMany();
  await prisma.productVariant.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();

  console.log("✅ Existing data cleared");

  // 1️⃣ FIRST PRODUCT — iPhone 17 Pro Max
  const product = await prisma.product.create({
    data: {
      slug: "iphone-17-pro-max-1",
      category: "iPhone",
      model: "iPhone 17 Pro Max",
      basePrice: 1199,
      currency: "USD",
      description: "Apple iPhone 17 Pro Max",
      releaseDate: new Date("2023-09-22"),
      createdAt: new Date()
    }
  });

  console.log(`📱 Created iPhone: ${product.id}`);

  // 2️⃣ Image for iPhone
  await prisma.productImage.create({
    data: {
      url: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
      order: 1,
      productId: product.id
    }
  });

  // 3️⃣ Variants for iPhone
  await prisma.productVariant.createMany({
    data: [
      { label: "256GB", price: 1199, productId: product.id },
      { label: "512GB", price: 1399, productId: product.id },
      { label: "1TB", price: 1599, productId: product.id }
    ]
  });

  // 4️⃣ Specs for iPhone
  await prisma.productSpec.createMany({
    data: [
      { key: "display", value: "6.7-inch Super Retina XDR display with ProMotion", productId: product.id },
      { key: "chip", value: "A17 Pro chip", productId: product.id },
      { key: "camera", value: "48MP main camera, 5x optical zoom, Night mode", productId: product.id },
      { key: "battery", value: "Up to 29 hours video playback", productId: product.id },
      { key: "os", value: "iOS 17", productId: product.id },
      { key: "color", value: "Natural Titanium, Blue Titanium, White Titanium, Black Titanium", productId: product.id },
      { key: "connectivity", value: "5G, Wi-Fi 6E, Bluetooth 5.3", productId: product.id },
      { key: "water_resistance", value: "IP68 (6 meters for 30 minutes)", productId: product.id },
      { key: "face_id", value: "TrueDepth camera system", productId: product.id },
      { key: "mag_safe", value: "Compatible with MagSafe accessories", productId: product.id }
    ]
  });

  console.log("✅ iPhone seeded successfully");

  // 5️⃣ SECOND PRODUCT — iPad Pro 13-inch (M2)
  const product2 = await prisma.product.create({
    data: {
      slug: "ipad-pro-13-m2-1",
      category: "iPad",
      model: "iPad Pro 13-inch (M2)",
      basePrice: 799,
      currency: "USD",
      description: "Apple iPad Pro 13-inch powered by M2 chip",
      releaseDate: new Date("2023-06-07"),
      createdAt: new Date()
    }
  });

  console.log(`📱 Created iPad: ${product2.id}`);

  // 🖼 Image for iPad
  await prisma.productImage.create({
    data: {
      url: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
      order: 1,
      productId: product2.id
    }
  });

  // 💾 Storage Variants for iPad
  await prisma.productVariant.createMany({
    data: [
      { label: "128GB", price: 799, productId: product2.id },
      { label: "256GB", price: 899, productId: product2.id },
      { label: "512GB", price: 1099, productId: product2.id },
      { label: "1TB", price: 1499, productId: product2.id },
      { label: "2TB", price: 1899, productId: product2.id }
    ]
  });

  // 🧩 Specs for iPad
  await prisma.productSpec.createMany({
    data: [
      { key: "display", value: "12.9-inch Liquid Retina XDR display (Mini-LED)", productId: product2.id },
      { key: "chip", value: "Apple M2 chip", productId: product2.id },
      { key: "camera", value: "12MP Ultra Wide front camera with Center Stage", productId: product2.id },
      { key: "audio", value: "Four speaker audio system", productId: product2.id },
      { key: "os", value: "iPadOS 17", productId: product2.id },
      { key: "color", value: "Space Gray, Silver", productId: product2.id },
      { key: "accessories", value: "Apple Pencil (2nd gen), Magic Keyboard", productId: product2.id },
      { key: "connectivity", value: "5G, Wi-Fi 6E, Thunderbolt / USB 4", productId: product2.id },
      { key: "face_id", value: "TrueDepth camera system", productId: product2.id }
    ]
  });

  console.log("✅ iPad Pro seeded successfully");

  //product 3
// iPhone 17 Pro
const iphone17Pro = await prisma.product.create({
    data: {
      slug: "iphone-17-pro-1",
      category: "iPhone",
      model: "iPhone 17 Pro",
      basePrice: 999,
      currency: "USD",
      description: "Apple iPhone 17 Pro",
      releaseDate: new Date("2023-09-22"),
      createdAt: new Date()
    }
  });
  
  // Image
  await prisma.productImage.create({
    data: {
      url: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd",
      order: 1,
      productId: iphone17Pro.id
    }
  });
  
  // Storage Variants
  await prisma.productVariant.createMany({
    data: [
      { label: "128GB", price: 999, productId: iphone17Pro.id },
      { label: "256GB", price: 1099, productId: iphone17Pro.id },
      { label: "512GB", price: 1299, productId: iphone17Pro.id },
      { label: "1TB", price: 1499, productId: iphone17Pro.id }
    ]
  });
  
  // Specs
  await prisma.productSpec.createMany({
    data: [
      {
        key: "display",
        value: "6.1-inch Super Retina XDR display with ProMotion",
        productId: iphone17Pro.id
      },
      {
        key: "chip",
        value: "A17 Pro chip",
        productId: iphone17Pro.id
      },
      {
        key: "camera",
        value: "48MP main camera, 5x optical zoom, Night mode on all cameras",
        productId: iphone17Pro.id
      },
      {
        key: "battery",
        value: "Up to 23 hours video playback",
        productId: iphone17Pro.id
      },
      {
        key: "os",
        value: "iOS 17",
        productId: iphone17Pro.id
      },
      {
        key: "color",
        value: "Natural Titanium, Blue Titanium, White Titanium, Black Titanium",
        productId: iphone17Pro.id
      },
      {
        key: "connectivity",
        value: "5G, Wi-Fi 6E, Bluetooth 5.3",
        productId: iphone17Pro.id
      },
      {
        key: "water_resistance",
        value: "IP68 (6 meters for 30 minutes)",
        productId: iphone17Pro.id
      },
      {
        key: "face_id",
        value: "TrueDepth camera system",
        productId: iphone17Pro.id
      },
      {
        key: "mag_safe",
        value: "Compatible with MagSafe accessories",
        productId: iphone17Pro.id
      }
    ]
  });
  
  console.log("✅ iPhone 17 Pro seeded");
  // iPad Pro 13-inch (M2)
  const watch = await prisma.product.create({
    data: {
      slug: "apple-watch-ultra-2-1",
      category: "Wearables",
      model: "Apple Watch Ultra 2",
      basePrice: 799,
      currency: "USD",
      description: "Apple Watch Ultra 2 with rugged titanium design",
      releaseDate: new Date("2023-09-22"),
      createdAt: new Date()
    }
  });
  
  // Image
  await prisma.productImage.create({
    data: {
      url: "https://images.unsplash.com/photo-1713056878930-c5604da9acfd",
      order: 1,
      productId: watch.id
    }
  });
  
  // Specs
  await prisma.productSpec.createMany({
    data: [
      { key: "display", value: "Always-On Retina display", productId: watch.id },
      { key: "chip", value: "Apple S9 SiP", productId: watch.id },
      { key: "battery", value: "Up to 36 hours, 72 hours in Low Power Mode", productId: watch.id },
      { key: "band_color", value: "Deep Navy, Orange, Silver Aluminum", productId: watch.id },
      { key: "case_material", value: "Titanium", productId: watch.id },
      { key: "features", value: "Depth sensor, Action button, Emergency SOS, Precision Finding", productId: watch.id },
      { key: "os", value: "watchOS 10", productId: watch.id },
      { key: "water_resistance", value: "WR100", productId: watch.id },
      { key: "health_sensors", value: "Blood oxygen, ECG, Heart rate, Temperature sensing", productId: watch.id },
      { key: "durability", value: "MIL-STD-810H certified", productId: watch.id },
      { key: "connectivity", value: "GPS + Cellular, Bluetooth 5.3", productId: watch.id }
    ]
  });
  //iphone-17se

  const iphone17SE = await prisma.product.create({
    data: {
        slug: "iphone-17-se-1",
    category: "iPhone",
    model: "iPhone 17 SE",
    basePrice: 499,
    currency: "USD",
      description: "Apple iPhone Pro 8-inch with M4 chip and best gaming experience with 150MP camera and professional gaming experience.",
      releaseDate: new Date("2023-06-07"),
      createdAt: new Date()
    }
  });
  await prisma.productImage.create({
    data: {
      url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      order: 1,
      productId: iphone17SE.id
    }
  });

  await prisma.productVariant.createMany({
    data: [
        { label: "64GB", price: 499 },
        { label: "128GB", price: 549 },
        { label: "256GB", price: 649 }
    ],
   
  });
  await prisma.productSpec.createMany({
    data:  [
        { key: "display", value: "6.1-inch Retina HD display" },
        { key: "chip", value: "A15 Bionic chip" },
        { key: "camera", value: "12MP dual-camera system with Night mode" },
        { key: "battery", value: "Up to 15 hours video playback" },
        { key: "os", value: "iOS 17" },
        { key: "color", value: "Product Red, Midnight, Starlight, Blue" },
        { key: "connectivity", value: "5G, Wi-Fi 6, Bluetooth 5.0" },
        { key: "touch_id", value: "Touch ID in home button" },
        { key: "water_resistance", value: "IP67 (1 meter for 30 minutes)" },
        { key: "mag_safe", value: "Compatible with MagSafe accessories" }
      ]
  });

  const ipadPro = await prisma.product.create({
    data: {
      slug: "ipad-pro-13-m2-1",
      category: "iPad",
      model: "iPad Pro 13-inch (M2)",
      basePrice: 799,
      currency: "USD",
      description: "Apple iPad Pro 13-inch with M2 chip",
      releaseDate: new Date("2023-06-07"),
      createdAt: new Date()
    }
  });

  console.log(`📱 Created iPad Pro: ${ipadPro.id}`);

  // Image for iPad Pro
  await prisma.productImage.create({
    data: {
      url: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
      order: 1,
      productId: ipadPro.id
    }
  });

  // Variants for iPad Pro
  await prisma.productVariant.createMany({
    data: [
      { label: "128GB", price: 799, productId: ipadPro.id },
      { label: "256GB", price: 899, productId: ipadPro.id },
      { label: "512GB", price: 1099, productId: ipadPro.id },
      { label: "1TB", price: 1499, productId: ipadPro.id },
      { label: "2TB", price: 1899, productId: ipadPro.id }
    ]
  });

  // Specs for iPad Pro
  await prisma.productSpec.createMany({
    data: [
      { key: "display", value: "12.9-inch Liquid Retina XDR display (Mini-LED)", productId: ipadPro.id },
      { key: "chip", value: "Apple M2 chip", productId: ipadPro.id },
      { key: "os", value: "iPadOS 17", productId: ipadPro.id },
      { key: "color", value: "Space Gray, Silver", productId: ipadPro.id },
      { key: "accessories", value: "Apple Pencil (2nd gen), Magic Keyboard", productId: ipadPro.id },
      { key: "camera", value: "12MP Ultra Wide front camera with Center Stage", productId: ipadPro.id },
      { key: "audio", value: "Four speaker audio system", productId: ipadPro.id },
      { key: "connectivity", value: "5G, Wi-Fi 6E, Thunderbolt / USB 4", productId: ipadPro.id },
      { key: "face_id", value: "TrueDepth camera system", productId: ipadPro.id }
    ]
  });

  console.log("✅ iPad Pro seeded successfully");

  // 5️⃣ FIFTH PRODUCT — Apple Watch Ultra 2
  const appleWatch = await prisma.product.create({
    data: {
      slug: "apple-watch-ultra-2-1",
      category: "Wearables",
      model: "Apple Watch Ultra 2",
      basePrice: 799,
      currency: "USD",
      description: "Apple Watch Ultra 2 with rugged titanium design",
      releaseDate: new Date("2023-09-22"),
      createdAt: new Date()
    }
  });

  console.log(`⌚ Created Apple Watch Ultra 2: ${appleWatch.id}`);

  // Image for Apple Watch
  await prisma.productImage.create({
    data: {
      url: "https://images.unsplash.com/photo-1713056878930-c5604da9acfd",
      order: 1,
      productId: appleWatch.id
    }
  });

  // Specs for Apple Watch
  await prisma.productSpec.createMany({
    data: [
      { key: "display", value: "Always-On Retina display", productId: appleWatch.id },
      { key: "chip", value: "Apple S9 SiP", productId: appleWatch.id },
      { key: "battery", value: "Up to 36 hours, 72 hours in Low Power Mode", productId: appleWatch.id },
      { key: "band_color", value: "Deep Navy, Orange, Silver Aluminum", productId: appleWatch.id },
      { key: "case_material", value: "Titanium", productId: appleWatch.id },
      { key: "features", value: "Depth sensor, Action button, Emergency SOS, Precision Finding", productId: appleWatch.id },
      { key: "os", value: "watchOS 10", productId: appleWatch.id },
      { key: "water_resistance", value: "WR100", productId: appleWatch.id },
      { key: "health_sensors", value: "Blood oxygen, ECG, Heart rate, Temperature sensing", productId: appleWatch.id },
      { key: "durability", value: "MIL-STD-810H certified", productId: appleWatch.id },
      { key: "connectivity", value: "GPS + Cellular, Bluetooth 5.3", productId: appleWatch.id }
    ]
  });

  console.log("✅ Apple Watch Ultra 2 seeded");

  // 6️⃣ SIXTH PRODUCT — AirPods Max (2nd generation)
  const airpodsMax = await prisma.product.create({
    data: {
      slug: "airpods-max-2-1",
      category: "Accessories",
      model: "AirPods Max (2nd generation)",
      basePrice: 549,
      currency: "USD",
      description: "Premium over-ear headphones with Active Noise Cancellation and Spatial Audio",
      releaseDate: new Date("2024-06-10"),
      createdAt: new Date()
    }
  });

  console.log(`🎧 Created AirPods Max (2nd generation): ${airpodsMax.id}`);

  // Image for AirPods Max
  await prisma.productImage.create({
    data: {
      url: "https://images.unsplash.com/photo-1668073343175-31e76569eb8f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      order: 1,
      productId: airpodsMax.id
    }
  });

  // Variants for AirPods Max (colors as variants)
  await prisma.productVariant.createMany({
    data: [
      { label: "Space Gray", price: 549, productId: airpodsMax.id },
      { label: "Silver", price: 549, productId: airpodsMax.id },
      { label: "Sky Blue", price: 549, productId: airpodsMax.id },
      { label: "Pink", price: 549, productId: airpodsMax.id },
      { label: "Green", price: 549, productId: airpodsMax.id }
    ]
  });

  // Specs for AirPods Max
  await prisma.productSpec.createMany({
    data: [
      { key: "features", value: "Active Noise Cancellation, Transparency mode, Spatial Audio, Digital Crown", productId: airpodsMax.id },
      { key: "battery", value: "Up to 20 hours listening time", productId: airpodsMax.id },
      { key: "driver_technology", value: "Custom dynamic driver", productId: airpodsMax.id },
      { key: "microphones", value: "Eight microphones for ANC and voice pickup", productId: airpodsMax.id },
      { key: "materials", value: "Stainless steel frame, Anodized aluminum cups, Mesh canopy", productId: airpodsMax.id },
      { key: "connectivity", value: "Bluetooth 5.3, Apple H1 chip", productId: airpodsMax.id },
      { key: "weight", value: "384.8 grams", productId: airpodsMax.id },
      { key: "case_included", value: "Smart Case for ultra low power mode", productId: airpodsMax.id },
      { key: "audio_formats", value: "AAC, Apple Lossless, Spatial Audio with Dolby Atmos", productId: airpodsMax.id },
      { key: "compatibility", value: "iPhone, iPad, Mac, Apple TV, Android devices", productId: airpodsMax.id }
    ]
  });

  console.log("✅ AirPods Max (2nd generation) seeded");

}

main()
  .catch(e => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(() => {
    console.log("🔌 Disconnecting from database...");
    prisma.$disconnect();
  });