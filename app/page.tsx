import { Container, SortPopup, Title, TopBar, Categories, Filters } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Všechny pizzy" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Filtration column */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Products list */}
          <div className="flex-1">
            <ProductCard
              id={0}
              name="Cheeseburgerová pizza"
              price={450}
              imageUrl="https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
