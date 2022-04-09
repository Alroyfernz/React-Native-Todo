import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import Task from './component/Task';

export default function App() {
  const [items, setItems] = useState([]); //auxillary array to store all items
  const [groceryItem, setGroceryItem] = useState('');

  const [filteredArray, setFilteredArray] = useState(items); //array to store filtered result
  const handleSearch = () => {
    //calculating the resultant of the search
    const filter = items.filter(item => !item.search(groceryItem)); //using an auxillary array items to store global state which is not lost while filtering
    setFilteredArray(filter); //storing the filtered result into an array to display
  };
  useEffect(() => {
    handleSearch();
  }, [groceryItem]);
  const handleEnter = useCallback(() => {
    if (groceryItem == '') {
      //if user passes a blank option warn him that we cannot add a blank item to list.
      alert('Input cannot be blank!');
      return;
    }
    setItems([groceryItem, ...items]);
    setFilteredArray(items);
    setGroceryItem('');
  }, [groceryItem, items]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TopContainer}>
        <View style={styles.SearchMenu}>
          <View style={styles.SearchBar}>
            <TextInput
              style={styles.Input}
              placeholder="Enter items"
              value={groceryItem}
              placeholderTextColor="rgba(26, 26, 26, 1)"
              onChangeText={setGroceryItem}
            />
          </View>
          <TouchableOpacity style={styles.EnterButton} onPress={handleEnter}>
            <Text style={{color: 'rgba(192, 192, 192, 1)', fontSize: 14}}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{padding: 15}}>
        {filteredArray.length !== 0 && (
          <Text style={styles.HeadingText}>Today's Grocery List</Text>
        )}

        <ScrollView style={{marginTop: 10}}>
          {filteredArray.map((item, idx) => {
            return <Task key={idx} item={item} />;
          })}
          {filteredArray.length == 0 && items.length !== 0 && (
            <Text style={[styles.EmptyAlert, styles.EmptySearchAlert]}>
              Item not found.Please add it to your list...
            </Text>
          )}
          {items.length == 0 && (
            <Text style={styles.EmptyAlert}>
              Please add items to your list...
            </Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(232, 234, 237, 1)',
    flex: 1,
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
    width: '70%',
    borderRadius: 50,
    borderColor: '#C0C0C0',
    elevation: 3,
  },
  EmptySearchAlert: {fontSize: 19},
  Input: {marginLeft: 20, color: '#000'},
  EnterButton: {
    elevation: 3,
    backgroundColor: '#fff',
    width: '15%',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
  EmptyAlert: {
    color: '#000',
    textAlign: 'center',
    fontSize: 20,
    textTransform: 'capitalize',
    marginTop: 30,
    fontWeight: '500',
  },
  HeadingText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'flex-start',
    padding: 10,
    marginTop: 10,
  },
});
