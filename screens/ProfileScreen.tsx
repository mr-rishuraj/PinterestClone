import { Image, StyleSheet } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
import { ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import pins from '../assets/data/pins';
import MasonryList from '../components/MasonryList';
import { Entypo, Feather } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <View style={styles.icons}>
        <Feather name='share' size={24} color = "black" style={styles.icon} />
        <Entypo name='dots-three-horizontal' size={24} color = "black" style={styles.icon} />
      </View>
      <Image 
        source = {{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/8.jpeg",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Rishu Raj Gupta</Text>
      <Text style={styles.subtitle}>1234 Followers | 123 Following</Text>
      </View>
      <MasonryList pins={pins} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  subtitle:{
    color: "#181818",
    fontWeight: "600",
    margin: 10,
  },
  image: {
    width: 200,
    aspectRatio: 1,
    borderRadius:200,
    marginVertical: 10,
  },
  icons: {
    flexDirection: "row",
    alignSelf: 'flex-end',
    padding: 10,
  },
  icon: {
    paddingHorizontal: 10,
  }
});
