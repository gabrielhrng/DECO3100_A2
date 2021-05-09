// Constant variable for storing color hex values
const lineColors = {
    green: "#44bb66",
    red: "#bb4466",
}

// Setup Plotly config as a const as we will reuse it for all charts
const config = {
    displayModeBar: false,
    responsive: true
}


// Variables storing the DOM elements to be used for each of the plots
const plotDiv = document.getElementById('vis1');


Plotly.d3.csv("https://raw.githubusercontent.com/gabrielhrng/DECO3100_A2/main/a2/csv/palestinechildmortality.csv", 

function(rows) {

    var trace0 = {
        type: "scatter",
        mode: "lines",
        name: 'child mortality',
        x: unpack(rows, 'year'),
        y: unpack(rows, 'mortality'),
        line: { color: lineColors.green }
    };

    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'population',
        x: unpack(rows, 'year'),
        y: unpack(rows, 'population'),
        line: { color: lineColors.red }
    };

    var data1 = [trace0, trace1];

    var layout1 = {
        title: 'weeeeeeeeee',
        grid: {
            rows: 2,
            columns: 1,
            roworder:'bottom to top'
          }
        };
    });

    Plotly.newPlot(plotDiv, data1, layout1, config);

    plot1Div.on('plotly_relayout',
        function(eventdata) {


            console.log(eventdata);

            var update;

            if (eventdata['xaxis.autorange']) {
                console.log("auto true");
                update = {
                    xaxis: {
                        autorange: true,
                        fixedrange: true,
                        rangeslider: {
                            visible: false
                        }
                    }
                }
            } else if (eventdata['xaxis.range']) {
                let xScaleStart = eventdata['xaxis.range'][0];
                let xScaleEnd = eventdata['xaxis.range'][1];

                update = {
                    xaxis: {
                        autorange: false,
                        fixedrange: true,
                        range: [xScaleStart, xScaleEnd],
                        rangeslider: {
                            visible: false
                        }
                    }
                }

            } else {
                let xScaleStart = eventdata['xaxis.range[0]'];
                let xScaleEnd = eventdata['xaxis.range[1]'];

                update = {
                    xaxis: {
                        autorange: false,
                        fixedrange: true,
                        range: [xScaleStart, xScaleEnd],
                        rangeslider: {
                            visible: false
                        }
                    }
                }

            }
        });


function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
}