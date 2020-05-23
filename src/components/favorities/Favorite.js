import React from 'react';
import {
  SafeAreaView,
  Text,StyleSheet,Image,View
  } from 'react-native';

export default function Favorities() {
  
  return (
    
      <SafeAreaView style= {{ backgroundColor:"white"}}>
        <Text style={{fontSize:18,fontWeight:"600",marginStart:12,paddingBottom:12}}>Favorilerim</Text>
        <View  style={{flexDirection:"row"}}>
        <Image
            style= {{width:200,height:200}}
        source={{uri:"https://cdn-occ.akinon.net/products/2020/03/18/230854/5f7105ab-95d2-4a04-8f0c-80a909dacaf4_size780x780_cropCenter.jpg"}}
      />
      <View style={{flexDirection:"column",marginStart:12}}>
      <Text>Nike Flex 2017 Koşu Ayakkabısı</Text>
      <Text>219,99 TL</Text>
      <Text>RENK : mavi</Text>
      </View>
      </View>
        <View style={{borderBottomColor: "#ccc", borderBottomWidth: 1,paddingTop:12}}></View>
        <View  style={{flexDirection:"row"}}>
        <Image
            style= {{width:200,height:200}}
        source={{uri:"https://cdn-occ.akinon.net/products/2020/03/18/230854/5f7105ab-95d2-4a04-8f0c-80a909dacaf4_size780x780_cropCenter.jpg"}}
      />
      <View style={{flexDirection:"column",marginStart:12}}>
      <Text>Nike Flex 2017 Koşu Ayakkabısı</Text>
      <Text>219,99 TL</Text>
      <Text>RENK : mavi</Text>
      </View>
      </View>
        <View style={{borderBottomColor: "#ccc", borderBottomWidth: 1,paddingTop:12}}></View>
        
      </SafeAreaView>
    
  );
}
// https://cdn-occ.akinon.net/products/2020/03/18/230854/5f7105ab-95d2-4a04-8f0c-80a909dacaf4_size780x780_cropCenter.jpg