import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import AppHeader from './components/AppHeader';
export default class App extends Component {
  constructor() {
    super();
    this.soundFiles = [
      'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-music-bed_z1y16Brd_NWM.mp3',
      'http://soundbible.com/mp3/labrador-barking-daniel_simon.mp3',
      'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-underscore-music-bed_MJhF2rB__NWM.mp3',
      'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/bright-and-breezy-music-bed_MJA8hSHO_NWM.mp3',
    ];

  this.buttonColors= ["yellow","pink","#d4fc65", "#f569f0"]
  }
  async playSound(url) {
    try {
      await Audio.setIsEnabledAsync(true);
      var playbackObject = await Audio.Sound.createAsync(
        { uri: url },
        { shouldPlay: true }
      );
      // Your sound is playing!
    } catch (error) {
      console.log();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        <View style={styles.soundButtonContainer}>
          <TouchableOpacity
                style={[styles.soundButton1,{ backgroundColor: this.buttonColors[0]}]}
                onPress={() => {
                  this.playSound(this.soundFiles[0]);
                }}>
                <Text>Sound 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
                style={[styles.soundButton2,{ backgroundColor: this.buttonColors[1]}]}
                onPress={() => {
                  this.playSound(this.soundFiles[1]);
                }}>
                <Text>Sound 2</Text>
          </TouchableOpacity>
          <TouchableOpacity
                style={[styles.soundButton3,{ backgroundColor: this.buttonColors[2]}]}
                onPress={() => {
                  this.playSound(this.soundFiles[2]);
                }}>
                <Text>Sound 3</Text>
          </TouchableOpacity>
          <TouchableOpacity
                style={[styles.soundButton4,{ backgroundColor: this.buttonColors[3]}]}
                onPress={() => {
                  this.playSound(this.soundFiles[3]);
                }}>
                <Text>Sound 4</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.stopButtonContainer}>
          <TouchableOpacity
            style = {styles.stopButton} 
            onPress={()=>{
              Audio.setIsEnabledAsync(false);
            }}
            >
            <Text>STOP MUSIC</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#eda915'
  },
  soundButtonContainer : {
    flex:4, 
    width:'100%',
    justifyContent: 'center',
  },
  soundButton1:{
    width:150,
    height: 150,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:100,
    marginTop : 10,
    borderRadius: 75,
  },
  soundButton2:{
    width:175,
    height: 175,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    marginLeft : 10,
    borderRadius: 93,
  },
  soundButton3:{
    width:130,
    height: 130,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:200,
    marginTop : -150,
    borderRadius: 65,
  },
  soundButton4:{
    width:100,
    height: 100,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:150,
    borderRadius: 50,
  },
  stopButtonContainer : {
    flex:1, 
    justifyContent:'center', 
    alignItems:'center'
  },
  stopButton :{
    width: 200,
    height: 80,
    justifyContent:'center',
    alignItems:'center',
    borderRadius : 30,
    backgroundColor : 'red',
    borderWidth:2,
    borderColor : 'white',
  }
});
