export default {
  data() {
    return {
      selected: "1",
      equipmentData1: [],
      equipmentData2: []
    }
  },
  methods: {
    getequipmentData() {
      this.equipmentData1 = [{
        name: "取水泵房-电动阀",
        value: "安全",
      }, {
        name: "沉淀池-水泵",
        value: "安全",
      }, {
        name: "排泥水调节池-水泵",
        value: "安全",
      }, {
        name: "回用水池-水泵",
        value: "危险",
      }, {
        name: "浓缩池-刮泥机",
        value: "安全",
      }, {
        name: "污泥平衡池-搅拌机",
        value: "安全",
      }, {
        name: "PAM投加泵-离心机",
        value: "安全",
      }, {
        name: "提升泵房-电动阀",
        value: "危险",
      }, {
        name: "提升泵房-提升泵",
        value: "安全",
      }, {
        name: "吸水井-水泵",
        value: "安全",
      }]
      this.equipmentData2 = [{
        name: "取水泵房-电动阀",
        value: "安全",
      }, {
        name: "沉淀池-水泵",
        value: "危险",
      }, {
        name: "排泥水调节池-水泵",
        value: "安全",
      }, {
        name: "回用水池-水泵",
        value: "安全",
      }, {
        name: "浓缩池-刮泥机",
        value: "安全",
      }, {
        name: "污泥平衡池-搅拌机",
        value: "安全",
      }, {
        name: "PAM投加泵-离心机",
        value: "安全",
      }, {
        name: "提升泵房-电动阀",
        value: "安全",
      }, {
        name: "提升泵房-提升泵",
        value: "安全",
      }, {
        name: "吸水井-水泵",
        value: "危险",
      }]
    }
  },
  mounted() {
    this.getequipmentData()
  }
}
