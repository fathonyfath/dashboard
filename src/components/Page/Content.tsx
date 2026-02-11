import type { PropsWithChildren } from "@kitajs/html";
import { SideBar } from "./Sidebar";

export default function (_: PropsWithChildren<{}>): JSX.Element {
  return (
    <main class="lg:hs-overlay-layout-open:ps-60 transition-all duration-300 lg:fixed lg:inset-0 pt-13.5 px-3 pb-3 bg-background-2">
      <SideBar />
      <div class="h-[calc(100dvh-62px)] lg:h-full overflow-hidden flex flex-col bg-layer border border-layer-line shadow-xs rounded-lg"></div>
    </main>
  );
}
