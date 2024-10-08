import { cn } from "@/shared/lib/utils";
import { Product } from "@prisma/client";
import React from "react";
import { PizzaImage } from "./pizza-image";
import { Title } from "./title";
import { Button } from "../ui/button";
import { GroupVariants } from "./group-variants";
import { PizzaSize, pizzaSizes, PizzaType, pizzaTypes } from "@/shared/constants/pizza";

interface Props {
    imageUrl: string;
    name: string;
    ingredients: any[];
    items?: any[];
    onClickAdd?: VoidFunction;
    className?: string;
}

    export const ChoosePizzaForm: React.FC<Props> = ({
        name,
        items,
        imageUrl,
        ingredients,
        onClickAdd,
         className 
        }) => {
    const [size, setSize] = React.useState<PizzaSize>(20);
    const [type, setType] = React.useState<PizzaType>(1);

    const textDetaills = '30 cm, tradicne testo 30';
    const totalPrice = 250;

    return (
     <div className={cn(className, 'flex flex-1')}>
     <PizzaImage imageUrl={imageUrl} size={size} />

        <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetaills}</p>

        <GroupVariants items={pizzaSizes} Value={String(size)} onClick={value => setSize(Number(value) as PizzaSize)} />

        <GroupVariants items={pizzaTypes} Value={String(type)} onClick={value => setType(Number(value) as PizzaType)} />          

        <Button
            className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
            Přidat do košíku za {totalPrice} Kč
        </Button>
    </div>
    </div>
    );
};