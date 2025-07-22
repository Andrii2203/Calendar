import React from "react";
import { Pressable, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { format } from 'date-fns';
import styles from './styles';

interface Props {
    currentDate: Date;
    onChangeMonth: (dir: "prev" | "next" ) => void;
}

export default function MonthHeader({ currentDate, onChangeMonth }: Props) {
  return (
    <View style={styles.monthHeader}>
      <Pressable onPress={() => onChangeMonth("prev")}>
        <ThemedText style={styles.arrowText}>←</ThemedText>
      </Pressable>

      <ThemedText style={styles.monthText}>
        {format(currentDate, 'MMMM yyyy')}
      </ThemedText>

      <Pressable onPress={() => onChangeMonth("next")}>
        <ThemedText style={styles.arrowText}>→</ThemedText>
      </Pressable>
    </View>
  );
}