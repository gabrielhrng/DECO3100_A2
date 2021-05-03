var plotDiv = document.getElementById('myPlot1');
  var trace1 = {
    x: ['Judaism', 'Muslim', 'Christianity','Druze','Other'],
    y: [75, 17.8, 2, 1.6, 3.7],
    marker:{
        color: [ 'rgba(255,165,0,0.8)', 'rgba(204,204,204,1)','rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)']
      },
    type: 'bar'
    
  };

  var data = [trace1];
  
  var layout = {barmode: 'group'};
  
  Plotly.newPlot('israelreligion', data, layout);