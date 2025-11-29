# Pydantic Best Practices

### Model Definition
- Use type hints for all model fields to enable automatic validation and clear API contracts
- Leverage `BaseModel` as the foundation for all data models to ensure consistent validation behavior
- Define field constraints using `Field()` to specify validation rules, defaults, and descriptions
- Use descriptive field names that clearly indicate the purpose and expected content
- Implement custom validators using `@validator` or `@field_validator` decorators for complex validation logic
- Use `root_validator` for validation logic that depends on multiple fields simultaneously
- Define default values appropriately - use `None` for optional fields and `Field(default_factory=...)` for mutable defaults

### Type Safety and Validation
- Use strict type annotations including `Optional`, `Union`, and `Literal` to express exact requirements
- Leverage Pydantic's built-in types like `EmailStr`, `HttpUrl`, `UUID4` for common validation patterns
- Use `constr`, `conint`, `confloat` for constrained types with specific validation requirements
- Implement custom types by subclassing Pydantic types for reusable validation logic
- Use `validator` decorators with `pre=True` for preprocessing input data before validation
- Use `validator` decorators with `always=True` to run validation even when a field is not provided

### Schema Organization
- Group related fields into nested models rather than flattening all fields at the top level
- Use composition over inheritance when models share some but not all fields
- Create base models for shared validation logic and extend them for specific use cases
- Define separate models for input validation, internal processing, and output serialization
- Use `Config` classes to customize model behavior including validation strictness and JSON encoding

### Input and Output Handling
- Use separate models for request and response bodies to maintain clear API boundaries
- Implement `response_model` in FastAPI endpoints to ensure proper output validation and filtering
- Use `exclude_unset` to omit fields that were not explicitly provided in requests
- Use `exclude_none` to filter out null values from responses when appropriate
- Use `by_alias` when working with external APIs that use different field naming conventions

### Performance Optimization
- Use `model_validate` for validating data rather than instantiating models directly when performance matters
- Implement `model_config` with `validate_assignment=False` if you don't need validation on field updates
- Use `model_dump` with appropriate `include`/`exclude` parameters to control serialization output
- Cache computed properties using `@computed_field` for expensive calculations
- Use `model_validate_json` for direct JSON parsing to avoid intermediate dictionary conversion

### FastAPI Integration
- Use Pydantic models for request body validation to leverage automatic OpenAPI documentation
- Define response models explicitly in route decorators to ensure output consistency
- Use `Form` and `File` with Pydantic models for multipart form data validation
- Leverage dependency injection with Pydantic models for reusable validation logic
- Use Pydantic settings management for configuration with environment variables

### Error Handling
- Provide clear error messages in validators to help users understand validation failures
- Use `ValidationError` to catch and handle validation errors explicitly
- Implement custom error messages using `Field` parameters or validator decorators
- Log validation errors for debugging while returning user-friendly messages to clients
- Use `model_validate` with proper exception handling in production code

### Configuration Management
- Use `BaseSettings` for application configuration with automatic environment variable loading
- Define configuration schemas with proper types and validation rules
- Use `Field` with `env` parameter to map configuration fields to environment variables
- Implement multiple configuration profiles using model inheritance
- Validate configuration at startup to fail fast when requirements are not met

### Testing
- Write unit tests for custom validators to ensure they handle edge cases correctly
- Test model serialization and deserialization to verify data transformations
- Use `model_validate` in tests to verify validation logic without side effects
- Test error cases explicitly to ensure validation failures are handled properly
- Create fixture factories for Pydantic models to simplify test data creation

### API Design
- Use Pydantic models to define clear data contracts between services
- Document models thoroughly using `Field` descriptions for API documentation
- Use `alias` and `by_alias=True` when interfacing with external systems that use different naming conventions
- Implement proper field ordering using `Field` with `json_schema_extra` for consistent serialization

## Anti-Patterns to Avoid
- Avoid using dictionaries when Pydantic models would provide better type safety and validation
- Never skip validation by directly accessing `__dict__` or bypassing model construction
- Don't use mutable default values without `default_factory` - this causes shared state bugs
- Avoid complex validation logic in models - extract to separate validator functions when needed
- Never ignore validation errors - handle them explicitly and provide meaningful feedback
