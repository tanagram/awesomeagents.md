# Sentry Best Practices

### Initialization and Configuration
- Initialize Sentry SDK at application startup before other imports to capture all errors
- Set appropriate `environment` values (development, staging, production) to segregate error tracking
- Configure `traces_sample_rate` to balance performance monitoring coverage with data volume
- Set `send_default_pii=False` in production to avoid accidentally capturing sensitive user data
- Configure `before_send` hooks to filter or modify events before transmission to Sentry
- Use `ignore_errors` to filter out known or expected errors that don't require attention

### Error Tracking
- Add custom tags using `set_tag()` to categorize and filter errors in Sentry dashboard
- Set user context with `set_user()` to track which users experience specific errors
- Use `set_context()` to add custom structured data relevant to error investigation
- Capture breadcrumbs using `add_breadcrumb()` to track events leading up to errors
- Use `capture_exception()` for handled exceptions that should be logged to Sentry
- Use `capture_message()` for important log messages that need tracking but aren't exceptions

### AI and LLM Integration
- Use Sentry's AI integrations for monitoring LLM requests with frameworks like Anthropic and OpenAI
- Enable automatic span creation for AI operations to track token usage and latency
- Set `gen_ai.request.messages` attribute to capture conversation context in AI spans
- Use `gen_ai.request.available_tools` to track which tools are available to AI agents
- Capture model configuration parameters (temperature, max_tokens) in span attributes for debugging
- Track AI agent invocations using `gen_ai.invoke_agent` span operations
- Monitor AI agent performance metrics including success rate, token consumption, and execution time

### Integration with Frameworks
- Enable framework-specific integrations (Django, Flask, FastAPI) for automatic instrumentation
- Use async-compatible SDK features when working with async frameworks
- Configure middleware ordering to ensure Sentry captures errors before other error handlers
- Implement proper error boundaries in frontend frameworks to capture and report errors
- Use Sentry's logging integration to automatically capture log messages as events
- Enable breadcrumbs for framework-specific events (HTTP requests, database queries)

### Release and Deployment Tracking
- Set release version using `release` parameter to track which code version caused errors
- Use commit SHAs or semantic versions for release identifiers for accurate tracking
- Configure deploy notifications to track when new releases are deployed
- Use Sentry's release health features to monitor crash rates per release
- Tag releases with environment information to separate production from staging issues

### Data Management
- Use `beforeBreadcrumb` callback to sanitize sensitive data from breadcrumbs
- Configure `denyUrls` to prevent capturing errors from third-party scripts
- Set appropriate data retention policies based on compliance requirements
- Implement rate limiting using `max_breadcrumbs` to prevent excessive data capture
- Use fingerprinting to group similar errors together for easier triage

### Testing and Development
- Use separate Sentry projects or environments for development and testing
- Disable Sentry or use a test environment DSN during local development
- Use Sentry's test events feature to verify configuration without affecting metrics
- Verify breadcrumbs and context are captured correctly during testing
- Test custom `before_send` hooks to ensure they filter correctly

### Security
- Never include API keys, passwords, or tokens in error messages or context
- Use environment variables for DSN rather than hardcoding in source code
- Review and sanitize data captured in custom contexts before transmission

## Anti-Patterns to Avoid
- Avoid capturing too many events - use sampling and filtering to focus on important errors
- Never log sensitive data (passwords, tokens, PII) in error messages or custom contexts
- Don't ignore Sentry errors - monitor and resolve issues to prevent error fatigue
- Never disable Sentry entirely in production - use sampling if volume is too high
- Don't use a single Sentry project for multiple applications - separate for clarity
