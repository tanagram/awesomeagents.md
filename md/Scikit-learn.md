# Scikit-learn Best Practices

- Split data into training and test sets using `train_test_split` before model training.
- Use cross-validation (`cross_val_score`, `KFold`) to assess model performance reliably.
- Scale features using `StandardScaler` or `MinMaxScaler` before training distance-based algorithms.
- Use `Pipeline` to chain preprocessing steps and model training for cleaner code.
- Use `GridSearchCV` or `RandomizedSearchCV` for hyperparameter tuning.
- Encode categorical variables using `OneHotEncoder` or `LabelEncoder` before model training.
- Handle missing values explicitly using `SimpleImputer` or custom strategies.
- Use stratified sampling for classification tasks to maintain class distribution.
- Save trained models using `joblib` or `pickle` for later use and deployment.
- Use `random_state` parameter consistently for reproducible results.
- Apply dimensionality reduction (PCA, t-SNE) when working with high-dimensional data.
- Use ensemble methods (`RandomForest`, `GradientBoosting`) for improved prediction accuracy.
- Use `sample_weight` parameter when dealing with imbalanced datasets.
- Normalize data when using neural networks or gradient-based algorithms.
