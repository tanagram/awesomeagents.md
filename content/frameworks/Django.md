# Django Best Practices

### Security
- Never enable DEBUG mode in production. Set `DEBUG = False` to prevent sensitive information from being displayed. Django will expose detailed error pages with sensitive data when DEBUG is True.
- Keep SECRET_KEY confidential and use a large, random value. Load it from environment variables or external files rather than hardcoding it in source control. The SECRET_KEY is used for cryptographic signing and must remain secret.
- Configure ALLOWED_HOSTS when DEBUG is False to prevent HTTP Host header attacks. This should be a list of valid host/domain names for your application.
- Use HTTPS in production and configure security settings accordingly. Set `SECURE_SSL_REDIRECT = True`, `SESSION_COOKIE_SECURE = True`, and `CSRF_COOKIE_SECURE = True`.
- Validate and sanitize all user input before rendering in templates or storing in the database. Use Django's built-in template escaping and form validation to prevent XSS and SQL injection attacks.
- Enable CSRF protection for all POST requests. Never use `@csrf_exempt` decorator without a clear security justification and understanding of the risks.
- Implement proper authentication and authorization for all views that handle sensitive data. Use Django's built-in authentication system and permission decorators.

### Models and Database
- Use Django's ORM instead of raw SQL queries whenever possible to prevent SQL injection vulnerabilities and maintain database abstraction.
- Add indexes to database fields that are frequently queried or used in filters. Use `db_index=True` in model field definitions.
- Use `select_related()` and `prefetch_related()` to optimize database queries and prevent N+1 query problems.
- Define `__str__()` method for all models to provide human-readable representations in the admin interface and debugging.
- Use database transactions for operations that involve multiple database writes to ensure data consistency.

### Views and URL Configuration
- Use Django's class-based views or function-based views consistently throughout your project. Choose the approach that best fits your team and project complexity.
- Keep views focused and single-purpose. If a view is becoming complex, break it down into smaller helper functions or use mixins for class-based views.
- Name all URL patterns to enable reverse URL resolution and avoid hardcoding URLs in templates and views.
- Use appropriate HTTP methods (GET, POST, PUT, DELETE) for their intended purposes and never perform data modifications in GET requests.

### Templates
- Rely on Django's automatic HTML escaping to prevent XSS attacks. Only use `safe` filter or `mark_safe()` when you have verified the content is safe.
- Use Django's template inheritance to reduce code duplication and maintain consistent layouts across your application.
- Use the `{% url %}` template tag instead of hardcoding URLs to ensure your templates remain maintainable when URL patterns change.

### Configuration and Deployment
- Run `python manage.py check --deploy` before deploying to production. This command validates your settings against deployment best practices.
- Use environment-specific settings files to separate development and production configurations. Use environment variables for sensitive configuration.
- Migrate from `manage.py runserver` to a production WSGI/ASGI server like Gunicorn or uWSGI for production deployments.
- Implement logging configuration for production environments to track errors and monitor application behavior.
- Configure static file serving for production using a CDN or web server like Nginx rather than Django's development server.

### Code Quality and Style
- Follow Django's coding style as outlined in the official documentation and enforced by tools like `flake8` and `black`.
- Use Django's migration system for all database schema changes to ensure changes are tracked and can be applied consistently across environments.
- Write tests for models, views, and forms using Django's testing framework to ensure application reliability.
- Use pre-commit hooks to catch common issues before code review, including style violations and potential security issues.

## Anti-Patterns to Avoid
- Never store sensitive data in version control
- Avoid using signals when simple method calls or model methods would suffice
- Don't bypass Django's ORM with raw SQL unless absolutely necessary for performance
- Never trust user input - always validate on the server side
- Avoid circular imports by properly organizing your Django apps
