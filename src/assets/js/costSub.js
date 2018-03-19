import echarts from 'echarts'
export default {
    data() {
        return {
            selected: "1",
            costSubStatus: true,
            costSubBar: null,
            purchaseData: [],
            purchase: 0,
            wagesData: [],
            wages: 0,
            consumeData: [],
            target:"采购"
        }
    },
    methods: {
        changeBarData(type) {
            switch (type) {
                case 'purchase':
                    this.costSubStatus = true;
                    this.target = "采购"
                    this.drawCostSubBar(this.purchaseData);
                    break;
                case 'wages':
                    this.costSubStatus = false;
                    this.target = "工资"
                    this.drawCostSubBar(this.wagesData);
                    break;
            }
        },
        drawCostSubBar(data) {
            let month = []
            let count = []
            data.map(item => {
                month.push(item.month)
                count.push(item.count / 10000)
            })
            this.costSubBar.setOption({
                legend: {
                    top: 10,
                    right: 10,
                    textStyle: {
                        color: '#fff',
                    },
                    data: [this.target]
                },
                grid: {
                    top: "10%",
                    left: '3%',
                    right: '12%',
                    bottom: '1%',
                    containLabel: true
                },
                xAxis: {
                    name: "万元",
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
                        data: month
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
                    name: this.target,
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
                    data: count,
                    label: {
                        normal: {
                            show: true,
                        }
                    }
                }]
            });
        },
        getpurchaseData() {
            this.purchaseData = [{
                    month: "一月",
                    count: 543646
                },
                {
                    month: "二月",
                    count: 433646
                },
                {
                    month: "三月",
                    count: 643646
                },
                {
                    month: "四月",
                    count: 593646
                },
                {
                    month: "五月",
                    count: 423646
                },
                {
                    month: "六月",
                    count: 663646
                },
                {
                    month: "七月",
                    count: 573646
                },
                {
                    month: "八月",
                    count: 463646
                },
                {
                    month: "九月",
                    count: 523646
                },
                {
                    month: "十月",
                    count: 443646
                },
                {
                    month: "十一月",
                    count: 413646
                },
                {
                    month: "十二月",
                    count: 533646
                }
            ]
            this.wagesData = [{
                    month: "一月",
                    count: 6543646
                },
                {
                    month: "二月",
                    count: 7433646
                },
                {
                    month: "三月",
                    count: 8643646
                },
                {
                    month: "四月",
                    count: 8593646
                },
                {
                    month: "五月",
                    count: 7423646
                },
                {
                    month: "六月",
                    count: 6663646
                },
                {
                    month: "七月",
                    count: 6573646
                },
                {
                    month: "八月",
                    count: 7463646
                },
                {
                    month: "九月",
                    count: 6523646
                },
                {
                    month: "十月",
                    count: 8443646
                },
                {
                    month: "十一月",
                    count: 7413646
                },
                {
                    month: "十二月",
                    count: 6533646
                }
            ]
            for (let i in this.purchaseData) {
                this.purchase += this.purchaseData[i].count
            }
            for (let i in this.wagesData) {
                this.wages += this.wagesData[i].count
            }
        },
        getconsumeData() {
            this.consumeData = [{
                name:"电耗",
                thisMonth: 13131,
                lastMonth: 13231,
                Mom:0.99
            },{
                name:"油耗",
                thisMonth: 21131,
                lastMonth: 22013,
                Mom:0.95
            },{
                name:"药耗",
                thisMonth: 32131,
                lastMonth: 36412,
                Mom:0.88
            },{
                name:"报销",
                thisMonth: 23200,
                lastMonth: 12000,
                Mom:0.93
            },{
                name:"维修",
                thisMonth: 13100,
                lastMonth: 29100,
                Mom:0.45
            }]
        },
        init() {
            this.getpurchaseData()
            this.costSubBar = echarts.init(document.getElementById("costSubBar"));
            this.drawCostSubBar(this.purchaseData);
            this.getconsumeData()
        }
    },
    mounted() {
        this.init()
    }
}