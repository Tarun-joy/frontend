import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import colors from '../config/colors';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg'),
  },
];

function MessageScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false); 

  const handleDelete = (message) => {
    setMessages(messages.filter(m => m.id !== message.id));
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              description={item.description}
              image={item.image}
              onPress={() => console.log('Tapped', item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
          onRefresh={() => {
            setMessages(initialMessages);
          }}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}

export default MessageScreen;