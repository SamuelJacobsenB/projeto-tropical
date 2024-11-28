import Image from "next/image";
import Link from "next/link";

export const Menu = () => {
  return (
    <div className="flex items-center gap-8 bg-primary w-screen min-h-40 p-6 md:w-72 md:h-screen md:flex-col md:gap-16 md:p-8">
      <div className="flex justify-center items-center size-26 bg-white rounded-full p-1">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>
      <div className="flex flex-col justify-center gap-2 flex-shrink md:items-center md:gap-12">
        <h2 className="text-xl text-white text-start md:text-3xl">Menu</h2>
        <ul className="flex justify-around flex-wrap gap-4 w-full md:flex-col md:items-center md:gap-10">
          <li className="menu-item">
            <Link href={"/hamburgueres"}>Hambúrgueres</Link>
          </li>
          <li className="menu-item">
            <Link href={"sobremesas"}>Sobremesas</Link>
          </li>
          <li className="menu-item">
            <Link href={"porcoes"}>Porções</Link>
          </li>
          <li className="menu-item">
            <Link href={"bebidas"}>Bebidas</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
