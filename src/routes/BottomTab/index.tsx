import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons as Icon } from '@expo/vector-icons';

import colors from '../../constants/colors';
import layout from '../../constants/layout';

import FeelingButton from '../../components/FeelingButton';

import Home from '../../screens/Home';
import Mapa from '../../screens/Map';
import Status from '../../screens/Status';
import News from '../../screens/News';
import Alerts from '../../screens/Alerts';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'ios-home',
  },
  Map: {
    name: 'md-map',
  },
  Status: {
    name: 'ios-happy',
  },
  News: {
    name: 'ios-megaphone',
  },
  Alerts: {
    name: 'ios-notifications',
  },
};


const BottomTab = ()=>{
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Status') {
            return (
              <FeelingButton
                onPress={() => navigation.navigate('Status')}
                focused={focused}
              />
            );
          }
          const { name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          borderTopLeftRadius:layout.windowWidth / 15, 
          borderTopRightRadius:layout.windowWidth / 15,
          borderTopWidth:0,
          borderTopColor:colors.tintColor,
          backgroundColor:colors.tintColor,
          position:'absolute',
          padding:15,
          // height:60
        },
        activeTintColor: colors.activeTintColor,
        inactiveTintColor: colors.inactiveTintColor,
      }}
    >
      <Tab.Screen 
        name='Home' 
        component={Home}
        options={{
          title:'Inicio'
        }}
        
        />
      <Tab.Screen name='Map' component={Mapa} options={{
          title:'Mapa'
        }}/>
      <Tab.Screen name='Status' component={Status} options={{
          title:''
        }}/>
      <Tab.Screen name='News' component={News} options={{
          title:'Noticias'
        }}/>
      <Tab.Screen name='Alerts' component={Alerts} options={{
          title:'alertas'
        }}/>
    </Tab.Navigator>
  )
};

export default BottomTab;