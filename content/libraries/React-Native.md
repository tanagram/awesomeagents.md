# React Native Best Practices

### Component Architecture
- Use functional components with hooks instead of class components for cleaner code
- Keep components small and focused on a single responsibility
- Split components into Presentational (UI) and Container (logic) components for better organization
- Create reusable components for common UI patterns across the application
- Implement proper component composition instead of deep prop drilling
- Use React.memo() to prevent unnecessary re-renders of expensive components

### State Management
- Use React Context API for simple global state management
- Use Redux or Zustand for complex state management needs
- Keep state local to components when possible rather than lifting unnecessarily
- Use proper state management patterns (reducer pattern, actions) for predictable updates
- Avoid storing derived state - compute it from existing state instead
- Implement optimistic updates for better perceived performance
- Use state management libraries' middleware for side effects (Redux Thunk, Redux Saga)

### Performance Optimization
- Use FlatList or SectionList instead of ScrollView for long lists
- Implement proper key extraction in list components to optimize rendering
- Use React.memo() and useMemo() to prevent unnecessary re-renders
- Use lazy loading for screens and heavy components to reduce initial load time
- Minimize use of anonymous functions in render methods that cause re-renders

### Navigation
- Use React Navigation for routing and navigation management
- Configure deep linking to handle app launches from URLs and notifications
- Implement proper navigation state persistence for better UX after app restarts
- Use typed navigation with TypeScript to catch navigation errors at compile time
- Structure navigation hierarchies clearly with stack, tab, and drawer navigators
- Implement proper loading states during navigation transitions

### Styling
- Use StyleSheet.create() instead of inline styles for better performance
- Keep styles in separate files or use CSS modules for maintainability
- Use Flexbox for responsive layouts that adapt to different screen sizes
- Use platform-specific styles when necessary via `Platform.select()`

### Code Organization
- Follow a feature-based or component-based directory structure
- Use PascalCase for files and components
- Use absolute imports with path aliases to simplify module access
- Organize API calls in separate service modules
- Use barrel exports (index files) to simplify imports from directories
- Maintain consistent file organization across the project

### TypeScript Integration
- Use TypeScript for static type checking to catch errors early
- Define types for component props, state, and function parameters
- Use interfaces for object shapes and types for primitives and unions
- Leverage TypeScript's type inference where appropriate
- Create reusable type definitions for common data structures
- Use strict TypeScript configuration for maximum type safety
- Document complex types with JSDoc comments

### API Integration
- Use axios or fetch for API requests with proper error handling
- Implement retry logic and exponential backoff for failed requests
- Use React Query or SWR for server state management and caching
- Handle loading, error, and success states explicitly in components
- Implement proper request cancellation to avoid memory leaks
- Use environment variables for API endpoints and configuration
- Implement request interceptors for authentication token management

### Testing
- Write unit tests for business logic and utility functions using Jest
- Use React Native Testing Library for component testing
- Implement E2E tests with Detox or Maestro for critical user flows
- Use mocks for external dependencies and API calls
- Test error scenarios and edge cases

### Error Handling
- Implement error boundaries to catch and handle component errors gracefully
- Use try-catch blocks for async operations and network requests
- Implement proper offline error handling with clear feedback
- Handle platform-specific errors appropriately
- Create fallback UI for error states

### Security
- Store sensitive data using secure storage (react-native-keychain, expo-secure-store)
- Never hardcode API keys or secrets in source code
- Use HTTPS for all network requests and validate SSL certificates
- Validate and sanitize all user input to prevent injection attacks
- Use proper authentication and authorization mechanisms

### Platform-Specific Code
- Use `Platform.OS` or `Platform.select()` for platform-specific implementations
- Test platform-specific features on both iOS and Android
- Handle platform-specific permissions and capabilities appropriately
- Implement platform-specific UI components where needed for better UX
- Handle platform-specific gestures and interactions correctly

### Dependency Management
- Avoid using wildcards (^, ~) in package.json to prevent unexpected updates
- Remove unused dependencies to reduce app size
- Use lock files (package-lock.json, yarn.lock) for reproducible builds
- Check bundle size impact when adding new dependencies
- Use tools like react-native-bundle-visualizer to analyze dependencies

## Anti-Patterns to Avoid
- Avoid deeply nested component hierarchies that make code hard to follow
- Never use too many or overly large images without optimization
- Don't ignore platform differences - test on both iOS and Android
- Avoid prop drilling - use context or state management instead
- Never perform synchronous operations on the main thread
- Don't skip error handling for network requests and async operations
- Avoid using index as key in lists - use unique identifiers instead
