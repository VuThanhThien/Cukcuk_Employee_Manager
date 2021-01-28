<template>
  <div class="content">
    <!-- Dòng đầu tiên gồm tiêu đề và nút thêm  -->
    <div class="first-line">
      <!-- Tiêu đề  -->
      <h1>DANH SÁCH NHÂN VIÊN</h1>
      <!-- Nút thêm  -->
      <button @click="openDialog" class="add">
        <img class="btn-add" src="../../../assets/icon/add.png" />
        <div class="add-text">Thêm nhân viên</div>
      </button>
      <Dialog1 v-if="isShow" />
    </div>
    <!-- Dòng thứ 2  -->
    <div class="second-line">
      <div class="second-line-left">
        <!-- Thanh tìm kiếm  -->
        <div class="searchbox">
          <img class="icon-search" src="../../../assets/icon/search.png" />
          <input
            id="search-field"
            type="text"
            placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại"
            v-model="searchContent"
          />
        </div>

        <!-- chọn phòng ban  -->
        <select class="sel-department" v-model="sel_department">
          <option disabled value="">Chọn phòng ban</option>
          <option value="0">Tất cả phòng ban</option>
          <option value="1">Phòng Đào Tạo</option>
          <option value="2">Phòng Nhân Sự</option>
        </select>
        <!-- Chọn vị trí  -->
        <select class="sel-department" v-model="sel_position">
          <option disabled value="">Chọn vị trí</option>
          <option value="0">Nhân viên</option>
          <option value="1">Giám đốc</option>
        </select>
      </div>
      <!-- Nút reload  -->
      <button class="refresh">
        <img src="../../../assets/icon/refresh.png" />
      </button>
    </div>
    <!-- gọi component table  -->
    <Table />
  </div>
</template>

<script>
import Table from "./Table";
import Dialog1 from "../../Dialog/Dialog1.vue";
export default {
  name: "content",
  computed:{
    isShow(){
      return this.$store.state.isShow;
    },
  },
  data() {
    return {
      sel_department: "",
      sel_position: "",
      searchContent: "",
    };
  },

  methods: {
    openDialog() {
      this.$store.dispatch("openDialog");
    },
    btnAddOnClick() {
      this.isHideParent = false;
    },
    
  },
  components: {
    Table,
    Dialog1,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  height: calc(100vh - 111px);
  width: calc(100vw - 200px);
}
.content .first-line {
  height: 55px;
  position: relative;
  display: flex;
  justify-content: space-between;
}
.content .first-line h1 {
  font-weight: bold;
  margin: 20px;
}
.content .first-line .add {
  position: absolute;
  right: 7px;
  height: 40px;
  width: 160px;
  background-color: #019160;
  border-radius: 4px;
  margin: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  font-size: 13px;
}
.content .first-line .add .btn-add {
  height: 16px;
  width: 16px;
  margin-left: 16px;
  margin-right: 8px;
  background-size: contain;
  background-repeat: no-repeat;
}
.content .first-line .add .add-text {
  color: #fff;
}
.content .second-line {
  margin-top: 10px;
  height: 60px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content .second-line .second-line-left {
  display: flex;
  align-items: center;
}
.content .second-line .second-line-left .searchbox {
  height: 40px;
  width: 350px;
  border-radius: 4px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  border: solid 1px #808080;
}
.content .second-line .second-line-left .searchbox .icon-search {
  height: 16px;
  width: 16px;
  margin-left: 16px;
  margin-right: 8px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
}
.content .second-line .second-line-left .searchbox input {
  color: #808080;
  font-size: xx-small;
  border: 0;
  font-size: smaller;
  width: 260px;
  outline: none;
}
.content .second-line .second-line-left .searchbox ::placeholder {
  font-size: 13px;
}
.content .second-line .second-line-left .sel-department,
.sel-position {
  height: 40px;
  width: 180px;
  border-radius: 4px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  border: solid 1px #808080;
  margin-top: 0;
  padding-left: 16px;
}
.content .second-line .refresh {
  height: 40px;
  width: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 20px;
  border: 1px solid gray;
}
.content .second-line .second-line-left .searchbox:focus-visible {
  border: 1px;
  outline-color: #019160;
}
</style>
