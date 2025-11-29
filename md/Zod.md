# Zod Best Practices

### Schema Organization
- Define schemas in a centralized location (e.g., `src/lib/schemas/` or `src/schemas/`) for easy discoverability and reuse.
- Use descriptive naming conventions: `entityNameSchema` for main schemas, `entityNameCreateSchema` for creation, `entityNameUpdateSchema` for updates.

### Type Inference and Exports
- Export inferred types using `z.infer<typeof schemaName>` immediately after schema definition to maintain colocation.
- Use type inference for nested object properties using indexed access types like `z.infer<typeof userSchema>['profile']`.
- Name inferred types to match the schema name without the "Schema" suffix (e.g., `userSchema` exports `type User`).

### Custom Validations
- Create reusable custom validators for common patterns like passwords, phone numbers, and email formats.
- Use `.regex()` with descriptive error messages to implement complex string validation patterns.
- Compose validators using `.and()`, `.or()`, and `.pipe()` to build complex validation logic from simple pieces.
- Use `.refine()` for cross-field validation that depends on multiple properties of an object.
- Provide specific error paths using the `path` option in `.refine()` to indicate which field failed validation.
- Chain multiple `.refine()` calls when multiple independent validation rules need to be applied.
- Use `.superRefine()` when validation logic needs to add multiple issues to different paths.
- Validation functions should not modify data or call external services.
- Use `.refine()` with async functions for validation that requires external data lookups or API calls.
- Use `.parseAsync()` or `.safeParseAsync()` instead of the synchronous versions when working with async validators.

### Error Handling
- Provide custom error messages using the object syntax: `z.string({ required_error: "...", invalid_type_error: "..." })`.
- Use descriptive, user-friendly error messages that explain what input is expected, not just what is wrong.
- Create utility functions to format Zod errors into application-specific error formats.
- Use `.safeParse()` instead of `.parse()` when you need to handle validation errors explicitly without throwing.

### Transformations
- Use `.transform()` to convert validated data into the format needed by your application.
- Apply transformations after validation to ensure the data is valid before transformation.
- Use `.preprocess()` for transformations that need to occur before validation (e.g., trimming strings, parsing JSON).
- Chain transformations using `.pipe()` when multiple transformation steps are needed.

### Union and Discriminated Unions
- Use `z.discriminatedUnion()` instead of `z.union()` when objects have a discriminator field for better performance and error messages.
- Place the most common or expected type first in union definitions for better error messages.
- Use `z.literal()` for discriminator fields to ensure type-safe narrowing in TypeScript.
- Keep union types shallow - avoid deeply nested unions that make error messages confusing.
- Provide clear discriminator field names like "type" or "kind" that make the union purpose obvious.

### Error Formatting
- Use `error.flatten()` to convert nested errors into a flat structure for easier display in forms.
- Implement custom error maps using `z.setErrorMap()` for application-wide error message customization.
- Map validation errors to specific form fields by using the error path to identify which input failed.

### API Integration
- Define separate schemas for request bodies, response bodies, and query parameters.
- Use Zod schemas in API route handlers to validate incoming requests before processing.
- Create type guards using Zod schemas for runtime type checking of external data.
- Version your API schemas to handle backward compatibility when schemas change over time.

## Anti-Patterns to Avoid
- Avoid using `.any()` or `.unknown()` without a comment explaining why you're doing so - these bypass Zod's validation entirely.
- Do not use schemas for type definitions only - leverage the validation capabilities.
- Never ignore TypeScript errors in Zod schemas - they usually indicate a real problem with your validation logic.
