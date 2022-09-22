<template>
  <div>
    <div class="rotate">
      <section >
        <div v-for="(i,index) in list" :key="index">
            <img :src="i" alt="鬼刀" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import bnr1 from "@/pages/Photo/images/1.webp";
import bnr2 from "@/pages/Photo/images/2.webp";
import bnr3 from "@/pages/Photo/images/3.webp";
import bnr4 from "@/pages/Photo/images/4.webp";
import bnr5 from "@/pages/Photo/images/21.jpg";
import bnr6 from "@/pages/Photo/images/6.webp";
export default {
  name: "photoRotate",
  data() {
    return {
        index:0,
        list:[bnr1,bnr2,bnr3,bnr4,bnr5,bnr6]
    };
  },
};
</script>

<style scoped>
.rotate {
  margin-top: 5rem;
  /* 弹性布局 让页面元素水平+垂直居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 让页面始终占浏览器总高 */
  /* 视距 让元素看起来更有3D效果 */
  perspective: 900px;
  height: 900px;
}
.rotate section {
  /* 相对定位 */
  position: relative;
  width: 347px;
  height: 240px;
  /* 鼠标放到元素上变成小手 */
  cursor: pointer;
  /* 让子元素保留其3D位置 */
  transform-style: preserve-3d;
  /* 动画 名称 时长 linear 是匀速 播放 infinite 是无限次播放 */
  animation: rotate 20s linear infinite;
}
.rotate section div {
  margin-top: -5rem;
}
.rotate section img {
  width: 347px;
  height: 240px;
}
.rotate section:hover {
  /* 鼠标放到元素上停止动画 */
  animation-play-state: paused;
}
.rotate section div {
  /* 绝对定位 */
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  /* 设置元素的倒影效果 below 是倒影效果在元素下方 15px 是元素和倒影的距离 后面的属性和背景渐变色是一个属性 设置了一个从下到上由背景透明色过渡到设置了不透明度的白色 */
  -webkit-box-reflect: below 5px -webkit-linear-gradient(transparent 10%, rgba(255, 255, 255, 0.3));
}
.rotate section div:nth-child(1) {
  transform: translateZ(300px);
}
.rotate section div:nth-child(2) {
  transform: rotateY(60deg) translateZ(300px);
}
.rotate section div:nth-child(3) {
  transform: rotateY(120deg) translateZ(300px);
}
.rotate section div:nth-child(4) {
  transform: rotateY(180deg) translateZ(300px);
}
.rotate section div:nth-child(5) {
  transform: rotateY(240deg) translateZ(300px);
}
.rotate section div:nth-child(6) {
  transform: rotateY(300deg) translateZ(300px);
}
/* 先定义旋转动画 */
@keyframes rotate {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(360deg);
  }
}
@media screen and (min-width: 300px) and (max-width: 450px) {
  .rotate{
    margin-top: 8rem;
    height: 400px;
    perspective: 950px;
  }
  .rotate section{
    width: 200px;
    height: 130px;
  }
  .rotate section img{
    width: 200px;
    height: 130px;
  }
  .rotate section div:nth-child(1) {
  transform: translateZ(172.5px);
}
.rotate section div:nth-child(2) {
  transform: rotateY(60deg) translateZ(172.5px);
}
.rotate section div:nth-child(3) {
  transform: rotateY(120deg) translateZ(172.5px);
}
.rotate section div:nth-child(4) {
  transform: rotateY(180deg) translateZ(172.5px);
}
.rotate section div:nth-child(5) {
  transform: rotateY(240deg) translateZ(172.5px);
}
.rotate section div:nth-child(6) {
  transform: rotateY(300deg) translateZ(172.5px);
}
}
</style>
