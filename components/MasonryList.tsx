import { useState } from 'react';
import { ScrollView, StyleSheet, Image, FlatList, useWindowDimensions } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
import Pin from '../components/Pin';
import { Text, View } from '../components/Themed';
// import { RootTabScreenProps } from '../types';
// import pins from '../assets/data/pins';

interface IMasonryList{
    pins:{
        id: string;
        image:string;
        title: string;
    }[];
} 

const MasonryList = ({pins}: IMasonryList) => {
  const width = useWindowDimensions().width
  console.log(width)
  const numColumns = Math.ceil(width / 350)
  return (
    <ScrollView contentContainerStyle= {{width: "100%"}}>
    <View style={styles.container}>
      {Array.from(Array(numColumns)).map((_, colIndex ) => (
        <View style = {styles.column}>

        {pins.filter((_, index) => index % numColumns === colIndex).map((pin) => (
          <Pin pin = {pin} key={pin.id}/>
        ))}
      </View>
      ))}
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      flexDirection: 'row',
    },
    column: {
      flex: 1,
    }
  });

export default MasonryList