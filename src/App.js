import React from 'react';
import { asset, Pano, Text, View, AmbientLight } from 'react-vr';
import Primitives from './Primitives';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('background.jpeg')} />
        <AmbientLight intensity={2.5} />
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{ translate: [0, 0, -3] }],
          }}>
          hello
          </Text>
        <Primitives />
      </View>
    );
  }
};