# Phoenix Best Practices

### Project Structure and Organization
- Follow Phoenix's default project structure as outlined in the official guide
- Name projects with `-web` or `-api` suffix to clearly indicate their purpose
- Create separate `scope` blocks for each different `pipe_through` statement in router
- Use meaningful names for `Ecto.Multi` operations following the `<operation>_<resource>_<action>` pattern
- Organize contexts by business domain rather than technical concerns
- Keep web layer (controllers, views, templates) separate from business logic (contexts)
- Use umbrella applications for large projects requiring multiple sub-applications

### Naming Conventions
- Use `snake_case` for normal HTML template files (e.g., `user_profile.html.heex`)
- Prefix partial templates with underscore (e.g., `_header.html.heex`)
- Use descriptive names for context modules that represent business domains
- Name schema modules after the singular form of database tables
- Use past tense for Ecto migration filenames
- Follow standard naming for LiveView modules (`*Live` suffix)
- Use descriptive names for channel topics that reflect their purpose

### Configuration Management
- Store environment variables in `config/runtime.exs` rather than `config/prod.secret.exs`
- Use `System.fetch_env!/1` to access environment variables for fast-fail on missing config
- Configure secrets using environment variables, never hardcode in source
- Use releases (`mix release`) rather than `mix mode` for production deployments
- Separate configuration by environment (dev, test, prod) in appropriate config files

### Routing and Controllers
- Group routes with similar pipelines using `scope` blocks
- Use nested resources appropriately but avoid excessive nesting (max 2-3 levels)
- Implement proper authentication and authorization using plugs in pipelines
- Keep controller actions thin - delegate business logic to context modules
- Use action fallback controllers to handle common error patterns
- Return appropriate HTTP status codes for different response scenarios

### LiveView Development
- Implement proper mount callbacks that handle both connected and disconnected states
- Use assigns efficiently to minimize data sent over the socket
- Leverage temporary assigns for large lists that don't need persistence
- Use LiveView components to extract reusable UI patterns
- Handle errors gracefully in LiveView with proper error_boundary handling

### Testing
- Write comprehensive tests covering controllers, contexts, and schemas
- Use ExUnit for unit testing with proper test organization
- Implement integration tests for critical user flows
- Use Phoenix.ConnTest for controller and integration testing
- Test LiveView interactions using Phoenix.LiveViewTest helpers
- Mock external dependencies appropriately in tests
- Use test fixtures or factories for test data generation

### Performance Optimization
- Use `preload` in Ecto queries to avoid N+1 query problems
- Leverage Phoenix channels for real-time features efficiently
- Implement pagination for endpoints returning large datasets
- Use asynchronous tasks for long-running operations
- Profile application performance using tools like :observer and telemetry

### Security
- Implement CSRF protection for all state-changing requests
- Use parameterized queries to prevent SQL injection
- Validate and sanitize all user input at controller and context boundaries
- Use secure session storage and configure appropriate session timeouts
- Implement authorization checks in controllers and contexts
- Configure CORS properly for API endpoints

### Background Jobs
- Use Oban for reliable background job processing

### API Development
- Use JSON rendering with Poison or Jason for API responses
- Implement proper versioning strategy for APIs (URL or header-based)
- Use appropriate HTTP methods and status codes following REST principles
- Implement rate limiting for public APIs
- Provide clear error messages in consistent format
- Document APIs using tools like PhoenixSwagger or OpenAPI
- Implement pagination and filtering for list endpoints

### Deployment
- Use `mix release` for building production releases
- Configure proper distillery or release settings for production
- Implement health check endpoints for load balancer monitoring
- Use proper logging configuration for production environments
- Configure telemetry for observability and monitoring
- Use environment variables for all environment-specific configuration
- Implement proper database migration strategy for deployments

## Anti-Patterns to Avoid
- Avoid putting business logic in controllers - use contexts instead
- Never use `Repo` directly in controllers - access through context functions
- Don't skip database migrations - always use proper migration files
- Avoid excessive use of global state or process dictionaries
- Never store sensitive data in logs or error messages
- Don't use `Ecto.Repo.get!` when the record might not exist - handle nil case
- Avoid deeply nested route structures - keep routing hierarchy flat
