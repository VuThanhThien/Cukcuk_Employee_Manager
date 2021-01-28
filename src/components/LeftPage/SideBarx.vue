<template>
  <div class="sidebar">
    <div class="logo">
      <!-- ảnh hình vuông -->
      <img
        @click="activeSideBar"
        class="toggle"
        src="../../assets/img/toggle.png"
      />
    </div>
    <!-- ảnh menu  -->
    <div class="menu">
      <ul>
        <li class="item">
          <img class="icon" id="icon1" src="../../assets/icon/dashboard.png" />
        </li>
        <li class="item">
          <img class="icon" id="icon1" src="../../assets/icon/report.png" />
        </li>
        <li class="item">
          <img class="icon" id="icon1" src="../../assets/icon/dashboard.png" />
        </li>
        <li class="item">
          <img
            class="icon"
            id="icon1"
            src="../../assets/icon/dic-employee.png"
          />
        </li>
        <li class="item">
          <img class="icon" id="icon1" src="../../assets/icon/setting.png" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebarx",
  // method để gọi hàm từ click activeSidebar từ store ra
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
  width: 50px;
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

.logo:hover {
  cursor: pointer;
}
/* .menu {
      width: 199px;
} */
.menu li {
  align-items: center;
  font-weight: 30;
  font-size: 15px;
  margin-top: 10px;
  width: 49px !important;
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
