<template>
  <div>
    <slider animation="fade">
      <slider-item v-for="(i, index) in list" :key="index">
        <img :src="i" />
      </slider-item>
    </slider>
  </div>
</template>

<script>
import bnr1 from "@/assets/images/1.webp";
import bnr2 from "@/assets/images/2.webp";
import bnr3 from "@/assets/images/3.webp";
import bnr4 from "@/assets/images/4.webp";
import bnr5 from "@/assets/images/21.jpg";
import bnr6 from "@/assets/images/6.webp";

export default {
  name: "homeBanner",
  data() {
    return {
      index: 0,
      list: [bnr1, bnr2, bnr3, bnr4, bnr5, bnr6],
      // list: Array(5)
      //   .fill()
      //   .map((_, i) => `http://lorempixel.com/400/200/sports/${i}/`),
    };
  },
};
</script>

<style scoped>
div {
  width: 100%;
  margin: 0 auto;
}
.slider {
  height: 600px !important;
}
div img {
  border-radius: 5px;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
