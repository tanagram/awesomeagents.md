# Node.js Best Practices

### Error Handling
- Handle all errors in callbacks, promises, and async functions to prevent crashes.
- Use try-catch blocks for synchronous code and error handlers for asynchronous code.
- Listen for `unhandledRejection` and `uncaughtException` events at process level for graceful shutdown.
- Create custom error classes that extend `Error` for domain-specific errors.
- Log errors with sufficient context for debugging but never expose sensitive information.

### Async Patterns
- Use async/await for asynchronous code instead of callbacks for better readability.
- Handle promise rejections properly using `.catch()` or try-catch with async/await.
- Use `Promise.all()` for concurrent operations instead of sequential await calls.
- Avoid callback hell by using promises or async/await.
- Not block the event loop with synchronous operations in production code.

### Modules and Dependencies
- Use ES6 modules (`import`/`export`) with modern Node.js versions for better compatibility.
- Pin dependency versions in `package-lock.json` to ensure reproducible builds.
- Never commit `node_modules` to version control.
- Use exact versions or tilde (`~`) for dependencies instead of caret (`^`) in production applications.

### Environment Configuration
- Use environment variables for configuration that changes between environments.
- Use `.env` files with packages like `dotenv` for local development.
- Never commit `.env` files or hardcode secrets in source code.
- Validate environment variables at startup to fail fast if configuration is missing.
- Have separate configurations for development, staging, and production.

### Security
- Validate and sanitize all user input to prevent injection attacks.
- Use security middleware like `helmet` for Express applications.
- Implement rate limiting to prevent abuse and DDoS attacks.
- Use HTTPS in production and proper certificate validation.
- Use JWT or session management properly for authentication.
- Hash passwords using bcrypt or similar strong hashing algorithms.
- Use parameterized queries or ORMs to prevent SQL injection.

### Performance
- Use cluster mode or PM2 to utilize multiple CPU cores in production.
- Use connection pooling for databases and external services.
- Implement compression for HTTP responses to reduce bandwidth.
- Profile your application using built-in profiler or external tools to identify bottlenecks.
- Avoid memory leaks by properly cleaning up event listeners and timers.

### Logging
- Use a logging library like Winston or Pino for structured logging.
- Log at appropriate levels (error, warn, info, debug) for different scenarios.
- Include correlation IDs in logs to trace requests across services.
- Not log sensitive information like passwords, tokens, or personal data.
- Implement log rotation to prevent disk space issues.

### Process Management
- Use a process manager like PM2 or systemd for production deployments.
- Implement graceful shutdown to finish handling requests before terminating.
- Handle process signals (SIGTERM, SIGINT) for proper cleanup.
- Restart on crashes automatically using process managers.
- Monitor process health and resource usage in production.

### File Operations
- Use asynchronous file operations instead of synchronous ones to avoid blocking.
- Use streams for large files to avoid loading entire files into memory.
- Handle file operation errors properly and clean up resources.
- Use `path.join()` for cross-platform file path handling.

### HTTP and Networking
- Set appropriate timeouts for HTTP clients to prevent hanging requests.
- Implement retry logic with exponential backoff for external API calls.

### Testing
- Write unit tests for business logic using frameworks like Jest or Mocha.
- Write integration tests for API endpoints and database operations.
- Mock external dependencies to make tests fast and reliable.
- Use test coverage tools to ensure adequate test coverage.
- Run tests in CI/CD pipeline before deploying to production.

### Memory Management
- Monitor memory usage and identify memory leaks early.
- Avoid memory leaks by cleaning up event listeners, timers, and closures.
- Use WeakMap and WeakSet when appropriate for garbage collection.

### Event Emitters
- Limit the number of listeners per event to avoid memory leaks.
- Remove event listeners when they're no longer needed.
- Handle `error` events on EventEmitters to prevent crashes.
- Use `once()` instead of `on()` for one-time event handlers.

### Streams
- Use streams for handling large amounts of data efficiently.
- Handle stream errors using `error` event listeners.

### Database
- Use connection pooling for database connections.
- Use transactions for operations that require atomicity.

### API Design
- Follow REST principles or use GraphQL for API design.
- Version your APIs to maintain backward compatibility.
- Use appropriate HTTP status codes for all responses.
- Implement CORS properly to restrict cross-origin requests.

### Code Quality
- Use a linter (ESLint) to enforce code style and catch errors.
- Use TypeScript for large projects to add type safety.
- Follow consistent naming conventions throughout your codebase.

## Anti-Patterns to Avoid
- Never use synchronous file operations in production code
- Avoid callback hell - use promises or async/await
- Don't ignore unhandled promise rejections
- Never block the event loop with CPU-intensive operations
- Avoid global variables and state
- Don't create too many simultaneous connections without pooling
- Never trust user input without validation
- Avoid storing sensitive data in code or logs
