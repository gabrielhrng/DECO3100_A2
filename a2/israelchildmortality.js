function makeplot1() {
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
 makePlotly1( x, y );
}

function makePlotly1( x, y ){
 var plotDiv1 = document.getElementById("israelcm");
 var traces = [{
   x: x, 
   y: y
 }];
 

 Plotly.newPlot('israelcm', traces, 
   {title: 'CHILD MORTALITY'});
};
 makeplot1();