# Live coding club

Welcome! This is a repository for the Live Coding Club website, which can be found
[here](https://livecodingclub.com). I started the project in an attempt to:

- Explore Next.js 13's new app directory + server actions
- Create a low-pressure environment to get better at pair programming

## Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Server actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)
- [Prisma](https://www.prisma.io/)

## Features

This repo features the new Next.js app router & server actions. The result is a front to back
typesafe app with a 100/100 [pagespeed score](https://pagespeed.web.dev/) that can be deployed at
once (no need for a separate API server). The app is deployed on Vercel, and uses Prisma to connect
to a Postgres database.

## Contributing

If you'd like to contribute, please open a PR! I'm happy to pair with you on any changes you'd like
to make. If you're not sure what to work on, check out the
[issues](https://github.com/bartcheers/livecodingclub/issues) page.

## Getting Started

Create a database, eg a postgres database at Supabase. Create a `.env` file in the root of the
project with the following contents:

```bash
DATABASE_URL="[YOUR DATABASE URL]"
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the
file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to
automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.

## License

MIT

## Learn while you code

Planning to work on or fork this project? Start a session on
[Live Coding Club](https://www.livecodingclub.com) while you're at it. You get to learn while you
code, and I get to learn from you. Win-win!
