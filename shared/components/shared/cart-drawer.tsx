import React from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/shared/components/ui/sheet';
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface Props {
    className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({ children,  className }) => {
    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            
            <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
            <SheetHeader>
                <SheetTitle>
                V košíku <span className="font-bold">3 komodita</span>
                </SheetTitle>
            </SheetHeader>

            { /* Cart items */ }

            <SheetFooter className="-mx-6 bg-white p-8">
                <div className="w-full" >
                
                <div className="flex mb-4">
                    <span className="flex flex-1 text-lg text-neutral-500">
                    Celkem
                    <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"></div>
                    </span>

                    <span className="font-bold text-lg">300 Kč</span>
                </div>

                <Link href="/cart">
                <Button
                    type="submit"
                    className="w-full h-12 text-base">
                    Objednat
                    <ArrowRight className="w-5 ml-2" />
                </Button>
                </Link>
                
                </div>
            </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};   