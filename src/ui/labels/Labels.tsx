import * as React from 'react'
import {Text, TextStyle, StyleSheet, TextProps } from 'react-native'
import {Colors} from '../Colors'
import { Bariol } from '../Fonts'


export type Spacing = "left" | "right" | "top" | "bottom"


export const stylesheet = StyleSheet.create({
    h1: Bariol(22,"bold", Colors.Labels.White),
    h2: Bariol(18, "bold", Colors.Labels.White),
    h3: Bariol(16, "bold", Colors.Labels.White),
    h4: Bariol(12, "bold", Colors.Labels.White),

    b1: Bariol(16, "medium", Colors.Labels.White),
    b2: Bariol(16, "regular", Colors.Labels.White),
    b3: Bariol(15, "regular", Colors.Labels.Gray, 20),
    b4: Bariol(15, "regular", Colors.Labels.DarkGray),

    link: Bariol(16, "regular", Colors.Labels.Link)
})

interface LabelProps extends TextProps {
    text: string;
    spacing?: Spacing;
    spacingSize?: number;
    spacingMode?: "compact" | "comfortable" | "spaced";
    case?: "none" | "capitalize" | "uppercase" | "lowercase";
    color?: string;
    typography?: TextStyle;
    maxCharLimit?: number;
    dim?: boolean;
}

function Label(props: LabelProps) {
    const typography = props.typography || stylesheet.b2;

    let spacingSize = props.spacingMode || 10;

    let margins: any;
    switch (props.spacing) {
        case "top":
            margins = { marginTop: spacingSize };
            break;
        case "bottom":
            margins = { marginBottom: spacingSize };
            break;
        case "left":
            margins = { marginLeft: spacingSize };
            break;
        case "right":
            margins = { marginRight: spacingSize };
            break;
        case "horizontal":
            margins = { marginHorizontal: spacingSize };
            break;
        case "vertical":
            margins = { marginVertical: spacingSize };
            break;
        case "all":
            margins = { margin: spacingSize };
    }

    let text = props.text;
    const { maxCharLimit } = props;
    if (maxCharLimit !== undefined && text.length > maxCharLimit) {
        text = text.substring(0, maxCharLimit - 3) + "...";
    }
    const textTransform = props.case ? { textTransform: props.case } : undefined;
    const color = props.color ? { color: props.color } : undefined;
    const opacity = props.dim ? { opacity: 0.5 } : undefined;

    return (
        <Text {...props} style={[typography, margins, textTransform, color, opacity, props.style]}>
            {text}
        </Text>
    );
}

export const Labels = {
    H1: (props: LabelProps) => <Label {...props} typography={stylesheet.h1} />,

    H2: (props: LabelProps) => <Label {...props} typography={stylesheet.h2} />,

    H3: (props: LabelProps) => <Label {...props} typography={stylesheet.h3} />,

    H4: (props: LabelProps) => <Label {...props} typography={stylesheet.h4} />,

    B1: (props: LabelProps) => <Label {...props} typography={stylesheet.b1} />,

    B2: (props: LabelProps) => <Label {...props} typography={stylesheet.b2} />,

    B3: (props: LabelProps) => <Label {...props} typography={stylesheet.b3} />,

    B4: (props: LabelProps) => <Label {...props} typography={stylesheet.b4} />,

    Link: (props: LabelProps) => <Label {...props} typography={stylesheet.link} />,


   


   

};
