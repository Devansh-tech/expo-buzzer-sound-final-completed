import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Image
          source={require('../assets/djlogo.png')}
          style={styles.logoImage}
        />
        <Text style={styles.text}>DJ Devansh</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: '#f2efe6',
  },
  text: {
    color: 'black',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -80,
  },
  logoImage: {
    width: 50,
    height: 50,
    margin: 20,
    borderRadius: 25,
  },
});

export default AppHeader;
