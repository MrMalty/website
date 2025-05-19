import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    
    const res = await prisma.auth.signUp({ email, password });

    if (error) {
        console.error('Error singing up:', error.message);
    } else {
        console.log('User singed up:', user)
    }

    return res
})