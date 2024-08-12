import { View, Text, Image,  Dimensions ,TouchableOpacity} from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
const {width, height} = Dimensions.get('window');

export default function Card({item}) {

    return (
     
          <View style={{shadowColor: themeColors.bgColor(0.2), shadowRadius: 7}} className="mr-6 bg-white rounded-3xl shadow-lg mb-10">
              <Image  className="h-46 w-full rounded-t-3xl" style={{}}  source={require('../img/asd.jpeg')} />
            
            <View className="px-3 pb-4 space-y-2" >
            <View className="flex-row items-center space-x-1 mt-5">
                  <Text className="text-lg">
                    <Image source={require('../img/nexcap.png')} borderRadius={100} style={{height:20 ,width:20} } className='object-cover'/> 
                    <Text className="font-semibold text-gray-700"> Nexcap_Official </Text>
                    <Image source={require('../img/bule-tick.png')} style={{height:20 ,width:20} }/> 
                  </Text>
              </View>
             
              <Text className="text-2xl font-bold pt-2">React Native Insta clon</Text>
              <View className="flex-row items-center space-x-1">
                  <Text className="text-lg">
                      <Text className="text-gray-700"> fadfasfasfas Abinandhan fjkajdkfa dfjklsdfsdkfsdkfdsnfdsf dfdsfjsdknfs dfksdfjsdkfjsad 
                      fsdkjfkdsfd sfklsdjfkjdsklf sdkfkdsnflk dsfkdsk fksdjfskd</Text> 
                  </Text>
                  
              </View>
              <View className="flex-row items-center space-x-1">
                  <Text className="text-s">
                      <Text className="text-blue-700"> 12-02-2025</Text>
                  </Text>
                  
              </View>
              <View className="flex-row items-center space-x-1">
                  <TouchableOpacity>

                  <Text className="text-green-700 text-lg"> Read Now</Text>
                  </TouchableOpacity>
              </View>
            </View>
          </View>
        
      )
}