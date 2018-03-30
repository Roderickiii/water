import echarts from 'echarts'
import CountUp from '../../../static/js/countUp'
export default {
  data() {
    return {
      selected: "1",
      incomeSubStatus: true,
      incomeSubBar: null,
      saleWaterData: [],
      saleWater: 0,
      projectData: [],
      project: 0,
      target: "售水收入",
      search: "",
      listData: []
    }
  },
  methods: {
    changeBarData(type) {
      switch (type) {
        case 'saleWater':
          this.incomeSubStatus = true;
          this.target = "售水收入";
          this.drawIncomeSubBar(this.saleWaterData)
          break;
        case 'project':
          this.incomeSubStatus = false;
          this.target = "工程收入";
          this.drawIncomeSubBar(this.projectData)
          break;
      }
    },
    drawIncomeSubBar(data) {
      let month = []
      let count = []
      data.map(item => {
        month.push(item.month)
        count.push(item.count / 10000)
      })
      this.incomeSubBar.setOption({
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
    getsaleWaterData() {
      this.saleWaterData = [{
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
      this.projectData = [{
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
      for (let i in this.saleWaterData) {
        this.saleWater += this.saleWaterData[i].count
      }
      for (let i in this.projectData) {
        this.project += this.projectData[i].count
      }
      this.jumpNumber()
    },
    getListData() {
      this.listData = [{
        title: "基于污水厂恶臭气源的分析、去除及治理技术研究",
        type: "污水接驳工程",
        money: 32135,
        status: false
      }, {
        title: "阳澄湖原水特征因子分析及去除方法研究",
        type: "给水接驳工程",
        money: 23641,
        status: false
      }, {
        title: "污水厂微孔曝气设备破损机理的研究",
        type: "污水接驳工程",
        money: 11135,
        status: false
      }, {
        title: "二次供水泵房供水压力均衡技术的研发",
        type: "小区工程",
        money: 5641,
        status: false
      }]
    },
    changeListStatus(index) {
      this.listData.map(item => {
        item.status = false
      })
      this.listData[index].status = true
    },
    jumpNumber() {
      let options = {
        suffix: '元'
      };
      let delay = 1;
      let saleWater = new CountUp('saleWater', 0, this.saleWater, 0, delay, options);
      !saleWater.error ? saleWater.start() : "";
      let project = new CountUp('project', 0, this.project, 0, delay, options);
      !project.error ? project.start() : "";
    },
    init() {
      this.getsaleWaterData()
      this.incomeSubBar = echarts.init(document.getElementById("incomeSubBar"));
      this.drawIncomeSubBar(this.saleWaterData);
      this.getListData()
    }
  },
  mounted() {
    this.init()
  }
}
