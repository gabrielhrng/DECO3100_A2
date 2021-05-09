function makeplot() {
  Plotly.d3.csv("https://raw.githubusercontent.com/gabrielhrng/DECO3100_A2/main/a2/csv/israelchildmortality.csv", 
  function(data){ processData(data) } );

};
 
function processData(allRows) {

 console.log(allRows);
 var x = [], y = [];

 for (var i=0; i<allRows.length; i++) {
   row = allRows[i];
   x.push( row['year'] );
   y.push( row['mortality'] );
 }
 console.log( 'X',x, 'Y',y );
 makePlotly( x, y );
}

function makePlotly( x, y ){
//var plotDiv = document.getElementById("israelcm");
 var traces = [{
   x: x, 
   y: y
 }];
 

 Plotly.newPlot('israelcm', traces, 
   {title: 'Child Mortality Rate (1950-Now)'});
};
 makeplot();
