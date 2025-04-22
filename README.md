# Apicorn

**Apicorn** is a fully-featured REST client built with **Next.js 15**, **React 19**, **Tailwind CSS**, **Redux Toolkit**, and **TypeScript**. It allows developers to send HTTP requests, manage request history, use environment variables, generate code snippets, and switch UI languages. Inspired by tools like Postman, it supports multilingual UI and SSR-authentication via Supabase.

## Features

- Send GET, POST, PUT, DELETE, PATCH, etc. requests
- View and reuse request history
- Manage environment variables for different endpoints
- Auto-generate code snippets in 8+ languages (via Postman engine)
- Auth (sign in/up) with Supabase
- Language switcher (EN, RU, PL, DE) with `next-intl`
- Fully responsive layout with custom mobile behavior
- SSR-protected routes using cookies

## Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Supabase](https://supabase.com/)
- [next-intl](https://next-intl-docs.vercel.app/)
- [Postman Code Generators](https://www.npmjs.com/package/postman-code-generators)
- [Monaco Editor](https://www.npmjs.com/package/@monaco-editor/react)

## Installation

```bash
git clone https://github.com/your-username/apicorn.git
cd apicorn
npm install
npm run dev
```
