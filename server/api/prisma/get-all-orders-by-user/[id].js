import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const userId = event.context.params.userId;
if (!userId) {
    console.error("User ID is missing or invalid.");
    // return { error: "User ID is required." };
}

export default defineEventHandler(async (event) => {
    try {
        let orders = await prisma.orders.findMany({
            where: { userId: userId },
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