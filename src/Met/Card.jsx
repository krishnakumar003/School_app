import { View, Text, Image,  Dimensions ,TouchableOpacity} from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import {useNavigation} from '@react-navigation/native'
const {width, height} = Dimensions.get('window');

export default function Card({item}) {

    const Navigation = useNavigation()

    return (
        <>
            <TouchableOpacity onPress={()=> Navigation.navigate('Get')}>

                <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
                    <Image className="rounded-3xl" style={{height: 90, width: 90}} source={require('../img/asd.jpeg')}/>
                    <View className="flex flex-1 space-y-3">
                        <View className="pl-3">
                            <Text className="text-2xl">Computer Science</Text>  
                            
                            <Text className="text-m text-green-500">2020-2021</Text>  
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </>
        
        
      )
}