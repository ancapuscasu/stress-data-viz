/**
 * Component that displays a horizontal bar graph showing time (in minutes) spent in each anxiety
 * state on the day of the last retrieved log.
 */
import React from "react";
import { StyleSheet } from "react-native";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
} from "victory-native";

import GraphContainer from "./GraphContainer";
import AppText from "./AppText";
import colors from "../config/colors";

function HorizontalBarGraph({ dataToday }) {
  const minsNormal = dataToday.filter(
    (sample) => sample.anxietyState === "NORMAL"
  ).length;

  const minsLow = dataToday.filter(
    (sample) => sample.anxietyState === "LOW"
  ).length;

  const minsMedium = dataToday.filter(
    (sample) => sample.anxietyState === "MEDIUM"
  ).length;

  const minsHigh = dataToday.filter(
    (sample) => sample.anxietyState === "HIGH"
  ).length;

  return (
    <GraphContainer style={styles.container}>
      <AppText style={styles.dayHeading}>Today</AppText>
      <AppText style={styles.text}>Time spent in each anxiety state</AppText>
      <VictoryChart
        width={350}
        height={200}
        domainPadding={12}
        theme={VictoryTheme.material}
        padding={{ bottom: 30, left: 80, right: 60, top: 30 }}
      >
        <VictoryBar
          labels={[
            `${minsNormal} mins`,
            `${minsLow} mins`,
            `${minsMedium} mins`,
            `${minsHigh} mins`,
          ]}
          animate={{
            duration: 1000,
            onEnter: { duration: 1000 },
          }}
          style={{
            data: {
              fill: ({ datum }) => datum.fill,
              stroke: colors.mediumGrey,
              fillOpacity: 0.8,
              strokeWidth: 1,
            },
            labels: {
              fontSize: 13,
              fill: colors.darkGrey,
            },
          }}
          horizontal
          barWidth={25}
          data={[
            { x: "Normal", y: minsNormal, fill: "#318335" },
            { x: "Low", y: minsLow, fill: "#e3d714" },
            { x: "Medium", y: minsMedium, fill: "#e39314" },
            { x: "High", y: minsHigh, fill: colors.redGra },
          ]}
        />
        <VictoryAxis
          style={{
            grid: { stroke: "transparent" },
            tickLabels: {
              fontSize: 14,
              fontWeight: "500",
            },
          }}
        />
      </VictoryChart>
    </GraphContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  dayHeading: {
    fontWeight: "bold",
    paddingTop: 30,
  },
  text: {
    fontSize: 16,
    paddingTop: 10,
    fontWeight: "bold",
  },
});
export default HorizontalBarGraph;
