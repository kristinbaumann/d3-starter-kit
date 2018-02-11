// define all data related methods here

import { csv, timeParse } from 'd3';

export const getData = callback => {
    csv("../data/data.csv", (error, data) => {
        if (error) throw error;

        const result = data.map(d => {
              return { 
                date: timeParse("%Y")(d.date), 
                value: +d.value 
              };
        });

        callback(result); 
    });
}