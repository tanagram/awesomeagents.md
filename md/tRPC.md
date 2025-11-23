# tRPC Best Practices

- Define procedures with input validation using Zod schemas for type safety.
- Organize routers by feature domain to maintain clear separation of concerns.
- Use middleware for cross-cutting concerns like authentication and logging.
- Implement context properly to share data across procedures (user info, database clients).
- Use `createCallerFactory` to call tRPC procedures server-side without HTTP overhead.
- Implement error handling with `TRPCError` for consistent error responses.
- Use query procedures for read operations and mutation procedures for write operations.
- Use batching and request deduplication features to optimize network requests.
- Use tRPC links to customize request/response handling (like logging or auth headers).
- Implement proper TypeScript types throughout the application for end-to-end type safety.
- Use React Query integration for automatic caching and state management on the client.
- Structure routers hierarchically with merging.
- Avoid over-fetching by defining precise input/output schemas for each procedure.
- Use SSR-friendly initialization with Next.js for optimal performance.
- Implement rate limiting and request validation at the procedure level.
- Use transformer options for custom serialization (like `Date` or `BigInt` handling).
