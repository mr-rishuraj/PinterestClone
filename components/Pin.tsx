import  {View, Image, Text, StyleSheet, Pressable} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';

const Pin = (props) => {

    const [ratio, setRatio] = useState(1);

    const {id, image, title} = props.pin;
    const navigation = useNavigation();
    const onlike = () => {

    }
    useEffect(() => {
        if(image){
            Image.getSize(image, (width, height) => setRatio(width / height));               
        }
    }, [image])

    const goToPinPage = () => {
      // console.warn('clicked')
      navigation.navigate("Pin", { id });
    }
    return (
      <Pressable onPress={goToPinPage} style = {styles.pin} >
        <View >
            <View>
            <Image source={{
                uri: image,
                }}
                style = {[styles.image, {aspectRatio: ratio}]}
                />

            <Pressable onPress={onlike} style = {styles.heartBtn}>
                <AntDesign name="hearto" size={16} color="black" /> 
            </Pressable>
            </View>
            <Text style={styles.title} numberOfLines = {2}>{title}</Text>
      </View>
      </Pressable> 
    )
}

const styles = StyleSheet.create({
    pin: {
      width: "100%",
      padding: 4,
    },
    title: {
      fontSize: 16,
      lineHeight: 25,
      fontWeight: '600',
      margin: 5,
      color: "black"
    },
    image: {
      width: "100%",
      borderRadius: 15,
    },
    heartBtn: {
        backgroundColor: '#D3CFD4',
        position: 'absolute',
        bottom: 10,
        right: 10,
        padding: 5,
        borderRadius: 50
    }
  });
  
export default Pin;