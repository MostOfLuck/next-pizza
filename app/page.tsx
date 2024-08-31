import { Container, SortPopup, Title , TopBar, Categories, Filters} from "@/components/shared";

export default function Home() {
  
  return    (
  <>


    <Container className="mt-10">
      <Title text="Všechny pizzy" size="lg" className="font-extrabold" />
    </Container>

    <TopBar/>

    <Container className="mt-10 pb-14">
      <div className="flex gap-[60px]"></div>
      {/* Filtration */}
    <div className="w-[250px]">
      <Filters/>
    </div>


    {/* Products list*/}
    <div className="flex-1">
       <div className="flex flex-col gap-16"></div>Product list<div/>
    </div>
    </Container>

    </>
    );
}
