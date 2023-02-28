import React from 'react';
import { View, Image, Text, StyleSheet, Button } from 'react-native';

const RideCardMobile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <View style={styles.distanceBetweenPoint}>
          <View style={styles.StartingPoint}>
            <Image
              style={styles.image}
              source={require('../assets/starting-point.png')}
              alt="start position"
            />
            <Text style={styles.texte}>lyon</Text>
          </View>
          <View style={styles.dotContainer}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
          <View style={styles.EndingPoint}>
            <Image
              style={styles.image}
              source={require('../assets/ending-point.png')}
              alt="ending position"
            />
            <Text style={styles.texte}>paris</Text>
          </View>
        </View>
        <View style={styles.Driver}>
          <Image
            style={styles.image}
            source={require('../assets/steering-wheel.png')}
            alt="steering wheel"
          />
          <Text style={styles.texte}>Dave Lopper</Text>
        </View>
        <View style={styles.Passengers}>
          <Image
            style={styles.image}
            source={require('../assets/passengers.png')}
            alt="passengers"
          />
          <Text style={styles.texte}>3</Text>
        </View>
      </View>
      <View>
        <View style={styles.Time}>
          <Image
            style={styles.image}
            source={require('../assets/time.png')}
            alt="time"
          />
          <Text style={styles.texte}>08h45</Text>
        </View>
        <View style={styles.Calendar}>
          <Image
            style={styles.image}
            source={require('../assets/calendar.png')}
            alt="calendar"
          />
          <Text style={styles.texte}>jeu 15</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={require('../assets/driver.png')}
            alt="jean"
          />
        </View>
      </View>
      {/*   <Button style={styles.button} title="détails du trajet" />*/}
    </View>
  );
};

export default RideCardMobile;

const commonStyles = {
  flexDirection: 'row',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '80%',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },

  leftSide: {
    flex: 1,
    justifyContent: 'space-around',
    width: '50%',
    paddingTop: 10,
    paddingLeft: 0,
    paddingBottom: 10,
    paddingRight: 20,
  },

  image: {
    width: 20,
    height: 20,
    marginRight: 5,
  },

  distanceBetweenPoint: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontWeight: 'bold',
    width: '100%',
    color: '#535353',
  },

  StartingPoint: { ...commonStyles },
  EndingPoint: { ...commonStyles },
  Driver: { ...commonStyles },
  Passengers: { ...commonStyles },
  Time: { ...commonStyles },
  Calendar: { ...commonStyles },

  dotContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: 2,
    paddingLeft: 0,
    paddingBottom: 2,
    paddingRight: 5,
    height: 30,
  },

  dot: {
    width: 4,
    height: 4,
    backgroundColor: '#dfdfdf',
    borderRadius: 20,
  },

  button: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50px',
    borderRadius: 25,
    backgroundColor: '#ffa553',
    fontWeight: 600,
  },

  texte: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
