"use client";

import React from "react";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CartDrawerItem } from "./card-drawer-item";
import { getCartItemDetails } from "@/shared/lib/get-cart-item-details";
import { useCartStore } from "@/shared/store";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { removeCartItem } from "@/shared/services/cart";
import { Title } from "./title";
import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  const [
    totalAmount,
    items,
    fetchCartItems,
    updateItemQuantity,
    removeCartItem,
  ] = useCartStore((state) => [
    state.totalAmount,
    state.items,
    state.fetchCartItems,
    state.updateItemQuantity,
    state.removeCartItem,
  ]);

  React.useEffect(() => {
    fetchCartItems();
  }, []);

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <div className={cn("flex flex-col h-full", !totalAmount && 'justify-center')}>
        {totalAmount > 0 && (
          <SheetHeader>
            <SheetTitle>
              V košíku{" "}
              <span className="font-bold">{items.length} komodita</span>
            </SheetTitle>
          </SheetHeader>
        )}

        {!totalAmount && (
          <div className="flex-flex-col items-center justify-center w-56 mx-auto">
            <Image
              src="https://i.ibb.co/yy3GFcr/box.png"
              alt="Empty cart"
              width={200}
              height={200}
            />
            <Title
              size="sm"
              text="Košík je prázdný"
              className="text-center font-bold my-2"
            />
            <p className="text-center text-neutral-500 mb-5">
              Přidejte alespoň jednu položku a vytvořte objednávku
            </p>

            <SheetClose>
              <Button className="w-56 h-12 text-base" size="lg">
                <ArrowLeft className="w-5 mr-2" />
                Návrat zpět
              </Button>
            </SheetClose>
          </div>
        )}

        {totalAmount > 0 && (
          <>
            <div className="-mx-6 mt-5 overflow-auto flex-1">
              {items.map((item) => (
                <div key={item.id} className="mb-2">
                  <CartDrawerItem
                    id={item.id}
                    imageUrl={item.imageUrl}
                    details={
                      item.pizzaSize && item.pizzaType
                        ? getCartItemDetails(
                            item.ingredients,
                            item.pizzaType as PizzaType,
                            item.pizzaSize as PizzaSize
                          )
                        : ""
                    }
                    disabled={item.disabled}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    onClickCountButton={(type) =>
                      onClickCountButton(item.id, item.quantity, type)
                    }
                    onClickRemove={() => removeCartItem(item.id)}
                  />{" "}
                </div>
              ))}
            </div>

            <SheetFooter className="-mx-6 bg-white p-8">
              <div className="w-full">
                <div className="flex mb-4">
                  <span className="flex flex-1 text-lg text-neutral-500">
                    Celkem
                    <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"></div>
                  </span>

                  <span className="font-bold text-lg">{totalAmount} Kč</span>
                </div>

                <Link href="/cart">
                  <Button type="submit" className="w-full h-12 text-base">
                    Objednat
                    <ArrowRight className="w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </SheetFooter>
          </>
        )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
