import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TopContainer}>
        <View style={styles.SearchMenu}>
          <View style={styles.SearchBar}>
            <TextInput
              style={styles.Input}
              placeholder="Enter items"
              placeholderTextColor="rgba(232, 234, 237, 1)"
            />
          </View>
          <TouchableOpacity style={styles.EnterButton}>
            <Text style={{color: 'rgba(192, 192, 192, 1)', fontSize: 14}}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(232, 234, 237, 1)',
    flex: 1,
    alignItems: 'center',
  },
  TopContainer: {
    width: '100%',
    height: '14%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  SearchMenu: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  SearchBar: {
    backgroundColor: '#fff',
    width: '66%',
    borderRadius: 50,
    borderColor: '#C0C0C0',
  },
  Input: {marginLeft: 20, color: '#000'},
  EnterButton: {
    backgroundColor: '#fff',
    width: '15%',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
});
