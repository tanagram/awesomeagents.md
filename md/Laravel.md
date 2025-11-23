# Laravel Best Practices

### Application Architecture

- Use Eloquent ORM for database operations instead of raw SQL queries to prevent SQL injection and maintain code consistency.
- Use Service Classes for complex business logic instead of putting everything in controllers to improve testability and reusability.
- Use Repository pattern for data access when your application requires complex queries or multiple data sources.
- Use Resource Controllers for RESTful resource operations to maintain consistency and follow Laravel conventions.

### Routing
- Name all your routes using the `name()` method to enable easier refactoring and more maintainable code.
- Use route model binding to automatically inject model instances in your controller methods instead of manually querying by ID.
- Group related routes using `Route::group()` with shared middleware, prefixes, or namespaces.
- Use route caching in production (`php artisan route:cache`) to improve performance.

### Controllers
- Keep controllers thin by moving business logic to service classes, actions, or jobs.
- Use Form Requests for validation instead of validating in controllers to keep controllers clean and validation logic reusable.
- Use Resource Controllers for CRUD operations following Laravel's naming conventions (index, create, store, show, edit, update, destroy).
- Return proper HTTP status codes and use Laravel's response helpers for consistent API responses.

### Models and Eloquent
- Define fillable or guarded properties on models to protect against mass assignment vulnerabilities.
- Use Eloquent relationships (hasOne, hasMany, belongsTo, belongsToMany) instead of manual joins for cleaner and more maintainable code.
- Use query scopes for reusable query logic instead of repeating complex where clauses.
- Use accessors and mutators for data transformation instead of doing it in controllers or views.
- Use soft deletes (`SoftDeletes` trait) when you need to retain deleted records for auditing or recovery.
- Eager load relationships using `with()` to prevent N+1 query problems.

### Validation
- Use Form Request classes for validation logic to keep it separate from controllers and make it reusable.
- Validate all user input before processing to ensure data integrity and security.
- Use custom validation rules for complex validation logic instead of inline validation.

### Database and Migrations
- Use migrations for all database schema changes to track changes and maintain consistency across environments.
- Use database seeders for populating development and test databases with sample data.
- Use database transactions for operations that involve multiple database writes to ensure data consistency.
- Use indexes on frequently queried columns to improve database performance.
- Use `remember()` method on queries that don't change often to cache results and improve performance.

### Security
- Use Laravel's built-in authentication (`Auth` facade) instead of implementing custom authentication.
- Use middleware for authentication and authorization checks instead of implementing them in controllers.
- Use CSRF protection for all state-changing operations (POST, PUT, DELETE requests).
- Use Laravel's encryption for sensitive data using the `Crypt` facade.
- Hash passwords using `Hash::make()` or `bcrypt()` helper, never store plain text passwords.
- Use Laravel Policies for authorization logic to keep it centralized and testable.
- Sanitize user input and use parameterized queries (through Eloquent) to prevent SQL injection.

### Configuration and Environment
- Use environment variables for configuration that changes between environments (database credentials, API keys, etc.).
- Cache configurations in production using `php artisan config:cache` for better performance.
- Never commit .env file to version control as it contains sensitive information.
- Use config files (`config/` directory) for application settings instead of hardcoding values.

### Error Handling and Logging
- Use Laravel's exception handler to customize error responses and logging behavior.
- Log important events and errors using Laravel's logging facade for monitoring and debugging.
- Use different log channels for different types of logs (errors, requests, audit trails).
- Not expose sensitive information in error messages or logs in production.

### Queues and Jobs
- Use queues for time-consuming operations like sending emails, processing uploads, or calling external APIs.
- Implement proper job failure handling using the `failed()` method and failed job tracking.
- Use job middleware for rate limiting and other job-specific concerns.
- Make jobs idempotent so they can be safely retried without side effects.

### Testing
- Write feature tests for critical application functionality using Laravel's testing tools.
- Write unit tests for business logic in service classes and models.
- Use factories for generating test data instead of manually creating records.
- Use in-memory SQLite database or transactions for faster tests.

### Performance

- Use eager loading (`with()`) to prevent N+1 query problems.
- Use queue workers to offload time-consuming tasks from web requests.
- Optimize autoloader in production using `composer dump-autoload --optimize`.
- Use Laravel Telescope in development for debugging queries and performance issues.

### API Development
- Use API Resources to transform models into JSON responses with consistent formatting.
- Version your API to maintain backward compatibility when making changes.
- Implement rate limiting for API endpoints to prevent abuse.
- Use Laravel Sanctum or Passport for API authentication instead of custom solutions.

## Anti-Patterns to Avoid
- Never put business logic in routes or views
- Avoid using `DB::raw()` when Eloquent can handle the query
- Don't skip validation for "trusted" users or admin endpoints
- Never store sensitive data in session without encryption
- Avoid creating "God" controllers with too many responsibilities
- Don't ignore N+1 query problems - always profile your queries
- Never use `extract()` on request data as it can introduce security vulnerabilities
