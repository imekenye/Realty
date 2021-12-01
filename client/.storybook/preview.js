import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";

import { light } from "../src/definitions/styled-components/light";
import { dark } from "../src/definitions/styled-components/dark";

import "../src/styles/globals.css";

import * as nextImage from "next/image";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
};

const lightTheme = {
    name: "LIGHT",
    ...light,
};

const darkTheme = {
    name: "DARK",
    ...dark,
};

export const getAllThemes = () => {
    return [lightTheme, darkTheme];
};

addDecorator(withThemesProvider(getAllThemes()));

// Replace next/image for Storybook
Object.defineProperty(nextImage, "default", {
    configurable: true,
    value: (props) => {
        const { width, height } = props;
        const ratio = (height / width) * 100;
        return (
            <div
                style={{
                    paddingBottom: `${ratio}%`,
                    position: "relative",
                }}
            >
                <img
                    style={{
                        objectFit: "cover",
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                    }}
                    {...props}
                />
            </div>
        );
    },
});
