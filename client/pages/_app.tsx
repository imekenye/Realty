import React from "react";
import { AppProps } from "next/app";
// import "tailwindcss/tailwind.css";
import "../src/styles/globals.css";
import { StyledThemeProvider } from "@definitions/styled-components";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <StyledThemeProvider>
            <RecoilRoot>
                <Component {...pageProps} />
            </RecoilRoot>
        </StyledThemeProvider>
    );
}

export default MyApp;
