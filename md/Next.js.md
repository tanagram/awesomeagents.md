# Next.js Best Practices

### App Router (Next.js 13+)
- Use the App Router (`app/` directory) for new projects as it's the recommended approach with better performance and developer experience.
- Understand the difference between Server and Client Components. Use Server Components by default and only add 'use client' directive when you need interactivity, browser APIs, or React hooks.
- Colocate related files (components, styles, tests) within the `app/` directory structure for better organization.
- Use proper file conventions (`page.tsx` for routes, `layout.tsx` for layouts, `loading.tsx` for loading states, `error.tsx` for error handling).

### Data Fetching

- Use async/await in Server Components for data fetching instead of useEffect on the client side.
- Implement request memoization using React's `cache()` function to deduplicate identical requests across Server Components.
- Use the appropriate rendering strategy: Static (default), Dynamic (with `dynamic` route config), or Streaming (with `loading.tsx` or Suspense boundaries).
- Revalidate data using ISR (Incremental Static Regeneration) with `revalidate` option or on-demand with `revalidatePath()` and `revalidateTag()`.

### Performance Optimization
- Use Next.js Image component (`next/image`) instead of plain `<img>` tags for automatic image optimization, lazy loading, and responsive images.
- Use dynamic imports with `next/dynamic` for code-splitting large components that aren't needed immediately.
- Implement font optimization using `next/font` to automatically optimize and load fonts efficiently.
- Use Script component (`next/script`) for third-party scripts with appropriate loading strategies (`afterInteractive`, `lazyOnload`, `beforeInteractive`).

### Routing and Navigation
- Use the `Link` component for client-side navigation instead of `<a>` tags to enable prefetching and faster page transitions.
- Use route groups (folders with parentheses like `(marketing)`) to organize routes without affecting URL structure.
- Implement parallel routes for advanced UX patterns like modals, tabs, or simultaneous views.
- Use route handlers (`route.ts`) in the App Router for API endpoints instead of the Pages Router API routes.

### Metadata and SEO
- Define metadata in each page using the `metadata` export or `generateMetadata` function for proper SEO.
- Implement Open Graph and Twitter Card metadata for better social media sharing.
- Generate dynamic sitemaps using `sitemap.ts` file in the `app/` directory for better search engine indexing.

### Environment Variables and Configuration
- Prefix client-side environment variables with `NEXT_PUBLIC_` to make them available in the browser.
- Never expose sensitive keys in client-side code. Keep secrets server-side only.
- Use `.env.local` for local development secrets and never commit it to version control.
- Validate environment variables at build time to catch configuration errors early.

### Error Handling
- Implement error boundaries using `error.tsx` files to handle errors gracefully and provide user-friendly error pages.
- Create a global error handler with `global-error.tsx` for root layout errors.
- Implement 404 pages using `not-found.tsx` files at appropriate levels of your routing hierarchy.

### State Management
- Use URL state for shareable/bookmarkable state (search params, filters) instead of client-side state.
- Pass data between Server Components through props instead of using context or client-side state management.

### TypeScript
- Enable strict mode in TypeScript configuration for better type safety.
- Use proper types for page props, params, and searchParams provided by Next.js.
- Create type-safe API routes and validate request/response schemas.

### Security
- Implement CSRF protection for mutations and state-changing operations.
- Use Server Actions for form submissions and mutations instead of API routes when possible for better security and developer experience.
- Validate and sanitize all user input on the server side before processing.

### Build and Deployment
- Analyze your bundle regularly using `@next/bundle-analyzer` to identify optimization opportunities.
- Configure proper caching headers for static assets and API responses.
- Use Edge Runtime for routes that benefit from global distribution and low latency.
- Optimize for Core Web Vitals (LCP, FID, CLS) by following Next.js performance best practices.

## Anti-Patterns to Avoid
- Don't use 'use client' at the root of your component tree unnecessarily
- Avoid fetching data in Client Components when it can be done in Server Components
- Never expose API keys or secrets in client-side code
- Don't use `getServerSideProps` or `getStaticProps` in the App Router (use Server Components instead)
- Avoid large client-side JavaScript bundles - maximize server-side rendering
- Don't ignore loading and error states - always provide good UX
- Never skip image optimization - always use next/image
