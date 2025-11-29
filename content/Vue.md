# Vue.js Best Practices

### Component Design
- Use Single File Components (SFCs) with `.vue` files to keep template, script, and styles together for better organization.
- Use the Composition API for new projects (Vue 3+) as it provides better code organization, TypeScript support, and reusability compared to the Options API.
- Use PascalCase for component names (e.g., `MyComponent.vue`) to distinguish them from HTML elements.
- Use multi-word names for components to avoid conflicts with existing and future HTML elements.

### Props and Events
- Define prop types explicitly using the props option to ensure type safety and provide clear component interfaces.
- Use detailed prop validation with type, required, default, and validator options for robust components.
- Use camelCase for prop names in JavaScript and kebab-case in templates.
- Use custom events (`$emit`) for child-to-parent communication instead of directly modifying props.
- Prefix custom event names with a domain-specific prefix to avoid conflicts (e.g., `user-updated` instead of just `updated`).

### Reactivity (Vue 3)
- Use `ref()` for primitive values and `reactive()` for objects when using the Composition API.
- Use `computed()` for derived state instead of methods when the value needs to be cached and updated only when dependencies change.
- Use `watch()` or `watchEffect()` for side effects based on reactive state changes, not computed properties.
- Avoid mutating reactive objects received as props. Use local state or emit events instead.

### Template Best Practices
- Use `v-if` for conditional rendering when the condition rarely changes, and `v-show` when the element toggles frequently.
- Never use `v-if` and `v-for` together on the same element. Use a computed property to filter the list first.
- Use `:key` attribute with unique identifiers in `v-for` directives for proper list rendering and DOM diffing.
- Use shorthand syntax (`:` for `v-bind`, `@` for `v-on`, `#` for `v-slot`) for cleaner templates.
- Sanitize user input when using `v-html` to prevent XSS attacks, or avoid `v-html` altogether.

### State Management
- Use Pinia (Vue 3) or Vuex (Vue 2) for complex application state management instead of component state or provide/inject.
- Keep store state normalized to avoid duplication and maintain a single source of truth.
- Use getters for computed state derived from store state.
- Use actions for asynchronous operations and complex logic, keeping mutations simple and synchronous.

### Lifecycle and Performance
- Use `onMounted()` (Composition API) or `mounted()` (Options API) for initialization that requires DOM access.
- Clean up side effects in `onUnmounted()` (or `beforeUnmount()`) to prevent memory leaks.
- Use `v-once` for static content that doesn't need to be reactive to improve performance.
- Use `v-memo` (Vue 3.2+) for expensive sub-trees that rarely change to skip re-rendering.
- Implement lazy loading for routes and components using dynamic imports for better initial load performance.

### TypeScript Integration
- Use TypeScript with Vue 3 for better type safety and developer experience.
- Use `defineComponent()` to enable proper TypeScript inference for component options.
- Define prop types using TypeScript interfaces with `defineProps<Props>()` in `<script setup>`.
- Use `defineEmits<Emits>()` to type-check custom events in TypeScript.

### Script Setup (Vue 3)
- Use `<script setup>` syntax for cleaner component logic and better performance.
- Use `defineProps()` and `defineEmits()` macros within `<script setup>` instead of manually importing them.
- Use compiler macros (`defineProps`, `defineEmits`, `defineExpose`, `withDefaults`) provided by Vue without importing them.

### Styling
- Use scoped styles (`<style scoped>`) to prevent CSS leaking to other components.
- Use CSS modules or scoped styles to avoid global namespace pollution.
- Leverage CSS variables for themeable components and design system consistency.

### Router Integration
- Use route-level code splitting with lazy loading for better performance.
- Use named routes instead of path strings for better maintainability when navigating.
- Validate route parameters before using them in components or API calls.
- Use navigation guards for authentication, authorization, and data pre-fetching.

### Testing
- Write unit tests for components using Vue Test Utils and a testing framework like Vitest or Jest.
- Test component behavior rather than implementation details for more robust tests.
- Test prop validation and custom events to ensure component contracts are maintained.

## Anti-Patterns to Avoid
- Never manipulate the DOM directly - use Vue's reactive system and refs
- Avoid using `v-if` and `v-for` on the same element
- Don't overuse `watch()` when `computed()` would be more appropriate
- Never mutate props directly in child components
- Avoid creating too many global components - load components as needed
- Don't mix Composition API and Options API within the same component unnecessarily
- Never use array indices as keys in `v-for` when the array can be reordered
