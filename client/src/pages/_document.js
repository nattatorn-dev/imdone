import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>

          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <title>Next example</title>
          <meta
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
            name="viewport"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="http://bokuweb.github.io/re-bulma/style.css"
          />
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />

        </body>
      </html>
    )
  }
}
