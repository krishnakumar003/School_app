import { View, Text, TouchableOpacity, Image,FlatList } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'

import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import Card from './Card';






export default function Met() {



    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
        {
          id: 'bd7acbea-c1db1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c6s05-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3dad1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
        
      ];





  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView  className="flex ">
      <View  className="flex-row justify-end">
      <TouchableOpacity  
          className="bg-yellow-400 p-1 rounded-2xl  w-20 right-5">
          <Text className='text-xl font-bold text-center text-gray-700'>
          LogOut
            {/* <ArrowLeftIcon size="20" color="black" /> */}
          </Text>
          </TouchableOpacity>
        </View>
        <View  className="flex-row justify-center mb-5">
          <Image source={require('../img/stu.png')} 
          style={{width: 230, height: 210}}
           />
        </View>
        
        
        
      </SafeAreaView>
      <View 
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}} 
        className="flex-1 bg-white px-8 pt-8">
      <Text className="items-center text-center pb-5 text-3xl font-extrabold">Start Learning</Text>
          



      <FlatList showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) =>  <Card  />}
        keyExtractor={item => item.id}
      />

        
       
          
      </View>
    </View>
    
  )
}