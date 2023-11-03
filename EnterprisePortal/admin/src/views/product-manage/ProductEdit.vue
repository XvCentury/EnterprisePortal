<template>
  <div>
    <el-page-header
      content="编辑产品"
      @back="handleBack()"
      title="产品管理"
    ></el-page-header>

    <el-form
      ref="productFormRef"
      :model="productForm"
      :rules="productFormRules"
      label-width="80px"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item label="产品名称" prop="title">
        <el-input v-model="productForm.title" />
      </el-form-item>

      <el-form-item label="产品简介" prop="introduction">
        <el-input v-model="productForm.introduction" type="textarea" />
      </el-form-item>
      <el-form-item label="产品详情" prop="introduction">
        <el-input v-model="productForm.detail" type="textarea" />
      </el-form-item>
      <el-form-item label="产品图片" prop="cover">
        <Upload :avatar="productForm.cover" @change="handleChange" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">确认编辑</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
    
    <script setup>
import { ref, reactive,onMounted } from "vue";
import upload from "@/util/upload";
import Upload from "@/components/upload/Upload";
import { useRouter,useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import axios from "axios";

const router = useRouter();
const route = useRoute()

const productFormRef = ref();
const productForm = reactive({
  title: "",
  introduction: "",
  detail: "",
  cover: "",
  file: null,
});

const productFormRules = reactive({
  title: [{ required: true, message: "请输入的名称", trigger: "blur" }],
  introduction: [{ required: true, message: "请输入简介", trigger: "blur" }],
  detail: [{ required: true, message: "请选输入详情", trigger: "blur" }],
  cover: [{ required: true, message: "请输上传产品图片", trigger: "blur" }],
});

//每次选择完图片的回调函数，能使图片预览显示在界面内
const handleChange = (file) => {
  //console.log(file);
  //console.log(URL.createObjectURL(file.raw));
  productForm.cover = URL.createObjectURL(file);
  productForm.file = file;
};


const submitForm = () => {
  productFormRef.value.validate(async (valid) => {
    if (valid) {
      //提交数据到后端
      const res = await upload(`/adminapi/product/list/${route.params.pid}`, productForm);
      if (res.code === "200") {
        ElMessage.success("编辑成功");
        router.push("/product-manage/productlist");
      }
    }
  });
};

//返回回调
const handleBack = () => {
  router.back();
};

onMounted(()=>{
    getData()
})

const getData = async ()=>{
    console.log(route.params.pid)
    const res = await axios.get(`/adminapi/product/list/${route.params.pid}`)
    if (res.data.code === "200") {
        Object.assign(productForm,res.data.data[0])
  }
}
</script>
    
    <style lang="scss" scoped>
.demo-ruleForm {
  margin-top: 50px;
}
</style>