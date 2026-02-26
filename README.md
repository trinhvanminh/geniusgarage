# GeniusGarage Test

A developer platform for storing and sharing your favorite code snippets.

## What's Inside?

This monorepo uses [pnpm](https://pnpm.io) as a package manager and [Turborepo](https://turbo.build/repo) for build orchestration.

### Apps

- `web`: Marketing site built with Next.js

### Packages

Shared packages will be created as the course progresses.

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

1. Run the development server:

```bash
pnpm dev
```

1. Open [http://localhost:3000](http://localhost:3000) to see the marketing site.

## Learn More

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [pnpm Documentation](https://pnpm.io)
- [Next.js Documentation](https://nextjs.org/docs)


## [Filtering git based](https://vercel.com/academy/production-monorepos/filtering-git-based)

- Exact package:

```bash
--filter @geniusgarage/web
```

- Package + dependencies:

```bash
--filter @geniusgarage/web...
```

- Package + dependents:

```bash
--filter ...@geniusgarage/ui
```

- Multiple packages:

```bash
--filter @geniusgarage/web --filter @geniusgarage/snippet-manager
```

- All apps:

```bash
--filter "./apps/*"
```

- All packages:

```bash
--filter "./packages/*"
```

- Changed since main:

```bash
--filter=[main]
```



https://vercel.com/academy/production-monorepos/remote-caching#4-update-ci-workflow