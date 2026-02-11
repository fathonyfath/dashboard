import type { PropsWithChildren } from "@kitajs/html";

export default function (props: PropsWithChildren<{}>): JSX.Element {
  return (
    <div
      class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-dropdown border border-dropdown-line rounded-xl shadow-xl"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="hs-dnad"
    >
      <div class="py-2 px-3.5">
        <span class="font-medium text-foreground">James Collison</span>
        <p class="text-sm text-muted-foreground-1">jamescollison@site.com</p>
        <div class="mt-1.5">
          <a
            class="flex justify-center items-center gap-x-1.5 py-2 px-2.5 font-medium text-[13px] bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary-hover focus:outline-hidden focus:bg-secondary-focus disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            Upgrade to Pro
          </a>
        </div>
      </div>
      <ToggleTheme />
      <Section>
        <Item>
          <svg
            class="shrink-0 mt-0.5 size-4"
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
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Profile
        </Item>
        <Item>
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
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          Settings
        </Item>
        <Item>
          <svg
            class="shrink-0 mt-0.5 size-4"
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
            <path d="m16 17 5-5-5-5" />
            <path d="M21 12H9" />
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          </svg>
          Log out
        </Item>
      </Section>
    </div>
  );
}

function ToggleTheme(): JSX.Element {
  return (
    <div class="px-4 py-2 border-t border-dropdown-divider">
      <div class="flex flex-wrap justify-between items-center gap-2">
        <span class="flex-1 cursor-pointer text-sm text-foreground">Theme</span>
        <div class="p-0.5 inline-flex cursor-pointer bg-surface rounded-full">
          <button
            type="button"
            class="size-7 flex justify-center items-center bg-layer shadow-sm text-layer-foreground rounded-full hs-auto-mode-active:bg-transparent hs-auto-mode-active:shadow-none hs-dark-mode-active:bg-transparent hs-dark-mode-active:shadow-none"
            data-hs-theme-click-value="default"
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
              <circle cx="12" cy="12" r="4" />
              <path d="M12 3v1" />
              <path d="M12 20v1" />
              <path d="M3 12h1" />
              <path d="M20 12h1" />
              <path d="m18.364 5.636-.707.707" />
              <path d="m6.343 17.657-.707.707" />
              <path d="m5.636 5.636.707.707" />
              <path d="m17.657 17.657.707.707" />
            </svg>
            <span class="sr-only">Default (Light)</span>
          </button>
          <button
            type="button"
            class="size-7 flex justify-center items-center text-layer-foreground rounded-full hs-dark-mode-active:bg-secondary-active hs-dark-mode-active:text-secondary-foreground hs-dark-mode-active:shadow-sm"
            data-hs-theme-click-value="dark"
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
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
            <span class="sr-only">Dark</span>
          </button>
          <button
            type="button"
            class="size-7 flex justify-center items-center text-layer-foreground rounded-full hs-auto-light-mode-active:bg-layer hs-auto-mode-active:shadow-sm"
            data-hs-theme-click-value="auto"
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
              <rect width="20" height="14" x="2" y="3" rx="2" />
              <line x1="8" x2="16" y1="21" y2="21" />
              <line x1="12" x2="12" y1="17" y2="21" />
            </svg>
            <span class="sr-only">Auto (System)</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function Section(props: PropsWithChildren): JSX.Element {
  return (
    <div class="p-1 border-t border-dropdown-divider">{props.children}</div>
  );
}

function Item(props: PropsWithChildren): JSX.Element {
  return (
    <a
      class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-dropdown-item-foreground hover:bg-dropdown-item-hover disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-dropdown-item-focus"
      href="#"
    >
      {props.children}
    </a>
  );
}
