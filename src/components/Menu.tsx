import type { PropsWithChildren } from "@kitajs/html";

type Menu = { id: string; label: string };

type Props = {
  menus: Menu[];
  selectedId: string;
};

export default function (props: PropsWithChildren<Props>): JSX.Element {
  return (
    <ul class="menu min-h-full w-full p-4">
      {props.menus.map((menu) => {
        const activeClassName =
          menu.id === props.selectedId ? "menu-active" : "";
        return (
          <li>
            <a
              id={menu.id}
              class={activeClassName}
              href={menu.id}
              hx-get={menu.id}
              hx-target="#page-content"
              hx-swap="innerHTML scroll:#page-root:top"
              hx-push-url="true"
              safe
            >
              {menu.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
