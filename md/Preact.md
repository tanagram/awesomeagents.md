# Preact Best Practices

### Event Handling
- Use native `addEventListener` for event handling instead of React's synthetic events
- Access native DOM events directly for improved performance
- Handle events with standard browser APIs for better efficiency

### State Management
- Use `useState` for local component state
- Implement custom hooks for reusable stateful logic

### React Migration
- Use `preact/compat` to maintain React library compatibility
- Replace React imports with Preact equivalents: `import { h } from 'preact'`
- Update build configuration to alias React to Preact for seamless migration
- Be aware of API differences, particularly with lifecycle methods and context

### Differences from React
- Use `onInput` instead of `onChange` for input fields when not using preact/compat
- Use `onDblClick` instead of `onDoubleClick` for double-click events
- Understand that Preact adheres more closely to DOM specifications

### TypeScript Integration
- Import types from Preact: `import { FunctionalComponent } from 'preact'`
- Define prop types using TypeScript interfaces
- Configure tsconfig.json with appropriate JSX factory settings

### Routing
- Use `preact-router` for client-side routing in Preact applications
- Implement code splitting at route level for better performance
- Define routes declaratively using Preact Router components

### Testing
- Use testing libraries compatible with Preact (e.g., `@testing-library/preact`)
- Write unit tests for components and hooks
- Test component rendering and user interactions

## Anti-Patterns to Avoid
- Don't assume all React libraries will work without preact/compat
- Avoid using React-specific features not supported in Preact core
- Don't ignore the differences between Preact and React event handling
- Avoid complex state management when Preact's simplicity suffices
- Don't use Preact for projects heavily dependent on React ecosystem features
- Never assume synthetic event behavior; Preact uses native events
- Avoid unnecessary use of preact/compat when native Preact APIs suffice
