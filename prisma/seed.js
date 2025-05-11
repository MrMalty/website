const { PrismaClient } = "@prisma/client";
const prisma = new PrismaClient();

async function seedProducts() {
  try {

    await prisma.products.create({
      data: {
        title: "Intel Guardian I5 RTX 3050",
        description: "Intel Guardian i5 RTX3050 Gaming PC. Nvidia RTX3050 6GB Video, Wifi Ready, 32GB memory and 1TB SSD. Gaming case with 3x ARGB Fans.",
        url: "https://www.kiallacomputers.com.au/products/sysgi530501t32.jpg",
        price: 115700 // EG: 25.00
      },
    });

    await prisma.products.create({
      data: {
        title: "ASUS TUF Gaming TF5090",
        description: "TUF-RTX5090-O32G-GAMING RTX5090 Video Card.",
        url: "https://www.kiallacomputers.com.au/products/gartx5090ato.jpg",
        price: 704695
      },
    });

    await prisma.products.create({
      data: {
        title: "MSI GeForce RTX 5090",
        description: "MSI GeForce RTX 5090, 32G Ventus 3x OC video card.",
        url: "https://www.kiallacomputers.com.au/products/gartx5090mv30.jpg",
        price: 670195
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();
