import React from "react";
import { View } from "react-native";
import { ThemedText } from "../ThemedText";
import styles from './styles';

const weekDayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function WeekHeader({width} : {width: number}) {
  return (
    <View style={styles.weekHeader}>
      {weekDayNames.map((dayName) => (
        <View
          key={dayName}
          style={{
            width: width / 7,
            padding: 2,
          }}
        >
          <ThemedText style={styles.weekDayName}>{dayName[0]}</ThemedText>
        </View>
      ))}
    </View>
  );
}