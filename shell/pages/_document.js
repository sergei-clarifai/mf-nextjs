import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <script
          src={`https://mf-app1-theta.vercel.app/_next/static/runtime/app1RemoteEntry.js?rnd=${Math.random()}`}
        />
        <script
          src={`https://mf-app2-blond.vercel.app/_next/static/runtime/app2RemoteEntry.js?rnd=${Math.random()}`}
        />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
