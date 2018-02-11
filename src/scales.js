// define all scale related methods here

import { scaleLinear, scaleTime, extent } from "d3";
import { width, height } from "./defaults";

export const configureScales = data => {
  const scaleX = scaleTime()
    .range([0, width])
    .domain(extent(data, d => d.date));

  const scaleY = scaleLinear()
    .range([height, 0])
    .domain(extent(data, d => +d.value));

  return { scaleX, scaleY };
};
