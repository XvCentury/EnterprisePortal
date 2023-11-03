<template>
    <div>
        <el-carousel
            height="calc(100vh - 60px)"
            direction="vertical"
            :autoplay="false"
            v-if="looplist.length"
        >
            <el-carousel-item
                v-for="item in looplist"
                :key="item.pid"
            >
                <div
                    class="item"
                    :style="{backgroundImage:`url(http://localhost:3000${item.cover})`}"
                >
                    <el-card class="box-card">
                        <template #header>
                            <div class="card-header">
                                <h2>{{item.title}}</h2>
                            </div>
                        </template>
                       <div>{{item.introduction}}</div>
                       <div class="detail">{{item.detail}}</div>

                       <div class="more">
                           更多信息，请访问：
                            <br>
                            http://Djanjos:8080
                       </div>
                    </el-card>
                </div>
            </el-carousel-item>
        </el-carousel>
        <el-empty
            description="暂无产品"
            v-else
        />

    </div>
</template>

<script setup>
import { ref, onMounted} from "vue";
import axios from "axios";

const looplist = ref([])

onMounted(async()=>{
    const res = await axios.get('/webapi/products/list')
    if (res.data.code === "200") {
    looplist.value = res.data.data
  }
})
</script>

<style scoped lang="scss">
.item {
  width: 100%;
  height: 100%;
  background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%;
}

.box-card{
    width: 50%;
    height: 100%;
    background-color:rgba(255, 255, 255, 0.5);
    .detail,.more{
        margin-top:20px;
    }
}
</style>