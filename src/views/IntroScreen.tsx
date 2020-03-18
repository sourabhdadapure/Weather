import * as React from 'react'
import {View, Text} from 'react-native'
import UI from '../ui/UI'


export default class IntroScreen extends React.Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <UI.Labels.H1 color={UI.Colors.Labels.Black} text="Welcome"/>
            </View>
          );
    }
}