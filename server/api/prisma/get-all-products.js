import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {

    const prisma = new PrismaClient();
        
    let products = await prisma.products.findMany()

        return products
    console.log(products)
}) 