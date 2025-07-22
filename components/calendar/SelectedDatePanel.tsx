import React from "react";
import { View } from "react-native";
import { format } from "date-fns";
import Spinner from "../Spinner/Spinner";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { ThemedText } from "../ThemedText";
import styles from "./styles";

interface Props {
    selectedDate: string;
    isSubmitting: boolean;
    onSubmit: () => void;
}

export default function SelectedDatePanel({ selectedDate, isSubmitting, onSubmit }: Props) {
  return (
    <View style={styles.selectedDateContainer}>
      <ThemedText style={styles.selectedDateText}>
        {format(new Date(selectedDate), "dd MMMM yyyy")}
      </ThemedText>

      {isSubmitting ? (
        <Spinner /> 
      ):( 
        <PrimaryButton title="Zamów" onPress={onSubmit} />
      )}
    </View>
  );
}