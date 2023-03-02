import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RideCardMobile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
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
        <View style={styles.rightSide}>
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
              style={styles.driverImage}
              source={require('../assets/driver.png')}
              alt="jean"
            />
          </View>
        </View>
      </View>
      <TouchableOpacity activeOpacity={1} style={styles.button}>
        <Text style={{ color: 'white' }}>Réserver votre trajet</Text>
      </TouchableOpacity>
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
    justifyContent: 'space-between',
    flexDirection: 'column',
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

  top: {
    display: 'flex',
    flexDirection: 'row',
    height: '80%',
    width: '100%',
  },

  leftSide: {
    flex: 1,
    justifyContent: 'space-around',
    width: '50%',
    height: '100%',
    paddingTop: 10,
    paddingLeft: 0,
    paddingBottom: 10,
    paddingRight: 20,
  },

  rightSide: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    width: '50%',
    height: '100%',
    paddingTop: 10,
    paddingLeft: 0,
    paddingBottom: 10,
    paddingRight: 20,
  },

  image: {
    width: 20,
    height: 20,
    marginRight: 5,
    resizeMode: 'contain',
  },

  driverImage: {
    width: 40,
    height: 40,
    marginRight: 5,
    resizeMode: 'contain',
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
    marginLeft: 8,
    height: 30,
  },

  dot: {
    width: 4,
    height: 4,
    backgroundColor: '#dfdfdf',
    borderRadius: 20,
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '115%',
    height: '50px',
    borderRadius: 15,
    backgroundColor: '#ffa553',
    fontWeight: 600,
  },

  texte: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
