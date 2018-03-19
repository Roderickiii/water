<template>
  <div class="equipment_management_container">
    <mt-header title="安全管理"></mt-header>
    <mt-navbar v-model="selected" :class="2<5?'title_center':''">
      <mt-tab-item id="1">2017年</mt-tab-item>
      <mt-tab-item id="2">2018年</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected" :swipeable='true' class="page-tabbar-tab-container">
      <mt-tab-container-item id="1">
        <div class="equipment_wrapper" v-for="item in equipmentData1">
          <span class="target" :class="item.value=='安全'?'greenBg':'orangeBg'"></span>
          <span class="name">{{item.name}}</span>
          <span class="type" :class="item.value=='安全'?'green':'orange'">{{item.value}}</span>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="equipment_wrapper" v-for="item in equipmentData2">
          <span class="target" :class="item.value=='安全'?'greenBg':'orangeBg'"></span>
          <span class="name">{{item.name}}</span>
          <span class="type" :class="item.value=='安全'?'green':'orange'">{{item.value}}</span>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script src="../assets/js/equipmentManagement"></script>
<style lang="scss" src="../assets/css/equipmentManagement.scss"></style>
