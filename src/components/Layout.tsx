import { PropsWithChildren } from "@kitajs/html";

type Props = { title: string; js?: JSX.Element };

export default function (props: PropsWithChildren<Props>): JSX.Element {
  const safeJs = props.js;

  return (
    <>
      {`<!docstyle html>`}
      <html lang="en" data-theme="cupcake">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title safe>{props.title}</title>
          <link rel="stylesheet" href="stylesheet.css" />
        </head>
        <body>
          {props.children}
          <script src="script.js" />
          {safeJs}
        </body>
      </html>
    </>
  );
}
