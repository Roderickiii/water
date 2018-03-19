<template>
  <div class="monitor_container">
    <mt-header title="监控系统"></mt-header>
    <div class="month">
      <span class="selectMonth">月份选择：</span>
      <mt-button size="small" type="primary" @click="togglePicker">{{currentMonth}}<span class="arrow"></span></mt-button>
    </div>
    <div class="monitor_wrapper">
      <mt-cell title="水安全"></mt-cell>
      <div class="equipment_wrapper" v-for="item in equipmentData">
        <span class="target" :class="item.value=='安全'?'greenBg':'orangeBg'"></span>
        <span class="name">{{item.name}}</span>
        <span class="type" :class="item.value=='安全'?'green':'orange'">{{item.value}}</span>
      </div>
    </div>
    <div class="cellTitle">资金安全</div>
    <div id="capitalPie" style="height:22vh;width:60vw"></div>
    <span id="capital">{{capital}}&nbsp;<small>元</small></span>
    <div class="monitor_wrapper pipe">
      <mt-cell title="管网安全"></mt-cell>
      <div id="pipeBar" style="height:14vh;width:100vw"></div>
    </div>
    <div class="cellTitle">信息安全</div>
    <div class="h"></div>
    <div class="circle">
      <div class="c1">{{typeWord}}</div>
      <div class="c2"></div>
      <div class="c3"></div>
    </div>
    <div class="pickerDate" v-if="pickerShow">
      <div class="mask" @click="togglePicker"></div>
      <div class="pickerGroup">
        <mt-cell>
          <mt-button size="small" type="default" @click="togglePicker">确定</mt-button>
        </mt-cell>
        <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
      </div>
    </div>
  </div>
</template>
<script src="../assets/js/monitorSystem"></script>
<style lang="scss" src="../assets/css/monitorSystem.scss"></style>
