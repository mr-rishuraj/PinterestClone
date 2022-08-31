import { ScrollView, StyleSheet, Image, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Pin from '../components/Pin';
// import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import pins from '../assets/data/pins';
import MasonryList from '../components/MasonryList';


export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <MasonryList pins={pins} />
  );
}


