<template>
  <div class="grid grid-employee">
    <table id="tblistdata">
      <thead>
        <tr>
          <th>Mã nhân viên</th>
          <th>Họ và tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Điện thoại</th>
          <th>Email</th>
          <th>Vị trí</th>
          <th>Phòng ban</th>
          <th>Lương cơ bản</th>
          <th>Trạng thái công việc</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees"
          :key="employee.EmployeeId"
          @dblclick="rowOnClick(employee)">
          <td>{{ employee.EmployeeCode}}</td>
          <td>{{ employee.FullName  }}</td>
          <td>{{ employee.GenderName }}</td>
          <td>{{ employee.DateOfBirth }}</td>
          <td>{{ employee.PhoneNumberr }}</td>
          <td>{{ employee.Email }}</td>
          <td>{{ employee.PositionName }}</td>
          <td>{{ employee.DepartmentName }}</td>
          <td>{{ employee.Salary }}</td>
          <td>{{ employee.WorkStatusName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as axios from "axios";
export default {
  methods:{
    rowOnClick(employee){
      alert(employee.FullName);
    },
  },
  data() {
    return {
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
        }
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
    margin-top:10px;
    margin-bottom: 100px;
}

.grid-employee {
    margin-left: 15px;
    margin-right: 15px;
    height: calc(100% - 169px);
    overflow: auto;
}

thead th {
    position: sticky;
    top: 0;
    background-color: #019160;  
}

td{
    cursor: pointer;
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
/*    cursor: pointer;*/
}
tbody{
    height:450px;
    overflow: auto;
}
tr:nth-child(even) {
    background-color: rgba(223, 222, 222, 0.7);
}

tr:hover {
    background: #f5f3f3;
}
/* table {
  border-collapse: separate;
  text-indent: initial;
}
body {
  margin: 0;
  font-family: GoogleSans-Regular !important;
  font-size: 13px !important;
}

.grid-employee {
  margin-left: 15px;
  margin-right: 15px;
  height: calc(100% - 110px);
}
.grid {
  width: 100%;
  overflow-x: auto;
  overflow-y: auto;
}

.grid table td {
  border-bottom: 1px solid #bbbbbb;
  padding: 15px 16px !important;
  text-align: left;
  white-space: nowrap;
  box-sizing: border-box;
  text-overflow: ellipsis;
  word-break: break-all;
}
.grid table th {
  font-weight: bold !important;
}
.grid tbody tr:hover {
  background-color: #d9d9d9;
  cursor: pointer;
}
thead {
  position: sticky;
  top: 0;
}

td {
  border-bottom: 1px solid #dddddd;
}

.grid table th {
  font-weight: bold !important;
  text-align: left;
}

tbody {
  height: 450px;
}

::-webkit-scrollbar-track {
  width: 6px;
  background-color: #bbb;
}
::-webkit-scrollbar {
  width: 5px !important;
  height: 5px !important;
}

::-webkit-scrollbar-thumb {
  background-color: #808080;
  border-radius: 8px;
} */
</style>