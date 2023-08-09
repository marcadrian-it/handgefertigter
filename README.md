# Handgefertigter

An e-commerce shop, complete with a CMS, built using Astro + React.

To visit the website, click on the logo.

<a href="https://handgefertigter.netlify.app">
  <p align="center">
    <img height=80 src="https://raw.githubusercontent.com/marcadrian-it/handgefertigter/main/client/src/assets/logo.png"/>
  </p>
</a>

<p align="center">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/marcadrian-it/handgefertigter?style=flat-square">
  <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/marcadrian-it/handgefertigter?style=flat-square">
</p>

# Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Astro](https://astro.build/)
- [Nanostores](https://github.com/nanostores/nanostores)
- [Sanity CMS](https://www.sanity.io/)
- [React](https://react.dev/)
- [Netlify (serverless runtime)](https://www.netlify.com/)
- [Tailwind](https://tailwindcss.com/)
- [Stripe](https://stripe.com/)
- [ESLint](https://eslint.org/)

## Instructions

`npm install` - installs all the packages

`npm run dev` - runs the webapp on localhost

`npm run devnstudio` - runs webapp and prisma studio concurrently

`npm run build` - generates Prisma client and builds the Next.js application

`npm run lint` - will run ESLint with --fix to auto-fix issues.

`npx prisma migrate reset` - drops, recreates the database, and reseeds it automatically (be careful)

## Preview

![Preview](https://raw.githubusercontent.com/marcadrian-it/handgefertigter/main/client/public/handgefertigter-preview.jpg)
