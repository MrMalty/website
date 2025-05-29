import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
        const test = event.context.params.userId;
console.log(test)
    let orders = await prisma.orders.findMany({
        where: { userId: event.context.params.userId },
        orderBy: { id: "desc" },
        include: { 
            orderItem: {
                include: {
                    product: true
                }
            }
            
        }
    })
    return orders, test, event.context.params.userId
})