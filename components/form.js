import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import EmojiSlider from './EmojiSlider';
const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleNumberChange = (text) => {
    setNumber(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleCommentChange = (text) => {
    setComment(text);
  };

  const handleSubmit = () => {
    // Perform validation based on field types
    const isNameValid = name.trim().length > 0;
    const isNumberValid = /^\+?\d{1,}$/g.test(number.trim());
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    // Set field highlighting based on validation
    setIsButtonPressed(true);
    setIsLoading(true);

    if (!isNameValid || !isNumberValid || !isEmailValid) {
      setTimeout(() => {
        setIsLoading(false);
        setIsButtonPressed(false);
      }, 2000);
      return;
    }

    // Handle form submission logic here
    setTimeout(() => {
      setIsLoading(false);
      setIsButtonPressed(false);

      // Reset form fields
      setName('');
      setNumber('');
      setEmail('');
      setComment('');
    }, 2000);
  };

  const handleButtonPress = () => {
    setIsButtonPressed(true);
  };

  const handleButtonRelease = () => {
    setIsButtonPressed(false);
  };

  const isFormValid = name !== '' && number !== '' && email !== '';

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.viewContainer}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={[
              styles.input,
              isButtonPressed && name.trim().length === 0 && styles.invalidInput,
            ]}
            placeholder="Widle Studio"
            placeholderTextColor="#777777"
            value={name}
            onChangeText={handleNameChange}
          />
        </View>
        <View style={styles.viewContainer}>
          <Text style={styles.label}>Contact Number:</Text>
          <TextInput
            style={[
              styles.input,
              isButtonPressed && !/^\+?\d{1,}$/g.test(number.trim()) && styles.invalidInput,
            ]}
            placeholder="+91 00000 00000"
            placeholderTextColor="#777777"
            value={number}
            onChangeText={handleNumberChange}
          />
        </View>
      </View>
      <View style={[styles.row, styles.singleViewRow]}>
        <View style={[styles.viewContainer, styles.singleViewContainer]}>
          <Text style={styles.label}>Email Address:</Text>
          <TextInput
            style={[
              styles.input,
              isButtonPressed && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) && styles.invalidInput,
            ]}
            placeholder="xyz123@gmail.com"
            placeholderTextColor="#777777"
            value={email}
            onChangeText={handleEmailChange}
          />
        </View>
      </View>
      <EmojiSlider></EmojiSlider>
      <View style={styles.row}>
        <View style={[styles.viewContainer, styles.fullWidthContainer]}>
          <Text style={styles.label}>Comment:</Text>
          <TextInput
            style={styles.commentInput}
            placeholder="Add your comments..."
            placeholderTextColor="#777777"
            value={comment}
            onChangeText={handleCommentChange}
            multiline
            numberOfLines={4}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSubmit}
          onPressIn={handleButtonPress}
          onPressOut={handleButtonRelease}
          activeOpacity={0.6}
          style={[
            styles.submitButton,
            isButtonPressed && !isFormValid && styles.submitButtonDisabled,
            isButtonPressed && isFormValid && styles.submitButtonPressed,
          ]}
          disabled={!isFormValid}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#FFFFFF" />
          ) : (
            <Text style={styles.submitButtonText}>Submit</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  singleViewRow: {
    justifyContent: 'center',
  },
  viewContainer: {
    width: '48%',
    marginBottom: 10,
  },
  singleViewContainer: {
    width: '100%',
  },
  fullWidthContainer: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2071B2',
  },
  input: {
    borderWidth: 1,
    borderColor: '#105955',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    color: '#105955',
  },
  invalidInput: {
    borderColor: 'red',
  },
  commentInput: {
    borderWidth: 1,
    borderColor: '#105955',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    color: '#105955',
    height: 100,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: '#20B2AA',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  submitButtonPressed: {
    backgroundColor: '#105955',
  },
  submitButtonDisabled: {
    backgroundColor: '#DDDDDD',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Form;
