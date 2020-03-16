import * as React from 'react'
import {View, Text} from 'react-native'
import Buttons from '../UI/Buttons'


export default class HomeScreen extends React.Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Splash Screen</Text>
              <Buttons title="test" buttonType="highlight" onPress={()=>{}}/>
            </View>
          );
    }
}