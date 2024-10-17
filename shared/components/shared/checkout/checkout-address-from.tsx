import React from "react";
import { WhiteBlock } from "../white-block";
import { Input } from "../../ui/input";
import { FormTextarea } from "../form";

interface Props {
    className?: string
}

export const CheckoutAddressForm: React.FC<Props> = ({className}) => {
    return (
        <WhiteBlock title="3. Doručovací adresa">
        <div className="flex flex-col gap-5">
          <Input
            name="firstName"
            className="text-base"
            placeholder="Dodací adresa"
          />
          <FormTextarea
            name="comment"
            className="text-base"
            placeholder="Komentář k objednávce"
            rows={5}
          />
        </div>
      </WhiteBlock>
    )
}