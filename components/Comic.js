import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Comic = (props) => {

  return (
    <TouchableOpacity onPress={props.preview}>
      <View style={styles.container} >
          <View style={styles.titleContainer}>
              <Text style={styles.title} >{props.title}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: props.img}} />
          </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
    backgroundColor: '#f4511e',
    borderRadius: 15,
    borderStyle: 'solid',
    borderWidth: 1
  },
  titleContainer:{
    flex: 0.5,
    margin: 10,
    alignItems: 'center',
  },
  title:{
    fontWeight: 'bold',
    fontSize: 15,
  },
  imageContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'stretch',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderRadius: 15
  }
});

export default Comic;