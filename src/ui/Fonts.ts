import {Platform, Dimensions, TextStyle} from 'react-native'

const {width} = Dimensions.get("window");

type FontFamily = "bariol";
type FontWeight = "bold"|"black"|"regular"|"light"|"medium" | "ultralight";

function font_size(size: number){
    return (size * Math.min(width/350,1))
}

export function font_family(family: FontFamily, suffix?: FontWeight) {
    if (Platform.OS == "android") {
        return suffix ? family + "_" + suffix : family;
    }
    switch (family) {
        case "bariol":
            return "Bariol";
        default:
            return "Bariol";
    }
}

function font_weight(weight: FontWeight) {
    switch (weight) {
        case "black":
            return "800";
        case "bold":
            return "bold";
        case "medium":
            return "500";
        case "light":
            return "300";
        case "ultralight":
            return "100";
        default:
            return "normal";
    }
}

function Font(
    family: FontFamily,
    size: number,
    weight: FontWeight,
    color: string,
    lineHeight?: number,
    letterSpacing?: number,
    options?: TextStyle
): TextStyle {
    return {
        fontFamily: font_family(family, weight),
        fontWeight: Platform.OS == "ios" ? font_weight(weight) : undefined,
        fontSize: font_size(size),
        color: color,
        lineHeight: lineHeight ? font_size(lineHeight) : undefined,
        letterSpacing: letterSpacing,
        backgroundColor: "transparent",
        ...options
    };
}

export function Bariol(size: number, weight: FontWeight, color: string, style?: TextStyle) {
    return Font(
        "bariol",
        size,
        weight,
        color,
        undefined,
        undefined,
        Platform.OS == "ios"
            ? {
                  ...style,
                //   transform: [{ translateY: size / 5 }]
              }
            : style
    );
}

export default Font