const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedProducts() {
  try {

    await prisma.products.create({
      data: {
        title: "MSI GeForce RTX 5090 32G VENTUS 3X OC RTX5090 Video card",
        description: "MSI GeForce RTX 5090 32G VENTUS 3X OC RTX5090 Video card.",
        url: "https://www.kiallacomputers.com.au/products/gartx5090mv30.jpg",
        price: 670000 // EG: 25.00
      },
    });

    await prisma.products.create({
        data: {
          title: "Asus TUF-RTX5090-O32G-GAMING RTX5090 Video Card",
          description: "Asus TUF-RTX5090-O32G-GAMING RTX5090 Video Card.",
          url: "https://www.kiallacomputers.com.au/products/gartx5090ato.jpg",
          price: 681500 // EG: 25.00
        },
    });
      
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();
