<template>
  <div class="xinYue"></div>
</template>

<script>
import bnr1 from "@/assets/images/1.webp";
import bnr2 from "@/assets/images/2.webp";
import bnr3 from "@/assets/images/3.webp";
import bnr4 from "@/assets/images/4.webp";
import bnr5 from "@/assets/images/21.jpg";
import bnr6 from "@/assets/images/6.webp";
export default {

  name: "userVideo",
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
  .xinYue{
    margin-top: 4.5rem;
  }
video {
  object-fit: fill !important;
  border-radius: 5px;
}
.video {
  margin: 1rem auto;
  width: 1500px;
}
.p {
  margin: 1rem 5rem 0;
  width: 15rem;
  height: 4rem;
}
.p span{
  font-size: 1.2rem;
  font-weight: 700;
}
.item {
  width: 1500px;
  display: flex;
  justify-content: center;
}
.left {
  margin-right: 12px;
}
.left video {
  width: 500px;
  height: 320px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  align-content: center;
  gap: 10px;
}
.vd {
  width: 250px;
  height: 150px;
}
.vd video {
  width: 100%;
  height: 100%;
}
@media screen and (min-width: 300px) and (max-width: 450px) {
  .item {
    width: 23rem;
    flex-direction: column;
  }
  .grid {
    flex-direction: column;
    grid-template-columns: repeat(1, 1fr);
  }
  .vd video {
    width: 95%;
    margin-left: 20px;
  }
  .left video {
    width: 80%;
    margin-left: 57px;
  }
}
</style>
