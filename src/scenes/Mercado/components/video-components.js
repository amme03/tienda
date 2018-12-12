import React, {Component} from 'react'
import { View, StyleSheet } from 'react-native'
import Video from 'react-native-video'

export default class VideoComponent extends React.Component {

  renderVideo () {
      return(
        <Video
        source={{ uri: 'http://footage.framepool.com/mov/822-774-195.mp4' } }
          style={{ width: 410, height: 250}}
          muted={true}
          repeat={true}
          resizeMode={"cover"}
          volume={1.0}
          rate={1.0}
          ignoreSilentSwitch={"obey"}

        />
      )
  }

  render () {
    return (
      <View>
        {this.renderVideo()}
      </View>
    )
  }
}

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});