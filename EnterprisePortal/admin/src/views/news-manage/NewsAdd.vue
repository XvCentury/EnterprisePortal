<template>
  <div>
    <el-page-header
      content="创建新闻"
      icon=""
      title="新闻管理"
    ></el-page-header>

    <el-form
      ref="newsFormRef"
      :model="newsForm"
      :rules="newsFromRules"
      label-width="80px"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item label="标题" prop="title">
        <el-input v-model="newsForm.title" />
      </el-form-item>

      <el-form-item label="内容" prop="content">
        <editor @event="handleChange" />
      </el-form-item>

      <el-form-item label="类别" prop="category">
        <el-select
          v-model="newsForm.category"
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

      <el-form-item label="封面" prop="cover">
        <Upload :avatar="newsForm.cover" @change="handleUploadChange" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm()">添加新闻</el-button>
      </el-form-item>
    </el-form>
  </div>
</template> 

<script setup>
import { ref, reactive } from "vue";
import editor from "../../components/editor/Editor.vue";
import upload from "@/util/upload";
import Upload from "@/components/upload/Upload";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

const router = useRouter();
const newsFormRef = ref();
const newsForm = reactive({
  title: "",
  content: "",
  category: 1, //1 最新动态，2 典型案例，3 通知公告
  cover: "",
  file: null,
  isPublish: 0, //是否发布  0 未发布  1 已发布
});

const newsFromRules = reactive({
  title: [{ required: true, message: "请输入标题", trigger: "blur" }],
  content: [{ required: true, message: "请输入内容", trigger: "blur" }],
  category: [{ required: true, message: "请选择类型", trigger: "blur" }],
  cover: [{ required: true, message: "请上传图片", trigger: "blur" }],
});

//每次editor内容改变的回调
const handleChange = (data) => {
  //console.log(data)
  newsForm.content = data;
};

const options = [
  {
    label: "最新动态",
    value: 1,
  },
  {
    label: "经典案例",
    value: 2,
  },
  {
    label: "通知公告",
    value: 3,
  },
];

const handleUploadChange = (file) => {
  newsForm.cover = URL.createObjectURL(file);
  newsForm.file = file;
};

const submitForm = () => {
  newsFormRef.value.validate(async (valid) => {
    if (valid) {
      console.log(newsForm);
      //提交后端
      const res = await upload("/adminapi/news/add", newsForm);
      if (res.code === "200") {
        ElMessage.success("创建成功");
        router.push(`/news-manage/newslist`);
      }
      
    }
  });
};
</script>

<style lang="scss" scoped>
.el-form {
  margin-top: 50px;
}
</style>