import { TemplateMenu } from "..";

export const AdmMenu = () => {
  const menuItems = [
    { label: "Cadastrar", href: "/admin/cadastrar" },
    { label: "Gerenciar", href: "/admin/gerenciar" },
  ];

  return <TemplateMenu menuItems={menuItems} />;
};
