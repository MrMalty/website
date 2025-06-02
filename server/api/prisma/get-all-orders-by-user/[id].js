import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const { id } = event.context.params
return { message: `Fetching data for ID: ${id}` };


export default defineEventHandler(async (event) => {
    let orders = await prisma.orders.findMany({
        where: { userId: id },
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