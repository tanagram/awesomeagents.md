# Express.js Best Practices

### Application Structure
- Organize your application using a modular structure with separate folders for routes, controllers, models, middleware, and utilities.
- Separate business logic from route handlers by using controllers or service layers to improve testability and maintainability.
- Use routers (`express.Router()`) to organize related routes and create modular, mountable route handlers.

### Middleware Usage
- Order middleware carefully as the order of execution matters. Place error-handling middleware last, after other app.use() and route calls.
- Use built-in middleware like `express.json()` and `express.urlencoded()` instead of body-parser for parsing request bodies.
- Implement error-handling middleware with four parameters (err, req, res, next) to catch and handle errors consistently.
- Use `next()` in middleware to pass control to the next middleware function or to pass errors with `next(err)`.

### Security
- Use Helmet (`helmet`) middleware to set various HTTP headers for better security against common web vulnerabilities.
- Implement rate limiting using `express-rate-limit` to protect your API from brute-force attacks and DDoS.
- Validate and sanitize all user input using libraries like `express-validator` or `joi` to prevent injection attacks.
- Use CORS middleware to restrict cross-origin requests to trusted domains only.
- Never trust user input and always sanitize data before using it in database queries or returning it to users.
- Implement authentication using established libraries like `passport.js` rather than rolling your own authentication.
- Use HTTPS in production and redirect HTTP requests to HTTPS.

### Error Handling
- Implement centralized error handling using error-handling middleware to provide consistent error responses.
- Use try-catch blocks in async route handlers and pass errors to `next()` to trigger error-handling middleware.
- Use `express-async-errors` or wrap async routes to automatically catch errors without explicit try-catch blocks.
- Provide appropriate error responses with proper HTTP status codes and user-friendly error messages without exposing sensitive information.
- Log errors using a logging library like `winston` or `pino` for monitoring and debugging.

### Request Handling
- Validate request data (params, query, body) before processing to ensure data integrity and security.
- Handle async operations using async/await or promises to avoid callback hell and unhandled promise rejections.
- Use appropriate HTTP methods (GET, POST, PUT, PATCH, DELETE) according to REST principles.
- Return proper HTTP status codes for all responses (200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Internal Server Error).

### Database and Data Access
- Use connection pooling for database connections to optimize performance and resource usage.
- Handle database errors gracefully and never expose database error details to clients.
- Use parameterized queries or ORMs to prevent SQL injection attacks.
- Close database connections properly to prevent connection leaks.

### Configuration and Environment
- Use environment variables for configuration (database URLs, API keys, secrets) and never hardcode sensitive information.
- Use dotenv or similar packages to load environment variables from .env files in development.
- Have separate configurations for development, testing, and production environments.
- Never commit .env files or sensitive configuration to version control.

### Performance
- Enable compression using `compression` middleware to reduce response sizes.
- Implement caching for frequently accessed data using Redis or in-memory caching.
- Use streaming for large file uploads/downloads to avoid memory issues.
- Use cluster mode or process managers like PM2 to utilize multiple CPU cores in production.
- Set appropriate cache-control headers for static resources and API responses.

### Logging and Monitoring

- Use structured logging with appropriate log levels (error, warn, info, debug).
- Log request details (method, URL, status code, response time) for monitoring and debugging.
- Not log sensitive information like passwords, tokens, or personal data.

### API Design
- Version your API (e.g., `/api/v1/`) to maintain backward compatibility when making changes.
- Implement pagination for endpoints that return large datasets to improve performance and UX.
- Document your API using tools like Swagger/OpenAPI for better developer experience.
- Use consistent naming conventions for routes and follow RESTful principles.

### Testing
- Write unit tests for controllers and business logic using testing frameworks like Jest or Mocha.
- Write integration tests for API endpoints to ensure they work correctly end-to-end.
- Use test databases separate from development and production databases.
- Mock external dependencies in tests to ensure tests are fast and reliable.

## Anti-Patterns to Avoid
- Never use synchronous functions in route handlers (like fs.readFileSync)
- Avoid callback hell - use async/await or promises
- Don't ignore error handling - always implement proper error middleware
- Never expose stack traces or error details to clients in production
- Avoid creating routes directly on app - use express.Router()
- Don't perform heavy computations in route handlers - offload to background jobs
- Never store sessions or sensitive data in memory in production
