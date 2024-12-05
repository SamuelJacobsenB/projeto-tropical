import { TemplateMenu } from "..";

export const AdmMenu = () => {
  const menuItems = [
    { label: "Cadastrar", href: "/admin/cadastrar" },
    { label: "Gerenciar", href: "/admin/gerenciar" },
    { label: "Modificar", href: "/admin/modificar" },
  ];

  return <TemplateMenu menuItems={menuItems} />;
};
