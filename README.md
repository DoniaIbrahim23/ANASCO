🚀 Setup Steps
1️⃣ Create Next.js Project: npx create-next-app@latest
    Options selected:

    TypeScript: ✅ Yes (for type safety).

    ESLint: ✅ Yes (for linting and clean code).

    Tailwind CSS: ✅ Yes (for fast and responsive styling).

    App Router: ✅ Yes (modern routing system in Next.js 13+).

    Turbopack: ✅ Yes (faster bundler for development).

    Import alias: @/* (for cleaner imports).

2️⃣ Install Icons Library (Lucide): npm install lucide-react
    Provides modern, lightweight SVG icons (used for Header, Sidebar, Notifications, etc.)

3️⃣ Update jsconfig.json:Configures project imports and ensures JSON + TypeScript compatibility.
    {
  "compilerOptions": {
    "target": "es6",
    "lib": ["dom", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "resolveJsonModule": true,   // ✅ allows importing JSON files (like mock-data.json)
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve"
  },
  "include": ["src"]
}

4️⃣ Install Type Definitions: npm install --save-dev @types/react @types/react-dom @types/node
    Adds TypeScript types for React, React DOM, and Node.js

5️⃣ Install Charting Library:npm install recharts
     Used to create responsive charts (Bar, Line, Donut) with mock data.

6️⃣ Run the Project:npm run dev





<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->
