<template>
  <div class="header">
    <div class="header-left">
      <!-- select các nhà hàng và trả về cho select_res  -->
      <select class="list-res" v-model="select_res">
        <option disabled value="">Please select one</option>
        <option value="0">Nhà hàng Biển Đông</option>
        <option value="1">Nhà hàng Biển Đen</option>
        <option value="2">Nhà hàng Biển Chết</option>
      </select>
    </div>
    <!-- khối gồm avatar, tên người dùng và nút more  -->
    <div class="block-user">
      <!-- ảnh avatar mặc định  -->
      <img src="../../../assets/icon/avatar-default.png" id="avatar" />
      <!-- Tên người dùng  -->
      <span>{{ username }}</span>
      <!-- Ảnh nút ba chấm  -->
      <img src="../../../assets/icon/option.png" id="more" />
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      username: "Vũ Thanh Thiên",
      select_res: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 60px;
  border: rgb(177, 173, 173) 1px solid;
  border-left: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 102%; */
}
/* css cho chon nha hang  */
.header .header-left {
  margin: 15px;
  position: relative;
}

.header .header-left select {
  height: 40px;
}

.header .header-left .list-res {
  font-weight: 700;
  width: 100%;
  border: none;
}

.header .header-left .list-res:focus {
  outline: none;
}
/* css cho khoi user  */
.block-user {
  position: relative;
  display: flex;
  height: 60px;
  width: 200px;
  justify-content: space-between;
  align-items: center;
  margin-right: 15px;
}

#avatar {
  height: 40px;
  width: 40px;
  background-size: contain;
  background-repeat: no-repeat;
}

#more {
  height: 25px;
  width: 25px;
  background-size: contain;
  background-repeat: no-repeat;
}
span {
  font-size: 16px;
  font-weight: bolder;
}
</style>
