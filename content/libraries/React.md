# React Best Practices

### Component Structure
- Use functional components over class components for all new development. Functional components with hooks are the modern React standard and provide better performance and code reusability.
- Keep components small and focused, ideally under 100 lines of code. This improves testability, maintainability, and makes components easier to understand and debug.

### Hooks Usage
- Only call hooks at the top level of your React function component or custom hook. Never call hooks inside loops, conditions, or nested functions to ensure they are called in the same order on every render.
- Only call hooks from React functions, not from regular JavaScript functions. This maintains clarity in the component's stateful logic.
- Use `useCallback` for functions that require closure over component state to prevent unnecessary re-renders. Only use it for functions that are expensive or passed to optimized child components.

### State Management
- Treat props and state as immutable. Never directly modify state; always use the setter functions provided by useState to ensure React can track changes properly.
- Group related state that is updated together into a single state variable to ensure synchronization and reduce the number of useState calls.
- Avoid redundant state by not storing data that can be derived from props or existing state. This keeps the state clean and prevents synchronization issues.
- Minimize state duplication across state variables to maintain consistency and reduce the complexity of state updates.

### Performance Optimization
- Avoid inline functions in render methods. Define functions outside of the render method to prevent unnecessary re-renders and performance degradation.
- Components and hooks must be pure functions. They should be idempotent, have no side effects during rendering, and not mutate non-local values.

### Code Organization

- Handle side effects in useEffect or event handlers, not during render. Side effects include API calls, DOM manipulation, and subscriptions.
- Avoid prop drilling by using the Context API for global data, custom hooks for encapsulating state logic, or state management libraries like Redux for complex applications.
- Provide meaningful prop types or use TypeScript to ensure type safety and make component interfaces clear.

### Testing and Quality
- Write unit tests for components using React Testing Library, focusing on testing behavior rather than implementation details.
- Use React's Strict Mode and the ESLint plugin for hooks to enforce these rules and identify bugs early in development.

## Anti-Patterns to Avoid
- Never use the `any` type in TypeScript React applications
- Avoid using index as a key in lists when the order of items may change
- Don't call setState synchronously in componentDidUpdate without a condition (for class components)
- Never mutate state directly - always use setState or state updater functions
- Avoid having too much state in a single component - lift state up or use context when appropriate
