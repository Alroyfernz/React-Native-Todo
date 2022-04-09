import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Task({item}) {
  return (
    <View style={styles.Body}>
      <Text style={styles.Text}>{item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Body: {
    width: '96%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  Text: {
    color: '#000',
    fontSize: 15,
    fontWeight: '400',
    textTransform: 'capitalize',
  },
});
