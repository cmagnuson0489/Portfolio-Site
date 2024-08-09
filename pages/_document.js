import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Viewport meta tag for responsive design */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <style>
            {`
              body {
                font-family: 'Roboto', sans-serif;
              }
            `}
          </style>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
