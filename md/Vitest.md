# Vitest Best Practices

### Test Organization and Structure
- Place test files alongside source code using `.test.ts` or `.spec.ts` extensions for discoverability
- Use dedicated `tests` directory for integration and E2E tests in larger projects
- Group related tests using `describe` blocks to enhance readability and structure
- Use clear and descriptive test names that explain the expected behavior
- Follow the AAA pattern (Arrange, Act, Assert) for structuring individual tests
- Keep test files focused on single modules or components
- Use consistent naming conventions across the test suite

### Test Writing
- Write tests that focus on user-visible behavior rather than implementation details
- Test one thing per test case to make failures easier to diagnose
- Use descriptive assertion messages to make test failures clear
- Implement proper setup and teardown using `beforeEach`, `afterEach`, `beforeAll`, `afterAll`
- Avoid testing multiple scenarios in a single test
- Use `it.skip` or `it.only` during development to focus on specific tests
- Keep tests independent and avoid relying on test execution order

### Assertions and Matchers
- Use specific matchers that clearly express intent (`toBe`, `toEqual`, `toContain`)
- Use `expect.poll()` for handling eventual states in async operations
- Create custom matchers for domain-specific assertions to improve readability
- Use equality testers for custom comparison logic when needed
- Prefer built-in matchers over manual boolean checks
- Use snapshot testing sparingly and only for stable UI components
- Update snapshots intentionally and review changes carefully

### Mocking and Dependencies
- Mock external dependencies to isolate units under test
- Use `vi.fn()` to create mock functions with assertion capabilities
- Mock modules using `vi.mock()` for complete module replacement
- Use `vi.spyOn()` to spy on existing functions without replacing them
- Restore mocks after tests using `afterEach` to prevent test pollution
- Mock only what's necessary - avoid over-mocking which hides bugs
- Use real implementations for simple utilities unless they have side effects

### Asynchronous Testing
- Use `async/await` syntax for testing asynchronous code
- Properly handle promise rejections in tests
- Use `vi.waitFor()` or `expect.poll()` for conditions that resolve over time
- Set appropriate timeouts for async operations
- Avoid using `setTimeout` in tests - use Vitest's async utilities instead
- Test both success and failure paths for async operations
- Use fake timers (`vi.useFakeTimers()`) for time-dependent tests

### Performance Optimization
- Run tests in parallel when possible for faster execution
- Use `test.concurrent()` for independent tests that can run simultaneously
- Implement selective test running with `.only` during development
- Use `beforeAll` for expensive shared setup instead of `beforeEach`
- Profile tests using `--profile` flag to identify bottlenecks
- Keep test files small and focused to improve execution speed
- Use in-memory databases or mocks for database tests

### Configuration
- Configure test environment (`node`, `jsdom`, `happy-dom`) appropriately
- Set up proper TypeScript configuration with Vitest types
- Configure coverage thresholds to maintain test quality
- Use separate config files for different test types when needed
- Configure global setup and teardown files for common initialization
- Set appropriate test timeouts based on test complexity
- Configure test file patterns to include all relevant tests

### Component Testing
- Test component rendering with correct props and state
- Test user interactions (clicks, form submissions) using user-event
- Test component behavior rather than implementation details
- Use Testing Library queries that match how users interact with UI
- Test accessibility features and ARIA attributes
- Mock external dependencies like API calls in component tests
- Test error states and loading states explicitly

### Coverage and Quality
- Aim for high code coverage but focus on meaningful tests
- Use coverage reports to identify untested code paths
- Configure coverage thresholds in CI to prevent regressions
- Test edge cases and error scenarios, not just happy paths
- Review coverage reports regularly to find gaps
- Don't write tests just to increase coverage metrics
- Focus on critical paths and business logic first

### Browser Mode Testing
- Use Vitest Browser Mode for testing real browser environments
- Test with actual DOM APIs instead of simulations
- Run tests with Playwright or WebdriverIO for accurate results
- Test browser-specific features like localStorage, sessionStorage
- Verify responsive behavior across different viewport sizes
- Test real user interactions including drag-and-drop, file uploads
- Use browser mode for integration tests requiring real browser behavior

### Debugging
- Use `--inspect` flag for Node.js debugging
- Use browser DevTools in browser mode for debugging
- Add `debugger` statements in tests for breakpoint debugging
- Use console.log strategically but remove before committing
- Use Vitest UI (`--ui` flag) for visual test exploration
- Check test output and stack traces carefully for failure diagnosis
- Use `--reporter=verbose` for detailed test execution information

### CI/CD Integration
- Run tests in CI pipeline on every commit and pull request
- Configure appropriate timeouts for CI environments
- Use coverage reports in CI to track test quality over time
- Run tests in parallel in CI to reduce build times
- Use test result reporters compatible with your CI system
- Store test artifacts (coverage reports, screenshots) in CI
- Set up automatic test runs on dependency updates

### Maintenance
- Keep tests up to date with code changes
- Refactor tests when refactoring code to maintain clarity
- Remove obsolete tests that no longer provide value
- Update snapshots when component changes are intentional
- Review and update mocks when dependencies change
- Maintain test utilities and helpers in shared files
- Document complex test setups and custom utilities

## Anti-Patterns to Avoid
- Avoid testing implementation details - test behavior instead
- Never write flaky tests - fix or remove tests that fail intermittently
- Don't use arbitrary timeouts - use proper async utilities
- Avoid shared mutable state between tests
- Never commit failing or skipped tests without explanation
- Don't over-mock - use real implementations when practical
- Avoid writing tests that are more complex than the code being tested
