var data = [{
    values: [14, 85, 2.5,1],
    labels: ['Judaism', 'Muslim', 'Christianity','Other'],
    type: 'pie',
    marker: {
      'colors': [
        'rgb(255, 108, 0)',
        'rgb(255, 158, 22)',
        'rgb(241, 211, 117)',
        'rgb(218, 214, 173)',
        ]
      } 
     }];
  var layout = {
    height: 400,
    width: 500
  };
  
  Plotly.newPlot('palestinepie', data, layout);