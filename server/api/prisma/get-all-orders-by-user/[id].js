import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler( (event) => {
    try {
        let orders = prisma.orders.findMany({
            where: { userId: event.context.params.userId },
            orderBy: { id: "desc" },
            include: { 
                orderItem: {
                    include: { product: true }
                }
            }
        })
        return orders
    } catch (error) {
        console.error("Error fetching orders:", error)
        return { error: "Failed to retrieve orders" }
    }
})