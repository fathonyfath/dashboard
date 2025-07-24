import NavBar from "@components/NavBar";
import type { PropsWithChildren } from "@kitajs/html";

function SideBar(props: PropsWithChildren): JSX.Element {
  return (
    <div
      class="sidebar-menu bg-base-100 border-e border-base-300"
      id="sidebar-menu"
    >
      {props.children}
    </div>
  );
}

function Content(props: PropsWithChildren): JSX.Element {
  return (
    <div class="sidebar-content bg-base-200" id="page-root">
      <NavBar hamburgerForId="sidebar" />
      <div class="grow" id="page-content">
        {props.children}
      </div>
    </div>
  );
}

type Props = { sidebar?: JSX.Element };

export default function (props: PropsWithChildren<Props>): JSX.Element {
  const safeSideBar = props.sidebar;
  const hasSideBar = safeSideBar !== undefined && safeSideBar !== null;

  return (
    <div class="sidebar">
      {hasSideBar && (
        <input id="sidebar" type="checkbox" class="sidebar-toggle" />
      )}
      {hasSideBar && <SideBar>{safeSideBar}</SideBar>}
      {hasSideBar && (
        <label
          for="sidebar"
          aria-label="close sidebar"
          class="sidebar-overlay"
        />
      )}
      <Content>{props.children}</Content>
    </div>
  );
}
