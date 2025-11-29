# ASP.NET Core Best Practices

### Dependency Injection
- Use constructor injection for all dependencies instead of property or method injection for better testability and explicit dependencies.
- Register services with appropriate lifetimes: Singleton for stateless services, Scoped for per-request services, and Transient for lightweight stateless services.
- Avoid service locator pattern by not injecting `IServiceProvider` and resolving services manually.
- Use interface-based injection to decouple your code from concrete implementations.

### Configuration
- Use the Options pattern (`IOptions<T>`) for strongly-typed configuration instead of `IConfiguration` directly.
- Not hardcode configuration values - use appsettings.json, environment variables, or secret managers.
- Use different configuration for each environment (Development, Staging, Production) with appsettings.{Environment}.json files.
- Never commit secrets to source control - use User Secrets for development and Azure Key Vault or similar for production.

### API Development
- Use API Controllers with `[ApiController]` attribute for automatic model validation and consistent error responses.
- Use appropriate HTTP status codes (200 OK, 201 Created, 204 No Content, 400 Bad Request, 404 Not Found, 500 Internal Server Error).
- Use ActionResult<T> as return type for API actions to enable both success and error responses with proper types.
- Version your APIs using URL versioning, header versioning, or query string versioning for backward compatibility.

### Model Validation
- Use Data Annotations or FluentValidation for input validation to ensure data integrity.
- Validate models automatically using the `[ApiController]` attribute which returns 400 Bad Request for invalid models.
- Create custom validators for complex validation logic that can't be expressed with data annotations.
- Validate on the server side even if client-side validation exists.

### Middleware
- Understand middleware ordering as it's critical for correct application behavior (Exception handling → HTTPS → Static Files → Routing → Auth → Endpoints).
- Implement exception handling middleware for consistent error responses and logging.
- Use built-in middleware when available instead of creating custom middleware.
- Create custom middleware as a class with `InvokeAsync` method for complex logic.

### Authentication and Authorization
- Use ASP.NET Core Identity for user authentication and management.
- Use HTTPS and redirect HTTP to HTTPS in production environments.
- Use JWT tokens for API authentication and OAuth2/OpenID Connect for web applications.
- Implement role-based or policy-based authorization using `[Authorize]` attributes.
- Use claims-based authorization for fine-grained access control.

### Entity Framework Core
- Use async methods (`ToListAsync`, `FirstOrDefaultAsync`) for database operations to improve scalability.
- Use migrations to manage database schema changes across environments.
- Use DTOs (Data Transfer Objects) instead of exposing entities directly in APIs.
- Include proper error handling for database operations using try-catch blocks.
- Use eager loading (`Include`, `ThenInclude`) to prevent N+1 query problems.

### Performance
- Use response caching for cacheable responses to reduce server load.
- Implement compression using response compression middleware to reduce payload sizes.
- Use asynchronous programming throughout your application for better scalability.
- Profile your application using Application Insights or similar tools.

### Logging
- Use ILogger<T> for logging instead of console output or third-party loggers directly.
- Use structured logging with meaningful log levels (Trace, Debug, Information, Warning, Error, Critical).
- Log exceptions with context information for easier debugging.
- Not log sensitive information like passwords, tokens, or personal data.

### Security
- Enable CORS properly and restrict it to trusted origins only.
- Use Anti-forgery tokens for state-changing operations to prevent CSRF attacks.
- Validate all input and sanitize output to prevent injection attacks.
- Implement rate limiting to protect against abuse and DDoS attacks.
- Hash passwords using `PasswordHasher<T>` or similar secure mechanisms.

### Testing
- Write unit tests for business logic using xUnit, NUnit, or MSTest.
- Write integration tests for API endpoints using WebApplicationFactory.
- Mock dependencies using Moq or NSubstitute for isolated unit testing.
- Use in-memory database for testing or a test-specific database instance.

### Error Handling
- Implement global exception handling using exception handling middleware.
- Use ProblemDetails for standardized error responses in APIs.
- Log all exceptions with sufficient context for debugging.
- Not expose internal error details to clients in production.

### Background Services
- Use IHostedService or BackgroundService for long-running background tasks.
- Use message queues (Azure Service Bus, RabbitMQ) for distributed background processing.
- Implement proper cancellation using CancellationToken in background services.
- Handle exceptions in background services to prevent application crashes.

### API Documentation
- Use Swashbuckle or NSwag for automatic API documentation with Swagger/OpenAPI.
- Add XML documentation comments to controllers and models for better API documentation.
- Include examples in your API documentation for better developer experience.

### Health Checks
- Implement health checks for dependencies (database, external services) for monitoring.
- Expose health check endpoints for load balancers and monitoring systems.
- Use readiness and liveness probes for containerized applications.

## Anti-Patterns to Avoid
- Never use synchronous database operations in production
- Avoid using static HttpClient - use IHttpClientFactory instead
- Don't expose entities directly in APIs - use DTOs
- Never store session state in memory in multi-server environments
- Avoid mixing concerns in controllers - use services
- Don't ignore ModelState validation errors
- Never use blocking calls in async methods
