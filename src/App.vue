<template>
  <div id="app">
    <!-- Sidebar là đầy đủ cả icon và chữ -->
    <SideBar v-if="activeSideBar == true" />
    <!-- SideBarx là chỉ có icon thôi -->
    <SideBarx v-if="activeSideBar == false" />
    <!-- RightPage là phần bên phải gồm header và content  -->
    <RightPage />
    <!-- <Dialog1 v-if="isShow == true" /> -->
  </div>
</template>

<script>
import SideBar from "./components/LeftPage/SideBar.vue";
import SideBarx from "./components/LeftPage/SideBarx.vue";
import RightPage from "./components/RightPage/RightPage.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    SideBar,
    SideBarx,
    RightPage,
  },
  computed: {
    // hiện dialog
    isShow() {
      return this.$store.state.isShow;
    },
    // thu gọn/ mở rộng sidebar
    activeSideBar() {
      return this.$store.state.activeSideBar;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
    margin: 0;
    font-family: GoogleSans-Regular !important;
    font-size: 13px !important;
}

.v-application .title {
    font-family: GoogleSans-Regular !important;
}

.v-application {
    font-family: GoogleSans-Regular !important;
    font-size: 13px !important;
    color: #000000 !important;
}

.v-application a {
    font-weight: bold;
    color: #2c3e50 !important;
}

@font-face {
    font-family: 'GoogleSans-Regular';
    src: url('assets/font/GoogleSans-Regular.otf') format('opentype');
}

@font-face {
    font-family: 'GoogleSans-Bold';
    src: url('assets/font/GoogleSans-Bold.otf') format('opentype');
}

@font-face {
    font-family: 'GoogleSans-Italic';
    src: url('assets/font/GoogleSans-Italic.otf') format('opentype');
}

@font-face {
    font-family: 'GoogleSans-Light';
    src: url('assets/font/GoogleSans-Light.otf') format('opentype');
}

@font-face {
    font-family: 'GoogleSans-Thin';
    src: url('assets/font/GoogleSans-Thin.otf') format('opentype');
}

@font-face {
    font-family: 'GoogleSans-Black';
    src: url('assets/font/GoogleSans-Black.otf') format('opentype');
}

::-webkit-scrollbar {
    width: 5px !important;
    height: 5px !important;
    
}

::-webkit-scrollbar-track {
    width: 6px;
    background-color: #bbb;
}

::-webkit-scrollbar-thumb {
    background-color: #808080;
    border-radius: 8px
}
#app {
  display: flex;
  height: 100%;
  overflow: hidden;
}
</style>
