import { Image, Pressable, StyleSheet, Text } from "react-native"
import { useState } from "react";
import { useEffect } from "react";
import { View } from "../components/Themed";
import pins from "../assets/data/pins";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const PinScreen = () => {

    // const pin = pins[1]
    const [ratio, setRatio] = useState(1);

    const navigation = useNavigation()
    const route = useRoute()
    const insets = useSafeAreaInsets()
    const pinId = route.params?.id;

    const pin = pins.find(p => p.id === pinId)

    if(!pin){
        <Text>PIN NOT FOUND</Text>
    }
    useEffect(() => {
        if(pin?.image){
            Image.getSize(pin.image, (width, height) => setRatio(width / height));               
        }
    }, [pin])

    const goBack = () =>{
        navigation.goBack();
    };
    return (
        <SafeAreaView style = {{backgroundColor: 'black'}}>
        <StatusBar style="light" />
        <View style = {styles.root}>
            <Image source={{uri: pin.image}} style = {[styles.image, {aspectRatio: ratio}]} />
            <Text style = {styles.title}>{pin.title}</Text>
        </View>

        <Pressable onPress={goBack} style= {[styles.backBtn, {top: insets.top + 20}]}>
        <Ionicons name= {"chevron-back"} size={35} color={'white'}/>
        </Pressable>

        </SafeAreaView>
    )
}
 const styles = StyleSheet.create({
     root: {
         height: '100%',
         backgroundColor: 'white',
         borderTopLeftRadius: 50,
         borderTopRightRadius: 50
     },
     image: {
         width: '100%',
         borderTopLeftRadius: 50,
         borderTopRightRadius: 50
     },
     title: {
         margin: 10,
         fontSize: 24,
         fontWeight: '600',
         textAlign: 'center',
         lineHeight: 35
         
     },
     backBtn: {
         position: 'absolute',
        //  top: 70,
         left: 10,
     }
 })

export default PinScreen;