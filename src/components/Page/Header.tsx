import type { PropsWithChildren } from "@kitajs/html";
import AvatarMenu from "./AvatarMenu";
import Avatar from "./Avatar";
import AvatarMenuContent from "./AvatarMenuContent";

function LogoButton(): JSX.Element {
  return (
    <a
      class="shrink-0 inline-flex justify-center items-center bg-primary size-8 rounded-md text-xl font-semibold focus:outline-hidden focus:opacity-80"
      href="index.html"
      aria-label="Preline"
    >
      <svg
        class="shrink-0 size-5"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.0835 3.23358C9.88316 3.23358 3.23548 9.8771 3.23548 18.0723V35.5832H0.583496V18.0723C0.583496 8.41337 8.41851 0.583252 18.0835 0.583252C27.7485 0.583252 35.5835 8.41337 35.5835 18.0723C35.5835 27.7312 27.7485 35.5614 18.0835 35.5614H16.7357V32.911H18.0835C26.2838 32.911 32.9315 26.2675 32.9315 18.0723C32.9315 9.8771 26.2838 3.23358 18.0835 3.23358Z"
          class="fill-primary-foreground"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.0833 8.62162C12.8852 8.62162 8.62666 12.9245 8.62666 18.2879V35.5833H5.97468V18.2879C5.97468 11.5105 11.3713 5.97129 18.0833 5.97129C24.7954 5.97129 30.192 11.5105 30.192 18.2879C30.192 25.0653 24.7954 30.6045 18.0833 30.6045H16.7355V27.9542H18.0833C23.2815 27.9542 27.54 23.6513 27.54 18.2879C27.54 12.9245 23.2815 8.62162 18.0833 8.62162Z"
          class="fill-primary-foreground"
          fill="currentColor"
        />
        <path
          d="M24.8225 18.1012C24.8225 21.8208 21.8053 24.8361 18.0833 24.8361C14.3614 24.8361 11.3442 21.8208 11.3442 18.1012C11.3442 14.3815 14.3614 11.3662 18.0833 11.3662C21.8053 11.3662 24.8225 14.3815 24.8225 18.1012Z"
          class="fill-primary-foreground"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}

function SidebarToggleButton(): JSX.Element {
  return (
    <button
      type="button"
      class="ms-1 p-1.5 size-7.5 inline-flex items-center gap-x-1 text-xs rounded-md border border-transparent text-foreground hover:bg-surface-hover disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-surface-focus"
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
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M15 3v18" />
        <path d="m10 15-3-3 3-3" />
      </svg>
      <span class="sr-only">Sidebar Toggle</span>
    </button>
  );
}

function HeaderPrimaryNav(props: PropsWithChildren<{}>): JSX.Element {
  return <ul class="flex items-center gap-1.5">{props.children}</ul>;
}

function HeaderPrimaryNavItem(props: PropsWithChildren<{}>): JSX.Element {
  return (
    <li class="inline-flex items-center relative pe-1.5 last:pe-0 last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:w-px after:h-3.5 after:bg-navbar-2-divider after:rounded-full after:-translate-y-1/2 after:rotate-12">
      {props.children}
    </li>
  );
}

function HeaderUserNav(props: PropsWithChildren<{}>): JSX.Element {
  return (
    <ul class="flex flex-row items-center gap-x-3 ms-auto">{props.children}</ul>
  );
}

function HeaderUserNavItem(props: PropsWithChildren<{}>): JSX.Element {
  return (
    <li class="inline-flex items-center gap-1.5 relative pe-3 last:pe-0 last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:w-px after:h-3.5 after:bg-navbar-2-divider after:rounded-full after:-translate-y-1/2 after:rotate-12">
      <div class="h-8">{props.children}</div>
    </li>
  );
}

export default function Header(): JSX.Element {
  return (
    <header class="fixed top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-48 lg:z-61 w-full bg-navbar-2 text-sm py-2.5">
      <nav class="px-4 sm:px-5.5 flex basis-full items-center w-full mx-auto">
        <div class="w-full flex items-center gap-x-1.5">
          <HeaderPrimaryNav>
            <HeaderPrimaryNavItem>
              <LogoButton />
              <SidebarToggleButton />
            </HeaderPrimaryNavItem>
          </HeaderPrimaryNav>
          <HeaderUserNav>
            <HeaderUserNavItem>
              <AvatarMenu>
                <Avatar
                  src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                  alt="Avatar"
                />
                <AvatarMenuContent>
                  <div class="py-2 px-3.5">
                    <span class="font-medium text-foreground">
                      James Collison
                    </span>
                    <p class="text-sm text-muted-foreground-1">
                      jamescollison@site.com
                    </p>
                    <div class="mt-1.5">
                      <a
                        class="flex justify-center items-center gap-x-1.5 py-2 px-2.5 font-medium text-[13px] bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary-hover focus:outline-hidden focus:bg-secondary-focus disabled:opacity-50 disabled:pointer-events-none"
                        href="#"
                      >
                        Upgrade to Pro
                      </a>
                    </div>
                  </div>
                  <div class="px-4 py-2 border-t border-dropdown-divider">
                    <div class="flex flex-wrap justify-between items-center gap-2">
                      <span class="flex-1 cursor-pointer text-sm text-foreground">
                        Theme
                      </span>
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
                  <div class="p-1 border-t border-dropdown-divider">
                    <a
                      class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-dropdown-item-foreground hover:bg-dropdown-item-hover disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-dropdown-item-focus"
                      href="#"
                    >
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
                    </a>
                    <a
                      class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-dropdown-item-foreground hover:bg-dropdown-item-hover disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-dropdown-item-focus"
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
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      Settings
                    </a>
                    <a
                      class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-dropdown-item-foreground hover:bg-dropdown-item-hover disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-dropdown-item-focus"
                      href="#"
                    >
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
                    </a>
                  </div>
                </AvatarMenuContent>
              </AvatarMenu>
            </HeaderUserNavItem>
          </HeaderUserNav>
        </div>
      </nav>
    </header>
  );
}
