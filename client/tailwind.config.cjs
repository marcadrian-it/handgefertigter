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
        'crimson-600': 'var(--color-crimson-600)',
        'crimson-700': 'var(--color-crimson-700)',
        'crimson-800': 'var(--color-crimson-800)',
      },
      borderColor: {
        'crimson-100': 'var(--color-crimson-100)',
        'crimson-200': 'var(--color-crimson-200)',
        'crimson-600': 'var(--color-crimson-600)',
        'crimson-700': 'var(--color-crimson-700)',
        'crimson-800': 'var(--color-crimson-800)',
      },
      aspectRatio: {
        '2/3': '2 / 3',
      },
    },
  },
  plugins: [],
};
