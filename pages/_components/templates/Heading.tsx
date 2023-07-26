import React from "react";

import Head from "next/head";

export default function Heading({ title }: { title?: string }) {
  const appName = "NeuTube";
  const appTitle = title ? title + " - " + appName : appName;
  const appDesc = "YouTubeの音楽をタイピング! Typing-Tube代替サイト!";

  return (
    <Head>
      <title>{appTitle}</title>
      <link href="/img/favicon.ico" rel="icon" />
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content={appDesc} name="description" />
      <meta content={appName} property="og:site_name" />
      <meta content={appTitle} property="og:title" />
      <meta content={appDesc} property="og:description" />
      <meta content="neu.boson.jp" property="og:url" />
      <meta content="neu.boson.jp/ogp.png" property="og:image" />
      <meta content={appTitle} property="twitter:title" />
      <meta content="summary_large_image" property="twitter:card" />
      <meta content="@neutube_jp" property="twitter:site" />
      <meta content="@boson328" property="twitter:creator" />
    </Head>
  );
}
