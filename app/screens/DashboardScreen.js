/**
 * DashboardScreen component displays components: Header, CurrentState, HorizontalBarGraph, LineGraph
 * Imports userData from assets and passes data as props to child components
 */
import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import moment from "moment";

import userData from "../assets/userData.json";
import Header from "../Components/Header";
import CurrentState from "../Components/CurrentState";
import HorizontalBarGraph from "../Components/HorizontalBarGraph";
import Screen from "../Components/Screen";
import colors from "../config/colors";
import LineGraph from "../Components/LineGraph";

function DashboardScreen() {
  // Most recent object (log) from userData
  let lastLog = userData[0];

  console.log(lastLog);

  // Function to parse ISO datetime - returns date as string in "YYYY-MM-DD" format
  function parseLogDate(log) {
    return moment(log.createdAt.$date).utc().format("YYYY-MM-DD");
  }

  //Data Latest Day
  //Function to parse the latest date - returns date as string in "YYYY-MM-DD" format
  const latestDate = parseLogDate(lastLog);

  //Function to filter userData to get all logs that match latestDate - returns array of logs
  const dataToday = userData.filter((log) => parseLogDate(log) === latestDate);

  // console.log(dataLatestDateMinusThree);
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
