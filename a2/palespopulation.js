
    Plotly.d3.csv("https://raw.githubusercontent.com/gabrielhrng/DECO3100_A2/main/a2/csv/palestinepop.csv", 
    function(data4){ processData4(data4) } );

   
  function processData4(allRows) {
  
   console.log(allRows);
   var x4 = [], y4 = [];
  
   for (var i=0; i<allRows.length; i++) {
     row = allRows[i];
     x4.push( row['year4'] );
     y4.push( row['population4'] );
   }

   makePlotly4( x4, y4 );
  }
  
  function makePlotly4( x4, y4 ){

   var traces = [{
     x: x4, 
     y: y4
   }];
   
  
   Plotly.newPlot('palestinepop', traces, 
     {title: 'Population of Palestine (1950-Now)'});
  };
