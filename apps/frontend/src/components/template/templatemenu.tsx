import Image from "next/image";
import Link from "next/link";

interface MenuItem {
  label: string;
  href: string;
}

interface TemplateMenuProps {
  menuItems: MenuItem[];
}

export const TemplateMenu = ({ menuItems }: TemplateMenuProps) => {
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
          {menuItems.map(({ label, href }) => (
            <li key={label} className={menuItemStyle}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
