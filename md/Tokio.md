# Tokio Best Practices

### Runtime Configuration
- Use the multi-threaded runtime (`#[tokio::main]`) for most applications as it provides better performance for CPU-bound tasks.
- Use the `current_thread` runtime only for single-threaded applications or when you need deterministic task execution order.
- Configure the runtime with appropriate worker threads based on your workload characteristics.
- Use `tokio::spawn` to spawn tasks on the runtime instead of creating threads manually.

### Async/Await Usage
- Use `async/await` syntax for asynchronous operations instead of manually chaining futures.
- Mark functions as `async` when they perform I/O operations or call other async functions.
- Await all futures that you want to execute. Simply creating a future without awaiting it does nothing.
- Use `tokio::join!` or `tokio::try_join!` to run multiple futures concurrently instead of awaiting them sequentially.

### Task Spawning
- Spawn tasks using `tokio::spawn` for independent operations that can run concurrently.
- Ensure spawned tasks are `'static` or use `Arc` to share data between tasks safely.
- Use `JoinHandle` returned by `spawn` to await task completion or propagate errors.
- Use task cancellation with `JoinHandle::abort()` when you need to stop tasks prematurely.
- Handle panics in spawned tasks as they don't propagate to the parent task automatically.

### Synchronization Primitives
- Use `tokio::sync::Mutex` instead of `std::sync::Mutex` in async code to avoid blocking the executor.
- Use `tokio::sync::RwLock` when you have multiple readers and fewer writers for better performance.
- Use channels (`tokio::sync::mpsc` or `tokio::sync::oneshot`) for communication between tasks.
- Use `tokio::sync::Semaphore` for limiting concurrent access to resources.
- Choose the right channel type: `mpsc` for multiple producers, `oneshot` for single-value transfers, `broadcast` for multiple consumers.

### I/O Operations
- Use Tokio's async I/O types (`tokio::fs`, `tokio::net`) instead of std equivalents in async functions.
- Use buffered readers/writers (`BufReader`, `BufWriter`) from `tokio::io` for better performance.
- Use `tokio::io::copy` for efficient data copying between readers and writers.

### Error Handling
- Propagate errors properly using `Result` types and the `?` operator in async functions.
- Use `tokio::try_join!` when you need to run multiple fallible futures concurrently.
- Handle errors in spawned tasks as they won't automatically propagate to parent tasks.

### Timeouts and Delays
- Use `tokio::time::timeout` to add timeouts to operations that might hang.
- Use `tokio::time::sleep` for delays instead of blocking the thread with `std::thread::sleep`.
- Use `tokio::time::interval` for periodic tasks instead of loops with sleeps.
- Not use blocking sleep calls in async code as they block the executor thread.

### Resource Management
- Use connection pools for database connections and external service clients.
- Close resources properly using RAII patterns and Drop implementations.
- Use `tokio::task::spawn_blocking` for CPU-intensive or blocking operations to prevent blocking the async runtime.
- Limit the number of concurrent operations using semaphores or bounded channels to prevent resource exhaustion.

### Performance Optimization
- Use `tokio::task::unconstrained` for tasks that should not be affected by runtime's cooperative scheduling.
- Avoid holding locks across await points as it can lead to deadlocks and poor performance.
- Use `tokio::pin!` macro instead of `Box::pin` for better performance when pinning local futures.

### Testing
- Use `#[tokio::test]` for async tests instead of manually creating a runtime.
- Test timeout behavior using `tokio::time::pause()` and `advance()` for deterministic testing.
- Use `tokio::test` with `flavor = "multi_thread"` when testing concurrent behavior.
- Mock async dependencies using traits and test implementations.

### Channels
- Use `mpsc::channel` with appropriate buffer sizes to prevent unbounded memory growth.
- Close senders explicitly when done sending to signal consumers.
- Use `select!` macro to wait on multiple channels or operations concurrently.

### Signal Handling
- Use `tokio::signal` for handling OS signals in async applications.
- Implement graceful shutdown by listening for shutdown signals and cleaning up resources.

### Common Patterns
- Use `Arc` for shared state across tasks instead of global variables.
- Use `watch` channels for broadcasting configuration updates to multiple tasks.
- Implement the actor pattern using channels for message passing between concurrent entities.
- Use `Notify` or `Condvar` for waking tasks on specific conditions.

### Security
- Validate all input in network applications to prevent injection attacks and protocol violations.
- Implement rate limiting to prevent resource exhaustion attacks.
- Use TLS for network communication using tokio-rustls or tokio-native-tls.
- Not expose internal errors to clients that could leak sensitive information.

## Anti-Patterns to Avoid
- Never use `std::sync::Mutex` in async code - use `tokio::sync::Mutex` instead
- Avoid blocking operations in async functions - use `spawn_blocking` instead
- Don't create too many tasks - use worker pools or bounded concurrency
- Never ignore the JoinHandle from spawn - tasks might panic silently
- Avoid holding locks across .await points - it can cause deadlocks
- Don't use unbounded channels without backpressure mechanisms
- Never use busy-waiting loops - use proper async primitives
