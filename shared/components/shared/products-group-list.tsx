'use client';

import React from "react";
import { Title } from "./title";
import { useIntersection } from 'react-use';
import { cn } from "@/shared/lib/utils";
import { useCategoryStore } from "@/shared/store/category";
import { ProductCard } from "./product-card";
import { Product } from "@prisma/client";
import { ProductWithRelations } from "@/@types/prisma";

interface Props {
    title: string;
    items: ProductWithRelations[];
    className?: string;
    listClassName?: string;
    categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
    className,
    title,
    items,
    listClassName,
    categoryId,
}) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId);
        }
    }, [categoryId, intersection?.isIntersecting, title]);

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />
            
            <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
                {items.map((product, i) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.items[0].price}
                        ingredients={product.ingredients}
                    />
                ))}
            </div>
        </div>
    );
};