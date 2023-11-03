<template>
  <div>
    <el-page-header
      content="个人中心"
      icon=""
      title="企业门户管理系统"
    ></el-page-header>

    <el-row :gutter="20" class="el-row">
      <el-col :span="8">
        <el-card class="box-card">
          <el-avatar :size="100" :src="avatarUrl" />
          <h3>{{ store.state.userInfo.username }}</h3>
          <h5>{{ store.state.userInfo.role === 1 ? "管理员" : "编辑" }}</h5>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>个人信息</span>
            </div>
          </template>
          <el-form
            ref="userFormRef"
            :model="userForm"
            :rules="userFromRules"
            label-width="120px"
            class="demo-ruleForm"
            status-icon
          >
            <el-form-item label="用户名" prop="username">
              <el-input v-model="userForm.username" />
            </el-form-item>
            <el-form-item label="性别" prop="gender">
              <el-select
                v-model="userForm.gender"
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

              <Upload :avatar="userForm.avatar" @change="handleChange"/>

            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm()">更新</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref, reactive } from "vue";
import { ElMessage } from "element-plus";
import upload from "@/util/upload";
import Upload from '@/components/upload/Upload'

const store = useStore();

const { id, username, gender, introduction, avatar } = store.state.userInfo;

const userFormRef = ref("");
const userForm = reactive({
  id,
  username,
  gender,
  introduction,
  avatar,
  //对象简写，直接从userinfo字段中拿数据
  file: null,
});
const userFromRules = reactive({
  username: [{ required: true, message: "请输入你的名字", trigger: "blur" }],
  gender: [{ required: true, message: "请选择性别", trigger: "blur" }],
  introduction: [
    { required: true, message: "请输入个人介绍", trigger: "blur" },
  ],
  avatar: [{ required: true, message: "请上传头像", trigger: "blur" }],
});

const avatarUrl = computed(() =>
  store.state.userInfo.avatar
    ? "http://localhost:3000" + store.state.userInfo.avatar
    : "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
);



//gender的下拉选项
const options = [
  {
    label: "保密",
    value: 0,
  },
  {
    label: "男",
    value: 1,
  },
  {
    label: "女",
    value: 2,
  },
  {
    label: "沃尔玛购物袋",
    value: 3,
  },
];

//每次选择完图片的回调函数，能使图片预览显示在界面内
const handleChange = file => {
  //console.log(file); 
  //console.log(URL.createObjectURL(file.raw));
  userForm.avatar = URL.createObjectURL(file);
  userForm.file = file
};

//更新提交方法(方法内容已被封装)
const submitForm = () => {
  userFormRef.value.validate(async (valid) => {
    if (valid) {
      //console.log("submit",userForm)
      const res = await upload("/adminapi/user/upload", userForm);
      if (res.code === "200") {
        store.commit("changeUserInfo", res.data);
        ElMessage.success("更新成功");
      }
    }
  });
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-top: 20px;
  .box-card {
    text-align: center;
  }
}

.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}


</style>
