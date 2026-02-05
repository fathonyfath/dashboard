import type { PropsWithChildren } from "@kitajs/html";

export default function (_: PropsWithChildren<{}>): JSX.Element {
  return (
    <main class="lg:hs-overlay-layout-open:ps-60 transition-all duration-300 lg:fixed lg:inset-0 pt-13.5 px-3 pb-3 bg-background-2">
      <div
        id="hs-pro-sidebar"
        class="hs-overlay [--body-scroll:true] lg:[--overlay-backdrop:false] [--is-layout-affect:true] [--opened:lg] [--auto-close:lg] hs-overlay-open:translate-x-0 lg:hs-overlay-layout-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-60 hidden fixed inset-y-0 z-60 start-0 bg-sidebar-2 lg:block lg:-translate-x-full lg:end-auto lg:bottom-0"
        role="dialog"
        tabindex="-1"
        aria-label="Sidebar"
      >
        <div class="lg:pt-13 relative flex flex-col h-full max-h-full">
          <nav class="p-3 size-full flex flex-col overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
            <div class="lg:hidden mb-2 flex items-center justify-end">
              <button
                type="button"
                class="p-1.5 size-7.5 inline-flex items-center gap-x-1 text-xs rounded-md text-muted-foreground-1 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="hs-pro-sidebar"
                data-hs-overlay="#hs-pro-sidebar"
              >
                <svg
                  class="shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span class="sr-only">Sidebar Toggle</span>
              </button>
            </div>

            <button
              type="button"
              class="p-1.5 ps-2.5 w-full inline-flex items-center gap-x-2 text-sm rounded-lg bg-layer border border-layer-line text-muted-foreground-2 shadow-xs focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="hs-pro-cmsssm"
              data-hs-overlay="#hs-pro-cmsssm"
            >
              Search
              <span class="ms-auto flex items-center gap-x-1 py-px px-1.5 border border-line-2 rounded-md">
                <svg
                  class="shrink-0 size-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
                </svg>
                <span class="text-[11px] uppercase">k</span>
              </span>
            </button>

            <div class="pt-3 mt-3 flex flex-col border-t border-sidebar-2-divider first:border-t-0 first:pt-0 first:mt-0">
              <span class="block ps-2.5 mb-2 font-medium text-xs uppercase text-muted-foreground-1">
                Home
              </span>

              <ul class="flex flex-col gap-y-1">
                <li>
                  <a
                    class="w-full flex items-center gap-x-2 py-2 px-2.5 text-sm text-sidebar-2-nav-foreground rounded-lg hover:bg-sidebar-2-nav-hover focus:outline-hidden focus:bg-sidebar-2-nav-focus bg-sidebar-2-nav-active font-medium"
                    href="#"
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>

            <div class="pt-3 mt-3 flex flex-col border-t border-sidebar-2-divider first:border-t-0 first:pt-0 first:mt-0">
              <span class="block ps-2.5 mb-2 font-medium text-xs uppercase text-muted-foreground-1">
                Pages
              </span>

              <ul class="flex flex-col gap-y-1">
                <li>
                  <a
                    class="w-full flex items-center gap-x-2 py-2 px-2.5 text-sm text-sidebar-2-nav-foreground rounded-lg hover:bg-sidebar-2-nav-hover focus:outline-hidden focus:bg-sidebar-2-nav-focus"
                    href="#"
                  >
                    Posts
                  </a>
                </li>
                <li>
                  <a
                    class="w-full flex items-center gap-x-2 py-2 px-2.5 text-sm text-sidebar-2-nav-foreground rounded-lg hover:bg-sidebar-2-nav-hover focus:outline-hidden focus:bg-sidebar-2-nav-focus"
                    href="#"
                  >
                    Members
                  </a>
                </li>
              </ul>
            </div>

            <div class="pt-3 mt-3 flex flex-col border-t border-sidebar-2-divider first:border-t-0 first:pt-0 first:mt-0">
              <span class="block ps-2.5 mb-2 font-medium text-xs uppercase text-muted-foreground-1">
                Posts
              </span>

              <ul class="flex flex-col gap-y-1">
                <li>
                  <a
                    class="w-full flex items-center gap-x-2 py-2 px-2.5 text-sm text-sidebar-2-nav-foreground rounded-lg hover:bg-sidebar-2-nav-hover focus:outline-hidden focus:bg-sidebar-2-nav-focus"
                    href="#"
                  >
                    Create Post
                  </a>
                </li>
                <li>
                  <a
                    class="w-full flex items-center gap-x-2 py-2 px-2.5 text-sm text-sidebar-2-nav-foreground rounded-lg hover:bg-sidebar-2-nav-hover focus:outline-hidden focus:bg-sidebar-2-nav-focus"
                    href="#"
                  >
                    Draft
                  </a>
                </li>
                <li>
                  <a
                    class="w-full flex items-center gap-x-2 py-2 px-2.5 text-sm text-sidebar-2-nav-foreground rounded-lg hover:bg-sidebar-2-nav-hover focus:outline-hidden focus:bg-sidebar-2-nav-focus"
                    href="#"
                  >
                    Published
                  </a>
                </li>
              </ul>
            </div>

            <div class="pt-3 mt-3 lg:hidden flex flex-col border-t border-sidebar-2-divider first:border-t-0 first:pt-0 first:mt-0">
              <span class="block ps-2.5 mb-2 font-medium text-xs uppercase text-muted-foreground-1">
                Others
              </span>

              <ul class="flex flex-col gap-y-1">
                <li>
                  <a
                    class="w-full flex items-center gap-x-2 py-2 px-2.5 text-sm text-sidebar-2-nav-foreground rounded-lg hover:bg-sidebar-2-nav-hover focus:outline-hidden focus:bg-sidebar-2-nav-focus"
                    href="#"
                  >
                    Docs
                  </a>
                </li>
                <li>
                  <a
                    class="w-full flex items-center gap-x-2 py-2 px-2.5 text-sm text-sidebar-2-nav-foreground rounded-lg hover:bg-sidebar-2-nav-hover focus:outline-hidden focus:bg-sidebar-2-nav-focus"
                    href="#"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <footer class="mt-auto p-3 flex flex-col">
            <ul class="flex flex-col gap-y-1">
              <li>
                <a
                  class="w-full flex items-center gap-x-2 py-2 px-2.5 text-sm text-sidebar-2-nav-foreground rounded-lg hover:bg-sidebar-2-nav-hover focus:outline-hidden focus:bg-sidebar-2-nav-focus"
                  href="#"
                >
                  <svg
                    class="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                  </svg>
                  What's new?
                </a>
              </li>
              <li>
                <a
                  class="w-full flex items-center gap-x-2 py-2 px-2.5 text-sm text-sidebar-2-nav-foreground rounded-lg hover:bg-sidebar-2-nav-hover focus:outline-hidden focus:bg-sidebar-2-nav-focus"
                  href="#"
                >
                  <svg
                    class="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                  Help &amp; support
                </a>
              </li>
              <li class="lg:hidden">
                <a
                  class="w-full flex items-center gap-x-2 py-2 px-2.5 text-sm text-sidebar-2-nav-foreground rounded-lg hover:bg-sidebar-2-nav-hover focus:outline-hidden focus:bg-sidebar-2-nav-focus"
                  href="#"
                >
                  <svg
                    class="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 7v14" />
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                  </svg>
                  Knowledge Base
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
      <div class="h-[calc(100dvh-62px)] lg:h-full overflow-hidden flex flex-col bg-layer border border-layer-line shadow-xs rounded-lg"></div>
    </main>
  );
}
