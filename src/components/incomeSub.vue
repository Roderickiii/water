<template>
  <div class="incomeSub_container">
    <mt-header title="收入"></mt-header>
    <div class="incomeSub_wrapper">
      <ul class="tab">
        <li @click="changeBarData('saleWater')">
          <div class="name" :class="incomeSubStatus?'activeColor':''">售水收入</div>
          <div class="count"><span id="saleWater"></span></div>
        </li>
        <li @click="changeBarData('project')">
          <div class="name" :class="incomeSubStatus?'':'activeColor'">工程收入</div>
          <div class="count"><span id="project"></span></div>
        </li>
      </ul>
    </div>
    <div id="incomeSubBar" style="height:50vh;width:100vw"></div>
    <div class="incomeSub_wrapper">
      <mt-search v-model="search" cancel-text="取消" placeholder="搜索">
      </mt-search>
    </div>
    <ul class="list" v-for="(item,index) in listData">
      <li @click="changeListStatus(index)">
        <h4>{{item.title}}</h4>
        <span class="arrow" :class="item.status?'rotate':''"></span>
        <ul class="detail" v-if="item.status">
          <li>
            <span class="name">类型</span>
            <span class="value">{{item.type}}</span>
          </li>
          <li>
            <span class="name">金额</span>
            <span class="value">￥{{item.money}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script src="../assets/js/incomeSub"></script>
<style lang="scss" src="../assets/css/incomeSub.scss"></style>
