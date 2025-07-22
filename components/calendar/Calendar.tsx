import React, { useState } from "react";
import { View } from "react-native";
import {
  addDays,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isToday,
  isAfter,
  format,
  set,
} from "date-fns";

import Toast from "react-native-toast-message";
import { submitOrder } from "../../utils/api";

import MonthHeader from "./MonthHeader";
import WeekHeader from "./WeekHeader";
import WeekRow from "./WeekRow";
import SelectedDatePanel from "./SelectedDatePanel";

import styles from "./styles";
import { MonthDay, WeekViewProps } from "./types";

export default function MonthView({ from, orderDays, offerDays }: WeekViewProps) {
  const [width, setWidth] = useState<number>(0);
  const [currentDate, setCurrentDate] = useState<Date>(from);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const firstMonday = startOfWeek(monthStart, { weekStartsOn: 1 });
  const lastSunday = endOfWeek(monthEnd, { weekStartsOn: 1 });

  let day = firstMonday;
  const days: MonthDay[] = [];

  while (!isAfter(day, lastSunday)) {
    const dateStr = format(day, "yyyy-MM-dd");
    days.push({
      day: format(day, "dd"),
      date: dateStr,
      today: isToday(day),
      offer: offerDays.includes(dateStr),
      order: orderDays.includes(dateStr),
      isCurrentMonth: isSameMonth(day, currentDate),
    });
    day = addDays(day, 1);
  }

  const weeks: MonthDay[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  const changeMonth = (dir: "prev" | "next") => {
    setCurrentDate((prev) =>
      addDays(
        dir === "prev" ? startOfMonth(prev) : endOfMonth(prev),
        dir === "prev" ? -1 : 1
      )
    );
    setSelectedDate(null);
  };

  const handleSubmit = async () => {
    if (!selectedDate) return;
    try {
      setIsSubmitting(true);
      await submitOrder(selectedDate);
      Toast.show({
        type: "success",
        text1: "Zamówienie złożone",
        position: "top",
      });
      setSelectedDate(null);
    } catch (error) {
      console.error("Submit error:", error);
      Toast.show({
        type: "error",
        text1: "Błąd podczas składania zamówienia",
        position: "top",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View 
      style={styles.days} 
      onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
    >
      <MonthHeader currentDate={currentDate} onChangeMonth={changeMonth} />
      <WeekHeader width={width} />
      {weeks.map((week, i) => (
        <WeekRow
          key={`week-${i}`}
          week={week}
          width={width}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      ))}
      {selectedDate && (
        <SelectedDatePanel
          selectedDate={selectedDate}
          isSubmitting={isSubmitting}
          onSubmit={handleSubmit}
        />
      )}
    </View>
  );
}
