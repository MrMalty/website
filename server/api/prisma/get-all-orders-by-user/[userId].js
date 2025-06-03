import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const { userId } = getRouterParams(event, 'userId')
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