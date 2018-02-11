import { select } from "d3";
import "./style.scss";
import { margin } from "./defaults";
import { getData } from "./data";
import {
  configureChart,
  drawPath,
  drawAxis,
  drawHeadline,
} from "./chart";
import { configureScales } from "./scales";

// create svg container element
const svgContainer = select("#chart").append("svg");

// set width and height of chart
configureChart(svgContainer);

// get data
getData(data => {
  // set the scales based on data
  const scales = configureScales(data);

  // create svg group
  const svgGroup = svgContainer
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // draw line from data  
  drawPath(svgGroup, data, scales);

  // draw the x and y axis
  drawAxis(svgGroup, scales);

  // draw headline
  drawHeadline(svgContainer);
});
