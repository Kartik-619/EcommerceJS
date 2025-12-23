const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // 1️⃣ Create Product
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

  // 2️⃣ Image
  await prisma.productImage.create({
    data: {
      url: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
      order: 1,
      productId: product.id
    }
  });

  // 3️⃣ Variants
  await prisma.productVariant.createMany({
    data: [
      { label: "256GB", price: 1199, productId: product.id },
      { label: "512GB", price: 1399, productId: product.id },
      { label: "1TB", price: 1599, productId: product.id }
    ]
  });

  // 4️⃣ Specs
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

  console.log("✅ Seed completed");
}


//product 2
// 2️⃣ SECOND PRODUCT — iPad Pro 13-inch (M2)
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
  
  // 🖼 Image
  await prisma.productImage.create({
    data: {
      url: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
      order: 1,
      productId: product2.id
    }
  });
  
  // 💾 Storage Variants
  await prisma.productVariant.createMany({
    data: [
      { label: "128GB", price: 799, productId: product2.id },
      { label: "256GB", price: 899, productId: product2.id },
      { label: "512GB", price: 1099, productId: product2.id },
      { label: "1TB", price: 1499, productId: product2.id },
      { label: "2TB", price: 1899, productId: product2.id }
    ]
  });
  
  // 🧩 Specs (Flexible & Product-Specific)
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
  

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
