<template>
  <div class="customer_management_container">
    <mt-header title="安全管理"></mt-header>
    <mt-navbar v-model="selected" :class="2<5?'title_center':''">
      <mt-tab-item id="1"><span @click="jumpNumber('contract')">合同签订</span></mt-tab-item>
      <mt-tab-item id="2"><span @click="jumpNumber('satisfaction');jumpNumber('promptness')">客户服务</span></mt-tab-item>
      <mt-tab-item id="3"><span @click="jumpNumber('water')">水务服务</span></mt-tab-item>
      <mt-tab-item id="4"><span @click="jumpNumber('publicNumber')">公众号</span></mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="customer_wrapper">
          <div class="percent"><span id="avgPercent"></span></div>
          <div class="name">新合同签订率</div>
          <ul class="resident_customer">
            <li>
              <div class="nameList">居民新合同签订率</div>
              <div class="percentList"><span id="resident"></span></div>
            </li>
            <li>
              <div class="nameList">非居民新合同签订率</div>
              <div class="percentList"><span id="nonResident"></span></div>
            </li>
          </ul>
        </div>
        <div class="lineWrapper">
          <div id="contractLine" style="height:40vh;width:200vw"></div>
          <ul class="monthSelect">
            <li v-for="(item,index) in contractLineData" @click="changeActive('contract',index)" :class="item.isActive ? 'activeMonth':''">
              {{item.month}}
            </li>
          </ul>
        </div>
        <div class="legend">
          <ul>
            <li><span class="resident"></span>居民新合同签订率</li>
            <li><span class="nonResident"></span>非居民新合同签订率</li>
          </ul>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="customer_wrapper">
          <div id="countPie" style="height:35vh;width:100vw"></div>
          <ul class="resident_customer">
            <li @click="changeData(true)">
              <div class="nameList" :class="customerStatus?'activeColor':''">客户满意度</div>
              <div class="percentList"><span id="satisfaction"></span></div>
            </li>
            <li @click="changeData(false)">
              <div class="nameList" :class="customerStatus?'':'activeColor'">舆情监测办结及时率</div>
              <div class="percentList"><span id="promptness"></span></div>
            </li>
          </ul>
        </div>
        <div class="lineWrapper">
          <div id="customerLine" style="height:40vh;width:200vw"></div>
          <ul class="monthSelect" v-if="customerStatus">
            <li v-for="(item,index) in customerLineData" @click="changeActive('satisfaction',index)" :class="item.isActive ? 'activeMonth':''">
              {{item.month}}
            </li>
          </ul>
          <ul class="monthSelect" v-else>
            <li v-for="(item,index) in customerLineData" @click="changeActive('promptness',index)" :class="item.isActive ? 'activeMonth':''">
              {{item.month}}
            </li>
          </ul>
        </div>
        <div class="legend">
          <ul>
            <li><span class="resident"></span>{{customerLegend}}</li>
          </ul>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="customer_wrapper">
          <div id="waterPie" style="height:45vh;width:100vw"></div>
        </div>
        <ul class="nav">
          <li @click="changeWaterData(0)">
            <div class="name">新装数量</div>
            <div class="count"><span id="newClothes"></span></div>
            <mt-progress :value="newClothesPer" :bar-height="10"></mt-progress>
          </li>
          <li @click="changeWaterData(1)">
            <div class="name">报修数量</div>
            <div class="count"><span id="repair"></span></div>
            <mt-progress :value="repairPer" :bar-height="10"></mt-progress>
          </li>
          <li @click="changeWaterData(2)">
            <div class="name">投诉数量</div>
            <div class="count"><span id="complaint"></span></div>
            <mt-progress :value="complaintPer" :bar-height="10"></mt-progress>
          </li>
          <li @click="changeWaterData(3)">
            <div class="name">监督举报数量</div>
            <div class="count"><span id="report"></span></div>
            <mt-progress :value="reportPer" :bar-height="10"></mt-progress>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <div class="customer_wrapper">
          <mt-cell title="公众号详情"></mt-cell>
          <div class="detailWrapper">
            <ul class="detail">
              <li @click="changePublicNumberData('follow')">
                <mt-cell title="关注率和关注数"></mt-cell>
                <div id="followPie" style="height:20vh;width:36vw"></div>
                <div class="horn"></div>
                <span class="count"><span id="followNum"></span></span>
              </li>
              <li @click="changePublicNumberData('binding')">
                <mt-cell title="绑定率和绑定数"></mt-cell>
                <div id="bindingPie" style="height:20vh;width:36vw"></div>
                <div class="horn"></div>
                <span class="count"><span id="bindingNum"></span></span>
              </li>
              <li @click="changePublicNumberData('read')">
                <mt-cell title="阅读率和阅读数"></mt-cell>
                <div id="readPie" style="height:20vh;width:36vw"></div>
                <div class="horn"></div>
                <span class="count"><span id="readNum"></span></span>
              </li>
            </ul>
          </div>
        </div>
        <div class="lineWrapper">
          <div id="publicNumberLine" style="height:40vh;width:200vw"></div>
          <ul class="monthSelect">
            <li v-for="(item,index) in publicNumberData" @click="changeActive('publicNumber',index)" :class="item.isActive ? 'activeMonth':''">
              {{item.month}}
            </li>
          </ul>
        </div>
        <div class="legend">
          <ul>
            <li><span class="resident"></span>{{legend}}</li>
          </ul>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script src="../assets/js/customerManagement"></script>
<style lang="scss" src="../assets/css/customerManagement.scss"></style>
