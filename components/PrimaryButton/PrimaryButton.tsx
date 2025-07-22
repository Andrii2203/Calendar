import React from "react";
import { Pressable, StyleSheet, ViewStyle,TextStyle } from "react-native";
import { ThemedText } from "../ThemedText";

interface PrimaryButtonProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export default function PrimaryButton({
    title,
    onPress,
    style,
    textStyle,
}: PrimaryButtonProps) {
    return (
        <Pressable style={[styles.button, style]} onPress={onPress}>
            <ThemedText style={[styles.buttonText, textStyle]}>{title}</ThemedText>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#0070ff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
});