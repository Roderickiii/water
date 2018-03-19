import echarts from 'echarts'
export default {
    data() {
        return {
            selected: "1",
            countPie: null,
            countData: [],
            countLine: null,
            pieIncome: null,
            barIncome: null,
            incomeData: [],
            pieCost: null,
            costData:[]
        }
    },
    methods: {
        drawCountPie(count) {
            this.countPie.setOption({
                title: {
                    text: count,
                    textStyle: {
                        fontSize: 40,
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
                            value: 100 - count * 10,
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
                            value: count * 10,
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
        drawCountLine() {
            let month = []
            let count = []
            this.countData.map(item => {
                month.push(item.month)
                count.push(item.count)
            })
            this.countLine.setOption({
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
                    data: count,
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
        drawIncomePie() {
            if (this.pieIncome && this.incomeData && this.incomeData.length > 0) {
                var legendData = [];
                this.incomeData.forEach(function(element) {
                    legendData.push(element.name);
                });
                this.pieIncome.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{b} <br/>{c} 元 ({d}%)"
                    },
                    label: {
                        normal: {
                            formatter: "{b}"
                        }
                    },
                    color: ['#D87A80', '#23AAFF', '#BAA0DC', '#FFB980', '#B6FF9D'],
                    series: [{
                        type: "pie",
                        radius: "60%",
                        center: ["50%", "60%"],
                        data: this.incomeData,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)"
                            }
                        }
                    }]
                });
            }
        },
        drawIncomeBar() {
            if (this.barIncome && this.incomeData && this.incomeData.length > 0) {
                var legendData = [];
                var data = [];
                this.incomeData.forEach(function(element) {
                    legendData.push(element.name);
                    data.push(element.value / 10000);
                });
                this.barIncome.setOption({
                    xAxis: {
                        data: legendData,
                        axisLine: {
                            lineStyle: {
                                color: "rgba(255,255,255,0.8)"
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            rotate: -30,
                        }
                    },
                    grid: {
                        x: 40,
                        y: 60,
                        x2: 20,
                        y2: 60,
                        borderWidth: 1
                    },
                    itemStyle: {
                        normal: {
                            color: "#4ad2ff"
                        }
                    },
                    tooltip: {
                        trigger: "item",
                        formatter: "{b}<br/>{c} 万元"
                    },
                    yAxis: {
                        name: "万元",
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: "rgba(255,255,255,0.8)"
                            }
                        }
                    },
                    series: [{
                        type: "bar",
                        data: data,
                        barWidth: 30,
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    var colorList = ['#D87A80', '#23AAFF', '#BAA0DC', '#FFB980', '#B6FF9D'];
                                    return colorList[params.dataIndex];
                                }
                            }
                        }
                    }]
                });
            }
        },
        drawCostPie() {
            if (this.pieCost && this.costData && this.costData.length > 0) {
                var legendData = [];
                this.costData.forEach(function(element) {
                    legendData.push(element.name);
                });
                this.pieCost.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{b} <br/>{c} 元 ({d}%)"
                    },
                    label: {
                        normal: {
                            formatter: "{b}:{c} 元 ({d}%)"
                        }
                    },
                    color: ['#D87A80', '#FFB980', '#23AAFF', '#BAA0DC', '#B6FF9D'],
                    series: [{
                        type: "pie",
                        radius: "55%",
                        center: ["50%", "50%"],
                        data: this.costData,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)"
                            }
                        }
                    }]
                });
            }
        },
        changeActive(index) {
            this.countData.map(item => {
                item.isActive = false
            })
            this.countData[index].isActive = true
            this.drawCountPie(this.countData[index].count)
        },
        getcountData() {
            this.countData = [{
                month: "一月",
                isActive: false,
                count: 7.6
            }, {
                month: "二月",
                isActive: false,
                count: 8.6
            }, {
                month: "三月",
                isActive: false,
                count: 7.4
            }, {
                month: "四月",
                isActive: false,
                count: 9.2
            }, {
                month: "五月",
                isActive: false,
                count: 8.9
            }, {
                month: "六月",
                isActive: false,
                count: 8.4
            }, {
                month: "七月",
                isActive: false,
                count: 8.2
            }, {
                month: "八月",
                isActive: false,
                count: 8.6
            }, {
                month: "九月",
                isActive: false,
                count: 9.6
            }, {
                month: "十月",
                isActive: false,
                count: 8.8
            }, {
                month: "十一月",
                isActive: false,
                count: 8.1
            }, {
                month: "十二月",
                isActive: false,
                count: 8.5
            }]
            let date = new Date();
            let month = date.getMonth();
            this.drawCountPie(this.countData[month].count)
            this.countData[month].isActive = true
        },
        getIncomeData() {
            /*jsonpRequest("/finance/getIncomeData", this).then(data => {
                if (
                    data &&
                    data.code == 1001 &&
                    data.research &&
                    data.research.length > 0
                ) {
                    window.this.incomeData = [];
                    data.research.forEach(function(element) {
                        window.this.incomeData.push({
                            name: element.incomceSource,
                            value: element.income
                        });
                    });
                    window.this.drawIncomePie();
                    window.this.drawIncomeBar();
                }
            });*/
            this.incomeData = [{
                name: "污水接驳工程",
                value: 631200
            }, {
                name: "小区工程",
                value: 1231200
            }, {
                name: "市政工程",
                value: 901200
            }, {
                name: "污水接驳给水",
                value: 881200
            }, {
                name: "其他工程",
                value: 631200
            }]
            this.drawIncomePie();
            this.drawIncomeBar();
        },
        getCostData() {
            /*jsonpRequest("/finance/getCostData", this).then(data => {
                if (
                    data &&
                    data.code == 1001 &&
                    data.research &&
                    data.research.length > 0
                ) {
                    window.this.costData = [];
                    data.research.forEach(function(element) {
                        window.this.costData.push({
                            name: element.costType,
                            value: element.cost
                        });
                    });
                    window.this.drawCostPie();
                }
            });*/
            this.costData = [{
                name: "电费",
                value: 645231
            }, {
                name: "燃油费",
                value: 621547
            }, {
                name: "水质检测费",
                value: 1054321
            }, {
                name: "人力成本",
                value: 546621
            }, {
                name: "设备折旧费",
                value: 765485
            }, {
                name: "厂房建设装修折旧费",
                value: 1564894
            }, {
                name: "业务系统运维费用",
                value: 664524
            }, {
                name: "车辆使用费",
                value: 956488
            }, {
                name: "税",
                value: 954954
            }, {
                name: "其他费用",
                value: 608854
            }]
            this.drawCostPie();
        },
        init() {
            this.countPie = echarts.init(document.getElementById('countPie'));
            this.getcountData()
            this.countLine = echarts.init(document.getElementById("countLine"));
            this.drawCountLine();
            this.pieIncome = echarts.init(document.getElementById("pieIncome"));
            this.barIncome = echarts.init(document.getElementById("barIncome"));
            this.getIncomeData();
            this.pieCost = echarts.init(document.getElementById("pieCost"));
            this.getCostData();
        }
    },
    mounted() {
        this.init()
    }
}