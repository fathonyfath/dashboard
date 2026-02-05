import type { PropsWithChildren } from "@kitajs/html";

export default function (props: PropsWithChildren<{}>): JSX.Element {
  return (
    <div class="hs-dropdown inline-flex [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] relative text-start">
      {props.children}
    </div>
  );
}
