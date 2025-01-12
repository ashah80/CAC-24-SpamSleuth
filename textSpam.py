import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

# Reading the data
df = pd.read_csv("texts.csv",encoding='latin-1')

df = df.drop(['Unnamed: 2','Unnamed: 3','Unnamed: 4'],axis=1)
df = df.rename(columns={'v1':'label','v2':'Text'})
df['label_enc'] = df['label'].map({'ham':0,'spam':1})
# print(df.head())

# sns.countplot(x=df['label'])
# plt.show()

# Find average number of tokens in all sentences
avg_words_len=round(sum([len(i.split()) for i in df['Text']])/len(df['Text']))
print(avg_words_len)

# Finding Total no of unique words in corpus
s = set()
for sent in df['Text']:
    for word in sent.split():
        s.add(word)
total_words_length=len(s)
print(total_words_length)

# Splitting data for Training and testing
from sklearn.model_selection import train_test_split

X, y = np.asanyarray(df['Text']), np.asanyarray(df['label_enc'])
new_df = pd.DataFrame({'Text': X, 'label': y})
X_train, X_test, y_train, y_test = train_test_split(
    new_df['Text'], new_df['label'], test_size=0.2, random_state=42)
print(X_train.shape, y_train.shape, X_test.shape, y_test.shape)

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import classification_report,accuracy_score

tfidf_vec = TfidfVectorizer().fit(X_train)
X_train_vec,X_test_vec = tfidf_vec.transform(X_train),tfidf_vec.transform(X_test)

baseline_model = MultinomialNB()
baseline_model.fit(X_train_vec,y_train)

from tensorflow.keras.layers import TextVectorization
from sklearn.metrics import precision_score, recall_score, f1_score

def compile_model(model):
    '''
    simply compile the model with adam optimzer
    '''
    model.compile(optimizer=keras.optimizers.Adam(),
                loss=keras.losses.BinaryCrossentropy(),
                metrics=['accuracy'])

def evaluate_model(model, X, y):
    '''
    evaluate the model and returns accuracy,
    precision, recall and f1-score
    '''
    y_preds = np.round(model.predict(X))
    accuracy = accuracy_score(y, y_preds)
    precision = precision_score(y, y_preds)
    recall = recall_score(y, y_preds)
    f1 = f1_score(y, y_preds)

    model_results_dict = {'accuracy': accuracy,
                        'precision': precision,
                        'recall': recall,
                        'f1-score': f1}

    return model_results_dict

def fit_model(model, epochs, X_train=X_train, y_train=y_train,
            X_test=X_test, y_test=y_test):
    '''
    fit the model with given epochs, train
    and test data
    '''
    # Check if validation data is provided
    if X_test is not None and y_test is not None:
        history = model.fit(X_train,
                        y_train,
                        epochs=epochs,
                        validation_data=(X_test, y_test))
    else:
        # Handle case where validation data is not provided
        history = model.fit(X_train,
                        y_train,
                        epochs=epochs)
    return history

MAXTOKENS = total_words_length
OUTPUTLEN = avg_words_len

text_vec = TextVectorization(
    max_tokens=MAXTOKENS,
    standardize='lower_and_strip_punctuation',
    output_mode='int',
    output_sequence_length=OUTPUTLEN
)
text_vec.adapt(X_train)

embedding_layer = layers.Embedding(
    input_dim=MAXTOKENS,
    output_dim=128,
    embeddings_initializer='uniform',
    input_length=OUTPUTLEN
)

input_layer = layers.Input(shape=(1,), dtype=tf.string)
vec_layer = text_vec(input_layer)
embedding_layer_model = embedding_layer(vec_layer)
bi_lstm = layers.Bidirectional(layers.LSTM(
    64, activation='tanh', return_sequences=True))(embedding_layer_model)
lstm = layers.Bidirectional(layers.LSTM(64))(bi_lstm)
flatten = layers.Flatten()(lstm)
dropout = layers.Dropout(.1)(flatten)
x = layers.Dense(32, activation='relu')(dropout)
output_layer = layers.Dense(1, activation='sigmoid')(x)
model_2 = keras.Model(input_layer, output_layer)

compile_model(model_2) # compile the model
history_2 = fit_model(model_2, epochs=5, X_train=X_train, y_train=y_train, X_test=X_test, y_test=y_test) # fit the model

import tensorflow_hub as hub
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

# Disable XLA compilation
tf.config.optimizer.set_jit(False)

# model with functional api
input_layer = keras.Input(shape=[], dtype=tf.string)

# universal-sentence-encoder layer
use_layer = hub.KerasLayer("https://tfhub.dev/google/universal-sentence-encoder/4",
                        trainable=False,
                        input_shape=[],
                        dtype=tf.string,
                        name='USE')

# Create a Lambda layer to wrap the use_layer call
x = layers.Lambda(lambda x: use_layer(x), output_shape=(512,))(input_layer)

x = layers.Dropout(0.2)(x)
x = layers.Dense(64, activation=keras.activations.relu)(x)
output_layer = layers.Dense(1, activation=keras.activations.sigmoid)(x)

model_3 = keras.Model(input_layer, output_layer)

compile_model(model_3)
history_3 = fit_model(model_3, epochs=5)

baseline_model_results = evaluate_model(baseline_model, X_test_vec, y_test)
model_2_results = evaluate_model(model_2, X_test, y_test)
model_3_results = evaluate_model(model_3, X_test, y_test)

total_results = pd.DataFrame({'MultinomialNB Model':baseline_model_results,
                            'Bidirectional-LSTM Model':model_2_results,
                            'USE-Transfer learning Model':model_3_results}).transpose()

print(total_results)

def predict_spam(text, baseline_model, model_2, model_3, tfidf_vec):
    """
    Predicts whether input text is spam using multiple models and returns their predictions and confidence scores.
    
    Parameters:
    text (str): The input text message to classify
    baseline_model: Trained MultinomialNB model
    model_2: Bidirectional-LSTM model
    model_3: USE-Transfer learning model
    tfidf_vec: Fitted TfidfVectorizer
    
    Returns:
    dict: Dictionary containing predictions and confidence scores for each model
    """
    results = {}
    
    # Ensure text is a string
    if isinstance(text, list):
        text = text[0]
    
    # Debug information
    print("\nModel Input Shapes:")
    print(f"Model 2 input shape: {model_2.input_shape}")
    print(f"Model 3 input shape: {model_3.input_shape}")
    
    # Baseline Model (MultinomialNB) prediction
    text_vec_baseline = tfidf_vec.transform([text])
    baseline_pred = baseline_model.predict_proba(text_vec_baseline)[0]
    results['MultinomialNB'] = {
        'is_spam': bool(baseline_pred[1] > 0.5),
        'confidence': float(max(baseline_pred) * 100)
    }
    
    # For models expecting string input, create a numpy array first
    text_array = np.array([text])
    
    # Bidirectional-LSTM Model prediction
    model2_pred = float(model_2(text_array, training=False)[0])
    results['Bidirectional-LSTM'] = {
        'is_spam': bool(model2_pred > 0.5),
        'confidence': float(abs(model2_pred - 0.5) * 2 * 100)
    }
    
    # USE-Transfer Learning Model prediction
    model3_pred = float(model_3(text_array, training=False)[0])
    results['USE-Transfer'] = {
        'is_spam': bool(model3_pred > 0.5),
        'confidence': float(abs(model3_pred - 0.5) * 2 * 100)
    }
    print(results)
    return results

def print_spam_predictions(text):
    """
    Prints formatted spam predictions for a given text input.
    
    Parameters:
    text (str): The input text message to classify
    """
    predictions = predict_spam(text, baseline_model, model_2, model_3, tfidf_vec)
    
    print(f"\nAnalyzing text: '{text}'\n")
    print("Results:")
    print("-" * 50)
    
    for model_name, result in predictions.items():
        status = "SPAM" if result['is_spam'] else "NOT SPAM"
        confidence = result['confidence']
        print(f"{model_name:20} | {status:8} | Confidence: {confidence:.1f}%")
    print("-" * 50)

# [Previous code remains exactly the same until the print_spam_predictions function]

def return_text_predictions(text):
    """
    Returns an aggregated spam prediction based on all models' outputs.
    Returns a tuple of the prediction (True for spam, False for ham) and the highest confidence percentage.
    
    Parameters:
    text (str): The input text message to classify
    
    Returns:
    tuple: (is_spam, confidence) where:
        - is_spam is a boolean (True for spam, False for ham)
        - confidence is a float representing the highest confidence percentage
    """
    predictions = predict_spam(text, baseline_model, model_2, model_3, tfidf_vec)
    
    # Track spam predictions and confidence levels
    spam_predictions = []
    ham_predictions = []
    
    # Analyze each model's prediction
    for result in predictions.values():
        if result['is_spam']:
            spam_predictions.append(result['confidence'])
        else:
            ham_predictions.append(result['confidence'])
    
    # If any model predicted spam, return True and the highest confidence
    if spam_predictions:
        return "spam", (str(round(max(spam_predictions), 2)) + "%")
    
    # If no spam predictions, return False and the highest confidence
    return "ham", (str(round(max(ham_predictions), 2)) + "%")

# Main loop to demonstrate both functions
# while True:
#     message = input("Input a message to be classified: ")
#     if message == "break":
#         break
        
#     # Show detailed predictions
#     isSpam, confidence = return_text_predictions(message)
    
#     print(f"Spam: {isSpam} + Confidence: {confidence}")