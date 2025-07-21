import { PropsWithChildren } from "@kitajs/html";

type Props = { hamburgerForId: string };

export default function (props: PropsWithChildren<Props>): JSX.Element {
  return (
    <div class="navbar bg-base-100 border-b border-base-300 sticky top-0">
      <div class="flex-none">
        <label
          class="btn btn-square btn-ghost sidebar-button"
          for={props.hamburgerForId}
        >
          <span class="icon-[lucide--menu] w-5 h-5" />
        </label>
      </div>
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div class="flex-none">
        <label class="btn btn-square btn-ghost sidebar-button">
          <span class="icon-[lucide--ellipsis] w-5 h-5" />
        </label>
      </div>
    </div>
  );
}
