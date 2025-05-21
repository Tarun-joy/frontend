import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import colors from '../config/colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from '../components/Icon';

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary
    }
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary
    }
  }
];

function MyAccountScreen(props) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen style={styles.screen}>
        <View style={styles.section}>
          <ListItem 
            title="Mosh Hamedani"
            description="programmingwithmosh@gmail.com"
            image={require('../assets/mosh.jpg')}
          />
        </View>

        <View style={styles.separator} />

        <View style={styles.section}>
          <FlatList 
            data={menuItems}
            keyExtractor={menuItem => menuItem.title}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({ item }) => 
              <ListItem 
                title={item.title}
                IconComponent={
                  <Icon 
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
              />
            }
          />
        </View>

        <View style={styles.separator} />

        <View style={styles.section}>
          <ListItem 
            title="Log Out"
            IconComponent={
              <Icon 
                name="logout"
                backgroundColor="#ffe66d"
              />
            }
          />
        </View>
      </Screen>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  section: {
    backgroundColor: colors.white,
    paddingVertical: 20,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.light,
  }
});

export default MyAccountScreen;

