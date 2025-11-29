# FastAPI Best Practices

### Type Hints and Validation
- Use Python type hints for all function parameters and return types. FastAPI relies on type hints for automatic validation, serialization, and documentation generation.
- Use Pydantic models for request and response bodies to ensure data validation and provide clear API contracts. Pydantic validates data at runtime based on type annotations.
- Leverage Pydantic's validation features (`Field`, `validator`, `root_validator`) to implement complex validation logic and provide meaningful error messages.
- Use `Annotated` types for dependencies and query parameters to make your code more readable and maintainable.

### API Design
- Use appropriate HTTP methods (GET for retrieval, POST for creation, PUT/PATCH for updates, DELETE for deletion) according to REST principles.
- Use path parameters for resource identification and query parameters for filtering, sorting, and pagination. Never use query parameters to identify resources.
- Return proper HTTP status codes (200 OK, 201 Created, 204 No Content, 400 Bad Request, 404 Not Found, 422 Unprocessable Entity, 500 Internal Server Error).
- Version your API using URL path versioning (e.g., `/api/v1/`) or header-based versioning to maintain backward compatibility.

### Dependency Injection
- Use FastAPI's dependency injection system (`Depends`) for reusable logic, database sessions, authentication, and authorization.
- Create reusable dependencies for common operations like database access, authentication verification, and permission checking.
- Use dependency injection for database sessions rather than creating global database connections. This ensures proper session lifecycle management.

### Asynchronous Programming
- Use `async def` for path operations that perform I/O operations (database queries, API calls, file operations) to improve performance and scalability.
- Use `await` keyword with asynchronous database drivers (like `asyncpg`, `motor`) and HTTP clients when using async route handlers.
- Not mix sync and async code unnecessarily. Use sync functions for CPU-bound operations and async for I/O-bound operations.
- Understand when to use async - only use it when you have truly asynchronous operations. Misusing async can hurt performance.

### Error Handling
- Implement custom exception handlers using `@app.exception_handler()` to provide consistent error responses across your API.
- Raise `HTTPException` with appropriate status codes and detail messages for known error conditions.
- Validate input data and let FastAPI's automatic validation provide clear error responses for invalid requests.

### Database Integration
- Use SQLAlchemy or Tortoise-ORM for database operations with proper ORM patterns and async support.
- Use database migrations (Alembic for SQLAlchemy) to track and manage schema changes across environments.
- Implement proper connection pooling for database connections to optimize resource usage and performance.
- Close database sessions using dependency injection and context managers to prevent connection leaks.

### Security
- Implement authentication and authorization for protected endpoints using OAuth2, JWT, or API keys depending on your requirements.
- Use FastAPI's security utilities (`OAuth2PasswordBearer`, `HTTPBearer`, `APIKeyHeader`) for standardized security implementations.
- Validate and sanitize all user input to prevent injection attacks and ensure data integrity.
- Implement rate limiting to protect your API from abuse and DoS attacks.
- Use HTTPS in production environments and configure CORS properly to restrict cross-origin requests.

### Performance
- Use response models with `response_model` parameter to exclude unnecessary fields and optimize response sizes.
- Implement caching for frequently accessed, relatively static data using Redis or in-memory caches.
- Use background tasks (`BackgroundTasks`) for non-critical operations that don't need to complete before returning a response.
- Implement pagination for endpoints that return large datasets to improve performance and user experience.

### Documentation
- Customize OpenAPI documentation with proper titles, descriptions, tags, and examples to make your API self-documenting.
- Add docstrings to path operations and models to enhance automatic API documentation.
- Use tags to organize endpoints logically in the automatic documentation interface.

### Testing
- Write tests using `TestClient` from `fastapi.testclient` or `httpx.AsyncClient` for async applications.
- Test all endpoints including success cases, validation errors, and edge cases.
- Use dependency overrides in tests to mock external dependencies and database connections.

## Anti-Patterns to Avoid
- Never perform blocking I/O in async functions without using `run_in_executor`
- Avoid global state and singletons - use dependency injection instead
- Don't ignore type hints - they are central to FastAPI's functionality
- Never return raw SQLAlchemy models - always use Pydantic response models
- Avoid deeply nested dependencies - keep dependency chains simple
