# Terraform Best Practices

### Module Design and Structure
- Create small, focused modules that encapsulate single pieces of related infrastructure
- Use a standardized module layout with separate folders for code, examples, sub-modules, and tests
- Define clear module boundaries that respect privilege boundaries and organizational divisions
- Separate long-lived infrastructure (like networks) from short-lived resources (like compute instances)
- Use consistent file naming: `main.tf` for resources, `variables.tf` for inputs, `outputs.tf` for outputs, `provider.tf` for providers
- Document modules thoroughly with README files explaining purpose, usage, and examples

### Resource and Provider Patterns
- Represent each API object as a single Terraform resource for predictable operations
- Align resource schemas closely with underlying API structure for user familiarity
- Support `terraform import` for all resources to enable migration of existing infrastructure
- Pin provider versions in production to prevent unexpected changes from updates
- Use provider aliases when managing resources across multiple regions or accounts

### State Management
- Enable state locking to prevent concurrent modifications
- Encrypt state files at rest and in transit to protect sensitive data
- Use separate state files for different environments (dev, staging, production)
- Implement state file backup strategies to enable recovery from corruption
- Never manually edit state files - use `terraform state` commands instead

### Variable and Output Management
- Define variables with clear descriptions, types, and validation rules
- Use variable validation to catch configuration errors early
- Provide sensible defaults for optional variables to simplify module usage
- Use outputs to expose important resource attributes for consumption by other modules
- Document output values clearly to explain what they represent
- Use `sensitive = true` for outputs containing secrets or credentials
- Structure outputs as objects when exposing multiple related attributes

### Security and Credentials
- Never commit credentials, API keys, or secrets to version control
- Use environment variables or secret management systems for sensitive values
- Implement least privilege IAM policies for Terraform execution
- Use IAM roles instead of access keys when running on cloud platforms
- Rotate credentials regularly and update them in secret management systems
- Enable audit logging for Terraform executions in production
- Use dynamic credentials and short-lived tokens when possible

### Code Organization
- Use consistent directory structure across projects for easier navigation
- Organize resources by logical grouping rather than resource type
- Use meaningful resource and variable names that clearly indicate purpose
- Follow Terraform's official style guide for formatting and naming conventions
- Keep configurations DRY using modules but avoid over-abstraction
- Use `count` and `for_each` appropriately to manage multiple similar resources
- Separate concerns using multiple modules rather than monolithic configurations

### Testing and Validation
- Write tests for modules using tools like Terratest or native Terraform Test
- Test both successful provisioning and proper handling of edge cases
- Validate configurations using `terraform validate` before applying
- Use `terraform plan` to review changes before applying them
- Test modules in isolation before integrating them into larger configurations

### Change Management
- Use `terraform plan` to review changes before applying in any environment
- Implement approval workflows for production infrastructure changes
- Make incremental changes rather than large-scale modifications
- Use feature flags or conditional resource creation for gradual rollouts
- Use workspaces or separate state files to test changes safely
- Implement automated drift detection to identify manual changes

### Performance and Efficiency
- Use data sources to reference existing infrastructure rather than recreating it
- Leverage `depends_on` sparingly - rely on implicit dependencies when possible
- Use `count = 0` or `for_each = {}` to conditionally create resources
- Optimize module calls by using appropriate lifecycle rules
- Use local values to avoid repetitive expressions
- Implement resource targeting (`-target`) carefully and only when necessary
- Use parallel execution where possible but be aware of resource dependencies

### CI/CD Integration
- Automate `terraform plan` in pull requests to surface changes before merge
- Run `terraform apply` only after manual approval in production pipelines
- Use separate credentials for CI/CD with appropriate scope limitations
- Store Terraform state in remote backends accessible to CI/CD systems
- Implement proper error handling and notification for failed applies
- Use Terraform workspaces or separate configurations for environment promotion
- Version lock files in version control to ensure consistent provider versions

### Documentation
- Document module purpose, requirements, and usage in README files
- Include examples demonstrating common use cases
- Document variable purposes, types, and valid values clearly
- Explain outputs and when consumers should use them
- Maintain changelogs for modules to track version changes
- Document provider requirements and version constraints
- Include architecture diagrams for complex infrastructure setups

### Drift Detection and Compliance
- Regularly run `terraform plan` to detect configuration drift
- Investigate and remediate drift promptly to maintain infrastructure as code
- Use policy-as-code tools (e.g. Sentinel, OPA) to enforce compliance rules
- Implement automated scanning for security issues in configurations
- Set up alerts for unexpected infrastructure changes
- Document approved exceptions to standard configurations

## Anti-Patterns to Avoid
- Avoid mixing manual changes with Terraform-managed infrastructure
- Never ignore `terraform plan` output - always review changes carefully
- Don't create overly complex modules that are difficult to understand and maintain
- Avoid hardcoding values that should be parameterized as variables
- Never use Terraform for configuration management - use dedicated tools instead
- Don't create circular dependencies between modules
- Avoid using `terraform destroy` in production without careful review and backups
