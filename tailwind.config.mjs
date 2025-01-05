/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Space_Grotesk: ['Space Grotesk', 'sans-serif'],
        Bebas_Neue: ['Bebas Neue', 'sans-serif'],
        Luxurious_Script: ['Luxurious Script', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xsm': '12px',
      },
      colors: {
        primary_orange: "#F68333",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'custom_primary_button': '5px 5px 0px rgba(109, 34, 0, 1)',
        'custom_primary_button_hover': '5px 5px 0px rgba(109, 34, 0, 1)', 
        'custom_primary_button_active': 'inset 3px 3px 4px rgba(109, 34, 0, 1) ',        
      },
      screens: {
        'xxs': '350px',
        'xs': '390px',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
