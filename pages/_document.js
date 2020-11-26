import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
          <meta name="robots" content="index, follow" />
          <meta
            name="keywords"
            content="Portfolio, Works, Skills, Perlaza, Johao, Javascript, NextJS, React, Development, software, Software"
          />
          <meta name="author" content="Johao Perlaza" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="ModalCertificate"></div>
        </body>
      </Html>
    );
  }
}
