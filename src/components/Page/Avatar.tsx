import type { PropsWithChildren } from "@kitajs/html";

type Props = { src: string; alt: string };

export default function AvatarTrigger(
  props: PropsWithChildren<Props>,
): JSX.Element {
  return (
    <button
      id="hs-dnad"
      type="button"
      class="p-0.5 inline-flex shrink-0 items-center gap-x-3 text-start text-navbar-nav-foreground rounded-full hover:bg-navbar-nav-hover focus:outline-hidden focus:bg-navbar-nav-focus"
      aria-haspopup="menu"
      aria-expanded="false"
      aria-label="Dropdown"
    >
      <img
        class="shrink-0 size-7 rounded-full"
        src={props.src}
        alt={props.alt}
      />
    </button>
  );
}
