// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add cache control headers */}
        <meta
          httpEquiv="Cache-Control"
          content="public, max-age=31536000, immutable"
        />

        {/* Preconnect to image domain */}
        <link
          rel="preconnect"
          href="https://www.rdworldonline.com"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
