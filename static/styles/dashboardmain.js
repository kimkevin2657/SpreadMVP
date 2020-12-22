$(document).ready(function(){
    var postdata = {};
    postdata["stock"] = "^VIX";
    postdata['period'] = "max";
    postdata['interval'] = "1d";
    console.log(" post data   ", postdata);
    axios({
      method: 'post',
      url: '/historical',
      data: postdata,
      headers: {"Content-Type": "application/json"}
    }).then((data) => {
        var firstdata = [];
        var firstdataopen = [];
        var firstdatahigh = [];
        var firstdatalow = [];
        var firstdataclose = [];
        for (var i = data.data.date.length-1; i >= 0; i--){
            firstdata.push(data.data.date[i]);
            firstdataopen.push(data.data.open[i]);
            firstdatahigh.push(data.data.high[i]);
            firstdatalow.push(data.data.low[i]);
            firstdataclose.push(data.data.close[i]);
            
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
        var spreadname = "VIX";
        
        Highcharts.stockChart('tradingview_f6874', {
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
      var postdata2 = {};
      postdata2["stock"] = "^GSPC";
      postdata2['period'] = "max";
      postdata2['interval'] = "1d";
      console.log(" post data   ", postdata2);
      axios({
        method: 'post',
        url: '/historical',
        data: postdata2,
        headers: {"Content-Type": "application/json"}
      }).then((data2) => {
          var firstdata = [];
          var firstdataopen = [];
          var firstdatahigh = [];
          var firstdatalow = [];
          var firstdataclose = [];
          for (var i = data2.data.date.length-1; i >= 0; i--){
              firstdata.push(data2.data.date[i]);
              firstdataopen.push(data2.data.open[i]);
              firstdatahigh.push(data2.data.high[i]);
              firstdatalow.push(data2.data.low[i]);
              firstdataclose.push(data2.data.close[i]);
              
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
          var spreadname = "S&P";
          
          Highcharts.stockChart('tradingview_f6875', {
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
        var postdata2 = {};
        postdata2["stock"] = "^IXIC";
        postdata2['period'] = "max";
        postdata2['interval'] = "1d";
        console.log(" post data   ", postdata2);
        axios({
          method: 'post',
          url: '/historical',
          data: postdata2,
          headers: {"Content-Type": "application/json"}
        }).then((data3) => {
            var firstdata = [];
            var firstdataopen = [];
            var firstdatahigh = [];
            var firstdatalow = [];
            var firstdataclose = [];
            for (var i = data3.data.date.length-1; i >= 0; i--){
                firstdata.push(data3.data.date[i]);
                firstdataopen.push(data3.data.open[i]);
                firstdatahigh.push(data3.data.high[i]);
                firstdatalow.push(data3.data.low[i]);
                firstdataclose.push(data3.data.close[i]);
                
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
            var spreadname = "NASDAQ";
            
            Highcharts.stockChart('tradingview_f6876', {
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
          var postdata2 = {};
          postdata2["stock"] = "^DJI";
          postdata2['period'] = "max";
          postdata2['interval'] = "1d";
          console.log(" post data   ", postdata2);
          axios({
            method: 'post',
            url: '/historical',
            data: postdata2,
            headers: {"Content-Type": "application/json"}
          }).then((data4) => {
              var firstdata = [];
              var firstdataopen = [];
              var firstdatahigh = [];
              var firstdatalow = [];
              var firstdataclose = [];
              for (var i = data4.data.date.length-1; i >= 0; i--){
                  firstdata.push(data4.data.date[i]);
                  firstdataopen.push(data4.data.open[i]);
                  firstdatahigh.push(data4.data.high[i]);
                  firstdatalow.push(data4.data.low[i]);
                  firstdataclose.push(data4.data.close[i]);
                  
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
              var spreadname = "DOW";
              
              Highcharts.stockChart('tradingview_f8888', {
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
            var postdata2 = {};
            postdata2["stock"] = "FB";
            postdata2['period'] = "max";
            postdata2['interval'] = "1d";
            console.log(" post data   ", postdata2);
            axios({
              method: 'post',
              url: '/historical',
              data: postdata2,
              headers: {"Content-Type": "application/json"}
            }).then((data5) => {
                var firstdata = [];
                var firstdataopen = [];
                var firstdatahigh = [];
                var firstdatalow = [];
                var firstdataclose = [];
                for (var i = data5.data.date.length-1; i >= 0; i--){
                    firstdata.push(data5.data.date[i]);
                    firstdataopen.push(data5.data.open[i]);
                    firstdatahigh.push(data5.data.high[i]);
                    firstdatalow.push(data5.data.low[i]);
                    firstdataclose.push(data5.data.close[i]);
                    
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
                var spreadname = "Facebook";
                
                Highcharts.stockChart('tradingview_f6877', {
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
              var postdata2 = {};
              postdata2["stock"] = "AMZN";
              postdata2['period'] = "max";
              postdata2['interval'] = "1d";
              console.log(" post data   ", postdata2);
              axios({
                method: 'post',
                url: '/historical',
                data: postdata2,
                headers: {"Content-Type": "application/json"}
              }).then((data5) => {
                  var firstdata = [];
                  var firstdataopen = [];
                  var firstdatahigh = [];
                  var firstdatalow = [];
                  var firstdataclose = [];
                  for (var i = data5.data.date.length-1; i >= 0; i--){
                      firstdata.push(data5.data.date[i]);
                      firstdataopen.push(data5.data.open[i]);
                      firstdatahigh.push(data5.data.high[i]);
                      firstdatalow.push(data5.data.low[i]);
                      firstdataclose.push(data5.data.close[i]);
                      
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
                  var spreadname = "Amazon";
                  
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
                    
            
                var postdata2 = {};
                postdata2["stock"] = "AAPL";
                postdata2['period'] = "max";
                postdata2['interval'] = "1d";
                console.log(" post data   ", postdata2);
                axios({
                  method: 'post',
                  url: '/historical',
                  data: postdata2,
                  headers: {"Content-Type": "application/json"}
                }).then((data6) => {
                    var firstdata = [];
                    var firstdataopen = [];
                    var firstdatahigh = [];
                    var firstdatalow = [];
                    var firstdataclose = [];
                    for (var i = data6.data.date.length-1; i >= 0; i--){
                        firstdata.push(data6.data.date[i]);
                        firstdataopen.push(data6.data.open[i]);
                        firstdatahigh.push(data6.data.high[i]);
                        firstdatalow.push(data6.data.low[i]);
                        firstdataclose.push(data6.data.close[i]);
                        
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
                    var spreadname = "Apple";
                    
                    Highcharts.stockChart('tradingview_f6879', {
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
                  var postdata2 = {};
                  postdata2["stock"] = "NFLX";
                  postdata2['period'] = "max";
                  postdata2['interval'] = "1d";
                  console.log(" post data   ", postdata2);
                  axios({
                    method: 'post',
                    url: '/historical',
                    data: postdata2,
                    headers: {"Content-Type": "application/json"}
                  }).then((data7) => {
                      var firstdata = [];
                      var firstdataopen = [];
                      var firstdatahigh = [];
                      var firstdatalow = [];
                      var firstdataclose = [];
                      for (var i = data7.data.date.length-1; i >= 0; i--){
                          firstdata.push(data7.data.date[i]);
                          firstdataopen.push(data7.data.open[i]);
                          firstdatahigh.push(data7.data.high[i]);
                          firstdatalow.push(data7.data.low[i]);
                          firstdataclose.push(data7.data.close[i]);
                          
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
                      var spreadname = "Netflix";
                      
                      Highcharts.stockChart('tradingview_f6880', {
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
                    var postdata2 = {};
                    postdata2["stock"] = "GOOGL";
                    postdata2['period'] = "max";
                    postdata2['interval'] = "1d";
                    console.log(" post data   ", postdata2);
                    axios({
                      method: 'post',
                      url: '/historical',
                      data: postdata2,
                      headers: {"Content-Type": "application/json"}
                    }).then((data8) => {
                        var firstdata = [];
                        var firstdataopen = [];
                        var firstdatahigh = [];
                        var firstdatalow = [];
                        var firstdataclose = [];
                        for (var i = data8.data.date.length-1; i >= 0; i--){
                            firstdata.push(data8.data.date[i]);
                            firstdataopen.push(data8.data.open[i]);
                            firstdatahigh.push(data8.data.high[i]);
                            firstdatalow.push(data8.data.low[i]);
                            firstdataclose.push(data8.data.close[i]);
                            
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
                        var spreadname = "Alphabet";
                        
                        Highcharts.stockChart('tradingview_f6881', {
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
                }).catch((err) => console.log(err));
            }).catch((err) => console.log(err));
        }).catch((err) => console.log(err));
    }).catch((err) => console.log(err));
}).catch((err) => console.log(err));
        }).catch((err) => console.log(err));
    }).catch((err) => console.log(err));
}).catch((err) => console.log(err));
});



