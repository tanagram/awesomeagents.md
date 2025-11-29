# Tailwind CSS Best Practices

### Utility-First Approach
- Use utility classes directly in your markup instead of writing custom CSS for one-off designs.
- Apply utilities at the appropriate specificity level - use more specific utilities for variations rather than overriding base utilities.
- Extract components using `@apply` only when the same combination of utilities is repeated many times.
- Keep utility classes in a consistent order: layout (flex, grid) → spacing → sizing → typography → colors → effects.

### Responsive Design
- Use mobile-first responsive design by applying base styles without prefixes and adding breakpoint prefixes for larger screens.
- Apply responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) to control element appearance at different screen sizes.
- Use responsive prefixes for all properties that need to change across breakpoints, including display, spacing, and typography.

### State Variants
- Use state modifiers (`hover:`, `focus:`, `active:`, `disabled:`) to apply styles based on element state.
- Apply focus styles to all interactive elements to ensure keyboard navigation accessibility.
- Use `group` and `peer` utilities for parent-child or sibling-based state styling.
- Combine state variants with responsive variants for fine-grained control: `md:hover:bg-blue-500`.
- Always include disabled states for form inputs and buttons to provide clear feedback.

### Color System
- Define a consistent color palette in your Tailwind config using semantic color names (primary, secondary, accent).
- Use color opacity modifiers (`bg-blue-500/50`) instead of defining separate color shades for transparency.
- Leverage CSS variables for theme colors that need to change based on dark mode or user preferences.
- Use semantic color names in components rather than specific color values for easier theming.
- Maintain contrast ratios that meet WCAG accessibility guidelines for text and background combinations.

### Spacing and Layout
- Apply consistent spacing using the spacing scale (e.g., `p-4`, `m-8`) rather than custom pixel values.
- Use flexbox (`flex`, `items-center`, `justify-between`) and grid (`grid`, `grid-cols-3`) utilities for layouts.
- Leverage gap utilities (`gap-4`) for consistent spacing in flex and grid containers.
- Use arbitrary values (`p-[13px]`) sparingly and only when the spacing scale doesn't meet your needs.

### Typography
- Use Tailwind's typography scale for consistent font sizes across your application.
- Define font families in your Tailwind config and apply them using utility classes.
- Use `@tailwindcss/typography` plugin for styling user-generated content with prose classes.
- Set line-height and letter-spacing together with font-size for balanced typography.
- Apply text utilities in this order: font family → font size → font weight → line height → text color.

### Component Patterns
- Create component classes in CSS using `@apply` for frequently repeated utility combinations.
- Use `@layer components` in CSS to organize custom component classes and maintain proper CSS cascade.
- Build component variants using configuration objects rather than duplicating utility classes.
- Leverage the `@variants` directive to generate responsive and state variants for custom components.

### Configuration Management
- Extend the default theme in `tailwind.config.js` rather than overriding it to preserve Tailwind's utility classes.
- Define custom colors, spacing, and other design tokens in the theme configuration for consistency.
- Use the `content` configuration to include all files that contain Tailwind classes for proper tree-shaking.
- Version your Tailwind config alongside your codebase to track design system changes over time.

### Performance Optimization
- Enable PurgeCSS/tree-shaking by correctly configuring the `content` option in Tailwind config.
- Remove unused utility classes in production builds to minimize CSS bundle size.

### Dark Mode
- Configure dark mode strategy (`media` or `class`) in Tailwind config to match your application needs.
- Apply dark mode variants using the `dark:` prefix to style elements differently in dark mode.
- Use CSS variables for colors that change between light and dark modes for easier maintenance.
- Test all components in both light and dark modes to ensure consistent visual quality.
- Provide explicit dark mode styles rather than relying on automatic color inversion for better control.

### Accessibility
- Include focus-visible styles on all interactive elements using `focus-visible:` variants.
- Maintain sufficient color contrast ratios for text and interactive elements.
- Use screen reader utility classes (`sr-only`) to provide context for assistive technologies.
- Apply proper semantic HTML with Tailwind utilities rather than relying on styles to convey meaning.
- Test keyboard navigation with visible focus indicators on all interactive elements.

### Custom Utilities
- Extend Tailwind with custom utilities in the config file when you need project-specific classes.
- Use the `addUtilities` API to create new utilities that follow Tailwind's naming conventions.
- Generate responsive and state variants for custom utilities using the `@variants` directive.
- Keep custom utilities minimal - leverage Tailwind's existing utilities whenever possible.

### Animation and Transitions
- Use Tailwind's transition utilities (`transition`, `duration-300`, `ease-in-out`) for smooth animations.
- Define custom animations in your Tailwind config for reusable animation patterns.
- Apply transitions to specific properties (`transition-colors`, `transition-transform`) for better performance.
- Use the `animate-` utilities for keyframe animations like pulse, bounce, and spin.
- Respect user motion preferences using the `motion-safe:` and `motion-reduce:` variants.

### Form Styling
- Use `@tailwindcss/forms` plugin for better default form element styling with Tailwind.
- Apply consistent form input styling using utility classes for borders, padding, and focus states.
- Style form validation states using data attribute selectors or class-based validation patterns.
- Group related form elements with consistent spacing and visual hierarchy.

## Anti-Patterns to Avoid
- Avoid using arbitrary values without a clear explanation - they bypass the design system and reduce maintainability.
- Never override Tailwind's base styles with custom CSS without using `@layer` directives.
- Do not create custom CSS classes for one-off components - use utility classes directly.
- Avoid applying too many utilities to a single element - extract components when combinations become unwieldy.
