import * as React from "react";
import {
    StyleSheet,
    ViewProps,
    TouchableOpacity,
    TouchableHighlight,
    View,
    ActivityIndicator,
    StyleSheetProperties
} from "react-native";
import { Labels } from "../labels/Labels";
import { Colors } from "../../ui/Colors";
import Icon from "../Icon";
import { scale } from "../Scale";

const DISABLED_OPACITY = 0.5;

export const stylesheet = StyleSheet.create({
    primary: {
        backgroundColor: Colors.Buttons.Primary,
        borderRadius: 30,
        paddingVertical:15,
        alignItems:"center",
        width:"80%",
        shadowColor:Colors.Buttons.PrimaryShadow,
        shadowOpacity:1
    },
    b1: {
        backgroundColor: Colors.Buttons.CTA,
        borderRadius: 6,
        paddingVertical: 15,
        alignItems: "center"
    },
    cta: {
        backgroundColor: Colors.Buttons.Blue,
        borderRadius: 6,
        paddingVertical: 15,
        alignItems: "center"
    },
    icon_circle_dark: {
        height: scale(50),
        width: scale(50),
        borderRadius: scale(25),
        backgroundColor: Colors.Buttons.DarkGray,
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        justifyContent: "center",
        alignItems: "center"
    },
    icon_round: {
        backgroundColor: Colors.Buttons.White,
        flexDirection: "row",
        borderRadius: 15,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 15,
        paddingRight: 15
    },
    icon_smart_temp_add: {
        height: scale(28),
        width: scale(28),
        borderRadius: scale(20),
        backgroundColor: Colors.Buttons.DarkGray,
        justifyContent: "center",
        alignItems: "center"
    }
});

interface BaseButtonProps extends ViewProps {
    disabled?: boolean;
    underlayColor?: string;
    onPress(): void;
    children?: React.ReactNode | React.ReactNodeArray;
    loading?: boolean;
    hitBox?: {};
}

interface ButtonProps extends BaseButtonProps {
    text?: string;
}

function HighlightButton(props: BaseButtonProps) {
    return (
        <TouchableHighlight
            style={[props.style, { opacity: props.disabled ? DISABLED_OPACITY : 1 }]}
            disabled={props.disabled}
            onPress={props.disabled ? undefined : props.onPress}
            underlayColor={props.underlayColor}
        >
            <React.Fragment>
                <View style={{ opacity: props.loading ? 0 : 1 }}>{props.children}</View>
                {props.loading && (
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        }}
                    >
                        <ActivityIndicator size="small" color="green" />
                    </View>
                )}
            </React.Fragment>
        </TouchableHighlight>
    );
}

function OpacityButton(props: BaseButtonProps) {
    return (
        <TouchableOpacity
            hitSlop={props.hitBox}
            style={props.style}
            onPress={props.disabled ? undefined : props.onPress}
            activeOpacity={0.75}
        >
            <View style={{ opacity: props.loading ? 0 : 1 }}>{props.children}</View>
            {props.loading && (
                <View
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    }}
                >
                    <ActivityIndicator size="small" color="green" />
                </View>
            )}
        </TouchableOpacity>
    );
}

interface IconButtonProps extends ButtonProps {
    icon: string;
    size: number;
}

export const Buttons = {
    Primary: (props: ButtonProps) => (
        <HighlightButton {...props} style={stylesheet.primary} underlayColor={Colors.Buttons.PrimaryShadow} >
            {props.text && <Labels.B1 text={props.text}/> }
        </HighlightButton>
    ),
    B1: (props: ButtonProps) => (
        <HighlightButton {...props} style={stylesheet.b1} underlayColor={Colors.Buttons.Active}>
            {props.text && <Labels.B1 text={props.text} />}
        </HighlightButton>
    ),
    CTA: (props: ButtonProps) => (
        <HighlightButton {...props} style={[stylesheet.cta, props.style]} underlayColor={Colors.Buttons.Active}>
            {props.text && <Labels.B1 text={props.text} case="uppercase"/>}
        </HighlightButton>
    ),
    IconRound: (props: IconButtonProps) => (
        <TouchableHighlight
            {...props}
            underlayColor={Colors.Buttons.Gray}
            style={[stylesheet.icon_round, props.style]}
        >
            <React.Fragment>
                <Icon name={props.icon} size={13} color={Colors.Icons.Black} fa />
                {props.text && (
                    <Labels.B1
                        text={props.text}
                        color={Colors.Icons.Black}
                        spacing="left"
                        spacingMode="compact"
                    />
                )}
            </React.Fragment>
        </TouchableHighlight>
    ),
    Icon: (props: IconButtonProps) => (
        <OpacityButton {...props} style={[stylesheet.icon, props.style]}>
            <Icon name={props.icon} size={props.size} color={Colors.Icons.White} />
        </OpacityButton>
    ),
   
};
