<template>
  <div class="container">
    <mt-header title="水务大数据平台"></mt-header>
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="../assets/images/banner.png"></mt-swipe-item>
    </mt-swipe>
    <ul class="nav">
      <li>
        <router-link to="/monitor"><span>水质监测</span></router-link>
      </li>
      <li>
        <router-link to="/securityManagement"><span>安全管理</span></router-link>
      </li>
      <li>
        <router-link to="/operationManagement"><span>运营管理</span></router-link>
      </li>
      <li>
        <router-link to="/customerManagement"><span>客户管理</span></router-link>
      </li>
      <li>
        <router-link to="/equipmentManagement"><span>设备管理</span></router-link>
      </li>
      <li>
        <router-link to="/monitorSystem"><span>监控系统</span></router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" src="../assets/css/index.scss" scoped></style>
