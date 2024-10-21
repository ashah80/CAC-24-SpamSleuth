import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report
import shap

# Load dataset
df = pd.read_csv("emails.csv")

# Display the first few rows (optional, for debugging)
print(df.head())

# Plot the value counts for the 'spam' column
df['spam'].value_counts().plot.bar()
plt.title('Spam vs Ham Count')
plt.show()

# Feature extraction using TF-IDF
tfidf = TfidfVectorizer(sublinear_tf=True, min_df=5, norm='l2', ngram_range=(1, 2), stop_words='english')
features = tfidf.fit_transform(df['text']).toarray()  # Convert to array for compatibility
X = pd.DataFrame(data=features)  # Create DataFrame for consistency in data handling
Y = df['spam'].astype(int)  # Ensure 'spam' column is of integer type

# Train-test split (stratify to maintain spam/ham proportion)
X_train, X_test, y_train, y_test = train_test_split(X, Y, random_state=0, stratify=Y)

# Train the model using RandomForestClassifier
clf = RandomForestClassifier(n_estimators=100, random_state=42).fit(X_train, y_train)

# Predict on the test set
y_pred = clf.predict(X_test)

# Print the classification report
print(classification_report(y_test, y_pred))

# SHAP explanation using TreeExplainer (faster than KernelExplainer for tree-based models)
explainer = shap.TreeExplainer(clf)

# Compute SHAP values for the test data
shap_values = explainer.shap_values(X_test)

# Initialize SHAP visualization
shap.initjs()

# Visualize SHAP values for the first test sample (index 0) for the 'spam' class (1)
shap.plots.text(shap_values[1][0])

# Example: Classify a new email from user input
user_input = input("Enter an email text to classify: ")
user_features = tfidf.transform([user_input])  # Transform user input to match TF-IDF format

# Predict the class of the user input
user_prediction = clf.predict(user_features)
print(f'The predicted class for the input email is: {"Spam" if user_prediction[0] == 1 else "Ham"}')

# Explain the prediction for the user input using SHAP
user_shap_values = explainer.shap_values(user_features)
shap.plots.text(user_shap_values[1][0])  # Display SHAP explanation for 'spam' class
