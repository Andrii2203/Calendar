import { StyleSheet } from "react-native";

const blue = "#0070ff";
const lightBlue = "#4688eb";
const orange = "#ffaa2a";

const styles = StyleSheet.create({
  days: {
    marginVertical: 2,
    marginHorizontal: 2,
    alignSelf: "stretch",
  },
  monthHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  arrowText: {
    marginBottom: 10,
    fontSize: 28,
  },
  monthText: {
    fontSize: 20,
    fontFamily: "poppins-bold",
    color: "#333",
  },
  weekHeader: {
    flexDirection: "row",
  },
  weekRow: {
    flexDirection: "row",
  },
  dayText: {
    textAlign: "center",
    fontSize: 13,
  },
  weekDayName: {
    textAlign: "center",
    color: "#aaa",
    fontFamily: "poppins-bold",
    textTransform: "uppercase",
    fontSize: 8,
  },
  selectedDay: {
    borderWidth: 2,
    borderColor: blue,
  },
  selectedDateContainer: {
    marginTop: 12,
    alignItems: "center",
  },
  selectedDateText: {
    fontSize: 16,
    marginBottom: 8,
  },
  todayBackground: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: blue,
  },
  touchableBox: {
    backgroundColor: "#f6f6f6",
    aspectRatio: 1,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#f6f6f6",
    justifyContent: "center",
  },
  dayBox: {
    justifyContent: "center",
    marginHorizontal: 0,
  },
  otherMonthDay: {
    backgroundColor: "#f0f0f0",
    borderColor: "#f0f0f0",
    opacity: 0.4,
  },
  noOfferDay: {
    opacity: 0.4,
  },
  otherMonthText: {
    color: "#ccc",
  },
});

export default styles;
