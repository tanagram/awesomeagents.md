# SwiftUI Best Practices

### View Structure
- Limit the number of views in a single view hierarchy (10-15 subviews) to avoid SwiftUI's expression complexity limits.
- Use view builders (`@ViewBuilder`) for creating reusable components that can return different view types.

### State Management
- Use `@State` for private view-local state that the view owns and mutates.
- Use `@Binding` to create two-way connections between a parent view's state and a child view.
- Use `@StateObject` for reference types that the view creates and owns.
- Use `@ObservedObject` for reference types passed into the view from outside.
- Use `@EnvironmentObject` for shared data that many views need to access across the app.
- Use `@Published` properties in `ObservableObject` classes to trigger view updates when values change.

### Property Wrappers
- Use `@AppStorage` for persisting simple user preferences backed by UserDefaults.
- Use `@SceneStorage` for preserving view state during scene lifecycle events.
- Use `@Environment` to read values from the environment like color scheme, layout direction, or custom values.

### Performance

- Use `Identifiable` for list items to help SwiftUI efficiently update lists.
- Use `LazyVStack` and `LazyHStack` for long lists to load views on-demand.
- Avoid using `AnyView` excessively as it prevents SwiftUI from optimizing view updates.
- Use `.equatable()` modifier for views with expensive rendering when their data rarely changes.

### Lists and Collections
- Provide stable identifiers for list items using `id:` parameter or `Identifiable` protocol.
- Use `ForEach` with `id` instead of iterating directly over collections for proper identity tracking.
- Use lazy stacks (`LazyVStack`, `LazyHStack`, `LazyVGrid`) for large or infinite scrolling lists.
- Implement pull-to-refresh using `.refreshable()` modifier for data updates.

### Navigation
- Use `NavigationStack` (iOS 16+) for navigation with type-safe navigation paths.
- Use `NavigationLink` with value for programmatic navigation instead of the older isActive approach.
- Manage navigation state centrally using a navigation path array for complex navigation flows.
- Use `.navigationDestination()` modifier to define navigation destinations for specific types.

### Layout
- Use native layout containers (`VStack`, `HStack`, `ZStack`, `LazyVGrid`) before creating custom layouts.
- Use `Spacer` for flexible spacing and `.padding()` for fixed spacing.
- Use `.frame()` with alignment parameters to position views within their parent.
- Use `.alignmentGuide()` for custom alignment requirements.

### Modifiers
- Understand modifier order matters - the sequence of modifiers affects the final appearance.
- Create custom view modifiers for reusable styling using `ViewModifier` protocol.
- Use built-in modifiers before creating custom ones.
- Chain modifiers logically (e.g., layout → decoration → interaction).

### Animations
- Use `.animation()` modifier to animate state changes automatically.
- Use `withAnimation {}` block to animate specific state changes explicitly.
- Use custom animation curves (`.easeIn`, `.easeOut`, `.spring()`) for better user experience.
- Use `.transition()` for animating view insertions and removals.
- Use `matchedGeometryEffect` for smooth transitions between views.

### Data Flow
- Follow single source of truth principle - each piece of data should have one authoritative source.
- Pass data down the view hierarchy and events up through bindings and closures.
- Use `ObservableObject` for complex model objects that multiple views observe.

### Combine Integration
- Use Combine for complex asynchronous data flows and reactive programming.
- Use `onReceive()` modifier to subscribe to Combine publishers in views.
- Use `@Published` properties for observable model properties.
- Handle cancellation properly by storing subscriptions in sets.

### Forms and Input
- Use `Form` for grouped settings and input screens.
- Use appropriate controls (`TextField`, `SecureField`, `Toggle`, `Picker`) for different input types.
- Validate input and provide clear error messages to users.
- Use `@FocusState` to manage keyboard focus programmatically.

### Platform Differences
- Use conditional compilation (`#if os(iOS)`) for platform-specific code.
- Test on all target platforms as SwiftUI behavior can differ across iOS, macOS, watchOS, and tvOS.
- Use appropriate navigation for each platform (NavigationStack for iOS, NavigationSplitView for macOS/iPad).

### Testing
- Write unit tests for ViewModels and business logic.
- Test business logic separately from view code for better testability.
- Use preview providers for rapid iteration during development.
- Create multiple preview configurations to test different states and devices.

### Accessibility
- Add accessibility labels using `.accessibilityLabel()` for custom views.
- Support Dynamic Type by using system fonts and avoiding fixed sizes.
- Test with VoiceOver to ensure your app is accessible.
- Provide accessibility actions using `.accessibilityAction()`.

### Asset Management
- Use SF Symbols for icons to get automatic adaptivity and localization.
- Use Asset Catalogs for images with color and appearance variations.

## Anti-Patterns to Avoid
- Never perform heavy computations in view body - use computed properties or move to model
- Avoid using `@ObservedObject` for objects the view creates - use `@StateObject` instead
- Don't create large, monolithic views - break them down into smaller components
- Never mutate state during view body evaluation
- Avoid using `GeometryReader` when simpler layout tools work
- Don't use `@State` for reference types - use `@StateObject` instead
- Never ignore the view update cycle - understand when views rebuild
