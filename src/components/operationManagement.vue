<template>
  <div class="operation_container">
    <mt-header title="运营管理"></mt-header>
    <mt-navbar v-model="selected" :class="2<5?'title_center':''">
      <mt-tab-item id="1">产销差</mt-tab-item>
      <mt-tab-item id="2">收入</mt-tab-item>
      <mt-tab-item id="3">成本</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="operation_wrapper">
          <mt-cell title="产销差指数"></mt-cell>
          <div id="countPie" style="height:32vh;width:100vw"></div>
        </div>
        <div class="lineWrapper">
          <div id="countLine" style="height:40vh;width:200vw"></div>
          <ul class="monthSelect">
            <li v-for="(item,index) in countData" @click="changeActive(index)" :class="item.isActive ? 'activeMonth':''">
              {{item.month}}
            </li>
          </ul>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="operation_wrapper">
          <div id="pieIncome" style="height:40vh;width:100vw"></div>
          <div class="legend"><router-link to="/incomeSub">查看更多</router-link></div>
        </div>
        <div id="barIncome" style="height:40vh;width:100vw"></div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="operation_wrapper">
          <div id="pieCost" style="height:44vh;width:100vw"></div>
          <div class="legend"><router-link to="/costSub">查看更多</router-link></div>
        </div>
        <ul id="costList">
          <li v-for="item in costData">
            <div class="value">{{item.value}}</div>
            <div class="name">{{item.name}}</div>
          </li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script src="../assets/js/operationManagement"></script>
<style lang="scss" src="../assets/css/operationManagement.scss"></style>
