$(document).ready(function(){
    $("#AMAZONsearch").click(function(){
        var period = $("#AMAZON").val();
        var period2 = "1d";
        if (period == "daily"){
            period2 = "1d";
        }
        if (period == "weekly"){
            period2 = "1wk";
        }
        var postdata = {};
        postdata["stock"] = "AMZN";
        postdata['period'] = "max";
        postdata['interval'] = period2;
        console.log(" post data   ", postdata);
        axios({
          method: 'post',
          url: '/historical',
          data: postdata,
          headers: {"Content-Type": "application/json"}
        }).then((data2) => {
            var data = JSON.parse(data2.data);
            var firstdata = [];
            var firstdataopen = [];
            var firstdatahigh = [];
            var firstdatalow = [];
            var firstdataclose = [];
            for (var i = data.date.length-1; i >= 0; i--){
                firstdata.push(data.date[i]);
                firstdataopen.push(data.open[i]);
                firstdatahigh.push(data.high[i]);
                firstdatalow.push(data.low[i]);
                firstdataclose.push(data.close[i]);
                
                if (firstdata.length >= 3650){
                    break;
                }
                
            }
            firstdata.reverse();
            firstdataopen.reverse();
            firstdatahigh.reverse();
            firstdatalow.reverse();
            firstdataclose.reverse();
    
            var chartdata = [];
            for (var i = 0; i < firstdata.length; i++){
              chartdata.push([firstdata[i]*1000, firstdataclose[i]]);
              // spreadopen[i], spreadhigh[i], spreadlow[i], 
            }
    
            console.log("chart data   ", chartdata);
    
            var chartdata2 = [];
            for (var i = chartdata.length-1; i >= 0; i--){
                chartdata2.push(chartdata[i]);
                if (chartdata2.length >= 365){
                  break;
                }
            }
            chartdata2.reverse();
            var spreadname = "AMAZON";
            
            Highcharts.stockChart('tradingview_f6878', {
              navigation: {
                  bindings: {
                      rect: {
                          annotationsOptions: {
                              shapeOptions: {
                                  fill: 'rgba(255, 0, 0, 0.8)'
                              }
                          }
                      }
                  },
                  annotationsOptions: {
                      typeOptions: {
                          line: {
                              stroke: 'rgba(255, 0, 0, 1)',
                              strokeWidth: 10
                          }
                      }
                  }
              },
              yAxis: [{
                  labels: {
                      align: 'left'
                  },
                  height: '80%'
              }, {
                  labels: {
                      align: 'left'
                  },
                  top: '80%',
                  height: '20%',
                  offset: 0
              }],
              series: [{
                  type: 'line',
                  id: 'spread-ohlc',
                  name: spreadname,
                  data: chartdata2
              }
              /* {
                  type: 'column',
                  id: 'aapl-volume',
                  name: 'AAPL Volume',
                  data: volume,
                  yAxis: 1
              }
              */
              
              ]
            });

        }).catch((err) => console.log(err));
    });
});