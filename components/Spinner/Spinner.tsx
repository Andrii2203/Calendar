import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function Spinner() {
    return (
        <View style={styles.overlay}>
            <ActivityIndicator size="large" color="#0070ff" />
        </View>
    )
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
    },
})