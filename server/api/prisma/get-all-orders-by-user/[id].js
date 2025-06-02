import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const userId = event.context.params?.userId;
    console.log("User ID:", UserId);

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
});