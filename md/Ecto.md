# Ecto Best Practices

### Schema and Migration Design
- Define schemas that accurately map database tables to Elixir structs with proper field types
- Use migrations to track and manage all schema changes across environments with proper up and down functions
- Implement database constraints (foreign keys, unique constraints, not null) at the database level for data integrity
- Create indexes on frequently queried columns to optimize query performance
- Never modify existing migrations that have been run in production - create new ones instead

### Changeset Validation
- Use changesets for all data validation, transformation, and casting before database operations
- Validate data at the changeset level using `validate_required`, `validate_length`, `validate_format` and custom validators
- Use `cast` to explicitly whitelist which fields can be updated from user input
- Implement custom validators using `validate_change` for complex validation logic
- Use `validate_confirmation` for password confirmation fields
- Return detailed error messages from changesets to help users fix validation failures

### Query Patterns
- Leverage `from` expressions for readable query construction
- Use `preload` to eagerly load associations and avoid N+1 query problems
- Use `select` to load only required fields instead of entire records when appropriate
- Compose queries using functions to build reusable query fragments
- Use parameterized queries to prevent SQL injection - never concatenate user input

### Association Management
- Define associations (`has_many`, `belongs_to`, `many_to_many`) in schemas
- Use `Ecto.assoc` to query through associations safely and efficiently
- Use join tables for many-to-many relationships with `many_to_many` and `Ecto.Schema`
- Preload associations when you know they'll be needed to avoid multiple queries
- Use `on_delete` and `on_replace` options in associations to handle deletion and replacement behavior
- Consider using embedded schemas for non-persisted nested data structures

### Transaction Handling
- Use `Ecto.Multi` for operations requiring multiple database changes in a single transaction
- Keep transactions short to minimize lock contention and improve concurrency
- Use `Repo.transaction` for explicit transaction control when needed
- Name operations in `Ecto.Multi` to make debugging easier
- Handle transaction failures gracefully with proper error messages
- Avoid performing external API calls or long-running operations inside transactions

### Repository Operations
- Use `Repo.insert`, `Repo.update`, `Repo.delete` with changesets for proper validation
- Use bang versions (`insert!`, `update!`, `delete!`) only when you want to raise on errors
- Use `Repo.get` and `Repo.get_by` for fetching single records
- Use `Repo.all` for fetching multiple records with queries
- Leverage `Repo.aggregate` for database-level aggregations (count, sum, avg)
- Use `Repo.exists?` to check for record existence without loading the full record

### Performance Optimization
- Leverage database-level aggregations instead of loading all records into memory
- Use `select` to load only necessary fields, especially for large tables
- Implement query result streaming with `Repo.stream` for processing large datasets
- Use connection pooling appropriately sized for your workload
- Analyze slow queries using database EXPLAIN to identify optimization opportunities
- Consider using database views or materialized views for complex, frequently-run queries

### Testing
- Use `Ecto.Adapters.SQL.Sandbox` in test mode for isolated database transactions
- Reset database state between tests to ensure test independence
- Use factories or fixtures to generate test data consistently
- Test changeset validations explicitly to ensure they work as expected
- Use `async: true` in tests when possible to parallelize test execution
- Do not mock actual database interactions

### Data Integrity
- Enforce constraints at the database level (not null, unique, foreign key constraints)
- Use changeset validations as a first line of defense before database constraints
- Validate data types and formats at the changeset level
- Use `check_constraint` to validate database-level check constraints
- Implement soft deletes if you need to maintain referential integrity for deleted records

### Multi-tenancy
- Use schema prefixes for database-level multi-tenancy (`Triplex`, `ApartmentEx`)
- Implement query scoping to ensure tenant data isolation
- Use connection pooling appropriately for multi-tenant architectures
- Filter all queries by tenant ID when using shared schema multi-tenancy
- Implement proper tenant identification and routing in your application
- Use database roles and row-level security for additional tenant isolation
- Test tenant isolation thoroughly to prevent data leakage

### Embedded Schemas
- Define embeds using `embeds_one` and `embeds_many` in parent schemas
- Validate embedded data using changesets just like regular schemas
- Use `cast_embed` to cast and validate embedded data structures
- Consider using JSON fields with embedded schemas for flexible data storage
- Keep embedded schemas simple and focused on specific data structures
- Use embedded schemas for value objects that are part of aggregate roots

## Anti-Patterns to Avoid
- Avoid loading entire tables into memory - use queries with limits and pagination
- Never modify changesets after calling `Repo.insert` - create new changesets instead
- Don't skip validations by directly inserting records without changesets
- Avoid using raw SQL queries unless absolutely necessary - use Ecto's query DSL
- Never put business logic in schemas - keep them focused on data structure
- Don't ignore migration failures - fix them before proceeding
- Avoid N+1 queries - use preloading or joins to load associated data efficiently
