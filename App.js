import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './components/form';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.backButton}>Back</Text>
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingTop: 50, // Adjust the top padding as needed
  },
  backButton: {
    padding:40,
    color: '#2071B2',
    alignSelf: 'flex-start',
    position: 'absolute',
    top: 0, // Position the text at the top
    left: 10, // Adjust the left position as needed
  },
});



