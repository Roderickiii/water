import echarts from 'echarts'
export default {
    data() {
        return {
            countPie: null,
            countPieData: [],
            count: 0,
            countLine: null,
            countLineData: [],
            monthData: [],
            maxCount: 0
        }
    },
    methods: {
        drawTargetPie() {
            this.countPie.setOption({
                title: {
                    text: '安全事故次数\n\n\n',
                    textStyle: {
                        fontSize: 16,
                        color: '#fff'
                    },
                    subtext: this.count + '\n\n',
                    subtextStyle: {
                        fontSize: 50,
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
                            value: this.maxCount - this.count,
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
                            value: this.count,
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
        drawCountLine() {
            let month = []
            this.monthData.map(item => {
                month.push(item.month)
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
                    y: 0,
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
                    data: this.countLineData,
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
        getCountLineData() {
            this.countLineData = [54, 33, 45, 20, 60, 32, 64, 40, 50, 55, 42, 65];
            this.maxCount = Math.max.apply(null, this.countLineData)
            this.drawCountLine();
        },
        getMonthData() {
            this.monthData = [{
                month: "一月",
                isActive: false,
                count: 54
            }, {
                month: "二月",
                isActive: false,
                count: 33
            }, {
                month: "三月",
                isActive: false,
                count: 45
            }, {
                month: "四月",
                isActive: false,
                count: 20
            }, {
                month: "五月",
                isActive: false,
                count: 60
            }, {
                month: "六月",
                isActive: false,
                count: 32
            }, {
                month: "七月",
                isActive: false,
                count: 64
            }, {
                month: "八月",
                isActive: false,
                count: 40
            }, {
                month: "九月",
                isActive: false,
                count: 50
            }, {
                month: "十月",
                isActive: false,
                count: 55
            }, {
                month: "十一月",
                isActive: false,
                count: 42
            }, {
                month: "十二月",
                isActive: false,
                count: 65
            }]
            let date = new Date()
            let month = date.getMonth() + 1
            if (this.monthData.length != 0 && this.monthData.length >= month) {
                this.count = this.monthData[month - 1].count
                this.monthData[month - 1].isActive = true
            } else if (this.monthData.length != 0) {
                this.count = this.monthData[0].count
                this.monthData[0].isActive = true
            }
            this.drawTargetPie()
        },
        changeActive(index) {
            this.monthData.map(item => {
                item.isActive = false
            })
            this.monthData[index].isActive = true
            this.count = this.monthData[index].count
            this.drawTargetPie()
        },
        init() {
            this.countPie = echarts.init(document.getElementById('countPie'))
            this.countLine = echarts.init(document.getElementById("countLine"))
            this.getCountLineData()
            this.getMonthData()
        }
    },
    mounted() {
        this.init()
    }
}