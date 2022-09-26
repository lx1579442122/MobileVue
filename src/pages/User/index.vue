<template>
  <div class="user">
    <header>
      <span>关于我</span>
    </header>
    <div class="con">
      <div class="img">
        <img src="@/assets/images/hua4.webp" alt="" />
      </div>
      <div class="p">
        <p>“小二，上茶~”</p>
        <p>“来~嘞~，客官您稍等”</p>
        <p>“各位客官，我是李小二，星星之火的越，此博客掌柜的”</p>
        <p>99年的某天,来到了这个世界</p>
        <p>爱旅游、爱折腾、爱音乐、无拘无束</p>
        <p>生命的意义在于折腾</p>
        <p>世界很大</p>
        <p>有些鸟儿注定是不会被关在笼子里的</p>
        <p>因为它们的每一片羽毛都闪耀着自由的光辉</p>
        <p>向往着自由</p>
        <p>既然来到了这人间</p>
        <p>便去经历，去拼搏，去感受，去爱</p>
        <p>生命不息，折腾不止</p>
        <p>
          总有些人，有些事，会让你感觉到生命的温暖和满足，让你感慨生命的“不虚此行”
        </p>
        <p>届时，我会说</p>
        <p>我来过，我不后悔！我做到了!</p>
      </div>
    </div>
    <h1 style="text-align: center; margin: 50px 0; font-weight: 100">
      这是我第一次做网页的视频
    </h1>
    <div class="video">
      <div class="m">
        <div class="itemr">
          <div class="vd">
            <video
              autoplay
              muted
              loop
              playsinline
              controls
              onMouseOver="this.play()"
              onMouseOut="this.pause()"
              poster="@/assets/images/load.webp"
            >
              <source
                src="@/assets/video/html5.mp4"
                preload="none"
                poster="@/assets/images/load.webp"
                type="video/mp4"
              />
              您的浏览器不支持 video 标签。
            </video>
          </div>
        </div>
      </div>
    </div>

    <h1 style="text-align: center; margin: 50px 0; font-weight: 100">
      闲暇时pp图，而一直很菜的小李
    </h1>

    <div id="con" class="container">
      <div class="item show" v-for="(i, index) in list" :key="index">
        <div class="picture imgbox">
          <img :src="i" alt="动漫图片" />
        </div>
      </div>
    </div>

    <!-- 底部小熊奔跑动画 -->
    <div class="run_bear" style="margin-top: 3rem">
      <div class="bear"></div>
    </div>
  </div>
</template>

<script>
import bnr6 from "@/assets/images/yuan1.webp";
import bnr7 from "@/assets/images/yuan2.webp";
import bnr8 from "@/assets/images/yuan3.webp";
import bnr9 from "@/assets/images/yuan4.webp";
import bnr10 from "@/assets/images/yuan5.webp";
import bnr11 from "@/assets/images/yuan6.webp";
import bnr12 from "@/assets/images/yuan7.webp";
import bnr13 from "@/assets/images/yuan8.webp";
import bnr14 from "@/assets/images/yuan9.webp";
import bnr15 from "@/assets/images/yuan10.webp";
import bnr16 from "@/assets/images/yuan11.webp";
import bnr17 from "@/assets/images/yuan12.webp";
import bnr18 from "@/assets/images/yuan13.webp";
import bnr19 from "@/assets/images/yuan14.webp";
import bnr20 from "@/assets/images/yuan15.webp";
import bnr21 from "@/assets/images/yuan16.webp";
import bnr22 from "@/assets/images/yuan17.webp";
import bnr23 from "@/assets/images/yuan18.webp";
import bnr24 from "@/assets/images/yuan19.webp";
import bnr25 from "@/assets/images/yuan20.webp";
import bnr26 from "@/assets/images/yuan21.webp";
import bnr27 from "@/assets/images/yuan22.webp";
import bnr28 from "@/assets/images/yuan23.webp";
import bnr29 from "@/assets/images/yuan24.webp";
import bnr30 from "@/assets/images/yuan25.webp";
import bnr31 from "@/assets/images/yuan26.webp";
import bnr32 from "@/assets/images/yuan27.webp";
import bnr33 from "@/assets/images/yuan28.webp";
import bnr34 from "@/assets/images/yuan29.webp";

export default {
  name: "userInfo",
  data() {
    return {
      index: 0,
      list: [
        bnr6,
        bnr7,
        bnr8,
        bnr9,
        bnr10,
        bnr11,
        bnr12,
        bnr13,
        bnr14,
        bnr15,
        bnr16,
        bnr17,
        bnr18,
        bnr19,
        bnr20,
        bnr21,
        bnr22,
        bnr23,
        bnr24,
        bnr25,
        bnr26,
        bnr27,
        bnr28,
        bnr29,
        bnr30,
        bnr31,
        bnr32,
        bnr33,
        bnr34,
      ],
      // list: Array(5)
      //   .fill()
      //   .map((_, i) => `http://lorempixel.com/400/200/sports/${i}/`),
    };
  },
};
</script>

<style scoped>
header {
  margin-top: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 3rem;
  background-color: rgba(211, 133, 133, 0.637);
  animation: bounceInRight 2s ease-out;
}
header span {
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 6px;
}
.con {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: bounceInLeft 2s ease-out;
}
.img {
  margin-top: 2rem;
  width: 100vw;
  display: flex;
  justify-content: center;
}
.con .img img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.p {
  width: 80vw;
  height: 30rem;
  border-bottom: 2px solid rgb(40, 150, 175);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  letter-spacing: 3px;
  color: rgb(18, 103, 119);
}
/* 瀑布流 */
.container {
  margin: 0 auto;
  width: 1100px;
  height: auto;
  position: relative;
  column-count: 4;
}
.item {
  width: 250px;
  height: auto;
  padding: 10px;
  position: relative;
  transition: all 0.5s ease-in-out;
  counter-increment: item-counter;
  overflow: hidden;
}
.show:hover .picture {
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.3s;
}
.item .picture img {
  display: block;
  width: 100%;
  height: 100%;
}
.item::after {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: rgb(249, 208, 200);
  text-align: center;
  top: 2px;
  left: 2px;
  content: counter(item-counter);
  border-radius: 3px;
}
.show {
  animation: scale 1s forwards;
}

@keyframes scale {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}
.show .imgbox {
  width: 100%;
  overflow: hidden;
  height: 100%;
  cursor: pointer;
}

.show:hover .imgbox img {
  transform: scale(1.4);
  transition: all 0.5s;
}
.show .picture {
  border: 2px solid salmon;
}

h1 {
  font-family: "黑体";
  font-size: 2rem;
  color: rgb(26, 99, 95);
}
.show {
  animation: scale 1s forwards;
}
video {
  object-fit: fill !important;
  border-radius: 5px;
}
.video {
  margin: 1rem auto;
  width: 1500px;
}

.itemr {
  width: 1500px;
  display: flex;
  justify-content: center;
}

.vd {
  width: 600px;
  height: 320px;
}
.vd video {
  width: 100%;
  height: 100%;
}
.vid {
  margin: 1rem auto;
  width: 640px;
  height: 850px;
}
.xinyue {
  float: left;
}
.flex {
  margin: 10px;
  width: 300px;
  height: 500px;
  float: left;
}

.flex video {
  width: 100%;
  height: auto;
}
.good {
  width: 100px;
  margin: 15px auto;
  height: 50px;
}
.good button {
  cursor: pointer;
  outline: none;
  border: 1px solid teal;
  background-color: transparent;
  padding: 5px 15px;
  border-radius: 5px;
}
.good button:hover {
  background-color: orange;
}
@media screen and (min-width: 300px) and (max-width: 450px) {
  .p {
    width: 66vw;
    height: 100%;
  }
  .p p {
    font-size: 15px;
  }
  .con {
    height: 38rem;
  }
  .item{
    margin: 0 auto;
  }
  h1 {
    width: 100%!important;
    word-break: break-all;
    font-size: 15px;
    clear: both;
  }
  .vd {
    width: 271px;
    height: 149px;
  }
  .video,
  .itemr {
    width: 100vw;
  }
  .container {
    margin: 0 auto;
    width: 100%;
    column-count: 1;
  }
  .vid {
    width: 100vw;
  }
  .flex {
    
    height: 460px;
  }
}
</style>
