<template>
  <div class="modal" :class="{ isHide: isHide }">
    <div class="dialog-mask">
      <div draggable="true" class="dialog">
        <!-- nút x thoát dialog  -->
        <button class="close-dialog" v-on:click="closeDialog">
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
        <!-- tiêu đề dialog  -->
        <h3>THÔNG TIN NHÂN VIÊN</h3>
        <!-- body dialog  -->
        <div class="dialog-content">
          <!-- khối avatar  -->
          <div class="block-ava">
            <img class="dl-avatar" src="../../assets/img/default-avatar.jpg" />
            <div class="avt-subtitle">
              (Vui lòng chọn ảnh có định dạng <br />
              <span>.jpg, .jpeg, .png, .gif</span>)
            </div>
          </div>
          <!-- Khối điền thông tin  -->
          <div class="block-right">
            <h4>A. THÔNG TIN CHUNG</h4>
            <hr />
            <!-- block 2 là khối chưa 2 trường nhập  -->
            <div class="block-2">
              <!-- block 1 là khối chứ 1 trường nhập  -->
              <div class="block-1">
                <div class="fieldName">Mã nhân viên (<span>*</span>)</div>
                <!-- nhập mã nhân viên  -->
                <input
                  id="txtEmployeeCode"
                  fieldName="EmployeeCode"
                  class="input-required"
                  type="text"
                  v-model="employee.EmployeeCode"
                />
              </div>
              <!-- Nhập họ tên  -->
              <div class="block-1">
                <div class="fieldName">Họ và tên (<span>*</span>)</div>
                <input
                  id="txtFullName"
                  fieldName="FullName"
                  class="input-required"
                  type="text"
                  v-model="employee.FullName"
                />
              </div>
            </div>
            <!-- Nhập ngày sinh  -->
            <div class="block-2">
              <div class="block-1">
                <div class="fieldName">Ngày sinh</div>
                <input
                  class="m-combobox-input"
                  type="date"
                  autocomplete="off"
                  v-model="employee.DateOfBirth"
                />
              </div>
              <!-- Nhập giới tính  -->
              <div class="block-1">
                <div class="fieldName">Giới tính</div>
                <select name="gender" id="cbxGender" v-model="employee.Gender">
                  <option value="-1">Chọn giới tính</option>
                  <option value="0">Nữ</option>
                  <option value="1">Nam</option>
                  <option value="2">Khác</option>
                </select>
              </div>
            </div>
            <div class="block-2">
              <div class="block-1">
                <!-- Nhập cmtnd/ căn cước  -->
                <div class="fieldName">Số CMTND/Căn cước (<span>*</span>)</div>
                <input
                  id="txtIdentityNumber"
                  fieldName="text"
                  type="text"
                  v-model="employee.IdentityNumber"
                />
              </div>
              <!-- Ngầy cấp cmtnd/cc  -->
              <div class="block-1">
                <div class="fieldName">Ngày cấp</div>
                <input
                  class="m-combobox-input"
                  type="date"
                  autocomplete="off"
                  v-model="employee.IdentityDate"
                />
              </div>
            </div>
            <div class="block-2">
              <div class="block-1">
                <!-- Nới cấp cmtnd/cc  -->
                <div class="fieldName">Nơi cấp</div>
                <input
                  id="txtIdentityPlace"
                  fieldName="PhoneNumber"
                  class="input-required"
                  type="text"
                  v-model="employee.IdentityPlace"
                />
              </div>
            </div>
            <div class="block-2">
              <div class="block-1">
                <!-- Email  -->
                <div class="fieldName">Email (<span>*</span>)</div>
                <input
                  id="txtEmail"
                  fieldName="Email"
                  type="email"
                  placeholder="example@domain.com"
                  v-model="employee.Email"
                />
              </div>
              <div class="block-1">
                <!-- Số điện thoại  -->
                <div class="fieldName">Số điện thoại (<span>*</span>)</div>
                <input
                  id="txtPhoneNumber"
                  fieldName="FullName"
                  class="input-required"
                  type="text"
                  v-model="employee.PhoneNumber"
                />
              </div>
            </div>
            <br />
            <h4>B. THÔNG TIN CÔNG VIỆC</h4>
            <hr />
            <div class="block-2">
              <div class="block-1">
                <!-- Vị trí công việc  -->
                <div class="fieldName">Vị trí</div>
                <select
                  id="cbxPosition"
                  fieldName="CustomerGroupName"
                  fieldValue="CustomerGroupId"
                  api="/api/customergroups"
                  class="m-control"
                >
                  <option value="19165ed7-212e-21c4-0428-030d4265475f">
                    Giám đốc
                  </option>
                  <option value="19165ed7-212e-21c4-0428-030d4265475f">
                    Nhân viên
                  </option>
                </select>
              </div>
              <div class="block-1">
                <!-- Phòng ban  -->
                <div class="fieldName">Phòng ban</div>
                <select
                  id="cbnDepartment"
                  fieldName="CustomerGroupName"
                  fieldValue="CustomerGroupId"
                  api="/api/customergroups"
                  class="m-control"
                >
                  <option value="19165ed7-212e-21c4-0428-030d4265475f">
                    Phòng nhân sự
                  </option>
                  <option value="19165ed7-212e-21c4-0428-030d4265475f">
                    Phòng đào tạo
                  </option>
                </select>
              </div>
            </div>
            <div class="block-2">
              <div class="block-1">
                <!-- Mã số thuế  -->
                <div class="fieldName">Mã số thuế cá nhân</div>
                <input
                  v-model="employee.PersonalTaxCode"
                  id="txtTaxCode"
                  class="TaxCode"
                  type="text"
                />
              </div>
              <div class="block-1">
                <!-- Lương  -->
                <div class="fieldName">Lương cơ bản</div>
                <input
                  v-model="employee.Salary"
                  id="txtSalary"
                  fieldName="Salary"
                  type="text"
                  style="text-align: right; padding-right: 40px"
                />
                <span class="currency-for-input">(VNĐ)</span>
              </div>
            </div>
            <div class="block-2">
              <div class="block-1">
                <div class="fieldName">Ngày gia nhập công ty</div>
                <input
                  class="m-combobox-input"
                  type="date"
                  autocomplete="off"
                />
              </div>
              <div class="block-1">
                <div class="fieldName">Tình trạng công việc</div>
                <select
                  id="cboWorkStatus"
                  fieldName="CustomerGroupName"
                  fieldValue="CustomerGroupId"
                  api="/api/customergroups"
                  class="m-control"
                >
                  <option value="19165ed7-212e-21c4-0428-030d4265475f">
                    Đang làm việc
                  </option>
                  <option value="19165ed7-212e-21c4-0428-030d4265475f">
                    Đang thử việc
                  </option>
                  <option value="19165ed7-212e-21c4-0428-030d4265475f">
                    Nghỉ việc
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <!-- footer dialog  -->
        <div class="dialog-footer">
          <div class="footer-content">
            <button id="btn-cancel" v-on:click="closeDialog">Hủy</button>
            <button id="btn-save" @click="saveEmployee">Lưu</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as axios from "axios";
export default {
  name: "dialog1",
  props: ["isHide"],
  methods: {
    closeDialog() {
      this.$store.dispatch("closeDialog");
      this.$store.dispatch("getDataFromRow", {});
    },
    saveEmployee() {
      if (this.employee.EmployeeId == null) {
        axios({
          method: "POST",
          url: "http://api.manhnv.net/api/employees",
          data: this.employee,
        }).catch((e) => console.log(e));
        console.log(this.employee);
      } else {
        axios({
          method: "PUT",
          url: "http://api.manhnv.net/api/employees",
          data: this.employee,
        }).catch((e) => console.log(e));
      }
      this.closeDialog();
    },
  },
  // hàm thực hiện sau khi component dialog được render ra
  mounted() {
    // employeeTemp là object trung gian để lấy data
    //  từ rowonclick lên store, rồi lại kéo về để validate lên form
    this.employee = this.$store.state.employeeTemp;
    this.employee.DateOfBirth = this.employee.DateOfBirth.split("T")[0];
    this.employee.IdentityDate = this.employee.IdentityDate.split("T")[0];
    this.employee.JoinDate = this.employee.JoinDate.split("T")[0];
    console.log(this.employee.EmployeeId);
  },
  data() {
    return {
      isShow: false,
      display: "none",
      //biens rong
      employee: {
        Address: "",
        DateOfBirth: "",
        DepartmentId: "",
        DepartmentName: "",
        EducationalBackground: 0,
        Email: "",
        EmployeeCode: "",
        FirstName: "",
        FullName: "",
        Gender: null,
        GenderName: "",
        IdentityDate: null,
        IdentityNumber: "",
        IdentityPlace: "",
        JoinDate: "",
        LastName: "",
        MaritalStatus: 5,
        PersonalTaxCode: "",
        PhoneNumber: "",
        PositionId: "",
        PositionName: "",
        QualificationId: "",
        QualificationName: "",
        Salary: 0,
        WorkStatus: "",
        WorkStatusName: "",
      },
    };
  },
};
</script>

<style>
.isHide {
  display: none;
}
.dialog {
  position: absolute;
  width: 45%;
  height: 86%;
  left: 27%;
  top: 4%;
  background-color: #fff;
}
.dialog-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

h3 {
  padding: 20px;
  font-weight: bold;
  text-transform: uppercase;
}
h4 {
  padding-top: 10px;
  margin-left: 14px;
}

hr {
  width: 70px;
  margin-left: 0;
  border: 2px solid #019160;
  background-color: #019160;
  margin-left: 14px;
}
.close-dialog {
  margin: 5px;
  float: right;
  top: 0;
  border: none;
  background-color: #fff !important;
}
.dialog-content {
  display: flex;
  justify-content: space-between;
}
.block-ava {
  width: 24%;
  height: calc(100% - 2px);
  margin-left: 5px;
  margin-top: 30px;
}

.dl-avatar {
  width: 160px;
  margin-left: 5%;
  margin-right: 5%;
  height: 160px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  outline: 1px black;
  border: 1px solid #ccc;
}

.avt-subtitle {
  font-size: 10px;
  width: 100%;
  height: 20%;
  text-align: center;
}

.avt-subtitle span {
  font-weight: bold;
}

.block-right {
  display: block;
}
.block-2 {
  display: flex;
  justify-content: space-between;
  width: 500px;
  align-items: center;
}
.block-1 {
  width: 250px;
  height: calc(100% - 2px);
  margin-left: 15px;
  margin-top: 10px;
}
.block-1 span {
  color: #ff0000;
}
.fieldName {
  font-size: 13px;
}
input,
select {
  padding-left: 20px;
  margin-top: 4px;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: 0.5px solid rgb(156, 153, 153);
  padding: 5px;
}

.dialog-footer {
  margin-top: 20px;
  width: 100%;
  height: 43px;
  background-color: #e9ebee;
  border-radius: 0 0 5px 5px;
  display: flex;
  align-items: center;
  justify-items: right;
  border-radius: 2px;
}

.dialog-footer .footer-content {
  position: absolute;
  right: 0px;
  margin-right: 9px;
}

.dialog-footer button {
  margin-right: 20px;
  height: 31px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #1a8557;
  border: none;
  border-radius: 4px;
}

#btn-save {
  width: 70px;
  border: solid 1px #ffffff;
}

#btn-cancel {
  border: solid 1px #ffffff;
  width: 70px;
  background-color: Transparent !important;
}

.currency-for-input {
  position: absolute;
  right: 40px;
  line-height: 40px;
  font-style: italic;
  color: black !important;
}

.dialog-footer button:hover {
  background-color: azure;
}
</style>