# Playwright Best Practices

### Test Structure and Organization
- Use Playwright fixtures for test isolation - each test should have its own browser context
- Organize tests by feature or user journey rather than by page or component
- Use `beforeEach` for common setup, but keep individual tests self-contained and understandable
- Create helper functions to reduce duplication but maintain test readability
- Group related tests using `describe` blocks for better organization and reporting
- Keep tests focused on a single behavior or assertion rather than testing multiple scenarios

### Locator Strategies
- Use role-based locators (`getByRole`, `getByLabel`) instead of CSS selectors for better accessibility testing
- Use `getByTestId` sparingly and only when semantic locators are not feasible
- Avoid XPath selectors and complex CSS selectors that are brittle and hard to maintain
- Use text-based locators (`getByText`, `getByPlaceholder`) for user-visible content
- Chain locators to scope searches within specific regions of the page
- Use `locator.filter()` to narrow down locators when multiple elements match
- Prefer built-in locators over custom selector strategies for better maintainability

### Assertions and Waits
- Use web-first assertions that automatically wait for conditions to be met
- Use `expect(locator).toBeVisible()` instead of manual waits to verify element visibility
- Use `expect(locator).toHaveText()` for text content verification with automatic retries
- Avoid hard-coded `page.waitForTimeout()` - use auto-waiting assertions instead
- Use `expect(locator).toBeEnabled()` to verify interactive elements are ready for interaction

### Test Isolation and Independence
- Ensure each test can run independently without depending on other tests
- Use separate browser contexts for each test to avoid state leakage
- Clean up test data in `afterEach` hooks or use isolated test accounts
- Use Playwright's storage state API to save and reuse authentication state across tests
- Use unique identifiers for test data to prevent conflicts in parallel execution

### Performance and Reliability
- Use `page.route()` to mock API responses and avoid third-party dependencies in tests
- Implement network request interception to simulate different API response scenarios
- Use `page.waitForLoadState()` with appropriate load states for different page types
- Configure global timeout settings in `playwright.config.ts` to prevent hanging tests
- Use screenshot and video recording selectively - only for failed tests to save resources
- Implement retry logic for tests that occasionally fail due to timing issues
- Use trace files for debugging complex test failures in CI environments

### Page Object Model
- Use Page Object Model pattern for complex applications to improve maintainability
- Keep page objects focused on representing page structure and interactions, not assertions
- Return page objects or locators from page object methods to enable method chaining
- Avoid business logic in page objects - keep them as thin wrappers around page interactions
- Use composition to share common functionality between page objects
- Keep page object constructors simple - pass only the page object
- Document page object methods clearly to indicate what interactions they perform

### Browser Context and Configuration
- Use different browser contexts for different user sessions in multi-user scenarios
- Configure viewport size consistently across tests to avoid layout-dependent failures
- Use `storageState` to persist authentication across tests and reduce login overhead
- Set appropriate permissions in browser contexts for testing features like geolocation or notifications
- Use `contextOptions` to simulate different devices or network conditions
- Configure locale and timezone in browser context for internationalization testing
- Use incognito contexts to test without persisted cookies or storage

### Testing Best Practices
- Test user-visible behavior, not implementation details like internal state or method calls
- Avoid testing external services directly - use mocks or stubs for third-party APIs
- Focus on critical user paths first, then expand to edge cases
- Write tests that work with stable staging data or use test-specific data setup
- Verify both success and error scenarios in tests to ensure proper error handling
- Implement visual regression testing using Playwright's screenshot comparison features

### CI/CD Integration
- Run tests in headless mode in CI environments to improve execution speed
- Use Playwright's built-in Docker images for consistent test environments
- Configure appropriate test timeouts for CI environment performance characteristics
- Use test sharding to parallelize test execution across multiple CI machines
- Store test artifacts (screenshots, videos, traces) for failed tests only to save storage
- Set up test reporting to integrate with your CI dashboard for visibility
- Use Playwright's built-in reporters or integrate with third-party reporting tools

## Anti-Patterns to Avoid
- Avoid hard-coded waits (`page.waitForTimeout`) - use auto-waiting instead
- Never test third-party services you don't control - mock them instead
- Don't chain too many actions without assertions - verify state incrementally
- Avoid overly complex selectors - use semantic locators for better maintainability
- Never ignore test failures - fix or skip tests explicitly with comments explaining why
- Don't test implementation details - focus on user-visible behavior and outcomes
