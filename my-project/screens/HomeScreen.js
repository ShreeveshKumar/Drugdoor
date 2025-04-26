import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import TopBox from '../components/TopBox';

const AnimatedBox = () => {
  const rotateAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const rotateBox = () => {
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start(() => {
        rotateAnim.setValue(0);
        rotateBox();
      });
    };

    rotateBox();
  }, []);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View
      style={[
        styles.box,
        {
          transform: [{ rotate: spin }],
        },
      ]}
    />
  );
};

const HomeScreen = ({ navigation }) => {
  const sections = ['News', 'Events', 'Trending'];

  return (
    <View style={styles.container}>
      <TopBox sections={sections} />
      <View style={styles.boxContainer}>
        <AnimatedBox />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Button1')}
        >
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Button2')}
        >
          <Text style={styles.buttonText}>Button 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Button3')}
        >
          <Text style={styles.buttonText}>Button 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Button4')}
        >
          <Text style={styles.buttonText}>Button 4</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.alertsButton}
        onPress={() => navigation.navigate('Alerts')}
      >
        <Text style={styles.alertsButtonText}>View Alerts</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  boxContainer: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'tomato',
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  alertsButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  alertsButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

