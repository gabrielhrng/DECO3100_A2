
    Plotly.d3.csv("https://raw.githubusercontent.com/gabrielhrng/DECO3100_A2/main/a2/csv/palestinechildmortality.csv", 
    function(data3){ processData3(data3) } );

   
  function processData3(allRows) {
  
   console.log(allRows);
   var x3 = [], y3 = [];
  
   for (var i=0; i<allRows.length; i++) {
     row = allRows[i];
     x3.push( row['year2'] );
     y3.push( row['mortality2'] );
   }

   makePlotly3( x3, y3 );
  }
  
  function makePlotly3( x3, y3 ){

   var traces = [{
     x: x3, 
     y: y3
   }];
   
  
   Plotly.newPlot('palestinecm', traces, 
     {title: 'Child Mortality Rate (1950-Now)'});
  };
