# Pandas Best Practices

### DataFrame Operations
- Use vectorized operations instead of iterating over rows with loops. Vectorized operations are orders of magnitude faster than Python loops for data processing.
- Avoid using `iterrows()` for data processing as it's extremely slow. Use `apply()`, `map()`, or vectorized operations instead.
- Use `copy()` when creating a new DataFrame from an existing one to avoid unintended modifications to the original data.
- Understand the difference between views and copies to prevent unexpected behavior. Use `.loc[]` or `.iloc[]` for assignments to avoid SettingWithCopyWarning.

### Data Selection and Filtering
- Use `.loc[]` for label-based indexing and `.iloc[]` for position-based indexing. Never use chained indexing like `df[col][row]`.
- Use boolean indexing for filtering data efficiently instead of looping through rows and manually selecting.
- Use `query()` method for complex filtering conditions as it provides more readable code and can be more efficient for large DataFrames.
- Specify `inplace=False` explicitly (or omit it since it's default) to make data transformations explicit and avoid confusing behavior.

### Memory Management
- Specify data types explicitly when reading data to optimize memory usage. Use `dtype` parameter in `read_csv()` or `astype()` after loading.
- Use categorical data types for columns with limited unique values (like categories or statuses) to significantly reduce memory usage.
- Read large files in chunks using `chunksize` parameter when loading data to avoid memory errors.
- Use `del` or `drop()` to remove columns you no longer need to free up memory in long-running processes.

### Missing Data Handling
- Decide on a strategy for missing data before analysis: drop (`dropna()`), fill (`fillna()`), or interpolate (`interpolate()`).
- Check for missing values using `isna()` or `notna()` before performing operations that might fail on NaN values.

### Data Reading and Writing
- Specify column data types when reading CSVs using `dtype` parameter to ensure correct interpretation and better performance.
- Handle encoding properly when reading files with non-ASCII characters using the `encoding` parameter.
- Use `parse_dates` parameter when reading datetime columns to automatically convert them to datetime objects.
- Use compression (`compression='gzip'` or `'zip'`) when writing large files to save disk space.

### Performance Optimization

- Avoid using `append()` in loops to build DataFrames. Instead, collect data in a list and create DataFrame once with `pd.concat()` or from the list directly.
- Use `merge()` with appropriate join types instead of multiple filtering operations when combining datasets.
- Use `groupby()` efficiently by selecting only necessary columns before grouping to improve performance.

### String Operations
- Use the `.str` accessor for string operations on columns instead of `apply()` with Python string methods for better performance.
- Use vectorized string methods like `.str.contains()`, `.str.replace()`, `.str.split()` for text processing.

### Date and Time Operations
- Convert string dates to datetime objects using `pd.to_datetime()` for proper date operations and sorting.
- Be aware of timezone handling and explicitly set or convert timezones when working with timestamp data.
- Use `dt` accessor for datetime operations like `.dt.year`, `.dt.month`, `.dt.day` instead of applying custom functions.

### Data Validation
- Validate data types after loading data to ensure columns have expected types.
- Check for duplicates using `duplicated()` when data uniqueness is important for your analysis.
- Validate value ranges and constraints for critical columns before processing.

### Code Organization
- Chain operations using method chaining for cleaner, more readable code, but balance readability with complexity.
- Create reusable functions for common data transformations rather than repeating code.

## Anti-Patterns to Avoid
- Never iterate over DataFrame rows with `iterrows()` when vectorization is possible
- Avoid using `inplace=True` as it makes debugging harder and doesn't save memory
- Don't use `apply()` when a built-in vectorized function exists
- Never ignore warnings about chained assignment (SettingWithCopyWarning)
- Avoid loading entire large files into memory when chunking is available
- Don't assume data is clean - always validate and inspect your data
