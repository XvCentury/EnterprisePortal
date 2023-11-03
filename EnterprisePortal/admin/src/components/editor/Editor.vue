<template>
  <div id="myeditor"></div>
</template>

<script setup>
import E from "wangeditor";
import { onMounted,defineEmits,defineProps } from "vue";

const props = defineProps({
  content:String
})
const emit = defineEmits(['event'])
onMounted(() => {
  const editor = new E("#myeditor");
  // 或者 const editor = new E( document.getElementById('div1') )
  editor.create();

  //设置初始值
  props.content && editor.txt.html(props.content)

  // 配置 onchange 回调函数
  editor.config.onchange = function (newHtml) {
    //console.log("change 之后最新的 html", newHtml);
  //把输入拿到的html文件片段先传给父组件
  emit('event',newHtml)
};

  
});
</script>

<style lang="scss" scoped>
</style>