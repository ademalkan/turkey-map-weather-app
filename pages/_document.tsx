import { Footer } from "@/components";
import { NextUIProvider } from "@nextui-org/react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Turkey Map Weather App</title>
        <link rel="icon" href="/favicon.ico" />{" "}
      </Head>{" "}
      <body>
        <NextUIProvider>
          <Main />
          <NextScript />
          <Footer />
        </NextUIProvider>
      </body>
    </Html>
  );
}
