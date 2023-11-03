<template>
  <div>
    <el-page-header
      content="添加用户"
      icon=""
      title="用户管理"
    ></el-page-header>

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
      <el-form-item label="头像" prop="avatar">
        <Upload :avatar="userForm.avatar" @change="handleChange" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">添加用户</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import upload from "@/util/upload";
import Upload from "@/components/upload/Upload";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

const userFormRef = ref();
const userForm = reactive({
  username: "",
  password: "",
  role: 2, //1 是管理员，2 是编辑，默认为2
  introduction: "",
  avatar: "",
  file: null,
  gender: 0,
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

//每次选择完图片的回调函数，能使图片预览显示在界面内
const handleChange = (file) => {
  //console.log(file);
  //console.log(URL.createObjectURL(file.raw));
  userForm.avatar = URL.createObjectURL(file);
  userForm.file = file;
};

const router = useRouter();
const submitForm = () => {
  userFormRef.value.validate(async (valid) => {
    if (valid) {
      //提交数据到后端
      const res =await upload("/adminapi/user/add", userForm);
      if (res.code === "200") {
        ElMessage.success("添加成功");
        router.push("/user-manage/userlist");
      }
    }
  });
};
</script>

<style lang="scss" scoped>
.demo-ruleForm {
  margin-top: 50px;
}
</style>