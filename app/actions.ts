'use server';

import { prisma } from "@/prisma/prisma-client";
import { CheckoutFormValues } from "@/shared/constants";
import { OrderStatus } from "@prisma/client";
import { cookies } from "next/headers";

export async function createOrder(data: CheckoutFormValues) {
    try {
        const cookieStore = cookies();
        const cartToken = cookieStore.get("cartToken")?.value;

        if (!cartToken) {
            throw new Error("Cart token not found");
        }

        const userCart = await prisma.cart.findFirst({
            include: {
                user: true,
                items: {
                  include: {
                    ingredients: true,
                    productItem: {
                      include: {
                        product: true,
                      },
                    },
                  },
                },
              },
              where: {
                token: cartToken,
              },
        });


            /* Если корзина не найдена возращаем ошибку */
    if (!userCart) {
        throw new Error('Cart not found');
      }

          /* Если корзина пустая возращаем ошибку */
    if (userCart?.totalAmount === 0) {
        throw new Error('Cart is empty');
      }


          /* Создаем заказ */
    const order = await prisma.order.create({
        data: {
          token: cartToken,
          fullName: data.firstName + ' ' + data.lastName,
          email: data.email,
          phone: data.phone,
          address: data.address,
          comment: data.comment,
          totalAmount: userCart.totalAmount,
          status: OrderStatus.PENDING,
          items: JSON.stringify(userCart.items),
        },
      });

       /* Очищаем корзину */
    await prisma.cart.update({
        where: {
          id: userCart.id,
        },
        data: {
          totalAmount: 0,
        },
      });

      await prisma.cartItem.deleteMany({
        where: {
          cartId: userCart.id,
        },
      });

    } catch (err) {}
}

