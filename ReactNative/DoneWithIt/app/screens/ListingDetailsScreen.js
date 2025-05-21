import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import ListItem from '../components/lists/ListItem';
import colors from '../config/colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function ListingDetailsScreen(props) {
  const listing = props.route?.params || {
    title: "Red Jacket for Sale",
    price: "$100",
    image: require('../assets/jacket.jpg'),
    description: "This is a beautiful red jacket in excellent condition.",
    user: {
      name: "Mosh Hamedani",
      listings: 5,
      image: require('../assets/mosh.jpg')
    }
  };
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View>
      <Image source={listing.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>{listing.price}</Text>
        <Text style={styles.description}>{listing.description}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={listing.user.image}
            title={listing.user.name}
            description={`${listing.user.listings} Listings`}
          />
        </View>
      </View>
    </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: colors.medium,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen; 