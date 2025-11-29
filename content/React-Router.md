# React Router Best Practices

### Installation and Setup (v6+)
- Wrap your application with `<BrowserRouter>` at the root level
- Use `<Routes>` and `<Route>` components to define application routes
- Configure routes in a centralized location for maintainability

### Route Definition
- Use the `element` prop instead of `component` or `render`: `<Route path="/about" element={<About />} />`
- Define routes declaratively using JSX for better readability
- All routes match exactly by default (no need for `exact` prop)
- Use the `index` prop for default child routes: `<Route index element={<Home />} />`

### Nested Routes
- Implement nested routes to create hierarchical URL structures
- Use relative paths in nested routes for cleaner route definitions
- Render nested content using the `<Outlet>` component in parent routes
- Leverage nested routes for layout components and shared UI elements

### Navigation
- Use `<Link>` component for internal navigation instead of `<a>` tags
- Implement programmatic navigation with `useNavigate()` hook
- Use `<NavLink>` for navigation with active state styling
- Navigate with state: `navigate('/dashboard', { state: { from: 'login' } })`

### Dynamic Routing
- Define dynamic segments using colon syntax: `<Route path="/user/:id" element={<User />} />`
- Access URL parameters using `useParams()` hook
- Validate and type-check URL parameters for robust applications

### Route Protection
- Implement protected routes using wrapper components
- Check authentication status before rendering protected content
- Redirect unauthorized users to login page
- Use layout routes for authentication boundaries

### Error Handling
- Implement catch-all routes using `path="*"` for 404 pages
- Use error boundaries to handle rendering errors
- Provide user-friendly error messages and recovery options

### Code Splitting
- Implement lazy loading with `React.lazy()` at route level
- Split code at route boundaries for better performance
- Show loading indicators while components load
- Handle loading errors with suspense fallback

### Data Loading (v6.4+)
- Use `loader` functions to fetch data before route rendering
- Implement `action` functions for form submissions and mutations
- Leverage `useLoaderData()` hook to access loaded data in components
- Handle loading and error states with dedicated UI components

### Redirects
- Use `<Navigate>` component for declarative redirects
- Implement conditional redirects based on application state
- Use `replace` prop to replace history entries: `<Navigate to="/home" replace />`
- Handle redirects programmatically with `navigate()` hook

### Search Parameters
- Access query parameters using `useSearchParams()` hook
- Preserve search parameters upon refresh

### Location and History
- Access current location using `useLocation()` hook
- Navigate with location state for passing data between routes
- Use history API through `useNavigate()` for stack manipulation

### TypeScript Integration
- Define route parameter types using TypeScript interfaces
- Specify generics when using `useParams`, `useLocation`, and `useNavigate` to leverage the type checker
- Create typed route configuration objects

### Testing
- Test routes in isolation using `MemoryRouter`
- Verify route matching and parameter extraction
- Test protected route behavior and redirects

## Anti-Patterns to Avoid
- Don't use `<Switch>` (v5 pattern); use `<Routes>` in v6+
- Avoid using `exact` prop (not needed in v6+)
- Never hardcode paths; use route constants or configuration
- Avoid complex logic in route components; use loaders instead
- Never nest `<BrowserRouter>` components
- Don't use hash router unless necessary for deployment constraints
- Avoid using window.location for navigation; use React Router APIs
- Never put business logic in route components; separate concerns
