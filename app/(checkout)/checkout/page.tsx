import {
  CheckoutItemDetails,
  Container,
  Title,
  WhiteBlock,
} from "@/shared/components/shared";
import { Textarea } from "@/shared/components/ui";
import { Input } from "@/shared/components/ui/input";
import { Package, Percent, Truck } from "lucide-react";

export default function CheckoutPage() {
  return (
    <Container className="mt-10">
      <Title
        text="Zadávání objednávek"
        className="font-extrabold mb-8 text-[36px]"
      />

      <div className="flex gap-10">
        {/* Left side */}
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Košík">12121123</WhiteBlock>

          <WhiteBlock title="2. Osobní údaje">
            <div className="grid grid-cols-2 gap-5">
              <Input
                name="firstName"
                className="text-base"
                placeholder="Jméno"
              />
              <Input
                name="lastName"
                className="text-base"
                placeholder="Přijmení"
              />
              <Input name="email" className="text-base" placeholder="Email" />
              <Input name="phone" className="text-base" placeholder="Telefon" />
            </div>
          </WhiteBlock>

          <WhiteBlock title="3. Doručovací adresa">
            <div className="flex flex-col gap-5">
              <Input
                name="firstName"
                className="text-base"
                placeholder="Dodací adresa"
              />
              <Textarea
                className="text-base"
                placeholder="Komentář k objednávce"
                rows={5}
              />
            </div>
          </WhiteBlock>
        </div>

        {/* Right side */}
        <div className="w-[450px]">
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Celkem</span>
              <span className="text-[34px] font-extrabold">502 Kč</span>
            </div>

            <CheckoutItemDetails
                 title={
                <div className="flex items-center">
                <Package size={18} className="mr-2 text-gray-400" />
                Náklady na zboží:
                </div>
            }
             value="450 Kč" />
            <CheckoutItemDetails 
                title={
                <div className="flex items-center">
                <Percent size={18} className="mr-2 text-gray-400" />
                Daně:
                </div>
            }
             value="450 Kč" />
            <CheckoutItemDetails 
                title={
                <div className="flex items-center">
                <Truck size={18} className="mr-2 text-gray-400" />
                Daně:
                </div>
            } value="450 Kč" />
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}
