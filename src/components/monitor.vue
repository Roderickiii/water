<template>
  <div class="monitor_container">
    <mt-header title="水质水压监测"></mt-header>
    <mt-navbar v-model="selected" :class="2<5?'title_center':''">
      <mt-tab-item id="1">进水口监测</mt-tab-item>
      <mt-tab-item id="2">出水口监测</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected" :swipeable='true' class="page-tabbar-tab-container">
      <mt-tab-container-item id="1">
        <div class="monitor_wrapper">
          <mt-cell title="水质"></mt-cell>
          <div id="inWaterBar" style="height:34vh;width:100vw"></div>
        </div>
        <div class="cellTitle">水压</div>
        <div class="lineWrapper">
          <div id="inWater" style="height:36vh;width:100vw"></div>
          <ul class="monthSelect">
            <li v-for="(item,index) in inWaterData" @click="changeActive('in',index)" :class="item.isActive ? 'activeMonth':''">
              <span v-if="item.isActive">{{item.count}}Mpa</span> {{item.time}}
            </li>
          </ul>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="monitor_wrapper">
          <mt-cell title="水质"></mt-cell>
          <div id="outWaterBar" style="height:34vh;width:100vw"></div>
        </div>
        <div class="cellTitle">水压</div>
        <div class="lineWrapper">
          <div id="outWater" style="height:36vh;width:100vw"></div>
          <ul class="monthSelect">
            <li v-for="(item,index) in outWaterData" @click="changeActive('out',index)" :class="item.isActive ? 'activeMonth':''">
              <span v-if="item.isActive">{{item.count}}Mpa</span> {{item.time}}
            </li>
          </ul>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script src="../assets/js/monitor"></script>
<style lang="scss" src="../assets/css/monitor.scss"></style>
