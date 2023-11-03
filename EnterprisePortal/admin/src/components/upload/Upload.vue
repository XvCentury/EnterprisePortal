<template>
  <el-upload
                class="avatar-uploader"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :show-file-list="false"
                :auto-upload="false"
                :on-change="handleChange"
              >
                <!-- :auto-upload = "false"  关闭自动上传 -->
                <img
                  v-if="props.avatar"
                  :src="uploadAvatar"
                  class="avatar"
                />
                <!-- :src="'http://localhost:3000'+userForm.avatar" 改为计算属性，判断，当选择的头像图片属于预览状态时，就不用加localhost前缀，
                  因为userForm.avatar = URL.createObjectURL(file.raw);自带blob前缀
                  图片状态变为上传后在给加上-->
                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
              </el-upload>
</template>

<script setup>
import { useStore } from "vuex";
import { defineEmits,defineProps,computed, ref, reactive } from "vue";
import { Plus } from "@element-plus/icons-vue";


const store = useStore();
//defineProps接收父组件传来的属性
const props = defineProps({
  avatar:String
})
const emit = defineEmits(["change"])

const uploadAvatar = computed(() =>
  props.avatar.includes("blob")
    ? props.avatar
    : "http://localhost:3000" + props.avatar
);

//每次选择完图片的回调函数，能使图片预览显示在界面内
const handleChange = (file) => {
  emit('change',file.raw)
};
</script>

<style lang="scss" scoped>
::v-deep  .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

::v-deep  .el-upload:hover {
  border-color: var(--el-color-primary);
}

::v-deep .el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
}
</style>