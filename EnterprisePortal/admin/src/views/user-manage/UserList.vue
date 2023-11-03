<template>
  <div>
    <el-card>
      <el-page-header
        content="添加列表"
        icon=""
        title="用户管理"
      ></el-page-header>

      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="头像" width="120">
          <template #default="scope">
            <div v-if="scope.row.avatar">
              <el-avatar
                :size="50"
                :src="'http://localhost:3000' + scope.row.avatar"
              ></el-avatar>
            </div>
            <div v-else>
              <el-avatar
                :size="50"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              />
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="username" label="用户名" width="120" />
        <el-table-column prop="password" label="密码" width="120" />

        <el-table-column label="角色" width="120">
          <template #default="scope">
            <!-- {{ scope.row.role===1?'管理员':'编辑' }} -->
            <el-tag v-if="scope.row.role === 1" class="ml-2" type="danger"
              >管理员</el-tag
            >
            <el-tag v-else class="ml-2" type="success"
              >&thinsp;&nbsp;编辑&thinsp;&nbsp;</el-tag
            >
          </template>
        </el-table-column>

        <el-table-column label="操作" width="180">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-popconfirm
              title="你确定要删除吗"
              confirm-button-text="确定"
              cancel-button-text="取消"
              @confirm="handleDelete(scope.row)"
            >
              <template #reference>
                <el-button size="small" type="danger">删除</el-button></template
              >
            </el-popconfirm>
          </template>
        </el-table-column>

        <el-table-column prop="introduction" label="个人描述" width="auto" />
      </el-table>
    </el-card>

    <el-dialog v-model="dialogVisible" title="编辑用户" width="30%">
      <el-form
        ref="userFormRef"
        :model="userForm"
        :rules="userFromRules"
        label-width="80px"
        class="demo-ruleForm"
        status-icon
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="userForm.username" autocomplete="new-password" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="userForm.password"
            type="password"
            autocomplete="new-password"
          />
        </el-form-item>

        <el-form-item label="角色" prop="role">
          <el-select
            v-model="userForm.role"
            class="m-2"
            placeholder="选择你的性别"
            style="width: 100%"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="个人简介" prop="introduction">
          <el-input v-model="userForm.introduction" type="textarea" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleEditConfirm()">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import axios from "axios";
import { ElMessage } from "element-plus";

const dialogVisible = ref(false);
const userFormRef = ref();
let userForm = ref({
  username: "",
  password: "",
  role: 2, //1 是管理员，2 是编辑，默认为2
  introduction: "",
});
const userFromRules = reactive({
  username: [{ required: true, message: "请输入你的名字", trigger: "blur" }],
  password: [{ required: true, message: "请选择密码", trigger: "blur" }],
  role: [{ required: true, message: "请选择权限", trigger: "blur" }],
  introduction: [
    { required: true, message: "请输入个人介绍", trigger: "blur" },
  ],
  avatar: [{ required: false, message: "请上传头像", trigger: "blur" }],
});
const options = [
  {
    label: "管理员",
    value: 1,
  },
  {
    label: "编辑",
    value: 2,
  },
];

const tableData = ref();

onMounted(() => {
  getTableData();
});

const getTableData = async () => {
  const res = await axios.get("/adminapi/user/list");
  console.log(res.data)
  tableData.value = res.data.data;
  console.log(tableData)
  console.log(userForm)
};
//编辑回调
const handleEdit = async (data) => {
  //console.log(data);
  dialogVisible.value = true;
  userForm.value = data;
};
//编辑确认回调
const handleEditConfirm = () => {
  userFormRef.value.validate(async (valid) => {
    if (valid) {
      //1.更新后台数据
      console.log(userForm.value.id);
      const res = await axios.put(`/adminapi/user/list/${userForm.value.id}`,userForm.value); //userForm变成ref对象了，所以值在.value里面
      //2.弹出框隐藏
      //3.重新获取table数据
      if (res.data.code === "200") {
        ElMessage.success("修改成功");
        dialogVisible.value = false
        //使数据更新
        getTableData();
      }
    }
  });
};

const handleDelete = async (data) => {
  const res = await axios.delete(`/adminapi/user/list/${data.id}`);
  if (res.data.code === "200") {
    ElMessage.success("删除成功");
    //使数据更新
    getTableData();
  }
};
</script>

<style lang="scss" scoped>
.el-table {
  margin-top: 50px;
}
</style>