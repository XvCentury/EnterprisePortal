<template>
  <el-row>
    <el-col :span="17" :offset="2" :pull="1">
      <div>
        <h2>{{ currentNews.title }}</h2>
      </div>
      <div class="time">
        {{ whichTime(currentNews.editTime) }}
      </div>
      <el-divider />
      <div v-html="currentNews.content"  class="htmlcontent"></div>
    </el-col>
    <el-col :span="4" :offset="1" :pull="1">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span style="font: 16px; font-weight: bold">最近新闻</span>
          </div>
        </template>
        <div
          v-for="item in topNews"
          :key="item.num"
          class="text item"
          style="padding: 12px"
          @click="handleChange(item.num)"
        >
          <span>{{ item.title }}</span>
          <div class="bottom">
            <time class="time">{{ whichTime(item.editTime) }}</time>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref,watchEffect } from "vue";
import axios from "axios";
import moment from "moment";
import { useRouter, useRoute } from "vue-router";

moment.locale("zh-cn");

const route = useRoute();
const router = useRouter()
const currentNews = ref({});
const topNews = ref([]);

watchEffect(async () => {
  const res1 = await axios.get(`/webapi/news/new/${route.params.num}`);
  if (res1.data.code === "200") {
    //console.log(res.data.data[0]);
    currentNews.value = res1.data.data[0];
  }
  //只要前四个--limit
  const res2 = await axios.get(`/webapi/news/new4?limit=4`);
  if (res2.data.code === "200") {
    //console.log(res2.data.data);
    topNews.value = res2.data.data;
  }
});

//格式化时间
const whichTime = (time) => {
  return moment(time).format("lll");
};

//最近新闻的点击跳转s
const handleChange = (num) =>{
    //console.log(num)
    router.push(`/news/${num}`)
}
</script>

<style scoped lang="scss">
.el-row {
  margin-top: 30px;
}

.time {
  font-size: 12px;
  color: gray;
}
::v-deep .htmlcontent {
  img {
    max-width: 100%;
  }
}
</style>
