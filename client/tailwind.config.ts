import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "var(--color-primary)",
        primaryLight: "var(--color-primary-light)",
        primaryDark: "var(--color-primary-dark)",
        primaryDarker: "var(--color-primary-darker)",
        primaryDarkest: "var(--color-primary-darkest)",
        primaryLighter: "var(--color-primary-lighter)",
        primaryLightest: "var(--color-primary-lightest)",
        primaryContrast: "var(--color-primary-contrast)",
        primaryContrastLight: "var(--color-primary-contrast-light)",
        primaryContrastDark: "var(--color-primary-contrast-dark)",
        primaryContrastDarker: "var(--color-primary-contrast-darker)",
        primaryContrastDarkest: "var(--color-primary-contrast-darkest)",
        primaryContrastLighter: "var(--color-primary-contrast-lighter)",
        primaryContrastLightest: "var(--color-primary-contrast-lightest)",
        primaryContrastContrast: "var(--color-primary-contrast-contrast)",

        secondary: "var(--color-secondary)",
        secondaryLight: "var(--color-secondary-light)",
        secondaryDark: "var(--color-secondary-dark)",
        secondaryDarker: "var(--color-secondary-darker)",
        secondaryDarkest: "var(--color-secondary-darkest)",
        secondaryLighter: "var(--color-secondary-lighter)",
        secondaryLightest: "var(--color-secondary-lightest)",
        secondaryContrast: "var(--color-secondary-contrast)",
        secondaryContrastLight: "var(--color-secondary-contrast-light)",
        secondaryContrastDark: "var(--color-secondary-contrast-dark)",
        secondaryContrastDarker: "var(--color-secondary-contrast-darker)",
        secondaryContrastDarkest: "var(--color-secondary-contrast-darkest)",
        secondaryContrastLighter: "var(--color-secondary-contrast-lighter)",
        secondaryContrastLightest: "var(--color-secondary-contrast-lightest)",
        secondaryContrastContrast: "var(--color-secondary-contrast-contrast)",
        
        accent: "var(--color-accent)",
        accentLight: "var(--color-accent-light)",
        accentDark: "var(--color-accent-dark)",
        accentDarker: "var(--color-accent-darker)",
        accentDarkest: "var(--color-accent-darkest)",
        accentLighter: "var(--color-accent-lighter)",
        accentLightest: "var(--color-accent-lightest)",
        accentContrast: "var(--color-accent-contrast)",
        accentContrastLight: "var(--color-accent-contrast-light)",
        accentContrastDark: "var(--color-accent-contrast-dark)",
        accentContrastDarker: "var(--color-accent-contrast-darker)",
        accentContrastDarkest: "var(--color-accent-contrast-darkest)",
        accentContrastLighter: "var(--color-accent-contrast-lighter)",
        accentContrastLightest: "var(--color-accent-contrast-lightest)",
        accentContrastContrast: "var(--color-accent-contrast-contrast)",
        

        neutral: {
          50: "var(--color-neutral-50)",
          100: "var(--color-neutral-100)",
          200: "var(--color-neutral-200)",
          300: "var(--color-neutral-300)",
          400: "var(--color-neutral-400)",
          500: "var(--color-neutral-500)",
          600: "var(--color-neutral-600)",
          700: "var(--color-neutral-700)",
          800: "var(--color-neutral-800)",
          900: "var(--color-neutral-900)",
        },
        success: {
          50: "var(--color-success-50)",
        },
        error: {
          50: "var(--color-error-50)",
        },
        warning: {
          50: "var(--color-warning-50)",
        },
        info: {
          50: "var(--color-info-50)",
        },
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        // Add more font families as needed
      },
    },
  },
  plugins: [],
};

export default config;
