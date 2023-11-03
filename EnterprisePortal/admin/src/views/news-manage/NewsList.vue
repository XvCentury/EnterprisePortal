<template>
  <div>
    <el-card>
      <el-page-header
        content="新闻列表"
        icon=""
        title="新闻管理"
      ></el-page-header>

      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="title" label="标题" width="120" />

        <el-table-column label="分类">
          <template #default="scope">
            {{ categoryFormat(scope.row.category) }}
          </template>
        </el-table-column>

        <el-table-column label="跟新时间">
          <template #default="scope">
            {{ formatTime.getTime(scope.row.editTime) }}
          </template>
        </el-table-column>

        <el-table-column label="是否发布">
          <template #default="scope">
            <el-switch
              v-model="scope.row.isPublish"
              active-value="1"
              inactive-value="0"
              @change="handleSwithChange(scope.row)"
            />
          </template>
        </el-table-column>

        <el-table-column label="操作" width="180">
          <template #default="scope">
            <el-button
              circle
              :icon="Star"
              type="success"
              @click="handlePreview(scope.row)"
            ></el-button>

            <el-button circle :icon="Edit" @click="handleEdit(scope.row)"></el-button>

            <el-popconfirm
              title="你确定要删除吗"
              confirm-button-text="确定"
              cancel-button-text="取消"
              @confirm="handleDelete(scope.row)"
            >
              <template #reference>
                <el-button circle :icon="Delete" type="danger"></el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog v-model="dialogVisible" title="预览新闻" width="50%">
      <div>
        <h2>{{ previewData.title }}</h2>
        <div style="font-size: 12px; color: gray">
          {{ formatTime.getTime(previewData.editTime) }}
        </div>
      </div>
      <el-divider>
        <el-icon><star-filled /></el-icon>
      </el-divider>
      <div v-html="previewData.content" class="htmlcontent"></div>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import formatTime from "../../util/formatTime";
import { Star, Edit, Delete, StarFilled } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

const router = useRouter()
const tableData = ref([]);
const previewData = ref({});
const dialogVisible = ref(false);

onMounted(() => {
  getTableData();
});

const getTableData = async () => {
  const res = await axios.get("/adminapi/news/list");
  if (res.data.code === "200") {
    //console.log(res);
    tableData.value = res.data.data;
  }
};

//格式化分类信息
const categoryFormat = (category) => {
  const arr = ["最新动态", "典型案例", "通知公告"];
  return arr[category - 1];
};

//发布开关回调
const handleSwithChange = async (item) => {
  //console.log(item)
  const res = await axios.put("/adminapi/news/publish", {
    num: item.num,
    isPublish: item.isPublish,
  });
  if (res.data.code === "200") {
    getTableData();
  }
};

//预览开关的回调
const handlePreview = (data) => {
  //console.log(data)
  previewData.value = data;
  dialogVisible.value = true;
};

//删除回调
const handleDelete = async (item) => {
  //console.log(item.num);
  const res = await axios.delete(`/adminapi/news/list/${item.num}`);
  if (res.data.code === "200") {
    ElMessage.success("删除成功");
    getTableData();
  }
};

//编辑回调
const handleEdit = (item) =>{
  //跳转到/news-manage/editnews/:num
  //console.log(item.num)
  router.push(`/news-manage/editnews/${item.num}`)
}

</script>

<style lang="scss" scoped>
.el-table {
  margin-top: 50px;
}

::v-deep .htmlcontent {
  img {
    max-width: 100%;
  }
}
</style>