# Svelte Best Practices

- Use Svelte 5's runes API for explicit reactivity instead of implicit let declarations.
- Use `$state` for reactive state variables instead of `let` for explicit reactivity.
- Use `$derived` for computed values that depend on reactive state.
- Use `$effect` for side effects that should run when dependencies change.
- Use `$props()` for extracting component props instead of `export let`.
- Use event handlers without colons (e.g., `onclick` instead of `on:click`) in Svelte 5.
- Use snippets instead of slots for more flexible content composition.
- Access application state with `$app/state` instead of `$app/stores`.
- Use StatelessWidget for UI components without internal state.
- Use proper TypeScript types for props and state.
- Organize files with clear separation between components, utilities, and stores.
- Use SvelteKit's file-based routing structure with `+page.svelte` for pages and `+layout.svelte` for layouts.
- Use `+page.server.js` for server-only code including data loading and form actions.
- Use `+server.js` files for API endpoints.
- Use CSS scoping to prevent style leakage between components.
- Implement proper form validation and sanitization.
- Follow consistent naming conventions with kebab-case for files and PascalCase for components.
- Use Svelte's built-in transitions and animations for smooth UI updates.
