import tailwind from "./tailwind.css"
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => [
  ...(tailwind ? [{ rel: "stylesheet", href: tailwind }] : []),
];

export default function App() {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div>
          <Outlet />  {/* コンテンツが入る場所 */}
        </div>
        <ScrollRestoration />   {/* スクロール位置を復元 */}
        <Scripts />             {/* JSの実行に必須 */}
        <LiveReload />          {/* 開発時の変更にリロードを発生させる */}
      </body>
    </html>
  );
}
