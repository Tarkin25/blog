import { ServerStyleSheets } from "@material-ui/styles";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { Children } from "react";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }

    static async getInitialProps(context: DocumentContext) {
        const sheets = new ServerStyleSheets();
        const originalRenderPage = context.renderPage;

        context.renderPage = () => 
            originalRenderPage({
                enhanceApp: (App) => props => sheets.collect(<App {...props} />)
            });

        const initialProps = await Document.getInitialProps(context);

        return {
            ...initialProps,
            styles: [...Children.toArray(initialProps.styles), sheets.getStyleElement()],
        };
    }
}
