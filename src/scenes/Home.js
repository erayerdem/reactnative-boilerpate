import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, TextInput} from 'react-native';
import {Search} from '../components/icon/navigation';

export default function Home() {
  return (
    <SafeAreaView>
      <View
        style={{
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          padding: 12,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 22, fontWeight: '800'}}>B O Y N E R </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#ddd',
          borderRadius: 12,
          marginTop: 12,
          marginStart: 12,
          marginEnd: 12,
          height: 40, 
          alignItems: 'center',
        }}>
        <Search style={{marginStart: 12}} color={'gray'} />
        <TextInput
          placeholder="Kategori , ürün veya marka ara"
          style={{flex: 1, marginStart: 12, fontSize: 17}}
        />
      </View>
      <View
        style={{borderBottomColor: '#ddd', margint: 12, borderBottomWidth: 1}}
      />
    </SafeAreaView>
  );
}
