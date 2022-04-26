import React from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryAxis,
  VictoryPortal,
  VictoryLabel,
} from "victory-native";
import moment from "moment";
import { StyleSheet } from "react-native";

import GraphContainer from "./GraphContainer";
import AppText from "./AppText";
import colors from "../config/colors";

function LineGraph({ dataToday, latestDate }) {
  //Adjusting for time zone (-5 hours)
  const xRange0 = new Date(moment(latestDate).add(-5, "hour"));
  const xRange1 = new Date(moment(latestDate).add(19, "hour"));

  return (
    <GraphContainer style={styles.container}>
      <AppText style={styles.text}>Anxiety level throughout the day</AppText>
      <VictoryChart
        width={370}
        height={300}
        theme={VictoryTheme.material}
        scale={{ x: "time" }}
        domain={{ x: [xRange0, xRange1] }}
      >
        <VictoryLine
          data={dataToday}
          x={(d) => new Date((d = d.createdAt.$date))}
          y="anxietyLevel"
          style={{
            data: { stroke: colors.orange },
            parent: { border: "1px solid #ccc" },
          }}
        />

        <VictoryAxis
          tickFormat={(x) => moment(x).utc().format("HH:mm")}
          //   fixLabelOverlap={true}
          tickCount={10}
          style={{
            grid: { stroke: "transparent" },
            tickLabels: {
              fontSize: 14,
              fontWeight: "500",
              angle: -45,
            },
          }}
        />
        <VictoryAxis
          dependentAxis
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
  text: {
    fontSize: 16,
    paddingTop: 30,
    fontWeight: "bold",
  },
});

export default LineGraph;
