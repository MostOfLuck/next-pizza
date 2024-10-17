import React from "react";
import { WhiteBlock } from "./white-block";
import { CheckoutItemDetails } from "./checkout-item-details";
import { ArrowRight, Percent, ShoppingBasket, Truck } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/shared/lib/utils";


const VAT = 15;
const DELIVERY_PRICE = 100;

interface Props {
  totalAmount: number;
  className?: string;
}

export const CheckoutSidebar: React.FC<Props> = ({ totalAmount, className }) => {

    const vatPrice = totalAmount * (VAT / 100);
    const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice;

  return (
    <WhiteBlock className={cn("p-6 sticky top-4", className)}>
      <div className="flex flex-col gap-1">
        <span className="text-xl">Celkem</span>
        <span className="text-[34px] font-extrabold">{totalPrice} Kč</span>
      </div>

      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <ShoppingBasket size={18} className="mr-2 text-gray-400" />
            Cena košíku:
          </div>
        }
        value={`${totalAmount} Kč`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Percent size={18} className="mr-2 text-gray-400" />
            Daně:
          </div>
        }
        value={`${vatPrice} Kč`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Truck size={18} className="mr-2 text-gray-400" />
            Dodávka:
          </div>
        }
        value={`${DELIVERY_PRICE} Kč`}
      />

      <Button
        type="submit"
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
      >
        Přejít na platbu
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};
