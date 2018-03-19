import echarts from 'echarts'
import CountUp from '../../../static/js/countUp'
export default {
  data() {
    return {
      selected: "1",
      avgPercent: 0,
      resident: 0,
      nonResident: 0,
      contractLine: null,
      contractLineData: [],
      customerStatus: true,
      satisfaction: 0,
      promptness: 0,
      customerLine: null,
      customerLineData: [],
      countPie: null,
      countPieData: [],
      satisfactionData: [],
      promptnessData: [],
      waterPie: null,
      waterName: "",
      waterCount: 0,
      waterData: [],
      waterStatus: 0,
      newClothes: 0,
      repair: 0,
      complaint: 0,
      report: 0,
      newClothesPer: 0,
      repairPer: 0,
      complaintPer: 0,
      reportPer: 0,
      followPie: null,
      bindingPie: null,
      readPie: null,
      publicNumberData: [],
      publicNumberLineData: [],
      followRate: 0,
      followNum: 0,
      bindingRate: 0,
      bindingNum: 0,
      readRate: 0,
      readNum: 0,
      legend: "",
      customerLegend: "",
      first: true
    }
  },
  methods: {
    drawContractLine() {
      let month = []
      let contractLineData1 = []
      let contractLineData2 = []
      this.contractLineData.map(item => {
        month.push(item.month)
        contractLineData1.push(item.resident)
        contractLineData2.push(item.nonResident)
      })
      this.contractLine.setOption({
        xAxis: {
          data: month,
          type: 'category',
          boundaryGap: false,
        },
        axisLabel: {
          color: "#fff"
        },
        grid: {
          x: 0,
          x2: 0,
          y: 20,
          y2: 0
        },
        tooltip: {
          trigger: "item",
          formatter: "{c} 亿"
        },
        yAxis: {
          splitLine: {
            show: false
          }
        },
        series: [{
          type: "line",
          smooth: true,
          symbol: 'none',
          areaStyle: { type: 'default' },
          data: contractLineData1,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: 'rgba(178,39,255,.6)'
                },
                {
                  offset: 1,
                  color: 'rgba(0,245,255,.6)'
                }
              ], false)
            }
          }
        }, {
          type: "line",
          smooth: true,
          symbol: 'none',
          areaStyle: { type: 'default' },
          data: contractLineData2,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: 'rgba(255,62,115,.6)'
                },
                {
                  offset: 1,
                  color: 'rgba(242,211,101,.6)'
                }
              ], false)
            }
          }
        }]
      });
    },
    drawCustomerLine() {
      let month = []
      let satisfactionCount = []
      this.customerLineData.map(item => {
        month.push(item.month)
        satisfactionCount.push(item.count)
      })
      this.customerLine.setOption({
        xAxis: {
          data: month,
          type: 'category',
          boundaryGap: false,
        },
        axisLabel: {
          color: "#fff"
        },
        grid: {
          x: 0,
          x2: 0,
          y: 18,
          y2: 0
        },
        tooltip: {
          trigger: "item",
          formatter: "{c} 亿"
        },
        yAxis: {
          splitLine: {
            show: false
          }
        },
        series: [{
          type: "line",
          smooth: true,
          symbol: 'none',
          areaStyle: { type: 'default' },
          data: satisfactionCount,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: 'rgba(178,39,255,.6)'
                },
                {
                  offset: 1,
                  color: 'rgba(0,245,255,.6)'
                }
              ], false)
            }
          }
        }]
      });
    },
    drawTargetPie(count) {
      this.countPie.setOption({
        title: {
          text: this.customerStatus ? '客户满意度\n\n' : '舆情监测办\n结及时率\n\n',
          textStyle: {
            fontSize: 16,
            color: '#fff'
          },
          subtext: this.customerStatus ? count + '%\n\n' : count + '%\n\n\n',
          subtextStyle: {
            fontSize: 34,
            color: '#fff'
          },
          x: 'center',
          y: 'center'
        },
        series: [{
          name: '值',
          type: 'pie',
          clockWise: true, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          radius: [70, 70],
          center: 'center',
          startAngle: 60,
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              barBorderRadius: 10
            }
          },
          data: [{
              value: 100 - count,
              itemStyle: {
                normal: {
                  borderWidth: 8,
                  borderColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#7065ef' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#e665a1' // 100% 处的颜色
                      }
                    ],
                    globalCoord: false // 缺省为 false
                  }
                }
              }
            },
            {
              value: count,
              itemStyle: {
                normal: {
                  borderWidth: 16,
                  borderColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#21a5de' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#27cbd3' // 100% 处的颜色
                      }
                    ],
                    globalCoord: false // 缺省为 false
                  }
                }
              }
            }
          ]
        }]
      })
    },
    drawWaterPie(name, count) {
      this.waterPie.setOption({
        title: {
          text: name + "\n",
          textStyle: {
            fontSize: 18,
            color: '#fff'
          },
          subtext: count + "%\n\n",
          subtextStyle: {
            fontSize: 26,
            color: '#fff'
          },
          x: 'center',
          y: 'center'
        },
        series: [{
          name: '值',
          type: 'pie',
          clockWise: true, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          radius: [80, 80],
          center: 'center',
          startAngle: 60,
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              barBorderRadius: 10
            }
          },
          data: [{
              value: 100 - count,
              itemStyle: {
                normal: {
                  borderWidth: 10,
                  borderColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#7065ef' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#e665a1' // 100% 处的颜色
                      }
                    ],
                    globalCoord: false // 缺省为 false
                  }
                }
              }
            },
            {
              value: count,
              itemStyle: {
                normal: {
                  borderWidth: 20,
                  borderColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#21a5de' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#27cbd3' // 100% 处的颜色
                      }
                    ],
                    globalCoord: false // 缺省为 false
                  }
                }
              }
            }
          ]
        }]
      })
    },
    drawFollowPie() {
      this.followPie.setOption({
        title: {
          text: this.followRate + "%",
          textStyle: {
            fontSize: 22,
            color: '#fff'
          },
          x: 'center',
          y: 'center'
        },
        series: [{
          name: '值',
          type: 'pie',
          clockWise: true, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          radius: [45, 45],
          center: 'center',
          startAngle: 60,
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              barBorderRadius: 10
            }
          },
          data: [{
              value: 100 - this.followRate,
              itemStyle: {
                normal: {
                  borderWidth: 8,
                  borderColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#21a5de' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#27cbd3' // 100% 处的颜色
                      }
                    ],
                    globalCoord: false // 缺省为 false
                  }
                }
              }
            },
            {
              value: this.followRate,
              itemStyle: {
                normal: {
                  borderWidth: 16,
                  borderColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#b227ff' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#00f5ff' // 100% 处的颜色
                      }
                    ],
                    globalCoord: false // 缺省为 false
                  }
                }
              }
            }
          ]
        }]
      })
    },
    drawBindingPie() {
      this.bindingPie.setOption({
        title: {
          text: this.bindingRate + "%",
          textStyle: {
            fontSize: 22,
            color: '#fff'
          },
          x: 'center',
          y: 'center'
        },
        series: [{
          name: '值',
          type: 'pie',
          clockWise: true, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          radius: [45, 45],
          center: 'center',
          startAngle: 60,
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              barBorderRadius: 10
            }
          },
          data: [{
              value: 100 - this.bindingRate,
              itemStyle: {
                normal: {
                  borderWidth: 8,
                  borderColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#21a5de' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#27cbd3' // 100% 处的颜色
                      }
                    ],
                    globalCoord: false // 缺省为 false
                  }
                }
              }
            },
            {
              value: this.bindingRate,
              itemStyle: {
                normal: {
                  borderWidth: 16,
                  borderColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#ff3e73' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#f2d365' // 100% 处的颜色
                      }
                    ],
                    globalCoord: false // 缺省为 false
                  }
                }
              }
            }
          ]
        }]
      })
    },
    drawReadPie() {
      this.readPie.setOption({
        title: {
          text: this.readRate + "%",
          textStyle: {
            fontSize: 22,
            color: '#fff'
          },
          x: 'center',
          y: 'center'
        },
        series: [{
          name: '值',
          type: 'pie',
          clockWise: true, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          radius: [45, 45],
          center: 'center',
          startAngle: 60,
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              barBorderRadius: 10
            }
          },
          data: [{
              value: 100 - this.readRate,
              itemStyle: {
                normal: {
                  borderWidth: 8,
                  borderColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#21a5de' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#27cbd3' // 100% 处的颜色
                      }
                    ],
                    globalCoord: false // 缺省为 false
                  }
                }
              }
            },
            {
              value: this.readRate,
              itemStyle: {
                normal: {
                  borderWidth: 16,
                  borderColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#dd64ff' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#fb2163' // 100% 处的颜色
                      }
                    ],
                    globalCoord: false // 缺省为 false
                  }
                }
              }
            }
          ]
        }]
      })
    },
    drawPublicNumberLine() {
      let month = []
      this.publicNumberData.map(item => {
        month.push(item.month)
      })
      this.publicNumberLine.setOption({
        xAxis: {
          data: month,
          type: 'category',
          boundaryGap: false,
        },
        axisLabel: {
          color: "#fff"
        },
        grid: {
          x: 0,
          x2: 0,
          y: 20,
          y2: 0
        },
        tooltip: {
          trigger: "item",
          formatter: "{c} 亿"
        },
        yAxis: {
          splitLine: {
            show: false
          }
        },
        series: [{
          type: "line",
          smooth: true,
          symbol: 'none',
          areaStyle: { type: 'default' },
          data: this.publicNumberLineData,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: 'rgba(178,39,255,.4)'
                },
                {
                  offset: 1,
                  color: 'rgba(0,245,255,.4)'
                }
              ], false)
            }
          }
        }]
      });
    },
    getContractLineData() {
      this.contractLineData = [{
        month: "一月",
        isActive: false,
        resident: 84,
        nonResident: 74
      }, {
        month: "二月",
        isActive: false,
        resident: 63,
        nonResident: 83
      }, {
        month: "三月",
        isActive: false,
        resident: 75,
        nonResident: 82
      }, {
        month: "四月",
        isActive: false,
        resident: 63,
        nonResident: 73
      }, {
        month: "五月",
        isActive: false,
        resident: 86,
        nonResident: 76
      }, {
        month: "六月",
        isActive: false,
        resident: 82,
        nonResident: 92
      }, {
        month: "七月",
        isActive: false,
        resident: 84,
        nonResident: 74
      }, {
        month: "八月",
        isActive: false,
        resident: 65,
        nonResident: 75
      }, {
        month: "九月",
        isActive: false,
        resident: 84,
        nonResident: 64
      }, {
        month: "十月",
        isActive: false,
        resident: 76,
        nonResident: 86
      }, {
        month: "十一月",
        isActive: false,
        resident: 82,
        nonResident: 82
      }, {
        month: "十二月",
        isActive: false,
        resident: 85,
        nonResident: 75
      }]
      let date = new Date()
      let month = date.getMonth() + 1
      if (this.contractLineData.length != 0 && this.contractLineData.length >= month) {
        this.resident = this.contractLineData[month - 1].resident
        this.nonResident = this.contractLineData[month - 1].nonResident
        this.avgPercent = (this.resident + this.nonResident) / 2
        this.contractLineData[month - 1].isActive = true
      } else if (this.contractLineData.length != 0) {
        this.resident = this.contractLineData[0].resident
        this.nonResident = this.contractLineData[0].nonResident
        this.avgPercent = (this.resident + this.nonResident) / 2
        this.contractLineData[0].isActive = true
      }
      this.jumpNumber("contract")
    },
    getCustomerLineData() {
      this.satisfactionData = [{
        month: "一月",
        isActive: false,
        count: 96
      }, {
        month: "二月",
        isActive: false,
        count: 80
      }, {
        month: "三月",
        isActive: false,
        count: 61
      }, {
        month: "四月",
        isActive: false,
        count: 70
      }, {
        month: "五月",
        isActive: false,
        count: 88
      }, {
        month: "六月",
        isActive: false,
        count: 79
      }, {
        month: "七月",
        isActive: false,
        count: 84
      }, {
        month: "八月",
        isActive: false,
        count: 94
      }, {
        month: "九月",
        isActive: false,
        count: 83
      }, {
        month: "十月",
        isActive: false,
        count: 72
      }, {
        month: "十一月",
        isActive: false,
        count: 84
      }, {
        month: "十二月",
        isActive: false,
        count: 91
      }]
      this.promptnessData = [{
        month: "一月",
        isActive: false,
        count: 70
      }, {
        month: "二月",
        isActive: false,
        count: 86
      }, {
        month: "三月",
        isActive: false,
        count: 76
      }, {
        month: "四月",
        isActive: false,
        count: 85
      }, {
        month: "五月",
        isActive: false,
        count: 75
      }, {
        month: "六月",
        isActive: false,
        count: 96
      }, {
        month: "七月",
        isActive: false,
        count: 81
      }, {
        month: "八月",
        isActive: false,
        count: 86
      }, {
        month: "九月",
        isActive: false,
        count: 74
      }, {
        month: "十月",
        isActive: false,
        count: 93
      }, {
        month: "十一月",
        isActive: false,
        count: 79
      }, {
        month: "十二月",
        isActive: false,
        count: 87
      }]
    },
    getWaterData() {
      this.waterData = [{
        month: "一月",
        newClothes: 3543,
        repair: 23,
        complaint: 134,
        report: 12
      }, {
        month: "二月",
        newClothes: 3206,
        repair: 16,
        complaint: 102,
        report: 8
      }, {
        month: "三月",
        newClothes: 3214,
        repair: 34,
        complaint: 201,
        report: 10
      }, {
        month: "四月",
        newClothes: 3460,
        repair: 26,
        complaint: 132,
        report: 20
      }, {
        month: "五月",
        newClothes: 3333,
        repair: 34,
        complaint: 152,
        report: 20
      }, {
        month: "六月",
        newClothes: 3543,
        repair: 23,
        complaint: 134,
        report: 12
      }, {
        month: "七月",
        newClothes: 3214,
        repair: 34,
        complaint: 201,
        report: 10
      }, {
        month: "八月",
        newClothes: 3546,
        repair: 33,
        complaint: 234,
        report: 2
      }, {
        month: "九月",
        newClothes: 3460,
        repair: 26,
        complaint: 132,
        report: 20
      }, {
        month: "十月",
        newClothes: 3214,
        repair: 34,
        complaint: 201,
        report: 10
      }, {
        month: "十一月",
        newClothes: 3214,
        repair: 34,
        complaint: 201,
        report: 10
      }, {
        month: "十二月",
        newClothes: 3333,
        repair: 34,
        complaint: 152,
        report: 20
      }]
    },
    getPublicNumberData() {
      this.publicNumberData = [{
        month: "一月",
        isActive: false,
        followRate: 88,
        followNum: 1315,
        bindingRate: 79,
        bindingNum: 646,
        readRate: 81,
        readNum: 769
      }, {
        month: "二月",
        isActive: false,
        followRate: 83,
        followNum: 1215,
        bindingRate: 89,
        bindingNum: 746,
        readRate: 74,
        readNum: 669
      }, {
        month: "三月",
        isActive: false,
        followRate: 82,
        followNum: 1415,
        bindingRate: 71,
        bindingNum: 846,
        readRate: 89,
        readNum: 969
      }, {
        month: "四月",
        isActive: false,
        followRate: 86,
        followNum: 1175,
        bindingRate: 89,
        bindingNum: 736,
        readRate: 87,
        readNum: 829
      }, {
        month: "五月",
        isActive: false,
        followRate: 94,
        followNum: 1315,
        bindingRate: 74,
        bindingNum: 716,
        readRate: 89,
        readNum: 889
      }, {
        month: "六月",
        isActive: false,
        followRate: 84,
        followNum: 1115,
        bindingRate: 73,
        bindingNum: 546,
        readRate: 91,
        readNum: 669
      }, {
        month: "七月",
        isActive: false,
        followRate: 82,
        followNum: 1215,
        bindingRate: 71,
        bindingNum: 846,
        readRate: 89,
        readNum: 969
      }, {
        month: "八月",
        isActive: false,
        followRate: 88,
        followNum: 1315,
        bindingRate: 79,
        bindingNum: 646,
        readRate: 81,
        readNum: 769
      }, {
        month: "九月",
        isActive: false,
        followRate: 82,
        followNum: 1415,
        bindingRate: 71,
        bindingNum: 846,
        readRate: 89,
        readNum: 969
      }, {
        month: "十月",
        isActive: false,
        followRate: 88,
        followNum: 1315,
        bindingRate: 79,
        bindingNum: 646,
        readRate: 81,
        readNum: 769
      }, {
        month: "十一月",
        isActive: false,
        followRate: 94,
        followNum: 1015,
        bindingRate: 74,
        bindingNum: 716,
        readRate: 89,
        readNum: 889
      }, {
        month: "十二月",
        isActive: false,
        followRate: 84,
        followNum: 1415,
        bindingRate: 73,
        bindingNum: 546,
        readRate: 91,
        readNum: 669
      }]
      let date = new Date();
      let curMonth = date.getMonth();
      if (this.publicNumberData.lenth != 0) {
        this.followRate = this.publicNumberData[curMonth].followRate;
        this.followNum = this.publicNumberData[curMonth].followNum;
        this.bindingRate = this.publicNumberData[curMonth].bindingRate;
        this.bindingNum = this.publicNumberData[curMonth].bindingNum;
        this.readRate = this.publicNumberData[curMonth].readRate;
        this.readNum = this.publicNumberData[curMonth].readNum;
        this.publicNumberData[curMonth].isActive = true;
        this.legend = "关注数";
      }
      this.drawFollowPie()
      this.drawBindingPie()
      this.drawReadPie()
    },
    changeWaterData(index) {
      if (index != undefined) {
        this.waterStatus = index;
      }
      let date = new Date();
      let curMonth = date.getMonth();
      this.newClothes = this.waterData[curMonth].newClothes;
      this.repair = this.waterData[curMonth].repair;
      this.complaint = this.waterData[curMonth].complaint;
      this.report = this.waterData[curMonth].report;
      this.newClothesPer = parseFloat((this.waterData[curMonth].newClothes / this.waterData[curMonth - 1].newClothes * 100).toFixed(2));
      this.repairPer = parseFloat((this.waterData[curMonth].repair / this.waterData[curMonth - 1].repair * 100).toFixed(2));
      this.complaintPer = parseFloat((this.waterData[curMonth].complaint / this.waterData[curMonth - 1].complaint * 100).toFixed(2));
      this.reportPer = parseFloat((this.waterData[curMonth].report / this.waterData[curMonth - 1].report * 100).toFixed(2));
      if (this.newClothesPer > 100) { this.newClothesPer = 100 }
      if (this.repairPer > 100) { this.repairPer = 100 }
      if (this.complaintPer > 100) { this.complaintPer = 100 }
      if (this.reportPer > 100) { this.reportPer = 100 }
      if (this.waterStatus == 0) {
        this.waterName = "新装环比";
        this.waterCount = this.newClothesPer;
      } else if (this.waterStatus == 1) {
        this.waterName = "保修环比";
        this.waterCount = this.repairPer;
      } else if (this.waterStatus == 2) {
        this.waterName = "投诉环比";
        this.waterCount = this.complaintPer;
      } else if (this.waterStatus == 3) {
        this.waterName = "监督举报环比";
        this.waterCount = this.reportPer;
      }
      this.drawWaterPie(this.waterName, this.waterCount)
    },
    changeData(elem) {
      let date = new Date()
      let month = date.getMonth() + 1
      if (elem != undefined) {
        this.customerStatus = elem
      }
      //true--客户满意度，false--舆情监测办结及时率
      this.customerStatus ? this.customerLegend = "客户满意度" : this.customerLegend = "舆情监测办结及时率"
      if (this.customerStatus) {
        this.customerLineData = this.satisfactionData;
        //如果当前月份有数据，默认显示当前数据。
        if (this.customerLineData.length != 0 && this.customerLineData.length >= month) {
          this.satisfaction = this.customerLineData[month - 1].count
          this.customerLineData.map(item => {
            item.isActive = false
          })
          this.customerLineData[month - 1].isActive = true
        }
        if (this.promptnessData.length != 0 && this.promptnessData.length >= month) {
          this.promptness = this.promptnessData[month - 1].count
        }
        this.drawTargetPie(this.satisfaction)
        this.drawCustomerLine();
        this.jumpNumber("satisfaction")
        this.first ? this.jumpNumber("promptness") : ''
        this.first = false
      } else {
        this.customerLineData = this.promptnessData;
        if (this.customerLineData.length != 0 && this.customerLineData.length >= month) {
          this.promptness = this.customerLineData[month - 1].count
          this.customerLineData.map(item => {
            item.isActive = false
          })
          this.customerLineData[month - 1].isActive = true
        }
        if (this.satisfactionData.length != 0 && this.satisfactionData.length >= month) {
          this.satisfaction = this.satisfactionData[month - 1].count
        }
        this.drawTargetPie(this.promptness)
        this.drawCustomerLine();
        this.jumpNumber("promptness")
      }
    },
    changeActive(type, index) {
      switch (type) {
        case 'contract':
          this.contractLineData.map(item => {
            item.isActive = false
          })
          this.contractLineData[index].isActive = true
          this.resident = this.contractLineData[index].resident
          this.nonResident = this.contractLineData[index].nonResident
          this.avgPercent = (this.resident + this.nonResident) / 2
          this.jumpNumber("contract")
          break;
        case 'satisfaction':
          this.customerLineData.map(item => {
            item.isActive = false
          })
          this.customerLineData[index].isActive = true
          this.satisfaction = this.customerLineData[index].count
          this.drawTargetPie(this.satisfaction)
          this.jumpNumber("satisfaction")
          break;
        case 'promptness':
          this.customerLineData.map(item => {
            item.isActive = false
          })
          this.customerLineData[index].isActive = true
          this.promptness = this.customerLineData[index].count
          this.drawTargetPie(this.promptness)
          this.jumpNumber("promptness")
          break;
        case 'publicNumber':
          this.publicNumberData.map(item => {
            item.isActive = false
          })
          this.publicNumberData[index].isActive = true
          this.followRate = this.publicNumberData[index].followRate
          this.followNum = this.publicNumberData[index].followNum
          this.bindingRate = this.publicNumberData[index].bindingRate
          this.bindingNum = this.publicNumberData[index].bindingNum
          this.readRate = this.publicNumberData[index].readRate
          this.readNum = this.publicNumberData[index].readNum
          this.drawFollowPie()
          this.drawBindingPie()
          this.drawReadPie()
          this.jumpNumber("publicNumber")
          break;
      }
    },
    changePublicNumberData(type) {
      switch (type) {
        case 'follow':
          this.publicNumberLineData = [];
          this.publicNumberData.map(item => {
            this.publicNumberLineData.push(item.followNum)
          });
          this.legend = "关注数";
          this.drawPublicNumberLine()
          break;
        case 'binding':
          this.publicNumberLineData = [];
          this.publicNumberData.map(item => {
            this.publicNumberLineData.push(item.bindingNum)
          });
          this.legend = "绑定数";
          this.drawPublicNumberLine()
          break;
        case 'read':
          this.publicNumberLineData = [];
          this.publicNumberData.map(item => {
            this.publicNumberLineData.push(item.readNum)
          });
          this.legend = "阅读数";
          this.drawPublicNumberLine()
          break;
      }
    },
    jumpNumber(type) {
      let options1 = {
        suffix: '%'
      };
      let options2 = {
        suffix: `<small>&nbsp;个</small>`
      };
      let delay = 1;
      switch (type) {
        case 'contract':
          let residentChange = new CountUp('resident', 0, this.resident, 0, delay, options1);
          let nonResidentChange = new CountUp('nonResident', 0, this.nonResident, 0, delay, options1);
          let avgPercent = new CountUp('avgPercent', 0, this.avgPercent, 0, delay, options1);
          !residentChange.error ? residentChange.start() : "";
          !nonResidentChange.error ? nonResidentChange.start() : "";
          !avgPercent.error ? avgPercent.start() : "";
          break;
        case 'satisfaction':
          let satisfaction = new CountUp('satisfaction', 0, this.satisfaction, 0, delay, options1);
          !satisfaction.error ? satisfaction.start() : "";
          break;
        case 'promptness':
          let promptness = new CountUp('promptness', 0, this.promptness, 0, delay, options1);
          !promptness.error ? promptness.start() : "";
          break;
        case 'water':
          let newClothes = new CountUp('newClothes', 0, this.newClothes, 0, delay, options2);
          let repair = new CountUp('repair', 0, this.repair, 0, delay, options2);
          let complaint = new CountUp('complaint', 0, this.complaint, 0, delay, options2);
          let report = new CountUp('report', 0, this.report, 0, delay, options2);
          !newClothes.error ? newClothes.start() : "";
          !repair.error ? repair.start() : "";
          !complaint.error ? complaint.start() : "";
          !report.error ? report.start() : "";
          break;
        case 'publicNumber':
          let followNum = new CountUp('followNum', 0, this.followNum, 0, delay);
          let bindingNum = new CountUp('bindingNum', 0, this.bindingNum, 0, delay);
          let readNum = new CountUp('readNum', 0, this.readNum, 0, delay);
          !followNum.error ? followNum.start() : "";
          !bindingNum.error ? bindingNum.start() : "";
          !readNum.error ? readNum.start() : "";
          break;
      }
    },
    init() {
      this.countPie = echarts.init(document.getElementById('countPie'));
      this.contractLine = echarts.init(document.getElementById("contractLine"));
      this.getContractLineData();
      this.drawContractLine();
      this.customerLine = echarts.init(document.getElementById("customerLine"));
      this.getCustomerLineData();
      this.changeData();
      this.waterPie = echarts.init(document.getElementById("waterPie"));
      this.getWaterData();
      this.changeWaterData();
      this.followPie = echarts.init(document.getElementById("followPie"));
      this.bindingPie = echarts.init(document.getElementById("bindingPie"));
      this.readPie = echarts.init(document.getElementById("readPie"));
      this.getPublicNumberData();
      this.publicNumberLine = echarts.init(document.getElementById("publicNumberLine"));
      this.changePublicNumberData('follow')
    }
  },
  mounted() {
    this.init();
  }
}
