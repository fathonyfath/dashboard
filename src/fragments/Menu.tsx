import type { PropsWithChildren } from "@kitajs/html";
import Menu from "@components/Menu";

type MenuId = "home" | "ingredients" | "products";
type MenuData = { id: MenuId; label: string };

type Props = { selectedMenuId: MenuId };

export default function (props: PropsWithChildren<Props>): JSX.Element {
  const menus: MenuData[] = [
    { id: "home", label: "Home" },
    { id: "ingredients", label: "Ingredients" },
    { id: "products", label: "Products" },
  ];
  return <Menu menus={menus} selectedId={props.selectedMenuId} />;
}
