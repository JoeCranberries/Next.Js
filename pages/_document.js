import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
                {/* <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Slabo+27px&display=swap"
                    rel="stylesheet"
                /> */}
            </Head>
            <body className="font-sans min-h-screen antialiased tracking-tighter text-gray-800">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
