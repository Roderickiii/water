export default {
  data() {
    return {
      selected: "1",
      safeData1: [],
      safeData2: [],
      safeMaxData1: 0,
      safeMaxData2: 0
    }
  },
  methods: {
    getSafeData() {
      let data1 = []
      let data2 = []
      this.safeData1 = [{
        name: "重大安全事故次数",
        value: 43,
        path: "/safetyAccident"
      }, {
        name: "市政管网有责停水事故次数",
        value: 66,
        path: "/safetyAccident"
      }, {
        name: "DN75以上爆管次数",
        value: 85,
        path: "/safetyAccident"
      }, {
        name: "水压不合格次数",
        value: 90,
        path: "/safetyAccident"
      }, {
        name: "水质不合格次数",
        value: 82,
        path: "/safetyAccident"
      }, {
        name: "超标排放次数",
        value: 64,
        path: "/safetyAccident"
      }]
      this.safeData2 = [{
        name: "重大安全事故次数",
        value: 60,
        path: "/safetyAccident"
      }, {
        name: "市政管网有责停水事故次数",
        value: 81,
        path: "/safetyAccident"
      }, {
        name: "DN75以上爆管次数",
        value: 67,
        path: "/safetyAccident"
      }, {
        name: "水压不合格次数",
        value: 44,
        path: "/safetyAccident"
      }, {
        name: "水质不合格次数",
        value: 26,
        path: "/safetyAccident"
      }, {
        name: "超标排放次数",
        value: 42,
        path: "/safetyAccident"
      }]
      this.safeData1.map(item => {
        data1.push(item.value)
      })
      this.safeData2.map(item => {
        data2.push(item.value)
      })
      this.safeMaxData1 = Math.max.apply(null, data1)
      this.safeMaxData2 = Math.max.apply(null, data2)
    }
  },
  mounted() {
    this.getSafeData()
  }
}
