import React from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import Card from '../components/Card';
import colors from '../config/colors';
import Constants from 'expo-constants';

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg')
  },
  {
    id: 2, 
    title: 'Couch in great condition',
    price: 1000,
    image: require('../assets/couch.jpg')
  }
];

function ListingScreen(props) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          data={listings}
          keyExtractor={listing => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              image={item.image}
              onPress={() => console.log("Listing selected", item)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.light,
    flex: 1,
  },
  container: {
    padding: 20,
    flex: 1,
  }
});

export default ListingScreen;

