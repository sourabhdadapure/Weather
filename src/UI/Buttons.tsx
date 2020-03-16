import * as React from 'react'
import {View, Text} from 'react-native'
import { TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler'

interface ButtonsProperties {
    buttonType: "link"|"border"|"highlight"|"icon"|"buttonWithIcon";
    title: string;
    onPress():void;
}

export default class Buttons extends React.Component<ButtonsProperties>{
    
    renderButton() {
        const {buttonType, onPress, title} = this.props
        switch (buttonType) {
            case "link":
                return (
                <TouchableOpacity onPress={onPress}>
                    <Text style={{color:'blue', fontSize:20}}>{title}</Text>
                </TouchableOpacity>)
            case "border":
                return(
                    <TouchableHighlight style={{borderWidth:1, borderColor:"blue"}} onPress={onPress}>
                        <Text>{title}</Text>
                    </TouchableHighlight>
                )
            default:
                break;
        }
    }
    
    render(){

        const {buttonType} = this.props

        return(
            this.renderButton()
        )
       
    }
}