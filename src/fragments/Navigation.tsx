import { Html, type PropsWithChildren } from "@kitajs/html";
import Nav from "@components/Nav";

type NavId = "dashboard" | "ingredients" | "products";
type NavData = { id: NavId; label: string };

type Props = { selected: NavId };

export default function (props: PropsWithChildren<Props>): JSX.Element {
  const menus: NavData[] = [
    { id: "dashboard", label: "Dashboard" },
    { id: "ingredients", label: "Ingredients" },
    { id: "products", label: "Products" },
  ];

  return (
    <Nav>
      {menus.map((item) => (
        <Nav.Item href={item.id} active={props.selected === item.id}>
          {Html.escapeHtml(item.label)}
        </Nav.Item>
      ))}
    </Nav>
  );
}
