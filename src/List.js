import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import ListItem from './ListItem';
import { Separator } from './Separator';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

class List extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={quotes}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ListItem
              {...item}
              onSwipeFromLeft={() => alert('swiped from left!')}
              onRightPress={() => alert('pressed right!')}
            />
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
      </SafeAreaView>
    );
  }
}

const quotes = [
  { id: '0', text: 'It’s just a flesh wound.' },
  { id: '1', text: 'That is my least vulnerable spot.' },
  {
    id: '2',
    text: 'This building has to be at least…. three times bigger than this!',
  },
  { id: '3', text: 'I am serious. And don’t call me Shirley.' },
  { id: '4', text: 'Yeah, but I shoot with this hand.' },
  { id: '5', text: 'I’m just one stomach flu away from my goal weight.' },
  {
    id: '6',
    text:
      'I’m about to do to you what Limp Bizkit did to music in the late ’90s.',
  },
  {
    id: '7',
    text:
      'Martini. Gin, not vodka. Obviously. Stirred for 10 seconds while glancing at an unopened bottle of vermouth.',
  },
  {
    id: '8',
    text:
      'Greater good?’ I am your wife! I’m the greatest good you’re ever gonna get!',
  },
  {
    id: '9',
    text:
      'I feel comfortable using legal jargon in everyday life. [Someone catcalls her.] I object!',
  },
  {
    id: '10',
    text:
      'We get the warhead and we hold the world ransom for…. One million dollars.',
  },
];

export default List