/**
 * Component that displays currentBpm over time on the day of the last retrieved log.
 * Data is smoothed using a moving average filter.
 *
 */
import React from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryAxis,
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

  /**
   * Moving average filter
   *
   * for each timepoint, get the average heart rate in 5 minute window around that time.
   * By averaging multiple datapoints, we get a more reliable measurement, and a smoother plot.
   */
  dataToday.forEach(smooth);

  function smooth(item, index, arr) {
    // get time boundaries of 5 min window
    const timeNow = item.time;
    const time0 = timeNow - 150000;
    const time1 = timeNow + 150000;

    //
    const window = arr.filter(
      (sample) => sample.time > time0 && sample.time <= time1
    );
    if (window.length >= 3) {
      const average =
        window.reduce((total, next) => total + next.currentBpm, 0) /
        window.length;
      arr[index].smooth = average;
    } else {
      arr[index].smooth = null;
    }
  }

  return (
    <GraphContainer style={styles.container}>
      <AppText style={styles.dayHeading}>Today</AppText>
      <AppText style={styles.text}>Heart rate throughout the day</AppText>
      <VictoryChart
        width={370}
        height={300}
        theme={VictoryTheme.material}
        scale={{ x: "time" }}
        domain={{ x: [xRange0, xRange1] }}
      >
        <VictoryLine
          data={dataToday}
          x="time"
          y="smooth"
          style={{
            data: { stroke: colors.orange },
            parent: { border: "1px solid #ccc" },
          }}
        />

        <VictoryAxis
          tickValues={[
            moment(latestDate).add(-5, "h"),
            moment(latestDate).add(7, "h"),
            moment(latestDate).add(18, "h").add(59, "m"),
          ]}
          tickFormat={(x) => moment(x).utc().format("HH:mm")}
          //   fixLabelOverlap={true}

          style={{
            grid: { stroke: "transparent" },
            tickLabels: {
              fontSize: 14,
              fontWeight: "500",
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

export default LineGraph;
