# Shadcn UI Best Practices

### Component Organization
- Keep components in the `components/ui/` directory for consistency
- Organize each component with its logic, styles, and tests in one location
- Use PascalCase for component file names
- Create an index file for easier imports from component directories
- Extend components in separate files rather than modifying core Shadcn UI code

### TypeScript Best Practices
- Favor functional programming patterns over class-based components
- Properly type all props, state, and event handlers

### Component Composition
- Favor composition over inheritance for component design
- Create compound components for complex UI patterns
- Use the slot pattern for flexible, reusable layouts
- Leverage Radix UI's compound component patterns

### Styling and Theming
- Use Tailwind CSS utility classes for component styling
- Implement theming through CSS variables for light and dark modes
- Use the `cn()` utility function for conditional class application
- Follow Tailwind's utility-first approach for consistency
- Create custom color schemes using the theme system
- Avoid direct modifications to core Shadcn UI component styles

### Performance Optimization
- Implement lazy loading for complex components using `React.lazy()`
- Minimize re-renders by using `React.memo()` appropriately
- Use React Server Components when possible for better performance
- Implement code splitting at route or component level

### Customization Patterns
- Extend components rather than modifying the originals
- Use the `cva` (class-variance-authority) utility for creating variant systems
- Create custom variants for components in separate files
- Document customizations for team consistency

### Design Patterns
- Implement the compound component pattern for complex UIs
- Use render props when appropriate for flexibility
- Leverage custom hooks for reusable logic
- Use the provider pattern for shared context

## Anti-Patterns to Avoid
- Don't install Shadcn UI components via npm; use the CLI to copy them
- Avoid directly modifying core Shadcn UI components; extend them instead
- Never ignore accessibility features provided by Radix UI
- Avoid excessive custom CSS that bypasses Tailwind utilities
- Don't create overly complex components; favor composition
- Never skip TypeScript types; they're essential for maintainability
- Avoid tightly coupling components to specific state management solutions
