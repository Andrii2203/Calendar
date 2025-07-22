import React from "react";
import { View } from "react-native";
import DayCell from "./CalendarDay";
import { MonthDay } from "./types";
import styles from "./styles";

interface Props {
  week: MonthDay[];
  width: number;
  selectedDate: string | null;
  onSelectDate: (date: string) => void;
}

export default function WeekRow({ week, width, selectedDate, onSelectDate }: Props) {
  return (
    <View style={styles.weekRow}>
      {week.map((day) => (
        <DayCell
          key={day.date}
          day={day}
          width={width}
          selected={selectedDate === day.date}
          onSelect={() => onSelectDate(day.date)}
        />
      ))}
    </View>
  );
}
