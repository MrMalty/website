import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const { userId } = getQuery(event)

export default defineEventHandler(async (event) => {
    let orders = await prisma.orders.findMany({
        where: { userId: userId },
        orderBy: { id: "desc" },
        include: { 
            orderItem: {
                include: {
                    product: true
                }
            }
        }
    });
    return orders;
});