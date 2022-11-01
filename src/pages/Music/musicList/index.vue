<template>
  <div class="xinyue">
    <div class="list">
      <div class="list-con">
        <ul>
          <li
            v-for="(item, index) in AllSong"
            :key="index"
            @click="
              Item(item.singer, AllSong.length, item.name, item.path, item.img)
            "
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "musicList",
  data() {
    return {
      AllSong: [
        {
          name: "如果让我离开你",
          path: "./music/14.mp3",
          img: `./img/101.webp`,
          singer: 1,
        },
        {
          name: "囍",
          path: "./music/18.mp3",
          img: "./img/11.webp",
          singer: 2,
        },
        {
          name: "陈奕迅-孤勇者",
          path: "./music/7.mp3",
          img: "./img/97.webp",
          singer: 3,
        },
        {
          name: "陈粒 - 奇妙能力歌",
          path: "./music/5.mp3",
          img: "./img/17.webp",
          singer: 4,
        },
        {
          name: "水木年华 - 一生有你",
          path: "./music/15.mp3",
          img: "./img/21.webp",
          singer: 5,
        },
        {
          name: "宋冬野 - 安和桥",
          path: "./music/16.mp3",
          img: "./img/32.webp",
          singer: 6,
        },
        {
          name: "于文文 - 体面",
          path: "./music/21.mp3",
          img: "./img/24.webp",
          singer: 7,
        },
        {
          name: "洛天依-夜航星",
          path: "./music/9.mp3",
          img: "./img/107.webp",
          singer: 8,
        },
        {
          name: "李荣浩 - 模特",
          path: "./music/8.mp3",
          img: "./img/20.webp",
          singer: 9,
        },
        {
          name: "满眼繁华",
          path: "./music/10.mp3",
          img: "./img/21.webp",
          singer: 10,
        },
        {
          name: "梦里梦外都是你",
          path: "./music/11.mp3",
          img: "./img/23.webp",
          singer: 11,
        },
        {
          name: "嚣张",
          path: "./music/19.mp3",
          img: "./img/27.webp",
          singer: 12,
        },
        {
          name: "奇迹再现",
          path: "./music/13.mp3",
          img: "./img/26.webp",
          singer: 13,
        },
        {
          name: "远走高飞",
          path: "./music/22.mp3",
          img: "./img/38.webp",
          singer: 14,
        },
        {
          name: "迷途羔羊",
          path: "./music/12.mp3",
          img: "./img/42.webp",
          singer: 15,
        },
        {
          name: "潮汐",
          path: "./music/4.mp3",
          img: "./img/44.webp",
          singer: 16,
        },
        {
          name: "白月光与朱砂痣",
          path: "./music/3.mp3",
          img: "./img/45.webp",
          singer: 17,
        },
        {
          name: "此生过半",
          path: "./music/6.mp3",
          img: "./img/46.webp",
          singer: 18,
        },
        {
          name: "不说再见",
          path: "./music/1.mp3",
          img: "./img/48.webp",
          singer: 19,
        },
        {
          name: "不可阻挡",
          path: "./music/20.mp3",
          img: "./img/62.webp",
          singer: 20,
        },
        {
          name: "董小姐",
          path: "./music/17.mp3",
          img: "./img/70.webp",
          singer: 21,
        },
        {
          name: "колыбельная",
          path: "./music/2.mp3",
          img: "./img/78.webp",
          singer: 22,
        },
      ],
    };
  },
  methods: {
    Item(singer, inAll, name, path, img) {
      this.$bus.$emit("info", singer, inAll, name, path, img);
      console.log(inAll);
    },
  },
};
</script>

<style scoped>
.xinyue {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* list */
.list-con {
  width: 56rem;
  height: 37rem;
  background: linear-gradient(80deg, #dd8561f4, #71cba9dc);
  font-family: "宋体";
  font-size: 1.1rem;
  color: #2c606d;
  border-radius: 8px;
  animation: bounceInLeft 1.5s linear;
  padding: 10px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.564);
  overflow: auto;
}

.list-con ul li {
  display: flex;
  padding: 5px 0;
  margin: 10px 0;
  flex-direction: column;
  justify-content: column;
  align-items: center;
  width: 100%;
  height: 30px;
  color: white;
  transition: all 0.2s;
  border-radius: 5px;
  cursor: pointer;
  font-size: 23px;
  line-height: 30px;
  font-weight: 700;
}

.list-con ul li:hover {
  text-shadow: 1px 1px 2px rgb(241, 205, 205);
  background-color: rgb(67, 192, 119);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.564);
}

.list-style {
  text-shadow: 1px 1px 2px rgb(241, 205, 205);
  background-color: rgb(188, 94, 94);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.564);
}

@media screen and (min-width: 300px) and (max-width: 450px) {
  .list-con {
    width: 19rem;
    height: 38rem;
  }

  .list-con ul li {
    font-size: 0.5rem;
  }
}
</style>
