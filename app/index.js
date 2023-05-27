import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef} from 'react';
import { Text, View, TextInput, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import PhoneInput from "react-native-phone-number-input";



const SignIn = () =>{
    const phoneInput = useRef(null);

    return(

            <View className="flex-1 items-center justify-center bg-gray-100">
                <SafeAreaView>
                    <Image className='self-center' source={require('../assets/logo.png')} style={{width:200, height:200}}></Image>
                <Text className="text-gray-400 text-md font-bold mb-4">
      Sign in Using your Phone Number
      </Text>
                <PhoneInput
            ref={phoneInput}
            defaultCode="IN"
            layout="first"
            onChangeText={(text) => {
    
            }}
            onChangeFormattedText={(text) => {
              
            }}
            withDarkTheme
            withShadow
            autoFocus
          />
           <TouchableOpacity style={{width:180}} className="self-center m-14 bg-gray-400 p-4 rounded-2xl"
          >
            <Text className="self-center text-white font-bold text-md">Get OTP</Text>
          </TouchableOpacity>
          <Text className="text-gray-400 text-md font-bold mb-4 self-center underline ">
      Terms And Conditions
      </Text>
     

                </SafeAreaView>
           
        </View>
    )
}

export default SignIn;

