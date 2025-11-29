# DaisyUI Best Practices

### Installation and Setup
- Add DaisyUI to `tailwind.config.js` plugins: `plugins: [require("daisyui")]`

### Component Usage
- Use semantic class names like `btn`, `card`, `modal` instead of multiple utility classes
- Combine DaisyUI components with Tailwind utilities for additional customization
- Follow the pattern: base component class + modifiers + Tailwind utilities
- Apply modifiers using the `-{modifier}` syntax (e.g., `btn-primary`, `card-bordered`)

### Naming Conventions
- Start with base component names (e.g., `btn`, `card`, `input`)
- Add modifier suffixes for variants (e.g., `btn-primary`, `btn-secondary`)
- Use Tailwind's responsive prefixes before component classes (e.g., `md:btn-lg`)
- Follow BEM-inspired methodology for clear component-modifier relationships
- Use semantic color names for consistent visual language

### Theme Management
- Use the `data-theme` attribute to apply themes globally or per component
- Define custom themes in `tailwind.config.js` using color variables
- Use CSS variables for theme consistency across components

### Size Variations
- Use predefined size modifiers: `btn-xs`, `btn-sm`, `btn-md`, `btn-lg`, `btn-xl`
- Use size variations to establish visual hierarchy

### Layout and Spacing
- Use Tailwind's spacing utilities (`p-4`, `m-2`) alongside DaisyUI components
- Leverage DaisyUI's `space-{axis}-{size}` for consistent child element spacing
- Implement flexbox and grid with DaisyUI components for layouts
- Use the `gap` utility for consistent spacing in grid layouts

### Form Components
- Use DaisyUI form components (`input`, `select`, `textarea`, `checkbox`, `radio`)

### Performance Optimization
- Import only needed themes to reduce CSS bundle size
- Use Tailwind's JIT mode with DaisyUI for on-demand class generation
- Minimize custom CSS by leveraging DaisyUI's built-in components

### State Management
- Use DaisyUI's state modifiers like `btn-disabled`, `input-error`
- Implement loading states with `loading` class or spinner components
- Handle form validation states with DaisyUI's built-in styling

## Anti-Patterns to Avoid
- Don't fight against DaisyUI's component structure; extend it instead
- Avoid excessive custom CSS that bypasses DaisyUI's theming system
- Never hardcode colors; use theme variables for consistency
