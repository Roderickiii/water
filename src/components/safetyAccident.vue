<template>
  <div class="safe_management_container">
    <mt-header title="安全事故"></mt-header>
    <div id="countPie" style="height:50vh;width:100%"></div>
    <div class="countLineWrapper">
      <div id="countLine" style="height:50vh;width:200vw"></div>
      <ul id="monthSelect">
        <li v-for="(item,index) in monthData" @click="changeActive(index)" :class="item.isActive ? 'activeMonth':''">
          <!-- <span v-if="item.isActive">{{item.count}}</span> -->
          {{item.month}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script src="../assets/js/safetyAccident"></script>
<style lang="scss" src="../assets/css/safetyAccident.scss" scoped></style>
