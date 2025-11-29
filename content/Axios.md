# Axios Best Practices

### Installation and Configuration
- Set base URL and common headers in the instance configuration to avoid repetition
- Configure timeout values to prevent hanging requests

### Interceptors for Centralized Logic
- Use request interceptors to add authentication tokens automatically to all requests
- Implement centralized error handling using response interceptors
- Add logging and monitoring through interceptors for debugging and performance tracking

### Error Handling Best Practices
- Check for `error.response` to handle server errors (status codes outside 2xx range)
- Handle network errors separately when `error.response` is undefined
- Use `validateStatus` option to customize which HTTP status codes should be treated as errors
- Return `Promise.reject(error)` in interceptors to allow specific error handling in individual requests

### Response Interceptors Implementation
- Handle successful responses by returning the response or transforming data
- Catch errors and implement custom logic (e.g., redirect to login on 401)
- Implement automatic retry logic for failed requests when appropriate
- Log response times and errors for monitoring and debugging

### Authentication and Token Management
- Use request interceptors to automatically attach authentication tokens to requests
- Implement token refresh logic in response interceptors for expired tokens
- Clear tokens and redirect to login on authentication failures (401, 403)

### Request Configuration
- Use appropriate HTTP methods (GET, POST, PUT, PATCH, DELETE) according to REST principles
- Set proper headers for content type (e.g., `Content-Type: application/json`)
- Use params for query parameters and data for request body

### Async/Await and Error Handling
- Use async/await syntax for cleaner asynchronous code
- Wrap Axios calls in try/catch blocks for proper error handling
- Avoid using `.then().catch()` chains when async/await provides better readability

### Performance Optimization
- Use `Promise.all()` for concurrent requests when appropriate
- Implement request cancellation using AbortController or CancelToken

### Instance Management
- Create separate Axios instances for different APIs or services.
- Use factory functions to create configured instances consistently

### TypeScript Integration
- Define interfaces for request and response types
- Use generics with Axios for type-safe API calls: `axios.get<ResponseType>(url)`
- Type interceptor functions properly for better IDE support
- Create typed wrapper functions for common API operations

### Testing Axios Calls
- Mock Axios requests in tests using libraries like `axios-mock-adapter` or `jest.mock()`
- Test error handling paths including network failures and API errors
- Verify interceptors work correctly in isolated tests
- Test timeout scenarios and cancellation behavior

## Anti-Patterns to Avoid
- Never ignore errors or use empty catch blocks
- Don't put business logic in interceptors
- Never store sensitive data in Axios defaults that could be logged
- Avoid setting up interceptors multiple times, as they will execute in order
- Don't use interceptors for request-specific logic that should be in individual calls
