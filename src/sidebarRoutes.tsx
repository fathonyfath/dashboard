import { config } from "@server/routes";
import { jsx } from "@server/jsx";
import { htmx } from "@server/htmx";
import Home from "./pages/Home";
import Ingredients from "./pages/Ingredients";
import Products from "./pages/Products";

const htmxDecorator = htmx();

export default function () {
  return config({
    "/": Response.redirect("/home", 307),
    "/home": (p) =>
      p
        .decorate(htmxDecorator)
        .handle(jsx((c) => <Home isHTMX={c.htmx.isHTMX()} />)),

    "/ingredients": (p) =>
      p
        .decorate(htmxDecorator)
        .handle(jsx((c) => <Ingredients isHTMX={c.htmx.isHTMX()} />)),

    "/products": (p) =>
      p
        .decorate(htmxDecorator)
        .handle(jsx((c) => <Products isHTMX={c.htmx.isHTMX()} />)),
  });
}
