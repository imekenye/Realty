module.exports = {
    mode: "jit",
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        colors: {
            transparent: "transparent",
            white: "#fff",
            gray: {
                25: "#FCFCFD",
                50: "#F9FAFB",
                100: "#F2F4F7",
                200: "#E4E7EC",
                300: "#D0D5DD",
                400: "#98A2B3",
                500: "#667085",
                600: "#475467",
                700: "#344054",
                800: "#1D2939",
                900: "#101828",
            },
            primary: {
                25: "#F5FAFF",
                50: "#EFF8FF",
                100: "#D1E9FF",
                200: "#B2DDFF",
                300: "#84CAFF",
                400: "#53B1FD",
                500: "#2E90FA",
                600: "#1570EF",
                700: "#175CD3",
                800: "#1849A9",
                900: "#194185",
            },
            error: {
                25: "#FFFBFA",
                50: "#FEF3F2",
                100: "#FEE4E2",
                200: "#FECDCA",
                300: "#FDA29B",
                400: "#F97066",
                500: "#F04438",
                600: "#D92D20",
                700: "#B42318",
                800: "#912018",
                900: "#7A271A",
            },
            warning: {
                25: "#FFFCF5",
                50: "#FFFAEB",
                100: "#FEF0C7",
                200: "#FEDF89",
                300: "#FEC84B",
                400: "#FDB022",
                500: "#F79009",
                600: "#DC6803",
                700: "#B54708",
                800: "#93370D",
                900: "#7A2E0E",
            },
            success: {
                25: "#F6FEF9",
                50: "#ECFDF3",
                100: "#D1FADF",
                200: "#A6F4C5",
                300: "#6CE9A6",
                400: "#32D583",
                500: "#12B76A",
                600: "#039855",
                700: "#027A48",
                800: "#05603A",
                900: "#054F31",
            },
        },
        fontSize: {
            xs: ["12px", "18px"],
            sm: ["14px", "20px"],
            md: ["16px", "24px"],
            lg: ["18px", "28px"],
            xl: ["20px", "30px"],

            h6: ["24px", "32px"],
            h5: ["30px", "38px"],
            h4: ["36px", "44px"],
            h3: ["48px", "60px"],
            h2: ["60px", "72px"],
            h1: ["72px", "90px"],
        },
        extend: {
            screens: {
                xs: "420px",
            },
            spacing: {
                4.5: "1.125rem",
                5.5: "1.375rem",
                6.5: "1.625rem",
                13: "3.25rem",
                15: "3.75rem",
                19: "4.75rem",
                19.5: "4.875rem",
                50: "12.5rem",
                58: "14.5rem",
                62: "15.5rem",
                70: "17.5rem",
            },
        },

        breakpointsInspector: {
            position: ["bottom", "right"],
        },
    },
    variants: {
        extend: {},
    },
    // plugins: ["@tailwindcss/forms", "tailwindcss-breakpoints-inspector"],
};
