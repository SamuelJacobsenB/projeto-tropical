import { TemplateMenu } from "..";

export const Menu = () => {
  const menuItems = [
    { label: "Hambúrgueres", href: "/hamburgueres" },
    { label: "Sobremesas", href: "/sobremesas" },
    { label: "Porções", href: "/porcoes" },
    { label: "Bebidas", href: "/bebidas" },
  ];

  return <TemplateMenu menuItems={menuItems} />;
};
