import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { themeColors } from '../theme'


import SelectList from 'react-native-select-dropdown'

export default function Forms() {

  const countries = ["Egypt", "Canada", "Australia", "Ireland","India"]
  
  
  
  const Courses = ["CSE", "ECE", "MECH", "AI&DS","EEE"]




  const [textInputName, setTextInputName] = useState('');
  const [textInputCollege, setTextInputCollege] = useState('');
  const [textInputPhone, setTextInputPhone] = useState('');
  const [textInputDistrict, setTextInputDistrict] = useState('');
  const [textInputCourse, setTextInputCourse] = useState('');
  
  const [textsel, setsel] = useState('');

  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!textInputName.trim()) {
      alert('Please Enter Name');
      return;
    }
    //Check for the Email TextInput
    if (!textInputCollege.trim()) {
      alert('Please Select College');
      return;
    }
    if (!textInputPhone.trim()) {
      alert('Please Enter Phone Number');
      return;
    }
    //Check for the Email TextInput
    if (!textInputDistrict.trim()) {
      alert('Please Enter District');
      return;
    }
    if (!textInputCourse.trim()) {
      alert('Please Enter Course');
      return;
    }
    //Checked Successfully
    //Do whatever you want
    alert('Success');
  };

  const [selected, setSelected] = useState(undefined);
  


  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView  className="flex ">
        <View className="flex-row justify-start">
          
        </View>
        <View  className="flex-row justify-center">
          <Image source={require('../img/Forms.png')} 
          style={{width: 200, height: 200}}
          backgroundColor='transprant' />
        </View>
        
        
      </SafeAreaView>
      <View 
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}} 
        className="flex-1 bg-white px-8 pt-8">
          <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">Name</Text>
            <TextInput 
            onChangeText={(value) => setTextInputName(value)}
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              placeholder="Name"
            />
            
            <Text className="text-gray-700 ml-4">Phone</Text>
            <TextInput 
            onChangeText={(value) => setTextInputPhone(value)}
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              placeholder="Phone"
            />
            <Text className="text-gray-700 ml-4">District</Text>
            <TextInput 
            onChangeText={(value) => setTextInputDistrict(value)}
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              placeholder="District"
            />

<Text className="text-gray-700 ml-4">College</Text>
            <SelectList className='w-full'
            data={countries} 
            search setSelected={setsel} 
            placeholder='select clg' 
            onChangeText={(value) => setTextInputCollege(value)}/>
            
            <Text className="text-gray-700 ml-4">Course</Text>
            <SelectList 
            data={Courses} 
            search setSelected={setsel} 
            placeholder='select clg' 
            onChangeText={(value) => setTextInputCollege(value)}/>

            <TouchableOpacity onPress={checkTextInput}
              className="py-3 bg-yellow-400 rounded-xl">
                <Text 
                
                    className="text-xl font-bold text-center text-gray-700"
                >
                        Submit
                </Text>
             </TouchableOpacity>
            
          </View>
          
      </View>
    </View>
    
  )
}