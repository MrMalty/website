import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const userId = event.context.params.userId

    if (!userId) {
      return {
        statusCode: 400,
        body: { error: 'Missing userId parameter' }
      }
    }

    const orders = await prisma.orders.findMany({
      where: { userId },
      orderBy: { id: 'desc' },
      include: {
        orderItem: {
          include: {
            product: true
          }
        }
      }
    })

    return {orders, userId }
  } catch (error) {
    console.error('Error fetching orders:', error)
    return {
      statusCode: 500,
      body: { error: 'Internal Server Error' }
    }
  }
})
