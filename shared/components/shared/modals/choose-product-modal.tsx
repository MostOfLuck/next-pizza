'use client'

import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { cn } from "@/shared/lib/utils";
import React from "react";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "../choose-product-form";
import { ProductWithRelations } from "@/@types/prisma";
import { ChoosePizzaForm } from "../choose-pizza-form";
import { useCartStore } from "@/shared/store";
import toast from "react-hot-toast";

interface Props {
    product: ProductWithRelations;
    className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({product,  className }) => {
const router = useRouter();
const firstItem = product.items[0]
const isPizzaForm = Boolean(firstItem.pizzaType);
const [addCartItem, loading] = useCartStore(state => [state.addCartItem, state.loading]);

    const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
        try {
            const itemId = productItemId ?? firstItem.id;

            await addCartItem({
                productItemId: itemId,
                ingredients,
            });

        toast.success(product.name + "byla přidána do košíku");
        router.back();
    } catch (err) {
        toast.error("Nepodařilo se přidat komoditu do košíku");
        console.error(err);
    }
    }


    return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
        <DialogContent className={cn("p-0 w-[1060px] max-w-[1060px] min-h-[550px] bg-white overflow-hidden", className)}>
            {
                isPizzaForm ? (
                    <ChoosePizzaForm 
                    imageUrl={product.imageUrl}
                     name={product.name} 
                     ingredients={product.ingredients}
                     items={product.items}
                     onSubmit={onSubmit}
                     loading={loading}
                       />
                ) : (
                <ChooseProductForm 
                imageUrl={product.imageUrl} 
                name={product.name} 
                onSubmit={onSubmit}
                price={firstItem.price} 
                loading={loading} 
                />
            )}
        </DialogContent>
    </Dialog>
    );
};   