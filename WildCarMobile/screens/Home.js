import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import RideCardMobile from '../components/RideCardMobile';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <RideCardMobile />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FB9555',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  cardContainer: {
    backgroundColor: 'white',
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
