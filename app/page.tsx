import { Container, SortPopup, Title, TopBar, Categories, Filters } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Všechny pizzy" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Filtration column */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Products list */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title={"Pizzy"} items={[{
                id: 1,
                name: "Burger Pizza",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                price: 450,
                items: [{ price: 450 }],
              },
              
              {
                id: 1,
                name: "Burger Pizza",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                price: 450,
                items: [{ price: 450 }],
              },
              
              
              {
                id: 1,
                name: "Burger Pizza",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                price: 450,
                items: [{ price: 450 }],
              },
              
              {
                id: 1,
                name: "Burger Pizza",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                price: 450,
                items: [{ price: 450 }],
              },
              
              {
                id: 1,
                name: "Burger Pizza",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                price: 450,
                items: [{ price: 450 }],
              },
              
              {
                id: 1,
                name: "Burger Pizza",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                price: 450,
                items: [{ price: 450 }],
              },
              
              
              {
                id: 1,
                name: "Burger Pizza",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                price: 450,
                items: [{ price: 450 }],
              },
              
              
              {
                id: 1,
                name: "Burger Pizza",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                price: 450,
                items: [{ price: 450 }],
              },]} categoryId={1} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
