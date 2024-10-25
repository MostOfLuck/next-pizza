import { InfoBlock } from "@/shared/components";


export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <InfoBlock
        title="Přístup odepřen"
        text="Tuto stránku mohou zobrazit pouze oprávnění uživatelé"
        imageUrl="https://i.postimg.cc/ry72DRRH/rb-4919.png"
      />
    </div>
  );
}
