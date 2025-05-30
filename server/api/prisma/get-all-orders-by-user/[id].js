import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

const userid = event.context.params.id
return { Message: `users ID is ${userid}` }
  // try {
  //   const userid = event.context.params

  //   return { Message: `users ID is ${userid}` }

  //   // if (!userId) {
  //   //   return {
  //   //     statusCode: 400,
  //   //     body: { error: 'Missing userId parameter' }
  //   //   }
  //   // }

  //   // let orders = await prisma.orders.findMany({
  //   //   where: { userId },
  //   //   orderBy: { id: 'desc' },
  //   //   include: {
  //   //     orderItem: {
  //   //       include: {
  //   //         product: true
  //   //       }
  //   //     }
  //   //   }
  //   // })

  //   // return {orders, userId }
  // } catch (error) {
  //   console.error('Error fetching orders:', error)
  //   return {
  //     statusCode: 500,
  //     body: { error: 'Internal Server Error' }
  //   }
  // }
})
