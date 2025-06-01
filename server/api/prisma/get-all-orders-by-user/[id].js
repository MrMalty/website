import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const userId = event.context.params.userId;
    console.log("User ID from params:", userId);

    if (!userId) {
        return { error: "Missing userId parameter." };
    };

        let orders = await prisma.orders.findMany({
            where: { userId: userId },
            orderBy: { id: "desc" },
            include: { 
                orderItem: {
                    include: { product: true }
                },
            }
        });
        return orders
});


// export default defineEventHandler(async (event) => {
//     try {
//         let orders = await prisma.orders.findMany({
//             where: { userId: event.context.params.userId },
//             orderBy: { id: "desc" },
//             include: { 
//                 orderItem: {
//                     include: { product: true }
//                 }
//             }
//         })
//         return orders
//     } catch (error) {
//         console.error("Error fetching orders:", error)
//         return { error: "Failed to retrieve orders" }
//     }
// })