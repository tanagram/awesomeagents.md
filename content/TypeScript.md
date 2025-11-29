# TypeScript Best Practices

### Type Safety
- Enable strict mode in `tsconfig.json` with `"strict": true` for maximum type safety.
- Avoid using `any` type as it defeats the purpose of TypeScript. Use `unknown` when the type is truly unknown.
- Use explicit types for function parameters and return values to document intent and catch errors early.
- Use type inference for local variables where the type is obvious from the initialization.
- Use union types instead of `any` when a value can be one of several types.

### Interfaces and Types
- Prefer `interface` over `type` for object shapes as interfaces can be extended and merged.
- Use `type` for unions, intersections, and complex type compositions that interfaces can't express.
- Use `readonly` modifier for properties that shouldn't be modified after initialization.
- Use `Partial<T>`, `Pick<T>`, `Omit<T>` and other utility types instead of redefining types.
- Define interfaces for all object shapes used across your application for consistency.

### Functions
- Type all function parameters and return values explicitly for public APIs and exported functions.
- Use arrow functions for callbacks and methods that need to preserve `this` context.
- Use function overloads when a function can accept different parameter combinations.
- Use rest parameters with proper typing instead of `arguments` object.

### Null and Undefined
- Enable `strictNullChecks` to prevent null/undefined errors at compile time.
- Use optional chaining (`?.`) and nullish coalescing (`??`) for safer null/undefined handling.
- Prefer `null` over `undefined` for intentional absence of value in your API.
- Use non-null assertion (`!`) sparingly and only when you're absolutely certain the value exists.

### Classes
- Use access modifiers (`public`, `private`, `protected`) explicitly for all class members.
- Use `readonly` for properties that are set in the constructor and never modified.
- Use parameter properties shorthand in constructors for cleaner code.
- Prefer composition over inheritance for better flexibility and testability.
- Define return types for all public methods.

### Enums
- Use const enums for better performance when you don't need reverse mapping.
- Use string enums instead of numeric enums for better readability and debugging.
- Consider using union types of string literals instead of enums for simpler type definitions.

### Generics
- Use generics to create reusable, type-safe components and functions.
- Constrain generic types using `extends` when you need specific capabilities.
- Provide default type parameters when sensible defaults exist.
- Use meaningful generic type parameter names (not just `T`) for complex generic types.

### Type Guards
- Create custom type guards using `is` keyword for complex type narrowing.
- Use `typeof` and `instanceof` for simple type guards.
- Use discriminated unions with a common literal property for type-safe state machines.
- Use `in` operator to check for property existence when narrowing types.

### Async/Await
- Type Promise return types explicitly for async functions.
- Use `async/await` instead of raw promises for cleaner asynchronous code.
- Handle errors in async functions using try-catch blocks.
- Use `Promise.all()` for concurrent async operations instead of sequential await calls.

### Modules
- Use ES6 modules (`import`/`export`) instead of CommonJS or namespaces.
- Use named exports over default exports for better refactoring and IDE support.
- Use barrel exports (`index.ts`) to simplify imports from complex module structures.

### Configuration

- Enable `noImplicitAny` to catch cases where TypeScript falls back to `any`.
- Enable `noUnusedLocals` and `noUnusedParameters` to keep code clean.
- Set appropriate `target` and `lib` based on your runtime environment.

### Type Assertions
- Avoid type assertions (`as` keyword) when possible - prefer type guards and proper typing.
- Use `as const` for literal types that shouldn't widen.
- Not use type assertions to bypass type safety - fix the underlying type issue instead.
- Use `satisfies` operator (TS 4.9+) to validate types without changing them.

### Working with Third-Party Libraries
- Install type definitions (`@types/*` packages) for JavaScript libraries.
- Create declaration files (`*.d.ts`) for libraries without type definitions.
- Use `declare` keyword for ambient declarations of global variables or modules.

### Error Handling
- Create custom error classes that extend `Error` for domain-specific errors.
- Use discriminated unions for result types that can be success or error.
- Type catch clause errors as `unknown` and narrow them before use.

### Testing

- Test type definitions using tools like `tsd` for library authors.

### Performance
- Use `const` assertions to reduce type complexity and improve compilation speed.
- Use `skipLibCheck` in development to speed up compilation (but not in CI).

### Documentation
- Use JSDoc comments for public APIs as TypeScript integrates them into IntelliSense.
- Document non-obvious type parameters and constraints.
- Use `@deprecated` tag for deprecated functions and types.

### Code Organization
- Separate type definitions from implementation when types are reused.
- Organize related types together in dedicated type files.

## Anti-Patterns to Avoid
- Never use `any` type unless absolutely necessary
- Avoid non-null assertions (`!`) without being certain the value exists
- Don't disable strict mode to avoid fixing type errors
- Never use `Function` type - use proper function signatures
- Avoid empty interfaces or types that add no value
- Don't use `Object` or `{}` types - use `object` or specific interfaces
- Never suppress errors with `@ts-ignore` without understanding the issue
- Avoid overly complex type definitions that hurt readability
