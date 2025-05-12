import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
try {

        const prisma = new PrismaClient();
        
    let products = await prisma.products.findMany()
        console.log(products)
        return products
   
} catch (error) {
    console.error(error)
}
}) 