<template>
  <div class="container">
    <div
      class="news-header"
      :style="{ backgroundImage: `url(${require('@/assets/newsbg.jpg')})` }"
    ></div>

    <div class="search">
      <el-popover placement="bottom" width="50%" :visible="visible">
        <template #reference>
          <el-input
            v-model="searchText"
            class="w-50 m-2"
            placeholder="请输入新闻关键字"
            :prefix-icon="Search"
            type="search"
            size="large"
            @input="visible = true"
            @blur="visible = false"
          />
        </template>
        <div v-if="searchNewslist.length">
          <div
            v-for="data in searchNewslist"
            :key="data.num"
            class="search-item"
            @click="handleChangepage(data.num)"
          >
            {{ data.title }}
          </div>
        </div>
        <div v-else><el-empty description="暂无结果" :image-size="40" /></div>
      </el-popover>
    </div>
    <div class="topnews">
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in topNewslist" :key="item.num">
          <el-card :body-style="{ padding: '0px' }" shadow="hover" @click="handleChangepage(item.num)">
            <div
              class="image"
              :style="{
                backgroundImage: `url(http://localhost:3000${item.cover})`,
              }"
            ></div>
            <div style="padding: 14px">
              <span>{{ item.title }}</span>
              <div class="bottom">
                <time class="time">{{ whichTime(item.editTime) }}</time>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <el-tabs
      style="margin: 20px"
      v-model="whichTab"
      type="card"
      class="demo-tabs"
    >
      <el-tab-pane
        v-for="item in tablist"
        :label="item.label"
        :name="item.name"
        :key="item.name"
      >
        <el-row :gutter="20">
          <el-col :span="18">
            <div
              v-for="data in tabnews[item.name]"
              :key="data.num"
              style="padding: 10px"
            >
              <el-card :body-style="{ padding: '0px' }" shadow="hover" @click="handleChangepage(data.num)">
                <div
                  class="tab-image"
                  :style="{
                    backgroundImage: `url(http://localhost:3000${data.cover})`,
                  }"
                ></div>
                <div style="padding: 14px; float: left">
                  <span>{{ data.title }}</span>
                  <div class="bottom">
                    <time class="tab-time">{{ whichTime(data.editTime) }}</time>
                  </div>
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="6">
            <el-timeline>
              <el-timeline-item
                v-for="(data, index) in tabnews[item.name]"
                :key="index"
                :timestamp="whichTime(data.editTime)"
              >
                {{ data.title }}
              </el-timeline-item>
            </el-timeline>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>

    <el-backtop :right="100" :bottom="100" :visibility-height="100"/>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { Calendar, Search } from "@element-plus/icons-vue";
import axios from "axios";
import moment from "moment";
import _, { groupBy } from "lodash";
import { useRouter } from "vue-router";

moment.locale("zh-cn");

const searchText = ref("");
const visible = ref(false);
const newslist = ref([]);
const whichTab = ref(1);

onMounted(async () => {
  const res = await axios.get("/webapi/news/list");
  if (res.data.code === "200") {
    //console.log(res.data);
    newslist.value = res.data.data;
    //console.log(_.groupBy(newslist.value,item=>item.category))
  }
});

//筛选newlist
const searchNewslist = computed(() =>
  searchText.value
    ? newslist.value.filter((item) => item.title.includes(searchText.value))
    : []
);

const topNewslist = computed(() => newslist.value.slice(0, 4));

//格式化时间
const whichTime = (time) => {
  return moment(time).format("lll");
};

//选项卡标签内容
const tablist = [
  {
    label: "最新动态",
    name: 1,
  },
  {
    label: "典型案例",
    name: 2,
  },
  {
    label: "通知公告",
    name: 3,
  },
];

const tabnews = computed(() =>
  _.groupBy(newslist.value, (item) => item.category)
);

//新闻点击跳转
const router = useRouter()
const handleChangepage = (num) =>{
    //console.log(num)
    router.push(`/news/${num}`)
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}
.news-header {
  width: 100%;
  height: 400px;
  background-size: cover;
}
.search {
  position: absolute;
  top: 300px;
  width: 100%;
  text-align: center;
  .el-input {
    width: 50%;
  }
}
.search-item {
  height: 50px;
  line-height: 50px;
  //&是如果的意思
  &:hover {
    color: #1d73f3;
  }
}

.topnews {
  margin: 20px;
  .image {
    width: 100%;
    height: 150px;
    background-size: cover;
  }
  .time {
    font-size: 12px;
    color: gray;
  }
}
.tab-image {
  width: 150px;
  height: 100px;
  background-size: cover;
  float: left;
}
.tab-time {
  font-size: 12px;
  color: gray;
}
</style>