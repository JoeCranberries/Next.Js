const defaulTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "1rem",
            },
            colors: {
                facebook: "#1877f2",
                twitter: "#1DA1F2",
                messenger: "#0099FF",
            },
            fontFamily: {
                sans: ["Open Sans", ...defaulTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
