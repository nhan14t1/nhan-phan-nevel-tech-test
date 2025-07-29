import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Nhân Phan Quí - Nevel Tech test</title>
        <link rel='icon' href='/images/white-logo.svg' />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
