import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { ChooseProductModal } from "@/shared/components/shared";

export default async function ProductModalPage({ params: { id } }: { params: { id: string } }) {
    const product = await prisma.product.findFirst({
        where: {
            id: Number(id),
        },
        include: {
            ingredients: true,
            items: true,
        },
    });

    if (!product) {
        return notFound();
    }

    return <ChooseProductModal product={product} />;
}