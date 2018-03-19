<template>
  <div class="costSub_container">
    <mt-header title="成本"></mt-header>
    <div class="costSub_wrapper">
      <ul class="tab">
        <li @click="changeBarData('purchase')">
          <div class="name" :class="costSubStatus?'activeColor':''">采购</div>
          <div class="count">{{purchase}}&nbsp;<small>元</small></div>
        </li>
        <li @click="changeBarData('wages')">
          <div class="name" :class="costSubStatus?'':'activeColor'">工资</div>
          <div class="count">{{wages}}&nbsp;<small>元</small></div>
        </li>
      </ul>
    </div>
    <div id="costSubBar" style="height:50vh;width:100vw"></div>
    <div class="costSub_wrapper">
      <ul class="consume">
        <li v-for="item in consumeData">
          <div class="content">
            <h4>{{item.name}}</h4>
            <span>本月电耗：<b class="red">{{item.thisMonth}}</b>度</span>
            <span>上月电耗：<b class="red">{{item.lastMonth}}</b>度</span>
            <span :class="item.thisMonth < item.lastMonth ? 'up' : 'down'">环比上月：<b :class="item.thisMonth < item.lastMonth ? 'red' : 'green'">{{item.Mom}}%</b></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script src="../assets/js/costSub"></script>
<style lang="scss" src="../assets/css/costSub.scss"></style>
