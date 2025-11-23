# Qt Framework Best Practices

### Memory Management
- Understand Qt's parent-child ownership model where QObject children are automatically deleted when the parent is destroyed.
- Set parent objects for heap-allocated QObjects to leverage automatic memory management.
- Use smart pointers (`QSharedPointer`, `QScopedPointer`) for QObjects that don't have parents.
- Never delete an object that has a parent - let the parent handle it.

### Signals and Slots
- Use new signal-slot syntax (`connect(sender, &Sender::signal, receiver, &Receiver::slot)`) for compile-time checking.
- Check return value of `connect()` calls to ensure connections were successful.
- Use lambda functions for simple slot implementations instead of creating member functions.
- Use `Qt::QueuedConnection` for cross-thread signal-slot connections.

### Threading
- Never update GUI from worker threads - use signals or `QMetaObject::invokeMethod` instead.
- Use QThread properly by moving QObjects to threads rather than subclassing QThread.
- Use thread pools (`QThreadPool`) for short-lived parallel tasks.
- Protect shared data with mutexes (`QMutex`) or use thread-safe Qt containers.
- Use `QFutureWatcher` and `QtConcurrent` for easier asynchronous programming.

### Event System
- Prefer signals and slots over event handlers for inter-object communication.
- Call base class implementation when reimplementing event handlers.
- Use event filters for monitoring or modifying events before they reach target objects.
- Return appropriate values from event handlers to indicate whether the event was handled.

### GUI Development
- Use layouts (`QVBoxLayout`, `QHBoxLayout`, `QGridLayout`) instead of fixed positioning for responsive UIs.
- Use Qt Designer or QML for complex UI layouts to speed up development.
- Call `update()` or `repaint()` to trigger widget repainting after state changes.
- Use model-view architecture (`QAbstractItemModel`, `QListView`, `QTableView`) for data-driven UIs.
- Implement custom painting in `paintEvent()` using `QPainter` for custom widgets.

### Resource Management
- Use Qt Resource System (`.qrc` files) for embedding resources like images, translations, and data files.
- Compile resources into the application to ensure they're always available.
- Use resource aliases to organize resources logically and enable easy switching.

### Internationalization
- Use `tr()` for all user-visible strings to enable translation.
- Use Qt Linguist for managing translations and creating `.qm` files.
- Provide context in `tr()` calls for better translation accuracy.

### String Handling
- Use QString for all text operations instead of `std::string` in Qt applications.
- Use `arg()` method for string formatting instead of string concatenation.
- Be aware of implicit sharing in QString and other Qt containers for performance.
- Use `QStringLiteral` for string literals to avoid runtime allocations.

### Container Classes
- Use Qt containers (`QList`, `QVector`, `QMap`, `QHash`) for better integration with Qt APIs.
- Understand implicit sharing in Qt containers to avoid unnecessary copies.
- Use `const` references when passing Qt containers to avoid detaching.
- Use `reserve()` for containers when the size is known to avoid reallocations.

### Properties
- Use Q_PROPERTY macro for creating properties accessible from QML and property system.
- Implement getter, setter, and notify signal for mutable properties.
- Use properties instead of public member variables for better encapsulation.

### Meta-Object System
- Include Q_OBJECT macro in classes that use signals, slots, or properties.
- Use Q_INVOKABLE for methods that need to be called from QML or meta-object system.
- Use Q_ENUM for enumerations that need to be accessible from QML or meta-object system.

### Plugins and Extensions
- Use Qt Plugin System for creating extensible applications.
- Define plugin interfaces using pure virtual classes with `Q_DECLARE_INTERFACE` macro.

### Performance
- Avoid detaching Qt's implicitly shared classes by using const references.
- Use `QStringBuilder` or `arg()` instead of repeated string concatenation.
- Profile your application using Qt Creator's profiling tools.

### Database Access
- Use Qt SQL module for database operations with proper connection management.
- Use prepared statements to prevent SQL injection and improve performance.
- Handle database errors properly and provide meaningful error messages.
- Use `QSqlQuery::prepare()` and `bindValue()` for parameterized queries.

### Testing
- Write unit tests using Qt Test framework for business logic and utilities.
- Test signal emissions using `QSignalSpy` to verify object behavior.
- Use data-driven tests for testing multiple scenarios with `QFETCH` and `QCOMPARE`.

### Error Handling
- Use return values and status codes for error reporting rather than exceptions.
- Emit signals to notify about errors in asynchronous operations.
- Handle errors from Qt APIs and provide appropriate user feedback.

### Build System

- Run moc (Meta-Object Compiler) on headers containing `Q_OBJECT` macro.
- Use Qt modules selectively to reduce application size and dependencies.

## Anti-Patterns to Avoid
- Never access GUI widgets from worker threads
- Avoid calling blocking operations in the GUI thread
- Don't forget Q_OBJECT macro in classes using signals/slots
- Never manually delete objects with parents
- Avoid using raw pointers for QObjects that don't have parents
- Don't connect to deleted objects - use automatic disconnection or check sender validity
- Never mix Qt containers with std algorithms expecting iterators to remain valid after container modification
