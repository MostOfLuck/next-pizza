import React from "react";
import { cn } from "@/shared/lib/utils";
import { Container } from "./container";
import { Button } from "../ui/button";
import { User } from "lucide-react";
import Image from "next/image";
import PizzaImage from "@/img/Screenshot_2024-09-24_142257-transformed.png";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { CartButton } from "./cart-button";

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({
  hasSearch = true,
  hasCart = true,
  className,
}) => {
  return (
    <header className={cn(" border-b w-full", className)}>
      <Container className="flex items-center justify-between py-8 w-full">
        {/* Left side */}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src={PizzaImage} alt="Sun" className="h-24 w-24 ml-2 mr-2" />
            <div className="text-left">
              <h1 className="text-2xl uppercase font-black">Slunečná pizza</h1>
              <p className="text-sm text-gray-400 leading-3">Chuť ráje</p>
            </div>
          </div>
        </Link>

        {hasSearch && (
          <div className="mx-10 flex-1">
            <SearchInput />
          </div>
        )}

        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Zadejte
          </Button>

          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
