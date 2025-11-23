# Jest Best Practices

- Use `describe` blocks to group related tests for better organization.
- Use `test` or `it` for individual test cases with descriptive names.
- Follow the Arrange-Act-Assert (AAA) pattern for test structure.
- Use `beforeEach` and `afterEach` for setup and teardown operations.
- Use `beforeAll` and `afterAll` for expensive setup that can be shared across tests.
- Mock external dependencies using `jest.mock()` to isolate units of code.
- Use `jest.fn()` to create mock functions and verify calls with matchers like `toHaveBeenCalled`.
- Use `expect` assertions to verify test outcomes with appropriate matchers.
- Use `jest.spyOn()` to spy on methods without fully mocking them.
- Use snapshot testing for components and complex data structures.
- Mock timers with `jest.useFakeTimers()` for testing time-dependent code.
- Use async/await or return promises in tests to properly handle asynchronous code.
- Name test files with `.test.js` or `.spec.js` extension and colocate them with source files.
