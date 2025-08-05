import type { PropsWithChildren } from "@kitajs/html";

function Nav(props: PropsWithChildren): JSX.Element {
  return (
    <ul
      class="menu min-h-full w-full p-4"
      hx-target="#page-content"
      hx-swap="innerHTML scroll:#page-root:top"
      hx-push-url="true"
    >
      {props.children}
    </ul>
  );
}

type Item = { id?: string; href?: string; active?: boolean };

function NavItem(props: PropsWithChildren<Item>): JSX.Element {
  const activeClassName = props.active ? "menu-active" : "";
  return (
    <li>
      <a
        id={props.id}
        class={activeClassName}
        href={props.href}
        hx-get={props.href}
      >
        {props.children}
      </a>
    </li>
  );
}

Nav.Item = NavItem;

export default Nav;
