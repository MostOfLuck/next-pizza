"use client";

import React from "react";
import { WhiteBlock } from "../white-block";
import { FormInput } from "../form";
interface Props {
  className?: string;
}

export const CheckoutPersonalForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="2. Osobní údaje" className={className}>
      <div className="grid grid-cols-2 gap-5">
        <FormInput name="firstName" className="text-base" placeholder="Jméno" />
        <FormInput
          name="lastName"
          className="text-base"
          placeholder="Přijmení"
        />
        <FormInput name="email" className="text-base" placeholder="Email" />
        <FormInput name="phone" className="text-base" placeholder="Telefon" />
      </div>
    </WhiteBlock>
  );
};
