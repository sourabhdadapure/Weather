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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', paddingVertical:200 }}>
              <UI.Labels.H1 color={UI.Colors.Labels.DarkGray} text="Weather"/>
              <UI.Buttons.Primary  text="Signup" onPress={()=>{}}/>
              <UI.Buttons.Primary text="login"onPress={()=>this.props.navigation.navigate('Home')}/>
      
            </View>
          );
    }
}