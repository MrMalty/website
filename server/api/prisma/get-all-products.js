import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
    const prisma = usePrismaClient();
    
    let products = await prisma.products.findMany()
    return products
})