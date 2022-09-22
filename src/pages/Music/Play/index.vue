<template>
  <div>
    <div class="w">
      <div class="photo">
        <div class="main">
          <p id="logo"><i class="fa fa-music"></i>Music</p>
          <!--- left part --->
          <div class="left">
            <!--- song img --->
            <img id="track_image" />
            <div class="volume">
              <p id="volume_show">30</p>
              <i
                class="fa fa-volume-up"
                aria-hidden="true"
                @click ="mute_sound()"
                id="volume_icon"
              ></i>
              <input
                type="range"
                min="0"
                max="100"
                value="30"
                @change="volume_change()"
                id="volume"
              />
            </div>
          </div>
          <!--- right part --->
          <div class="right">
            <div class="show_song_no">
              <p id="present">1</p>
              <p>/</p>
              <p id="total">5</p>
            </div>
            <!--- song title & artist name --->
            <p id="title">title.mp3</p>
            <p id="artist">Artist name</p>
            <!--- middle part --->
            <div class="middle">
              <button @click="previous_song()" id="pre">
                <i class="fa fa-step-backward" aria-hidden="true"></i>
              </button>
              <button @click="justplay()" id="play">
                <i class="fa fa-play" aria-hidden="true"></i>
              </button>
              <button @click="next_song()" id="next">
                <i class="fa fa-step-forward" aria-hidden="true"></i>
              </button>
            </div>
            <!--- song duration part --->
            <div class="duration">
              <input
                type="range"
                min="0"
                max="100"
                value="0"
                id="duration_slider"
                @change="change_duration()"
              />
            </div>
            <button id="auto" @click="autoplay_switch()">
              列表循环 <i class="fa fa-circle-o-notch" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name:"musicPlay",
};
</script>

<style scoped>
p {
  border-radius: 5px;
}
.w {
  display: flex;
  align-items: center;
  justify-content: center;
}
/* 页面加载动画 */
.load_none {
  display: none;
}
.load {
  position: fixed;
  background: #34495e;
  z-index: 999;
}
.flx {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading {
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  border-radius: 50%;
  border-top: 10px solid #e74c3c;
  position: relative;
  animation: a1 2s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading::before,
.loading::after {
  content: "";
  width: 200px;
  height: 200px;
  position: absolute;
  left: 0;
  top: -10px;
  border-radius: 50%;
}

.loading::before {
  border-top: 10px solid #e67e22;
  transform: rotate(120deg);
}

.loading::after {
  border-top: 10px solid #3498db;
  transform: rotate(240deg);
}

.loading span {
  position: absolute;
  width: 200px;
  height: 200px;
  color: #fff;
  text-align: center;
  line-height: 200px;
  animation: a2 2s linear infinite;
}

@keyframes a1 {
  to {
    transform: rotate(360deg);
  }
}

@keyframes a2 {
  to {
    transform: rotate(-360deg);
  }
}
/* 页面加载动画 */

/* 播放 */
.photo {
  position: absolute;
  top: 13%;
  left: 20%;
  /* transform: translate(-50%,-50%); */
  width: 56rem;
  height: 37rem;
  background: linear-gradient(150deg, #ea8383, #4b9288);
  font-size: "微软雅黑 Light";
  color: #2c606d;
  border-radius: 6px;
  animation: bounceInLeft 1.5s linear;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.564);
}
.main {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.main button {
  padding: 10px 12px;
  margin: 0 10px;
}

.main #logo {
  position: absolute;
  top: 20px;
  left: 30px;
  font-size: 25px;
  color: rgb(244, 234, 234);
}

.main #logo i {
  margin-right: 15px;
}

/* left & right part */
.right,
.left {
  position: relative;
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

/* song image */
.left img {
  height: 40%;
  width: 80%;
  border-radius: 15px;
  box-shadow: 1px 0px 20px 12px rgba(240, 240, 240, 0.2);
}

/* both range slider part */
input[type="range"] {
  -webkit-appearance: none;
  width: 50%;
  outline: none;
  height: 2px;
  margin: 0 15px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  background: #ff8a65;
  border-radius: 50%;
  cursor: pointer;
}

.right input[type="range"] {
  width: 40%;
}

/* volume part */
.left .volume {
  position: absolute;
  bottom: 10%;
  left: 0;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.left .volume p {
  font-size: 15px;
}

.left .volume i {
  cursor: pointer;
  padding: 8px 12px;
  background: #ff8a65;
  border-radius: 5px;
}

.left .volume i:hover {
  background: rgba(245, 245, 245, 0.1);
}

.volume #volume_show {
  padding: 8px 12px;
  margin: 0 5px 0 0;
  background: rgba(245, 245, 245, 0.1);
}

/* right part */
.right .middle {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.right .middle button {
  border: none;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  transition: 0.5s;
  background: rgba(255, 255, 255, 0.1);
}

.right #title {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  text-transform: capitalize;
  color: #fff;
  font-size: 20px;
}

.right #artist {
  position: absolute;
  top: 110px;
  left: 50%;
  transform: translateX(-50%);
  text-transform: capitalize;
  color: #fff;
  font-size: 18px;
}

.right .duration {
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20px;
  margin-top: 40px;
}

.right .duration p {
  color: #fff;
  font-size: 15px;
  margin-left: 20px;
}

.right #auto {
  font-size: 18px;
  cursor: pointer;
  margin-top: 45px;
  border: none;
  padding: 10px 14px;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  outline: none;
  border-radius: 10px;
}

.right #auto i {
  margin-left: 8px;
}

#play {
  background: #ff8a65;
}

.right button:hover {
  background: #ff8a65;
}

.right i:before {
  color: #fff;
  font-size: 20px;
}

.right .show_song_no {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  color: #fff;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
}

.right .show_song_no p:nth-child(2) {
  margin: 0 5px;
}

/* 背景 */
section {
  background: url(@/assets/images/1.webp) no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  transition: all 0.5s;
  opacity: 0.6;
}
</style>
