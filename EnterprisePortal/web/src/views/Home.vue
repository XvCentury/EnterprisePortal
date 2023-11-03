<!--
 * @作者: kerwin
-->
<template>
  <div class="container">
    <el-carousel height="calc(100vh - 60px)">
      <el-carousel-item :key="1">
        <div
          :style="{
            backgroundImage: `url(${require('../assets/home.1.jpg')})`,
          }"
        ></div>
      </el-carousel-item>
      <el-carousel-item :key="2">
        <div
          :style="{ backgroundImage: `url(${require('@/assets/home.2.jpg')})` }"
        ></div>
      </el-carousel-item>
      <el-carousel-item :key="3">
        <div
          :style="{ backgroundImage: `url(${require('@/assets/home.3.jpg')})` }"
        ></div>
      </el-carousel-item>
    </el-carousel>
    <div class="center">THE POWER OF MUSIC</div>
  </div>
</template>

<style scoped lang="scss">
.el-carousel div {
  width: 100%;
  height: 100%;
  background-origin: content;
  /*从content区域开始显示背景*/
  background-position: 50% 50%;
  /*图片上下左右居中*/
  background-size: contain;
  /*保持图像本身的宽高比例，将图片缩放到宽度或高度正好适应定义背景的区域*/
  background-repeat: no-repeat;
  /*图像不重复显示*/
}

.container {
  position: relative;
}
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 100px;
  line-height: 100px;
  font-size: 60px;
  color: white;
  text-align: center;
}
</style>
