import * as React from 'react'
import {View, Text} from 'react-native'
import Buttons from '../UI/Buttons'


export default class IntroScreen extends React.Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Welcome</Text>
              <Buttons buttonType="link" title="Test" onPress={()=>{}}/>
            </View>
          );
    }
}