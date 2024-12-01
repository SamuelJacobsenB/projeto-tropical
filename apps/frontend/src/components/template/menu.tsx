import Image from "next/image";
import Link from "next/link";

export const Menu = () => {
  const menuItemStyle =
    "text-white text-lg decoration-red-600 decoration-2 hover:underline md:text-xl";

  return (
    <div className="flex items-center gap-8 bg-primary w-screen h-40 p-6 fixed z-10 md:w-60 md:h-screen md:flex-col md:gap-16 md:p-8">
      <div className="flex justify-center items-center size-26 bg-white rounded-full p-1">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>
      <nav className="flex flex-col justify-center gap-2 flex-shrink md:items-center md:gap-12">
        <h2 className="text-xl text-white text-start uppercase md:text-3xl">
          Menu
        </h2>
        <ul className="flex justify-around flex-wrap gap-4 w-full md:flex-col md:items-center md:gap-10">
          <li className={menuItemStyle}>
            <Link href={"/hamburgueres"}>Hambúrgueres</Link>
          </li>
          <li className={menuItemStyle}>
            <Link href={"sobremesas"}>Sobremesas</Link>
          </li>
          <li className={menuItemStyle}>
            <Link href={"porcoes"}>Porções</Link>
          </li>
          <li className={menuItemStyle}>
            <Link href={"bebidas"}>Bebidas</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
