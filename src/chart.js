// define all chart related methods here

import { line, axisLeft, axisBottom } from "d3";
import { margin, width, height } from "./defaults";

export const configureChart = svgElement => {
  svgElement
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);
};

export const definePath = scales => {
  return line()
    .x(d => scales.scaleX(d.date))
    .y(d => scales.scaleY(d.value));
};

export const drawPath = (element, data, scales) => {
  element
    .append("path")
    .datum(data)
    .attr("d", definePath(scales))
    .attr("class", "path-value");
};

export const drawAxis = (element, scales) => {
  element
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(axisBottom(scales.scaleX));

  element
    .append("g")
    .call(axisLeft(scales.scaleY));
};

export const drawHeadline = element => {
  element
    .append("text")
    .attr("x", (width + margin.left + margin.right) / 2)
    .attr("y", 0 + margin.top / 2)
    .attr("class", "headline")
    .attr("text-anchor", "middle")
    .text("Example Headline");
};
