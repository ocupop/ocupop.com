import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
			'sans': ['commuters-sans', 'system-ui', 'sans-serif'],
      'serif': ["'Berlingske Serif Regular'", 'serif']
		},
    extend: {
      screens: {
        'sm': '640px',     // Small devices (phones)
        'md': '768px',     // Medium devices (tablets)
        'lg': '1024px',    // Large devices (laptops)
        'xl': '1280px',    // Extra large (desktops)
        '2xl': '1536px',   // 2X large displays
        '3xl': '1920px',   // Full HD displays
        '4xl': '2560px',   // 2K / QHD displays
        '5xl': '3840px',   // 4K / UHD displays
			},
      maxWidth: {
        '8xl': '96rem',     // 1536px
        '9xl': '120rem',    // 1920px
        '10xl': '160rem',    // 2560px
        '11xl': '190rem',    // 3040px
        '12xl': '220rem',    // 3520px
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark': '#1F2528',
				'mid': {
					100: '#EFF3F7',
					200: '#DCE1E6',
					300: '#C3C7CB',
					400: '#9DA0A4',
					500: '#7B7E80',
					600: '#67696B',
					700: '#494949',
					800: '#303132',
					900: '#1D1D1F',
					DEFAULT: '#F3F1EE'
				},
        'light': '#E8E1D8',
      },
    },
  },
  plugins: [],
} satisfies Config;
