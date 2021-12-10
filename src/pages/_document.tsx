import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

class AppDocument extends Document {
  static getInitialProps = async (context: DocumentContext) => {
    const initialProps = await Document.getInitialProps(context);
    return { ...initialProps };
  };
  render() {
    return (
      <Html lang="ko">
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <link href="/static/favicon.ico" rel="shortcut icon" />
        </Head>
        <body className="dark:bg-gray-800 dark:text-white text-gray-800 bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
