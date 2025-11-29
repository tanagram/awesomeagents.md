# Oban Best Practices

### Job Definition and Structure
- Use descriptive worker module names that clearly indicate the job's purpose
- Keep job logic focused on a single responsibility per worker
- Pass only serializable data as job arguments (primitives, lists, maps)
- Use atoms for queue names and keep them consistent across the application
- Configure appropriate `max_attempts` for each worker based on failure tolerance
- Set realistic `priority` values to ensure critical jobs execute first

### Queue Configuration
- Organize jobs into isolated queues to prevent slower jobs from blocking faster ones
- Use separate queues for different job types (emails, reports, webhooks, etc.)
- Set up queue-specific rate limits for external API interactions
- Use global concurrency limits when dealing with shared external resource constraints

### Job Enqueueing
- Enqueue jobs alongside other database changes using `Ecto.Multi` for atomicity
- Use `unique` options to prevent duplicate job execution when appropriate
- Set `scheduled_at` for delayed job execution rather than using sleep in workers
- Use `replace` options in unique constraints to update existing scheduled jobs
- Tag jobs with metadata for easier monitoring and filtering
- Implement idempotency keys in job arguments for safe retries
- Use `insert_all` for bulk job creation when enqueueing many jobs at once

### Error Handling and Retries
- Use Oban's built-in retry mechanism with exponential backoff for transient failures
- Return `{:error, reason}` or `{:discard, reason}` to control retry behavior
- Log detailed error information for debugging but avoid sensitive data in logs
- Use `{:snooze, seconds}` to reschedule jobs that encounter rate limits
- Implement custom backoff strategies when exponential backoff isn't suitable

### Job Scheduling and Recurring Jobs
- Use Oban's Cron plugin for periodic jobs instead of managing schedules manually
- Implement recursive scheduling for jobs that need to run at fixed intervals
- Use `replace` options with scheduled jobs to avoid duplicates
- Set up monitoring for recurring jobs to ensure they execute as expected
- Use timezone-aware scheduling when jobs need to run at specific local times
- Document cron schedules clearly and keep them in version control

### Performance Optimization
- Use `Oban.insert_all` for bulk job insertion to reduce database overhead
- Implement job batching when processing large datasets
- Use job prioritization to ensure critical jobs execute before less important ones
- Monitor and optimize slow-running jobs that block queue processing
- Use Oban Pro's smart engine for advanced concurrency and rate limiting

### Monitoring and Observability
- Integrate Oban with Telemetry for comprehensive job execution metrics
- Monitor queue depths, processing rates, and failure rates
- Set up alerts for job failures and queue backups
- Log job starts and completions with appropriate detail levels
- Implement custom metrics for business-critical job workflows

### Testing
- Write tests for worker logic independent of Oban's job execution
- Use `Oban.Testing` helpers to verify jobs are enqueued correctly
- Test job uniqueness constraints to ensure duplicate prevention works
- Use `perform_job` to test worker execution in isolated test cases
- Test retry logic by simulating failures in worker code

### Production Deployment
- Configure Oban to start with your application's supervision tree
- Use database-backed persistence to ensure jobs survive application restarts
- Use staged rollouts when deploying changes to high-volume workers
- Implement graceful shutdown to allow running jobs to complete
- Monitor database performance and optimize indexes on the jobs table

### State Management and Context
- Pass all necessary context in job arguments rather than relying on global state
- Store job-specific state in job `meta` field for progress tracking
- Use database transactions in workers when operations must succeed together
- Avoid stateful operations that depend on previous job executions
- Use Phoenix PubSub or similar for real-time progress updates
- Keep worker logic idempotent so jobs can safely retry

### Security
- Avoid storing sensitive data in job arguments - use references/IDs instead
- Implement authorization checks within workers for user-specific jobs
- Restrict Oban dashboard access to authorized users only
- Log security-relevant job actions for audit trails

### Unique Jobs
- Use unique jobs to prevent duplicate processing of identical tasks
- Configure `period` to control how long uniqueness is enforced
- Use specific `keys` for uniqueness to narrow the scope appropriately
- Set `states` to control which job states contribute to uniqueness
- Use `replace` options to update existing jobs rather than blocking new ones
- Implement uniqueness at the application level when Oban uniqueness isn't sufficient
- Monitor for jobs being discarded due to uniqueness conflicts

## Anti-Patterns to Avoid
- Avoid putting long-running synchronous operations in jobs without timeout handling
- Never store large payloads in job arguments - use database IDs instead
- Avoid using Oban for real-time operations - it's designed for background processing
- Never skip database migrations when upgrading Oban versions
- Don't create too many queues - consolidate related jobs when possible
- Avoid manually managing job state - let Oban handle the lifecycle
