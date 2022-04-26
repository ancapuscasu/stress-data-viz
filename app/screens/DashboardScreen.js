/**
 * DashboardScreen component displays components: Header, CurrentState, HorizontalBarGraph, LineGraph
 * Imports userData from assets and passes data as props to child components
 */
import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import moment from "moment";

import { userData } from "../assets/userData";
import Header from "../Components/Header";
import CurrentState from "../Components/CurrentState";
import HorizontalBarGraph from "../Components/HorizontalBarGraph";
import Screen from "../Components/Screen";
import colors from "../config/colors";
import LineGraph from "../Components/LineGraph";

function DashboardScreen() {
  const DATA = JSON.parse(JSON.stringify(userData));

  // Most recent object (log) from userData
  const lastLog = DATA[0];

  // Function to parse ISO datetime - returns date as string in "YYYY-MM-DD" format
  function parseSampleDate(sample) {
    return moment(sample.createdAt.$date).utc().format("YYYY-MM-DD");
  }

  //Function to parse the latest date
  const latestDate = parseSampleDate(lastLog);

  //Function to filter userData to get all logs that match latestDate - returns array of logs
  const dataToday = userData.filter(
    (sample) => parseSampleDate(sample) === latestDate
  );

  return (
    <Screen style={styles.container}>
      <ScrollView>
        <Header data={lastLog} />
        <CurrentState lastLog={lastLog} />
        <HorizontalBarGraph dataToday={dataToday} />
        <LineGraph dataToday={dataToday} latestDate={latestDate} />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
  },
});

export default DashboardScreen;
