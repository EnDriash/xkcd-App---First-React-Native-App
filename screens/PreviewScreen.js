import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const PreviewScreen = (props) => {
  
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.navigation.getParam('img')}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%'
  }
});

export default PreviewScreen;