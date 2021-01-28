<template>
  <div>
    <!--Dialog-->
    <div id="employee-dialog" class="employee-dialog">
      <!--Tiêu đề-->
      <div class="ui-dialog-titlebar">Thông tin nhân viên</div>
      <!--Nội dung của dialog-->
      <div class="ui-dialog-content">
        <!--Chia thành các block-->
        <div class="block">
          <!-- cột avatar-->
          <div class="block-ava">
            <div class="dl-avatar"></div>
            <div class="avt-subtitle">
              Vui lòng chọn ảnh có định dạng <br />
              <span>.jpg, .jpeg, .png, .gif</span>
            </div>
          </div>
          <!-- cột thứ 2 gồm 2 cột thông tin-->
          <div class="block-2-3">
            <div class="group-label-info" style="margin-top: 30px">
              A. THÔNG TIN CHUNG
            </div>
            <!--Làm một thẻ đôi gôm 2 trường thông tin ngang hàng nhau-->
            <div class="block-2">
              <!--Một trường thông tin-->
              <div class="block-1-3">
                <div class="item">
                  <label for="employeeCode"
                    >Mã nhân viên (<span>*</span>)</label
                  >
                  <input
                    type="text"
                    name="employeeCode"
                    id="employeeCode"
                    required
                    class="input-required"
                  />
                </div>
              </div>

              <div class="block-1-3">
                <div class="item">
                  <label for="fullName">Họ và tên (<span>*</span>)</label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    class="input-required"
                  />
                </div>
              </div>
            </div>
            <div class="block-2">
              <div class="block-1-3">
                <div class="item">
                  <label for="birthDay">Ngày sinh</label>
                  <input type="date" name="birthDay" id="birthDay" />
                </div>
              </div>

              <div class="block-1-3">
                <div class="item">
                  <label for="gender">Giới tính</label>
                  <select name="gender" id="gender">
                    <option value="-1">Chọn giới tính</option>
                    <option value="1">Nam</option>
                    <option value="0">Nữ</option>
                    <option value="2">Khác</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="block-2">
              <div class="block-1-3">
                <div class="item">
                  <label for="identityCode"
                    >Số CMTND/Căn cước(<span>*</span>)</label
                  >
                  <input type="text" name="identityCode" id="identityCode" />
                </div>
              </div>

              <div class="block-1-3">
                <div class="item">
                  <label for="identityIssuedDate">Ngày cấp</label>
                  <input
                    type="date"
                    name="identityIssuedDate"
                    id="identityIssuedDate"
                  />
                </div>
              </div>
            </div>

            <div class="block-1-3">
              <div class="item">
                <label for="identityIssuedPlace">Nơi cấp</label>
                <input
                  type="text"
                  name="identityIssuedPlace"
                  id="identityIssuedPlace"
                />
              </div>
            </div>

            <div class="block-2">
              <div class="block-1-3">
                <div class="item">
                  <label for="email">Email(<span>*</span>)</label>
                  <input type="email" name="email" id="email" />
                </div>
              </div>

              <div class="block-1-3">
                <div class="item">
                  <label for="phoneNumber">Số điện thoại(<span>*</span>)</label>
                  <input type="text" name="phoneNumber" id="phoneNumber" />
                </div>
              </div>
            </div>
            <div class="group-label-info" style="margin-top: 30px">
              B. THÔNG TIN CÔNG VIỆC:
            </div>

            <div class="block-2">
              <div class="block-1-3">
                <div class="item">
                  <label for="position">Vị trí</label>
                  <select name="position" id="position">
                    <option value="-1">Chọn vị trí</option>
                    <option value="0">Giám đốc</option>
                    <option value="1">Phó giám đốc</option>
                    <option value="2">Trưởng phòng</option>
                    <option value="3">Nhân viên</option>
                    <option value="4">Viện trưởng</option>
                    <option value="5">Phó phòng</option>
                  </select>
                </div>
              </div>

              <div class="block-1-3">
                <div class="item">
                  <label for="department">Phòng ban</label>
                  <select name="department" id="department">
                    <option value="-1">Chọn phòng ban</option>
                    <option value="0">Phòng đào tạo</option>
                    <option value="1">Phòng kinh doanh</option>
                    <option value="2">Phòng kĩ thuật</option>
                    <option value="3">Phòng nhân sự</option>
                    <option value="4">Phòng marketing</option>
                    <option value="5">Phòng kế toán</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="block-2">
              <div class="block-1-3">
                <div class="item">
                  <label for="taxCode">Mã số thuế cá nhân</label>
                  <input type="text" name="taxCode" id="taxCode" />
                </div>
              </div>

              <div class="block-1-3">
                <div class="item">
                  <label>Mức lương cơ bản</label>

                  <input type="text" name="salary" id="salary" />
                  <!--<span class="unit">(VNĐ)</span>-->
                </div>
              </div>
            </div>

            <div class="block-2">
              <div class="block-1-3">
                <div class="item">
                  <label for="joinDate">Ngày gia nhập công ty</label>
                  <input type="date" name="joinDate" id="joinDate" />
                </div>
              </div>

              <div class="block-1-3">
                <div class="item">
                  <label for="statusJob">Tình trạng công việc</label>
                  <select name="statusJob" id="statusJob">
                    <option value="-1">Chọn tình trạng công việc</option>
                    <option value="1">Nghỉ chế độ</option>
                    <option value="0">Đang làm việc</option>
                    <option value="2">Đã nghỉ việc</option>
                    <option value="3">Khác</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--footer-->
      <div class="ui-dialog-footer">
        <div class="footer-content">
          <button id="btn-cancel">Hủy</button>
          <button id="btn-save">Lưu</button>
        </div>
      </div>
    </div>

    <!-- Option sửa/ xóa một nhaan viên-->
    <div id="option-detail" style="display: none">
      <button id="btn-edit">Sửa</button>
      <button id="btn-delete">Xóa</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["isHide"],
  methods: {
    btnAddOnClick() {
      // this.isHide = false;
    },
    btnCancelOnClick() {
      this.$emit("closePopup", true);
      // this.isHide = true;
    },
    rowOnClick(employee) {
      alert(employee.FullName);
    },
  },
  data() {
    return {
      dialog: false,
      display: "none",
      employee: {
        Address: "319 Prospect Hill Blvd, Keith Bldg, Boise, Idaho, 76994",
        DateOfBirth: "1992-06-17T00:00:00",
        DepartmentId: "142cb08f-7c31-21fa-8e90-67245e8b283e",
        DepartmentName: "Phòng Marketting",
        EducationalBackground: 5,
        Email: "kute@example.com",
        EmployeeCode: "NV-247682",
        EmployeeId: "12693b29-274c-35ce-d11d-086412a8ea97",
        FirstName: "Trương Phương",
        FullName: "Mai Thị Bích",
        Gender: null,
        GenderName: "Không xác định",
        IdentityDate: null,
        IdentityNumber: "25323252060",
        IdentityPlace: "Hà Nội",
        JoinDate: "2014-12-05T00:00:00",
        LastName: "Minh",
        MaritalStatus: 5,
        PersonalTaxCode: "06951619",
        PhoneNumber: "0995194059",
        PositionId: "25c6c36e-1668-7d10-6e09-bf1378b8dc91",
        PositionName: "Thu ngân",
        QualificationId: "3541ff76-58f0-6d1a-e836-63d5d5eff719",
        QualificationName: "Kỹ sư CNTT",
        Salary: 16275117,
        WorkStatus: 2,
        WorkStatusName: "Đang thử việc",
      },
    };
  },
};
</script>
<style scoped>
.isHide {
  display: none;
}
.ui-dialog-content .block{
    width: 700px;
    height: 200px auto;
    display: flex;
    margin-left: 15px;
    margin-right: 15px;
}

.block-ava {
    width: 30%;
    height: calc(100% - 2px);
    margin-left: 5px;
}
.block-1-3 {
    width: 250px;
    height: calc(100% - 2px);
    margin-left: 15px;
}

.block-2-3{
    width: 550px;
    height: 100%;
}
/*
.block-3-3{
    width: 100%;
    height: 100%;
}*/

.ui-dialog-content .block-2{
    display: flex;
    justify-content:space-between;
    align-items:center;
}

.dl-avatar {
    width: 160px;
    margin-left: 5%;
    margin-right: 5%;
    height: 160px;
    background-image: url('../../content/img/default-avatar.jpg');
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    cursor:pointer;
}

.avt-subtitle {
    width: 100%;
    height: 20%;
    text-align: center;
}

.avt-subtitle span{
   font-weight: bold;
}

.item{
    margin-top: 10px;
}

.item input{
    width: 95%;
}

.block-3-3 .item input{
    width: 98%;
}

.item input[type=date]{
    width: 96%;

}

/*.item input[type=text] {
    width: 97%;
    padding-left:5px;
}*/
    .item select {
        width: 103%;
    }

.item-content{
    display: flex;
}

label span {
    color: #ff0000;
}

.ui-dialog-footer{
    width: 100%;
    height: 43px;
    margin-top: 10px;
    background-color: #aea3a3;
    display: flex;
    align-items: center;
    justify-items: right;
    border-radius: 2px;
}

    .ui-dialog-footer .footer-content{
        position: absolute;
        right: 0px;
        margin-right: 9px;
    }

    .ui-dialog-footer button {
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

#salary {
    text-align: right;
    outline: none;
}

.ui-dialog-footer button:hover {
    background-color: azure;
}
.m-radio {
    height: 40px;
    display: flex;
    align-items: center;
}

.m-radio .radio-label {
    margin-right: 8px;
    padding-left: 30px;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
}

.m-radio .radio-icon {
    width: 20px;
    height: 20px;
    border: 1px solid #000000;
    border-radius: 50%;
    background-size: contain;
    background-repeat: no-repeat;
    display: block;
    position: absolute;
    left: 4px;
}

.m-radio input[type="radio"]:checked ~ .radio-icon {
    border: none;
    background-image: url('../../content/icon/radio.svg');
    transition: all ease 0.5s;
}


</style>