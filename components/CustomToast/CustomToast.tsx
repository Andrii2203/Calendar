import React from "react";
import { StyleSheet, View, Text } from "react-native";

export function CustomToast({text1, type}: {text1: string, type: string}) {
  return (
    <View style={[styles.container, type === 'success' ? styles.success : styles.error]}>
      <Text style={styles.text}>{text1}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    marginHorizontal: 20,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    elevation: 5,
  },
  success: {
    backgroundColor: '#0070ff',
  },
  error: {
    backgroundColor: '#ffaa2a',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});