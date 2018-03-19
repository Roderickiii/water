<template>
  <div class="safe_management_container">
    <mt-header title="安全管理"></mt-header>
    <mt-navbar v-model="selected" :class="2<5?'title_center':''">
      <mt-tab-item id="1">2017年</mt-tab-item>
      <mt-tab-item id="2">2018年</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected" :swipeable='true' class="page-tabbar-tab-container">
      <mt-tab-container-item id="1">
        <div class="safe_wrapper" v-for="item in safeData1">
          <router-link :to="item.path">
            <mt-cell :title="item.name"></mt-cell>
            <mt-progress :value="item.value/safeMaxData1*100" :bar-height="10">
              <div slot="end" class="percent">{{item.value}}</div>
            </mt-progress>
            <div class="horn"></div>
          </router-link>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="safe_wrapper" v-for="item in safeData2">
          <router-link :to="item.path">
            <mt-cell :title="item.name"></mt-cell>
            <mt-progress :value="item.value/safeMaxData2*100" :bar-height="10">
              <div slot="end" class="percent">{{item.value}}</div>
            </mt-progress>
            <div class="horn"></div>
          </router-link>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script src="../assets/js/securityManagement"></script>
<style lang="scss" src="../assets/css/securityManagement.scss"></style>
