import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

if (!userId) {
    console.log("User ID: ",userId);
};


export default defineEventHandler(async (event) => {
    try {
        let orders = await prisma.orders.findMany({
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