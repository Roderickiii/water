import echarts from 'echarts'
export default {
    data() {
        return {
            pickerVisible: "",
            slots: [{
                flex: 1,
                values: ['2017', '2018'],
                className: 'slot1',
                textAlign: 'right',
                defaultIndex: 1
            }, {
                divider: true,
                content: '-',
                className: 'slot2'
            }, {
                flex: 1,
                values: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
                className: 'slot3',
                textAlign: 'left',
                defaultIndex: 2
            }],
            month: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            pickerShow: false,
            currentMonth: "",
            equipmentData: [],
            capitalPie: null,
            countTarget: "",
            safeCapital: 90000000,
            capital: 0,
            pipeBar: null,
            pipeData: [],
            typeWord: "警告"
        }
    },
    methods: {
        onValuesChange(picker, values) {
            let month = parseInt(values[1]) - 1;
            this.currentMonth = this.month[month]
        },
        drawcapitalPie(count) {
            this.capitalPie.setOption({
                title: {
                    text: this.countTarget,
                    textStyle: {
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
                    radius: [46, 46],
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
        drawPipeBar(data) {
            let yAxisData = ["有责停水", "爆管"]
            this.pipeBar.setOption({
                grid: {
                    top: "10%",
                    left: '3%',
                    right: '12%',
                    bottom: '1%',
                    containLabel: true
                },
                xAxis: {
                    name: "次",
                    type: 'value',
                    axisTick: { show: false },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#fff',
                        }
                    },
                    splitLine: {
                        show: false
                    },
                },
                yAxis: [{
                        type: 'category',
                        axisTick: { show: false },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#fff',
                            }
                        },
                        data: yAxisData
                    },
                    {
                        type: 'category',
                        axisLine: { show: false },
                        axisTick: { show: false },
                        axisLabel: { show: false },
                        splitArea: { show: false },
                        splitLine: { show: false },
                    },

                ],
                series: [{
                    name: "管网",
                    type: 'bar',
                    yAxisIndex: 1,
                    itemStyle: {
                        normal: {
                            show: true,
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: 'rgba(178,39,255,.6)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0,245,255,.6)'
                                }
                            ], false),
                            barBorderRadius: 50,
                            borderWidth: 0,
                            borderColor: '#333',
                        }
                    },
                    barGap: '0%',
                    barWidth: 14,
                    barCategoryGap: '50%',
                    data: this.pipeData,
                    label: {
                        normal: {
                            show: true,
                        }
                    }
                }]
            });
        },
        getcountData() {
            let proportion = 0
            this.capital = 78135432
            proportion = this.capital / this.safeCapital * 100
            proportion >= 80 ? this.countTarget = "安全" : this.countTarget = "警告"
            this.drawcapitalPie(proportion)
        },
        getMonth() {
            let date = new Date()
            let month = date.getMonth()
            this.currentMonth = this.month[month]
        },
        togglePicker() {
            this.pickerShow = !this.pickerShow
        },
        getEquipmentData() {
            this.equipmentData = [{
                name: "水压监测",
                value: "安全",
            }, {
                name: "水质监测",
                value: "警告",
            }, {
                name: "设备监测",
                value: "安全",
            }]
        },
        getPipeBarData() {
            this.pipeData = [325, 264]
            this.drawPipeBar()
        },
        init() {
            this.getMonth()
            this.getEquipmentData()
            this.capitalPie = echarts.init(document.getElementById('capitalPie'));
            this.getcountData()
            this.pipeBar = echarts.init(document.getElementById("pipeBar"));
            this.getPipeBarData()
        }
    },
    mounted() {
        this.init()
    }
}