import echarts from 'echarts'
export default {
    data() {
        return {
            selected: "1",
            inWaterBar: null,
            inWaterBarData: [],
            inWater: null,
            inWaterData: [],
            outWaterBar: null,
            outWaterBarData: [],
            outWater: null,
            outWaterData: [],
            isActive: false
        }
    },
    methods: {
        drawinWaterBar() {
            var colors = ['#119382', '#F25011', '#b9b9b9'];
            var state = ['正常', '异常', '无数据'];
            var transformData = [{
                itemStyle: { normal: { color: colors[0] } },
                name: state[0],
                value: [0, "2018-03-01 00:00", "2018-03-01 10:00"]
            }, {
                itemStyle: { normal: { color: colors[1] } },
                name: state[1],
                value: [0, "2018-03-01 10:00", "2018-03-01 11:00"]
            }, {
                itemStyle: { normal: { color: colors[0] } },
                name: state[0],
                value: [0, "2018-03-01 11:00", "2018-03-01 18:00"]
            }, {
                itemStyle: { normal: { color: colors[1] } },
                name: state[1],
                value: [0, "2018-03-01 18:00", "2018-03-01 20:00"]
            }, {
                itemStyle: { normal: { color: colors[2] } },
                name: state[2],
                value: [0, "2018-03-01 20:00", "2018-03-01 24:00"]
            }, {
                itemStyle: { normal: { color: colors[0] } },
                name: state[0],
                value: [1, "2018-03-01 00:00", "2018-03-01 06:00"]
            }, {
                itemStyle: { normal: { color: colors[1] } },
                name: state[1],
                value: [1, "2018-03-01 06:00", "2018-03-01 10:00"]
            }, {
                itemStyle: { normal: { color: colors[0] } },
                name: state[0],
                value: [1, "2018-03-01 10:00", "2018-03-01 20:00"]
            }, {
                itemStyle: { normal: { color: colors[2] } },
                name: state[2],
                value: [1, "2018-03-01 20:00", "2018-03-01 24:00"]
            }, {
                itemStyle: { normal: { color: colors[0] } },
                name: state[0],
                value: [2, "2018-03-01 00:00", "2018-03-01 14:00"]
            }, {
                itemStyle: { normal: { color: colors[1] } },
                name: state[1],
                value: [2, "2018-03-01 14:00", "2018-03-01 15:00"]
            }, {
                itemStyle: { normal: { color: colors[0] } },
                name: state[0],
                value: [2, "2018-03-01 15:00", "2018-03-01 20:00"]
            }, {
                itemStyle: { normal: { color: colors[2] } },
                name: state[2],
                value: [2, "2018-03-01 20:00", "2018-03-01 24:00"]
            }, ];
            /*var yData = 0; //0:浑浊度，1:PH值，2:余氯
            this.inWaterBarData.forEach(function(element) {
                if (element.check_result == "正常") {
                    if (element.quality_type == "0") {
                        yData = 0
                    } else if (element.quality_type == "1") {
                        yData = 1
                    } else if (element.quality_type == "2") {
                        yData = 2
                    };
                    transformData.push({
                        itemStyle: { normal: { color: colors[0] } },
                        name: element.check_result,
                        value: [yData, element.startDate, element.endDate]
                    })
                } else if (element.check_result == "异常") {
                    if (element.quality_type == "0") {
                        yData = 0
                    } else if (element.quality_type == "1") {
                        yData = 1
                    } else if (element.quality_type == "2") {
                        yData = 2
                    };
                    transformData.push({
                        itemStyle: { normal: { color: colors[1] } },
                        name: element.check_result,
                        value: [yData, element.startDate, element.endDate]
                    })
                } else if (element.check_result == "无数据") {
                    if (element.quality_type == "0") {
                        yData = 0
                    } else if (element.quality_type == "1") {
                        yData = 1
                    } else if (element.quality_type == "2") {
                        yData = 2
                    };
                    transformData.push({
                        itemStyle: { normal: { color: colors[2] } },
                        name: element.check_result,
                        value: [yData, element.startDate, element.endDate]
                    })
                }
            });*/
            this.inWaterBar.setOption({
                color: ['#119382', '#F25011', '#b9b9b9'],
                tooltip: {
                    formatter: function(params) {
                        if (params.color == '#119382') {
                            return '正常：' + params.value[1] + ' ~ ' + params.value[2];
                        } else if (params.color == '#F25011') {
                            return '异常：' + params.value[1] + ' ~ ' + params.value[2];
                        } else if (params.color == '#b9b9b9') {
                            return '无数据：' + params.value[1] + ' ~ ' + params.value[2];
                        }
                    },
                    position: ["20%", "-14%"]
                },
                legend: {
                    data: state,
                    bottom: '0px',
                    selectedMode: false, // 图例设为不可点击
                    textStyle: {
                        color: '#fff'
                    }
                },
                grid: {
                    left: '3%',
                    right: '6%',
                    top: '1%',
                    bottom: '10%',
                    containLabel: true
                },
                xAxis: {
                    type: 'time',
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,0.8)"
                        }
                    },
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    data: ['浑浊度', 'PH值', '余氯'],
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,0.8)"
                        }
                    }
                },
                series: [
                    // 用空bar来显示三个图例
                    { name: state[0], type: 'bar', data: [] },
                    { name: state[1], type: 'bar', data: [] },
                    { name: state[2], type: 'bar', data: [] },
                    {
                        type: 'custom',
                        renderItem: function(params, api) {
                            var categoryIndex = api.value(0);
                            var start = api.coord([api.value(1), categoryIndex]);
                            var end = api.coord([api.value(2), categoryIndex]);
                            var height = 24;

                            return {
                                type: 'rect',
                                shape: echarts.graphic.clipRectByRect({
                                    x: start[0],
                                    y: start[1] - height / 2,
                                    width: end[0] - start[0],
                                    height: height
                                }, {
                                    x: params.coordSys.x,
                                    y: params.coordSys.y,
                                    width: params.coordSys.width,
                                    height: params.coordSys.height
                                }),
                                style: api.style()
                            };
                        },
                        encode: {
                            x: [1, 2],
                            y: 0
                        },
                        data: transformData
                    }
                ]
            });
        },
        drawinWaterLine() {
            let time = []
            let count = []
            this.inWaterData.map(item => {
                time.push(item.time)
                count.push(item.count)
            })
            this.inWater.setOption({
                xAxis: {
                    data: time,
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
                    data: count,
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
        getinWaterBarData() {
            /*jsonpRequest("/safe/waterQualityIn", this).then(data => {
                if (data && data.code == 1001 && data.waterQualityIn && data.waterQualityIn.length > 0) {
                    window.this.inWaterBarData = data.waterQualityIn;
                    this.drawinWaterBar();
                }
            });*/
            this.drawinWaterBar();
        },
        getinWaterData() {
            this.inWaterData = [{
                time: "00:00",
                count: 0.4,
                isActive: false
            }, {
                time: "04:00",
                count: 0.6,
                isActive: false
            }, {
                time: "08:00",
                count: 0.4,
                isActive: false
            }, {
                time: "12:00",
                count: 0.5,
                isActive: false
            }, {
                time: "16:00",
                count: 0.6,
                isActive: false
            }, {
                time: "20:00",
                count: 0.8,
                isActive: false
            }, {
                time: "24:00",
                count: 0.6,
                isActive: false
            }]
            this.drawinWaterLine()
        },
        drawoutWaterBar() {
            var colors = ['#119382', '#F25011', '#b9b9b9'];
            var state = ['正常', '异常', '无数据'];
            var transformData = [{
                itemStyle: { normal: { color: colors[0] } },
                name: state[0],
                value: [0, "2018-03-01 00:00", "2018-03-01 06:00"]
            }, {
                itemStyle: { normal: { color: colors[1] } },
                name: state[1],
                value: [0, "2018-03-01 06:00", "2018-03-01 08:00"]
            }, {
                itemStyle: { normal: { color: colors[0] } },
                name: state[0],
                value: [0, "2018-03-01 08:00", "2018-03-01 19:00"]
            }, {
                itemStyle: { normal: { color: colors[1] } },
                name: state[1],
                value: [0, "2018-03-01 19:00", "2018-03-01 20:00"]
            }, {
                itemStyle: { normal: { color: colors[2] } },
                name: state[2],
                value: [0, "2018-03-01 20:00", "2018-03-01 24:00"]
            }, {
                itemStyle: { normal: { color: colors[0] } },
                name: state[0],
                value: [1, "2018-03-01 00:00", "2018-03-01 08:00"]
            }, {
                itemStyle: { normal: { color: colors[1] } },
                name: state[1],
                value: [1, "2018-03-01 08:00", "2018-03-01 09:00"]
            }, {
                itemStyle: { normal: { color: colors[0] } },
                name: state[0],
                value: [1, "2018-03-01 09:00", "2018-03-01 20:00"]
            }, {
                itemStyle: { normal: { color: colors[2] } },
                name: state[2],
                value: [1, "2018-03-01 20:00", "2018-03-01 24:00"]
            }, {
                itemStyle: { normal: { color: colors[0] } },
                name: state[0],
                value: [2, "2018-03-01 00:00", "2018-03-01 04:00"]
            }, {
                itemStyle: { normal: { color: colors[1] } },
                name: state[1],
                value: [2, "2018-03-01 04:00", "2018-03-01 07:00"]
            }, {
                itemStyle: { normal: { color: colors[0] } },
                name: state[0],
                value: [2, "2018-03-01 07:00", "2018-03-01 20:00"]
            }, {
                itemStyle: { normal: { color: colors[2] } },
                name: state[2],
                value: [2, "2018-03-01 20:00", "2018-03-01 24:00"]
            }, ];
            /*var yData = 0; //0:浑浊度，1:PH值，2:余氯
            this.outWaterBarData.forEach(function(element) {
                if (element.check_result == "正常") {
                    if (element.quality_type == "0") {
                        yData = 0
                    } else if (element.quality_type == "1") {
                        yData = 1
                    } else if (element.quality_type == "2") {
                        yData = 2
                    };
                    transformData.push({
                        itemStyle: { normal: { color: colors[0] } },
                        name: element.check_result,
                        value: [yData, element.startDate, element.endDate]
                    })
                } else if (element.check_result == "异常") {
                    if (element.quality_type == "0") {
                        yData = 0
                    } else if (element.quality_type == "1") {
                        yData = 1
                    } else if (element.quality_type == "2") {
                        yData = 2
                    };
                    transformData.push({
                        itemStyle: { normal: { color: colors[1] } },
                        name: element.check_result,
                        value: [yData, element.startDate, element.endDate]
                    })
                } else if (element.check_result == "无数据") {
                    if (element.quality_type == "0") {
                        yData = 0
                    } else if (element.quality_type == "1") {
                        yData = 1
                    } else if (element.quality_type == "2") {
                        yData = 2
                    };
                    transformData.push({
                        itemStyle: { normal: { color: colors[2] } },
                        name: element.check_result,
                        value: [yData, element.startDate, element.endDate]
                    })
                }
            });*/
            this.outWaterBar.setOption({
                color: ['#119382', '#F25011', '#b9b9b9'],
                tooltip: {
                    formatter: function(params) {
                        if (params.color == '#119382') {
                            return '正常：' + params.value[1] + ' ~ ' + params.value[2];
                        } else if (params.color == '#F25011') {
                            return '异常：' + params.value[1] + ' ~ ' + params.value[2];
                        } else if (params.color == '#b9b9b9') {
                            return '无数据：' + params.value[1] + ' ~ ' + params.value[2];
                        }
                    },
                    position: ["20%", "-14%"]
                },
                legend: {
                    data: state,
                    bottom: '0px',
                    selectedMode: false, // 图例设为不可点击
                    textStyle: {
                        color: '#fff'
                    }
                },
                grid: {
                    left: '3%',
                    right: '6%',
                    top: '1%',
                    bottom: '10%',
                    containLabel: true
                },
                xAxis: {
                    type: 'time',
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,0.8)"
                        }
                    },
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    data: ['浑浊度', 'PH值', '余氯'],
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,0.8)"
                        }
                    }
                },
                series: [
                    // 用空bar来显示三个图例
                    { name: state[0], type: 'bar', data: [] },
                    { name: state[1], type: 'bar', data: [] },
                    { name: state[2], type: 'bar', data: [] },
                    {
                        type: 'custom',
                        renderItem: function(params, api) {
                            var categoryIndex = api.value(0);
                            var start = api.coord([api.value(1), categoryIndex]);
                            var end = api.coord([api.value(2), categoryIndex]);
                            var height = 24;

                            return {
                                type: 'rect',
                                shape: echarts.graphic.clipRectByRect({
                                    x: start[0],
                                    y: start[1] - height / 2,
                                    width: end[0] - start[0],
                                    height: height
                                }, {
                                    x: params.coordSys.x,
                                    y: params.coordSys.y,
                                    width: params.coordSys.width,
                                    height: params.coordSys.height
                                }),
                                style: api.style()
                            };
                        },
                        encode: {
                            x: [1, 2],
                            y: 0
                        },
                        data: transformData
                    }
                ]
            });
        },
        drawoutWaterLine() {
            let time = []
            let count = []
            this.outWaterData.map(item => {
                time.push(item.time)
                count.push(item.count)
            })
            this.outWater.setOption({
                xAxis: {
                    data: time,
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
                    data: count,
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
        getoutWaterBarData() {
            /*jsonpRequest("/safe/waterQualityIn", this).then(data => {
                if (data && data.code == 1001 && data.waterQualityIn && data.waterQualityIn.length > 0) {
                    window.this.inWaterBarData = data.waterQualityIn;
                    this.drawinWaterBar();
                }
            });*/
            this.drawoutWaterBar();
        },
        getoutWaterData() {
            this.outWaterData = [{
                time: "00:00",
                count: 0.5,
                isActive: false
            }, {
                time: "04:00",
                count: 0.4,
                isActive: false
            }, {
                time: "08:00",
                count: 0.7,
                isActive: false
            }, {
                time: "12:00",
                count: 0.6,
                isActive: false
            }, {
                time: "16:00",
                count: 0.4,
                isActive: false
            }, {
                time: "20:00",
                count: 0.8,
                isActive: false
            }, {
                time: "24:00",
                count: 0.6,
                isActive: false
            }]
            this.drawoutWaterLine()
        },
        changeActive(type, index) {
            switch (type) {
                case 'in':
                    this.inWaterData.map(item => {
                        item.isActive = false
                    })
                    this.inWaterData[index].isActive = true
                    break;
                case 'out':
                    this.outWaterData.map(item => {
                        item.isActive = false
                    })
                    this.outWaterData[index].isActive = true
                    break;
            }
        },
        init() {
            this.inWaterBar = echarts.init(document.getElementById("inWaterBar"));
            this.getinWaterBarData();
            this.inWater = echarts.init(document.getElementById("inWater"));
            this.getinWaterData()
            this.outWaterBar = echarts.init(document.getElementById("outWaterBar"));
            this.getoutWaterBarData();
            this.outWater = echarts.init(document.getElementById("outWater"));
            this.getoutWaterData()
        }
    },
    mounted() {
        this.init();
    }

}