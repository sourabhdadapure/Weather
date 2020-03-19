import * as React from 'react'
import {View, Text} from 'react-native'
import UI from '../ui/UI'
import { useNavigation } from '@react-navigation/native';

interface IntroScreenProperties {
  navigation: any
}


export default class IntroScreen extends React.Component<IntroScreenProperties>{
    render() {
        return (
            <View style={{ flex: 1, justifyContent:"center", alignItems:'center'}}>
              <UI.Labels.H1 spacing="bottom" spacingSize={30} color={UI.Colors.Labels.DarkGray} text="Weather"/>
              <UI.Buttons.Primary style={{marginBottom:30}} text="Signup" onPress={()=>{}}/>
              <UI.Buttons.Primary text="login"onPress={()=>{}}/>
      
            </View>
          );
    }
}