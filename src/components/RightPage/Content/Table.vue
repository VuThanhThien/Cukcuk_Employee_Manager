<template>
  <div class="grid grid-employee">
    <!-- <table id="tblistdata">
      <thead>
        <tr>
          <th>Mã nhân viên</th>
          <th>Họ và tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Điện thoại</th>
          <th>Vị trí</th>
          <th>Phòng ban</th>
          <th>Lương cơ bản</th>
          <th>Trạng thái công việc</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in employee" :key="index">
          <td>{{ item.employeeCode }}</td>
          <td>{{ item.fullName }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.birthday }}</td>
          <td>{{ item.phoneNumber }}</td>
          <td>{{ item.posiotion }}</td>
          <td>{{ item.department }}</td>
          <td>{{ item.salary }}</td>
          <td>{{ item.jobStatus }}</td>
          <td>{{ item.email }}</td>
        </tr>
      </tbody>
    </table> -->
    <table
      id="tbListData"
      cellspacing="0"
      cellpadding="0"
      border="0"
      class="el-table__body"
      style="min-width: 100%"
    >
      <thead class="has-gutter">
        <tr class="el-table__row">
          <th fieldName="EmployeeCode">
            <div class="cell">Mã nhân viên</div>
          </th>
          <th fieldName="FullName">
            <div class="cell">Họ và tên</div>
          </th>
          <th fieldName="GenderName">
            <div class="cell">Giới tính</div>
          </th>
          <th fieldName="DateOfBirth" style="text-align: center">
            <div class="cell">Ngày sinh</div>
          </th>
          <th fieldName="PhoneNumber">
            <div class="cell">Điện thoại</div>
          </th>
          <th fieldName="Email">
            <div class="cell">Email</div>
          </th>
          <th fieldName="PositionName">
            <div class="cell">Chức vụ</div>
          </th>
          <th fieldName="DepartmentName">
            <div class="cell">Phòng ban</div>
          </th>
          <th fieldName="Salary">
            <div class="cell">Mức lương cơ bản</div>
          </th>
          <th fieldName="WorkStatusName">
            <div class="cell">Tình trạng công việc</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="el-table__row"
          v-for="employee in employees"
          :key="employee.EmployeeId"
          @dblclick="rowOnClick(employee)"
        >
          <td>
            <div class="cell">{{ employee.EmployeeCode }}</div>
          </td>
          <td>
            <div class="cell">{{ employee.FullName }}</div>
          </td>
          <td>
            <div class="cell">{{ employee.GenderName }}</div>
          </td>
          <td>
            <div class="cell">{{ format_date(employee.DateOfBirth) }}</div>
          </td>
          <td>
            <div class="cell">{{ employee.PhoneNumber }}</div>
          </td>
          <td>
            <div class="cell">{{ employee.Email }}</div>
          </td>
          <td>
            <div class="cell">{{ employee.PositionName }}</div>
          </td>
          <td>
            <div class="cell">{{ employee.DepartmentName }}</div>
          </td>
          <td>
            <div class="cell" >{{ formatPrice(employee.Salary) }}</div>
          </td>
          <td>
            <div class="cell">{{ employee.WorkStatusName }}</div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Popup chọn sửa hoặc xóa  -->
    <transition
      name="fade"
      enter-active-class="animated slideInDown"
      leave-active-class="animated slideOutDown"
    >
      <div class="popup" v-if="isShowPopup">
        <div class="editEmployee">
          <button class="btn-closepopup" @click="closePopup">
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
              class="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <p>Vui lòng chọn sửa hoặc xóa nhân viên</p>
          <br />
          <div class="btn-popup">
            <button type="button" class="btn-edit" @click="openDialog">
              Sửa
            </button>
            <button class="btn-delete" type="button">Xóa</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import * as axios from "axios";
import moment from "moment";
export default {
  computed: {
    isShow() {
      return this.$store.state.isShow;
    },
  },
  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD / MM / YYYY");
      }
    },
    formatPrice(value) {
      if (value) {
      var salary = value.toString();
      return salary.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      }
    },
    openDialog() {
      this.closePopup();
      this.$store.dispatch("openDialog");
    },
    rowOnClick(employee) {
      console.log(employee);
      this.isShowPopup = true;
      this.$store.dispatch("getDataFromRow", employee);
    },
    closePopup() {
      this.isShowPopup = false;
    },
    updateEmployee() {},
  },
  data() {
    return {
      isShowPopup: false,
      employees: [
        {
          EmployeeCode: 159,
          FullName: "Frozen",
          GenderName: "nam",
          DateOfBirth: "05/10/1999",
          PhoneNumber: "036280000",
          PositionName: "sss",
          DepartmentName: "sdfsdvc",
          Salary: "10000000",
          WorkStatusName: "asas",
          Email: "asdsd",
        },
        {
          EmployeeCode: 159,
          FullName: "Frozen",
          GenderName: "nam",
          DateOfBirth: "05/10/1999",
          PhoneNumber: "036280000",
          PositionName: "sss",
          DepartmentName: "sdfsdvc",
          Salary: "10000000",
          WorkStatusName: "asas",
          Email: "asdsd",
        },
        {
          EmployeeCode: 159,
          FullName: "Frozen",
          GenderName: "nam",
          DateOfBirth: "05/10/1999",
          PhoneNumber: "036280000",
          PositionName: "sss",
          DepartmentName: "sdfsdvc",
          Salary: "10000000",
          WorkStatusName: "asas",
          Email: "asdsd",
        },
      ],
    };
  },
  async created() {
    const response = await axios.get("http://api.manhnv.net/api/employees");
    console.log(response);
    this.employees = response.data;
  },
};
</script>
<style scoped>
table {
  width: 100%;
  height: 400px;
  margin-top: 10px;
  margin-bottom: 100px;
}
.grid-employee {
  margin-left: 15px;
  margin-right: 15px;
  height: calc(100% - 125px);
  overflow: auto;
}
thead th {
  position: sticky;
  top: -1px;
  background-color: #fff;
}

td,
th {
  /* border: 1px solid #dddddd; */
  padding: 8px;
  text-align: left;
}
tbody {
  height: 450px;
  overflow: auto;
  font-family: GoogleSans-Regular !important;
  font-size: 13px !important;
}
tbody tr:hover {
  background-color: #d9d9d9;
  cursor: pointer;
}
.popup {
  position: fixed;
  top: 20px;
  width: 100%;
  height: 100%;
}
.popup .editEmployee {
  background-color: #cbcecd;
  width: 18%;
  margin-left: 20%;
  margin-top: 150px;
  border-radius: 10px;
  padding: 40px;
  font-size: 15px;
  position: relative;
}
.popup .editEmployee .btn-closepopup {
  position: absolute;
  top: 5px;
  right: 5px;
  color: black;
  background-color: #cbcecd;
  border: none;
}
.popup .editEmployee .btn-closepopup:focus {
  outline: none;
}
.popup .editEmployee .btn-popup {
  display: flex;
  justify-content: space-around;
}
.popup .editEmployee .btn-popup .btn-edit,
.btn-delete {
  width: 70px;
  border: solid 1px #ffffff;
  margin-right: 20px;
  height: 31px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #1a8557;
  border: none;
  border-radius: 4px;
}
.popup .editEmployee .btn-popup .btn-edit,
.btn-delete:focus {
  outline: none;
}
</style>