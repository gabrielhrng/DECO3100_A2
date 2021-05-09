var data = [{
    values: [75, 17.8, 2, 1.6, 3.7],
    labels: ['Judaism', 'Muslim', 'Christianity','Druze','Other'],
    type: 'pie',
    marker: {
      'colors': [
        'rgb(255, 108, 0)',
        'rgb(255, 158, 22)',
        'rgb(241, 211, 117)',
        'rgb(218, 214, 173)',
        'rgb(221, 221, 87)',
        ]
      } 
     }];
  var layout = {
    height: 400,
    width: 500
  };
  
  Plotly.newPlot('israelpie', data, layout);