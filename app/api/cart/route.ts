import { prisma } from "@/prisma/prisma-client";
import { findOrCreateCart } from "@/shared/lib/find-or-create-cart";
import { updateCartTotalAmount } from "@/shared/lib/update-cart-total-amount";
import { CreateCartItemValues } from "@/shared/services/dto/cart.dto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
      let token = req.cookies.get("cartToken")?.value;
  
      if (!token) {
        token = crypto.randomUUID();
      }
  
      const userCart = await findOrCreateCart(token);
  
      const data = (await req.json()) as CreateCartItemValues;
  
      // Поиск товара с теми же ингредиентами в корзине
      const findCartItem = await prisma.cartItem.findMany({
        where: {
          cartId: userCart.id,
          productItemId: data.productItemId,
        },
        include: {
          ingredients: true,
        },
      });
  
      // Фильтрация найденных товаров, чтобы найти товар с точно такими же ингредиентами
      const matchingCartItem = findCartItem.find((item) => {
        const ingredientIds = item.ingredients.map((ingredient) => ingredient.id).sort();
        const dataIngredientIds = data.ingredients?.sort();
  
        // Сравнение ингредиентов: если длина совпадает и каждый ингредиент идентичен
        return (
          ingredientIds.length === dataIngredientIds?.length &&
          ingredientIds.every((id, index) => id === dataIngredientIds[index])
        );
      });
  
      // Если товар с теми же ингредиентами уже есть, увеличиваем количество
      if (matchingCartItem) {
        await prisma.cartItem.update({
          where: {
            id: matchingCartItem.id,
          },
          data: {
            quantity: matchingCartItem.quantity + 1,
          },
        });
      } else {
        // Если товара нет или ингредиенты разные, создаем новый элемент корзины
        await prisma.cartItem.create({
          data: {
            cartId: userCart.id,
            productItemId: data.productItemId,
            quantity: 1,
            ingredients: { connect: data.ingredients?.map((id) => ({ id })) },
          },
        });
      }
  
      const updatedUserCart = await updateCartTotalAmount(token);
  
      const resp = NextResponse.json(updatedUserCart);
      resp.cookies.set("cartToken", token);
      return resp;
    } catch (error) {
      console.log("[CART_POST] Server error", error);
      return NextResponse.json(
        { message: "Nepodařilo se přidat položku do košíku" },
        { status: 500 }
      );
    }
  }
  