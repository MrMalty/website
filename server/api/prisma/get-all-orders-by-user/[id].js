
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const userId = event.context.params?.userId;
  console.log("User ID:", userId);

  if (!userId) {
    return { error: "Missing userId parameter." };
  }

  try {
    const orders = await prisma.orders.findMany({
      where: { userId },
      orderBy: { id: "desc" },
      include: {
        orderItem: {
          include: {
            product: true
          }
        }
      }
    });

    console.log("Orders:", orders);
    return orders;
  } catch (error) {
    console.error("Prisma error:", error);
    return { error: "Failed to fetch orders." };
  }
});
