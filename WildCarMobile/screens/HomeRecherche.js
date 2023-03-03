import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import RideCardMobile from '../components/RideCardMobile';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonPropose}
            onPress={() => navigation.navigate('homeProposer')}
          >
            <Text style={{ color: '#535353', fontWeight: '900' }}>
              je propose
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRecherche}>
            <Text style={{ color: 'white', fontWeight: '900' }}>
              je cherche
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.module}>
          <View style={styles.inputContainer}>
            <Text style={{ color: '#535353' }}>départ</Text>
            <TextInput
              style={styles.input}
              onChangeText={''}
              value={''}
              placeholder=""
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={{ color: '#535353' }}>arrivée</Text>
            <TextInput
              style={styles.input}
              onChangeText={''}
              value={''}
              placeholder=""
              keyboardType="numeric"
            />
          </View>
          <View style={styles.calendarAndPeople}>
            <View style={styles.imageContainerLeft}>
              <Image
                style={styles.iconImage}
                source={require('../assets/calendar-grey.png')}
                alt="calendar"
              />
              <Text style={{ fontSize: 12 }}>aujourd'hui</Text>
            </View>
            <View style={styles.imageContainerRight}>
              <Image
                style={styles.iconImage}
                source={require('../assets/passengers-grey.png')}
                alt="passenger"
              />
              <Text style={{ fontSize: 12 }}>1</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.95} style={styles.button}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
              go !
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 280,
    height: 40,
  },

  buttonPropose: {
    display: 'flex',
    width: '50%',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  buttonRecherche: {
    display: 'flex',
    width: '50%',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#F87A23',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },

  topSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '50%',
    paddingTop: 70,
  },

  module: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: 240,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: 'black',
    // shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
  },

  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottomColor: '#F1F1F1',
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 20,
  },

  calendarAndPeople: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 30,
  },

  iconImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },

  imageContainerLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%',
    borderRightColor: '#F1F1F1',
    borderRightWidth: 1,
  },

  imageContainerRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%',
    paddingLeft: 20,
    paddingRight: 20,
    borderLeftColor: '#F1F1F1',
    borderLeftWidth: 1,
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#FFA553',
    position: 'absolute',
    bottom: 0,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
});
