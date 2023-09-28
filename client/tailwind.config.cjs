/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        ysabeau: ['Ysabeau SC', 'serif'],
      },
      backgroundColor: {
        'crimson-100': 'var(--color-crimson-100)',
        'crimson-200': 'var(--color-crimson-200)',
        'crimson-300': 'var(--color-crimson-300)',
        'crimson-600': 'var(--color-crimson-600)',
        'crimson-700': 'var(--color-crimson-700)',
        'crimson-800': 'var(--color-crimson-800)',
      },
      borderColor: {
        'crimson-100': 'var(--color-crimson-100)',
        'crimson-200': 'var(--color-crimson-200)',
        'crimson-300': 'var(--color-crimson-300)',
        'crimson-600': 'var(--color-crimson-600)',
        'crimson-700': 'var(--color-crimson-700)',
        'crimson-800': 'var(--color-crimson-800)',
      },
      textColor: {
        'crimson-100': 'var(--color-crimson-100)',
        'crimson-200': 'var(--color-crimson-200)',
        'crimson-300': 'var(--color-crimson-300)',
        'crimson-600': 'var(--color-crimson-600)',
        'crimson-700': 'var(--color-crimson-700)',
        'crimson-800': 'var(--color-crimson-800)',
      },
      aspectRatio: {
        '2/3': '2 / 3',
      },
      screens: {
        sm: { max: '640px' },
        md: { max: '768px' },
        lg: { max: '1024px' },
        xl: { max: '1311px' },
        '2xl': { max: '1536px' },
        custom: { max: '964px' },
      },
    },
  },
  plugins: [],
};
