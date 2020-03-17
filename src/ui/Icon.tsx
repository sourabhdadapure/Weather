import FAIcon from "react-native-vector-icons/FontAwesome";
import * as React from "react";
import { Text, Image, View, ViewProps } from "react-native";
import { font_family } from "./Fonts";

interface IconProperties extends ViewProps {
    name: string;
    size: number;
    color?: string;
    fa?: boolean;
}

const IconMap: { [name: string]: string } = {
// custom Icons
};

export default class Icon extends React.Component<IconProperties> {
    render() {
        const { name, size, style, color } = this.props;


        if (!IconMap[name] || this.props.fa) {
            return (
                <FAIcon {...this.props} color={color} />
            );
        }

        return (
            <View style={style}>
                <Text
                    style={{
                        fontFamily: font_family(""), //Custom icon file name
                        fontSize: size,
                        backgroundColor: "transparent"
                    }}
                >
                    {String.fromCharCode(parseInt(IconMap[name], 16))}
                </Text>
            </View>
        );
    }
}
