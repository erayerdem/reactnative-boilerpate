import React from 'react';
import {
  SafeAreaView,
  Text,View
  } from 'react-native';

export default function Profile() {
  
  return (
   
      <SafeAreaView >
        <Text style= {{fontSize:24,fontWeight:"500",paddingBottom:12,marginStart:12}}>Hesabım</Text>
      <Seperator></Seperator>
       <View style={{borderColor:"#ccc",borderWidth:1,paddingLeft:12,paddingTop:12,paddingBottom:12}}>
         <Text style={{fontSize:18,fontWeight:"600"}}>Merhaba, <Text style={{color:"green"}}>samet eray !</Text></Text>
         <Text style={{color:"gray"}}>sameterayerdem@gmail.com</Text>
       </View>
       <Seperator></Seperator>
        <Text style={{paddingLeft:12,fontSize:18,fontWeight:"600"}}>Bilgilerim</Text>
      </SafeAreaView>
    
  );
}

function Seperator() {

  return (<View style={{height:22}}></View>);
}