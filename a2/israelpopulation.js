
const lineColors = {
    green: "#44bb66",
}

Plotly.d3.csv("https://raw.githubusercontent.com/gabrielhrng/DECO3100_A2/main/a2/csv/israelpop.csv", 
    function(data1){ processData1(data1) } );

    var traces = {
        type: "scatter",
        mode: "lines",
        name: 'Israel Population',
        x: unpack(rows, 'label'),
        y: unpack(rows, 'Total Population'),
        line: { color: lineColors.green }
    }
    
function processData1(allRows) {

console.log(allRows);
var x1= [], y1 = [];

for (var i=0; i<allRows.length; i++) {
    row = allRows[i];
    x1.push( row['label'] );
    y1.push( row['Total Population'] );
    
    
}
makePlotly1( x1, y1 );

}

function makePlotly1( x1, y1 ){

var traces = [{
    x: x1, 
    y: y1
    
}];

Plotly.newPlot('israelpop', traces, 
    {title: 'Population of Israel (1950-Now)'});
};
