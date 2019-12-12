import React, { useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Comic from '../components/Comic';

const HomeScreen = (props) => {
const [listOfComics, setListOfComics] = useState([]);
const [endOfList, setEndOfList] = useState(false);

const fetchData = () => {
     let comicNumber = 0;
     let collectionOfComics = [];
     new Promise ((resolve, reject) => {
      for(let i = 0; i < 8; i++) {
        comicNumber = 1 + i + listOfComics.length;
         
        fetch(`http://xkcd.com/${comicNumber}/info.0.json`)
        .then((resp) => {
          return resp.json();
        })
        .then((respJson) => {
          collectionOfComics.push(respJson);
          i === 7 ? resolve(collectionOfComics) : null;
        })
      }
    })
    .then(data => {
      setListOfComics([...listOfComics,...data]);
      setEndOfList(false);
    })
}

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

useEffect(() => {
  if(listOfComics.length === 0 || endOfList === true){
    fetchData();
  }
}), [listOfComics];


  return (
    <View style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            setEndOfList(true);
          }
        }}
        scrollEventThrottle={400}
      >
      <Text style={styles.header}>Welcome in to a Lot of Laught World! Select a comics and have fun!</Text>
      { 
        listOfComics.map((item, index) => {
        return (
          <Comic 
            key={index} 
            title={item.title} 
            img={item.img} 
            preview={() => props.navigation.navigate('PreviewScreen', {img: item.img, title: item.title})}
          />
        )})
      } 
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold'
  }
});

export default HomeScreen;