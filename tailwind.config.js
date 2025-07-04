/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // حتماً باید این باشه تا دارک مود با کلاس فعال بشه
  content: ['./src/**/*.{astro,js,ts,jsx,tsx}'], // آدرس فایل‌هایی که باید بررسی کنه
  theme: {
    extend: {},
  },
  plugins: [],
};
