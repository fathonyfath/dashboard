import "simplebar";

import ResizeObserver from "resize-observer-polyfill";
window.ResizeObserver = ResizeObserver;

type Breakpoint = "sm" | "md" | "lg" | "xl";

function maxWidthMatches(name: Breakpoint): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  const breakpoint = getComputedStyle(
    document.documentElement,
  ).getPropertyValue(`--breakpoint-${name}`);

  const mediaQuery = window.matchMedia(`(width < ${breakpoint})`);

  return mediaQuery.matches;
}

declare global {
  interface Window {
    maxWidthMatches: (breakpoint: Breakpoint) => boolean;
  }
}

window.maxWidthMatches = maxWidthMatches;

import "htmx.org";
import htmx from "htmx.org";

htmx.on(".sidebar", "htmx:oobAfterSwap", function (event: CustomEvent) {
  if (
    event.detail.target.id === "sidebar-menu" &&
    window.maxWidthMatches("lg")
  ) {
    const checkBox = <HTMLInputElement>document.querySelector("input#sidebar");
    checkBox.checked = !checkBox.checked;
  }
});
