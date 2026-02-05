import type { PropsWithChildren } from "@kitajs/html";

type Props = { name?: string };

export default function (props: PropsWithChildren<Props>): JSX.Element {
  return (
    <>
      {`<!DOCTYPE html>`}
      <html lang="en" data-theme="theme-autumn">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title safe>{props.name}</title>
          <link rel="stylesheet" href="stylesheet.css" />
        </head>
        <body class="hs-overlay-body-open overflow-hidden bg-background">
          {props.children}
          <script src="script.js" />
        </body>
      </html>
    </>
  );
}
