# AGENTS.md

## Stack
- Next.js 14.1.0 (App Router)
- React 18 + TypeScript (strict mode)
- Vitest for testing (NOT Jest)
- MongoDB/Mongoose for database
- NextAuth v5 beta
- Tailwind CSS

## Commands
```bash
npm run dev      # Dev server (http://localhost:3000)
npm run build    # Production build
npm run lint    # ESLint
npm run typecheck # (no script - runs via next build)
npm run test     # Vitest
npm run seed     # Populate database: node -r dotenv/config ./scripts/users.js
```

## Run Single Test
```bash
npx vitest run app/(overview)/dashboard/page.test.tsx
```

## Architecture
- `/app` - App Router pages and layouts
- `/components` - Reusable UI components
- `/lib` - Utility functions and data fetching
- `/models` - Mongoose/TypeGoose models (uses decorators)
- `/scripts` - Database seeding scripts

## Test Setup
- Vitest with jsdom environment
- Uses `@testing-library/react`
- Decorators enabled in tsconfig (`emitDecoratorMetadata`, `experimentalDecorators`)

## Gotchas
- **Uses Vitest, NOT Jest** - despite a `jest.config.ts` existing, `npm run test` runs vitest
- MongoDB connection required for most features
- Seeding requires `.env` with MongoDB URI (`MONGODB_URI`)