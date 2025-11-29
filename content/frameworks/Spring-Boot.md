# Spring Boot Best Practices

### Dependency Injection
- Use constructor injection over field injection for all dependencies. Constructor injection makes dependencies explicit, ensures immutability (by allowing final fields), and facilitates easier testing.
- Do not use `@Autowired` on constructors when a class has only one constructor. Spring automatically injects dependencies for single-constructor classes, making the annotation redundant.
- Mark injected dependencies as `final` when using constructor injection to ensure they cannot be changed after initialization and to clearly indicate required dependencies.
- Avoid field injection with `@Autowired` as it creates hidden dependencies, prevents immutability, and makes testing more difficult. Field injection can also lead to NullPointerExceptions if not properly initialized.
- Use setter injection only for optional dependencies where you need to change the dependency at runtime or when constructor injection is not suitable.

### Application Architecture
- Organize code by feature/module rather than by layer. Use a package-by-feature structure (e.g., `com.example.user`, `com.example.order`) instead of package-by-layer (controller, service, repository).
- Use `@ConfigurationProperties` for external configuration instead of scattering `@Value` annotations throughout your code. This provides better organization, type safety, and validation.
- Separate concerns between controllers, services, and repositories. Controllers handle HTTP concerns, services contain business logic, and repositories manage data access.

### REST API Development
- Use `@RestController` instead of `@Controller` + `@ResponseBody` for REST APIs. `@RestController` combines both annotations for cleaner code.
- Implement proper exception handling using `@ControllerAdvice` or `@ExceptionHandler` to provide consistent error responses across your API.
- Use appropriate HTTP status codes for all API responses (200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Server Error, etc.).
- Validate input using Bean Validation annotations (`@Valid`, `@NotNull`, `@Size`, etc.) on request DTOs to ensure data integrity.

### Data Access
- Use Spring Data JPA for database operations when appropriate to reduce boilerplate code and standardize data access patterns.
- Use transactions (`@Transactional`) for operations that modify data to ensure data consistency and enable proper rollback on errors.
- Avoid the N+1 query problem by using fetch joins or entity graphs in JPA queries.
- Never expose entity classes directly as API responses. Use DTOs (Data Transfer Objects) to decouple your API contract from your database schema.

### Configuration and Properties
- Use Spring profiles (`@Profile`) to manage environment-specific configurations for development, testing, and production.
- Externalize configuration using `application.properties` or `application.yml` files. Never hardcode environment-specific values in your code.

### Security
- Implement Spring Security for authentication and authorization in production applications. Never implement custom security mechanisms unless absolutely necessary.
- Use BCrypt or another strong password encoder for storing user passwords. Never store passwords in plain text.
- Protect sensitive endpoints with appropriate security constraints and role-based access control.

### Testing
- Write unit tests for service classes using JUnit and Mockito. Mock dependencies to test business logic in isolation.
- Write integration tests using `@SpringBootTest` for critical application flows and API endpoints.
- Use `@DataJpaTest` for repository layer tests to test database operations with an in-memory database.
- Use `@WebMvcTest` for controller layer tests to test HTTP request handling without loading the full application context.

### Performance and Monitoring
- Implement caching using Spring's caching abstraction (`@Cacheable`, `@CacheEvict`) for frequently accessed, relatively static data.
- Disable `spring.jpa.open-in-view` (set to false) in production to prevent performance issues and potential N+1 query problems.
- Implement actuator endpoints for health checks and metrics monitoring in production environments.

### Build and Dependencies
- Use Spring Boot starters to manage related dependencies together and ensure version compatibility.
- Keep Spring Boot and dependencies up-to-date with the latest stable versions to benefit from security patches and bug fixes.
- Use Maven or Gradle for dependency management and build automation, following Spring Boot's conventions.

## Anti-Patterns to Avoid
- Never use field injection for production code
- Avoid creating single implementation interfaces unnecessarily (YAGNI principle)
- Don't overuse `@Autowired` on methods - prefer constructor injection
- Never ignore exceptions or use empty catch blocks
- Avoid creating god classes with too many responsibilities
- Don't skip input validation on API endpoints
