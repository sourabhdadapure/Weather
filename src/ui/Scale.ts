import { Dimensions } from "react-native";

const SCALE_FACTOR = Dimensions.get("screen").width / 400;

export const scale = (v: number) => v * SCALE_FACTOR;
