import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import classification_report
from lime.lime_text import LimeTextExplainer

# Load data
df = pd.read_csv("emails.csv")

# Display the first few rows (optional, for debugging)
# print(df.head())

# Plot the value counts for the 'spam' column
# df['spam'].value_counts().plot.bar()
# plt.show()

# Feature extraction
tfidf = TfidfVectorizer(sublinear_tf=True, min_df=5, norm='l2', ngram_range=(1, 2), stop_words='english')
features = tfidf.fit_transform(df['text']).toarray()
X = pd.DataFrame(data=features)
Y = df['spam'].astype(str)

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, Y, random_state=0)

# Model training
clf = MultinomialNB().fit(X_train, y_train)

# Predictions
y_pred = clf.predict(X_test)

# Classification report
print(classification_report(y_test, y_pred))

# LIME explanation
class_names = ['0', '1']
explainer = LimeTextExplainer(class_names=class_names)

def predict_and_explain(user_input):
    # Transform the user input using the same TfidfVectorizer
    transformed_input = tfidf.transform([user_input])
    
    # Predict the probability
    probability = clf.predict_proba(transformed_input)[0, 1]
    prediction = clf.predict(transformed_input)[0]
    
    print(f'Predicted class: {prediction} (1 = spam, 0 = not spam)')
    print(f'Probability of being spam: {probability}')

# Usage
user_input = input("Enter an email text to check if it's spam: ")
predict_and_explain(user_input)
