<template>
  <div>
    <div id="con" class="container">
      <div class="item show" v-for="(i, index) in list" :key="index">
        <div class="picture imgbox">
          <img :src="i" alt="动漫图片" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bnr1 from "@/assets/images/1.webp";
import bnr2 from "@/assets/images/2.webp";
import bnr3 from "@/assets/images/3.webp";
import bnr4 from "@/assets/images/4.webp";
import bnr5 from "@/assets/images/21.jpg";
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
  name: "photoShutter",
  data() {
    return {
      index: 0,
      list: [
        bnr1,
        bnr2,
        bnr3,
        bnr4,
        bnr5,
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
    };
  },
};
</script>

<style scoped>
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
.item .picture{
  border: 2px solid salmon;
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
.show:hover .picture {
 
  transition: all 0.3s;
}
@media screen and (min-width: 300px) and (max-width: 450px) {
    .container{
        width: 100vw;
        column-count: 1;
    }
    .item{
        margin-left: 60px;
    }
    .cation{
        top:82%;
        right: 0;
        width: 55px;
    }
    .cation a{
        font-size: 12px;
        width: 53px;
    }
    .background{
        display: none;
    }
}
</style>
