import React from "react";
import { Pressable, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { MonthDay } from "./types";
import styles from "./styles";

const blue = "#0070ff";

export default function CalendarDay({
  day,
  width,
  selected,
  onSelect,
}: {
  day: MonthDay;
  width: number;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <View style={{ width: width / 7, padding: 1 }}>
      <Pressable
        style={{
          ...styles.touchableBox,
          ...(day.offer || !day.isCurrentMonth ? {} : styles.noOfferDay),
          ...(day.isCurrentMonth ? {} : styles.otherMonthDay),
          ...(day.today && day.isCurrentMonth ? styles.todayBackground : {}),
          ...(selected ? styles.selectedDay : {}),
        }}
        onPress={onSelect}
      >
        <View style={styles.dayBox}>
          {day.isCurrentMonth && (
            <ThemedText
              style={{
                ...styles.dayText,
                ...(day.today ? { fontWeight: "bold", color: blue } : {}),
                ...(day.isCurrentMonth ? {} : styles.otherMonthText),
              }}
            >
              {day.day}
            </ThemedText>
          )}
        </View>
      </Pressable>
    </View>
  );
}
