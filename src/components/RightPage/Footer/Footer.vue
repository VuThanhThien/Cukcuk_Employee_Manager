<template>
  <div class="footer">
    <div class="footer-left">Hiển thị 1-10/1000 nhân viên</div>
    <div class="footer-center">
      <button class="change-page">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevrons-left"
        >
          <polyline points="11 17 6 12 11 7"></polyline>
          <polyline points="18 17 13 12 18 7"></polyline>
        </svg>
      </button>

      <button class="change-page">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-left"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button class="numberpage">1</button>
      <button class="numberpage">2</button>
      <button class="numberpage">3</button>

      <button class="change-page">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-right"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <button class="change-page">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevrons-right"
        >
          <polyline points="13 17 18 12 13 7"></polyline>
          <polyline points="6 17 11 12 6 7"></polyline>
        </svg>
      </button>
    </div>
    <div class="footer-right">25 Nhân viên/ trang</div>
  </div>
</template>

<script>
export default {
  name: "footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  position: relative;
  border-top: 1px solid #bbbbbb;
  align-items: center;
  display: flex;
  height: 50px;
  background-color: #ffffff;
  padding: 0 16px;
  justify-content: space-between;
  cursor: pointer;
}
.footer .footer-left {
  margin-left: 16px;
}
.footer .footer-right {
  margin-right: 16px;
}
.footer .footer-center {
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.change-page {
  border: none;
  background-color: #fff  !important;
}
.footer .footer-center .numberpage {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 26px;
  color: #000000;
  text-align: center;
  background: #ffffff;
  border: solid 1px;
}
.footer .footer-center .numberpage:focus {
  background: #019160;
  color: azure;
  outline: none;
}
.footer .footer-center .numberpage:hover {
  background-color: #019160;
}
.change-page:focus {
  outline: none;
}
.change-page:hover {
  color: red;
}
</style>
