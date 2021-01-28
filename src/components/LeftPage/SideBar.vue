<template>
  <div class="sidebar">
    <div class="logo">
      <!-- ảnh hình vuông -->
      <img
        @click="activeSideBar"
        class="toggle"
        src="../../assets/img/toggle.png"
      />
      <!-- ảnh logo cukcuk  -->
      <img class="cukcuk-logo" src="../../assets/img/cukcuk-logo.png" />
    </div>

    <div class="menu">
      <ul>
        <li class="item">
          <img class="icon" id="icon1" src="../../assets/icon/dashboard.png" />
          Tổng quan
        </li>
        <li class="item">
          <img class="icon" id="icon1" src="../../assets/icon/report.png" />
          Báo cáo
        </li>
        <li class="item">
          <img class="icon" id="icon1" src="../../assets/icon/dashboard.png" />
          Mua hàng
        </li>
        <li class="item">
          <img
            class="icon"
            id="icon1"
            src="../../assets/icon/dic-employee.png"
          />
          Danh mục nhân viên
        </li>
        <li class="item">
          <img class="icon" id="icon1" src="../../assets/icon/setting.png" />
          Thiết lập hệ thống
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  methods: {
    activeSideBar() {
      this.$store.dispatch("activeSideBar");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  height: 100vh;
  width: 199px;
  border-right: solid 1px gray;
}
.logo {
  padding: 5px;
  width: 100%;
  height: 100px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
}
.toggle {
  height: 30px;
  width: 30px;
  background-size: cover;
  background-position: center;
}
.cukcuk-logo {
  height: 40px;
  width: 145px;
  /* transform: scale(0.08, 0.08); */
  background-size: cover;
  background-position: center;
  margin-right: 8px;
}

.logo:hover {
  cursor: pointer;
}
.menu {
  width: 199px;
}
.menu li {
  align-items: center;
  font-weight: 30;
  font-size: 15px;
  margin-top: 10px;
}
.menu .item {
  display: flex;
  height: 40px;
}
.icon {
  width: 30px;
  height: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 10px;
  margin-left: 5px;
}

.menu li:hover {
  background-color: rgb(216, 215, 215);
  cursor: pointer;
}
</style>
