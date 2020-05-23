import * as React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../scenes/Home';
import Categories from '../scenes/Categories'
import Basket from '../scenes/Basket'
import Profile from '../scenes/Profile'
import Favorities from '../scenes/Favorities'
import { Search , Heart ,HomeR, ShoppingBag, User } from '../components/icon/navigation';

function IconWithBadge({isfocused}) {
  
  return (
    
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <ShoppingBag color = { isfocused ? 'tomato' : "gray"}></ShoppingBag>
      {2 > 0 && (
        <View
          style={{
            
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'tomato',
            borderRadius: 6,
            width: 13,
            height: 13,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 11, fontWeight: 'bold' }}>
            {3}
          </Text>
        </View>
      )}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Home" >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
           let comp;
            switch (route.name) {
            case "Home":
              comp= <HomeR color = { focused ? 'tomato' : "gray"}></HomeR>
              break;
            case "Categories":
              comp=  <Search color = { focused ? 'tomato' : "gray"}></Search>
              break;
            case "Basket":
              comp=  <IconWithBadge isfocused={focused}></IconWithBadge>
              break;
            case "Favorities":
              comp=  <Heart color = { focused ? 'tomato' : "gray"}></Heart>
              break;
            case "Profile":
              comp=  <User color = { focused ? 'tomato' : "gray"}></User>
              break;
           }
   
            return comp;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          labelStyle : {
            fontSize:13
          },
          style: {
            marginTop:7
          }
        }}
      >
        <Tab.Screen  name="Home"  options={{title:"Anasayfa" , }}  component={Home} />
        <Tab.Screen name="Categories" options={{title:"Kategoriler"}} component={Categories} />
        <Tab.Screen name="Basket" options={{title:"Sepetim"}} component={Basket} />
        <Tab.Screen name="Favorities" options={{title:"Favorilerim"}} component={Favorities} />
        <Tab.Screen name="Profile" options={{title:"Hesabım"}} component={Profile} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
