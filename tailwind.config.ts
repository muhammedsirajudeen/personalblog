import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"
import animate from "tailwindcss-animate"
const config: Config = {
    darkMode: ["class", "dark"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "*.{js,ts,jsx,tsx,mdx}",
        "app/**/*.{ts,tsx}",
        "components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: "65ch",
                        color: "#374151",
                        p: {
                            marginBottom: "1.25em",
                        },
                        "h1, h2, h3, h4": {
                            marginTop: "2em",
                            marginBottom: "1em",
                            fontWeight: "300",
                        },
                        h1: {
                            fontSize: "2.25em",
                        },
                        h2: {
                            fontSize: "1.5em",
                        },
                        h3: {
                            fontSize: "1.25em",
                        },
                        "ul, ol": {
                            marginTop: "1.25em",
                            marginBottom: "1.25em",
                            paddingLeft: "1.625em",
                        },
                        li: {
                            marginTop: "0.5em",
                            marginBottom: "0.5em",
                        },
                        a: {
                            textDecoration: "underline",
                            textDecorationColor: "#d1d5db",
                            transition: "text-decoration-color 0.2s",
                            "&:hover": {
                                textDecorationColor: "currentColor",
                            },
                        },
                        code: {
                            fontFamily: "monospace",
                            backgroundColor: "#f3f4f6",
                            padding: "0.2em 0.4em",
                            borderRadius: "0.25em",
                            fontSize: "0.875em",
                        },
                        pre: {
                            backgroundColor: "#f3f4f6",
                            padding: "1em",
                            borderRadius: "0.375em",
                            overflowX: "auto",
                            marginTop: "1.25em",
                            marginBottom: "1.25em",
                        },
                    },
                },
            },
        },
    },
    plugins: [typography, animate],
}

export default config
