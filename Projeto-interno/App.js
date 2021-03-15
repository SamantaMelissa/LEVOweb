import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Rodape from '../../Levo/Projeto-interno/components/rodape';

import Anuncios from '../../Levo/Projeto-interno/pages/Anuncios';


export default function App() {
  return (
    <View style={styles.container}>
     
      <Anuncios/>
      <Rodape/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
