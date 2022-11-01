<template>
  <div class="w">
    <div class="photo">
      <div class="main">
        <!--- left part --->
        <div class="left">
          <p id="logo"><i class="iconfont icon-icon-test"></i>Music</p>
          <!--- song img --->
          <img :src="img" />
          <div class="volume">
            <p id="volume_show">30</p>
            <i
              class="iconfont icon-shengyin"
              aria-hidden="true"
              onclick="mute_sound()"
              id="volume_icon"
            ></i>
            <div class="progress-bar-wrapper">
              <div class="progress-bar">
                <div class="bar-inner">
                  <div class="progress"></div>
                  <div class="progress-btn-wrapper">
                    <div class="progress-btn"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="show_song_no">
            <p id="present">{{ number }}</p>
            <p>/</p>
            <p id="total">{{ All }}</p>
          </div>
          <!--- song title & artist name --->
          <p id="title">{{ name }}</p>
          <audio ref="player" loop="loop" @timeupdate="updateTime">
            <source :src="path" type="audio/mpeg" />
          </audio>
          <!--- middle part --->
          <div class="middle">
            <button @click="previous_song(number)">
              <i class="iconfont icon-shangyishou"></i>
            </button>
            <button @click="justplay">
              <i class="iconfont icon-zanting" v-show="isShow"></i>
              <i class="iconfont icon-bofang" v-show="is_Show"></i>
            </button>
            <button @click="next_song(number)">
              <i class="iconfont icon-xiayishou"></i>
            </button>
          </div>
          <!--- song duration part --->
          <div class="duration">
            <input
              type="range"
              class="musicBar"
              ref="musicBar"
              v-model="musicBar"
              min="0"
              max="600"
              :style="{
                background:
                  '-webkit-linear-gradient(#535, #825) 0% 0% / ' +
                  (musicBar * 100) / 600 +
                  '% 100% no-repeat',
              }"
            />
            <div class="time">
              <span>{{ cTime }}</span>
              <span>{{ dTime }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import '@/assets/ICONS/iconfont.css'
// import format from "@/pages/Music/musicPlay/time";
import img from "@/assets/images/101.webp";

export default {
  name: "musicPlay",
  data() {
    return {
      img: img,
      number: "1",
      All: "22",
      name: "如果当我遇见你",
      path: "./music/14.mp3",
      is_Show: true,
      isShow: false,
      cTime: "00:00",
      dTime: "00:00",
      musicBar: 0, //进度条的value值
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
    play: function () {
      let player = this.$refs.player;
      this.isPlay = this.isShow;
      if (this.isPlay) {
        //  开始播放
        player.play();
      } else {
        player.pause();
      }
    },
    init() {
      let player = this.$refs.player;
      this.isPlay = this.isShow;
      player.load();
    },
    parseTimeString(num) {
      let min = Math.floor(num / 60)
        .toString()
        .padStart(2, 0);
      let sec = Math.floor(num - min * 60)
        .toString()
        .padStart(2, 0);
      return `${min}:${sec}`;
    },
    updateTime() {
      let player = this.$refs.player;
      let timer = Math.floor(player.currentTime);
      this.cTime = this.parseTimeString(timer);
      player.oncanplay = () => {
        let totalTime = Math.floor(player.duration);
        this.dTime = this.parseTimeString(totalTime);
      };
    },
    justplay() {
      this.isShow = !this.isShow;
      this.is_Show = !this.is_Show;
      this.play();
    },
    click(i) {
      this.path = this.AllSong[i - 1].path;
      this.img = this.AllSong[i - 1].img;
      this.number = this.AllSong[i - 1].singer;
      this.name = this.AllSong[i - 1].name;
    },
    previous_song(n) {
      if (n > 1) {
        this.init()
        let i = n - 1;
        this.click(i);
        this.is_Show = false;
        this.isShow = true;
        this.play();
      } else {
        let i = this.AllSong.length;
        this.click(i);
        let player = this.$refs.player;
        this.isPlay = this.isShow;
        player.load();
        //  开始播放
        player.play();
        this.is_Show = false;
        this.isShow = true;
      }
    },
    next_song(n) {
      if (n < this.AllSong.length) {
        let i = n + 1;
        this.path = this.AllSong[i - 1].path;
        this.img = this.AllSong[i - 1].img;
        this.number = this.AllSong[i - 1].singer;
        this.name = this.AllSong[i - 1].name;
        let player = this.$refs.player;
        this.isPlay = this.isShow;
        player.load();
        //  开始播放
        player.play();
        this.is_Show = false;
        this.isShow = true;
      } else {
        let i = 1;
        this.path = this.AllSong[i - 1].path;
        this.img = this.AllSong[i - 1].img;
        this.number = this.AllSong[i - 1].singer;
        this.name = this.AllSong[i - 1].name;
        let player = this.$refs.player;
        this.isPlay = this.isShow;
        player.load();
        //  开始播放
        player.play();
        this.is_Show = false;
        this.isShow = true;
      }
    },
  },

  mounted() {
    this.$bus.$on("info", (singer, inAll, name, path, img) => {
      this.number = singer;
      this.All = inAll;
      this.name = name;
      this.path = path;
      this.img = img;
      this.isShow = true;
      this.is_Show = false;
      let player = this.$refs.player;
      this.isPlay = this.isShow;
      player.load();
      //  开始播放
      player.play();
    });
    this.init();
  },
  beforeDestroy() {
    this.$bus.$off("info");
  },
};
</script>

<style scoped lang="scss">
.photo {
  /* transform: translate(-50%,-50%); */
  width: 56rem;
  height: 37rem;
  background: linear-gradient(150deg, #ea8383, #4b9288);
  font-size: "微软雅黑 Light";
  color: #2c606d;
  border-radius: 6px;
  animation: bounceInLeft 1.5s linear;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.564);
  .main {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    .left {
      padding: 30px;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      img {
        border-radius: 8px;
        width: 75%;
        height: 40%;
      }
      #logo {
        margin-top: -2rem;
        font-size: 1.5rem;
      }
      .icon-icon-test {
        font-size: 2rem;
      }
      .volume {
        display: flex;
        p,
        i {
          display: block;
          text-align: center;
          line-height: 35px;
          width: 35px;
          border-radius: 3px;
        }
        p {
          line-height: 35px;
          font-size: 1rem;
          background-color: rgb(255, 255, 255);
        }
        i {
          line-height: 38px;
          height: 35px;
          background-color: rgb(255, 106, 0);
          margin-left: 10px;
          font-size: 1.3rem;
        }
        .progress-bar-wrapper {
          flex: 0.7;
          .progress-bar {
            height: 30px;
            cursor: pointer;
            .bar-inner {
              position: relative;
              left: 15px;
              top: 15px;
              height: 4px;
              background: rgb(255, 255, 255);
              .progress {
                position: absolute;
                height: 100%;
                background-color: #228225;
              }
              .progress-btn-wrapper {
                position: absolute;
                left: -8px;
                top: -13px;
                width: 30px;
                height: 30px;
                .progress-btn {
                  position: relative;
                  top: 7px;
                  left: 7px;
                  box-sizing: border-box;
                  width: 16px;
                  height: 16px;
                  border: 3px solid rgb(255, 255, 255);
                  border-radius: 50%;
                  background: #447918;
                }
              }
            }
          }
        }
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 50%;
      .show_song_no {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 30px;
        position: absolute;
        top: 15px;
        right: 15px;
        background-color: rgb(213, 202, 202);
        border-radius: 5px;
        p {
          width: 15px;
          font-size: 1rem;
          text-align: center;
        }
      }
      #title {
        font-size: 1.5rem;
      }
      .middle {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
          cursor: pointer;
          margin: 0 5px;
          border: 1px solid white;
          outline: none;
          width: 50px;
          height: 50px;
          border-radius: 100%;
          background-color: rgb(250, 136, 91);
          i {
            font-size: 1.5rem;
          }
        }
      }
      .duration {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .musicBar {
          display: block;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          position: relative;
          height: 5px;
          width: 100%;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 12px;
          width: 12px;
          background: rgb(241, 221, 71);
          border-radius: 6px;
          margin-top: -4px;
          border: 2.5px solid #ff4e4e;
          box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
        }
        /* 轨道样式 */
        input[type="range"]::-webkit-slider-runnable-track {
          width: 100%;
          height: 4px;
          background-color: rgba(0, 0, 0, 0.05);
          border-radius: 4px;
        }
        /* 取消焦点边框 */
        input[type="range"]:focus {
          outline: none;
        }
        /* 已达进度 chrome无效 */
        input[type="range"]::-ms-fill-lower {
          background-color: #159f55;
        }
        /* 未达进度 chrome无效 */
        input[type="range"]::-ms-fill-upper {
          background-color: rgb(76, 184, 3);
        }
        .time {
          width: 95%;
          display: flex;
          justify-content: space-between;
          span {
            margin-left: 17px;
            font-size: 0.8rem;
            display: block;
          }
          span:first-child {
            margin-left: 0;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 300px) and (max-width: 450px) {
  .w {
    height: 52rem;
  }
  .iconfont {
    font-size: 1.5rem;
  }
  .photo {
    margin-left: 0;
    margin-top: 7rem;
    width: 20rem;
    height: 38rem;
    .main {
      width: 100%;
      flex-direction: column;
      .left {
        padding: 5px;
        width: 95%;
        height: 55%;
        align-items: center;
        #logo {
          margin-top: -1rem;
        }
        .volume {
          flex-direction: column;
          justify-content: center;
          width: 80%;
          p,
          i {
            margin: 5px auto;
          }
        }
      }
      .right {
        width: 100%;
        height: 40%;
        #title {
          width: 100%;
          text-align: center;
        }
      }
    }
  }
}
</style>
