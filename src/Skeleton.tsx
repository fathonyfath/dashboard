import NavBar from "@components/NavBar";

export default function (): JSX.Element {
  return (
    <div class="sidebar">
      <input id="sidebar" type="checkbox" class="sidebar-toggle" />
      <div class="sidebar-menu bg-base-100 border-e border-base-300">
        <ul class="menu text-base-content min-h-full w-full p-4">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      <label for="sidebar" aria-label="close sidebar" class="sidebar-overlay" />
      <div class="sidebar-content bg-base-200">
        <NavBar hamburgerForId="sidebar" />
      </div>
    </div>
  );
}
