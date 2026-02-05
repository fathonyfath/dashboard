import type { PropsWithChildren } from "@kitajs/html";

export default function (props: PropsWithChildren<{}>): JSX.Element {
  return (
    <div
      class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-dropdown border border-dropdown-line rounded-xl shadow-xl"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="hs-dnad"
    >
      {props.children}
    </div>
  );
}
