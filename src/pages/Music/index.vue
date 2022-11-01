<template>
  <div class="xinyue">
    <div class="Show" v-show="Show" >纵享音乐.心悦</div>
    <div class="Show" v-show="Show" >我无端感觉你在等我，所以，我来了</div>
    <div class="Show" v-show="Show" >当音乐持续时，你就是音乐</div>
    <music-play v-show="routerShow"></music-play>
    <music-list v-show="router_Show"></music-list>
    <!-- <router-view></router-view> -->
    <div class="router">
      <ul>
        <li>
          <button @click="list">歌曲列表</button>
        </li>
        <li>
          <button @click="play">歌曲播放界面</button> 
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import musicPlay from "@/pages/Music/musicPlay";
import musicList from "@/pages/Music/musicList";
export default {
  name: 'userMusic',
  components: {
    musicPlay,
    musicList,
  },
  data() {
    return {
      Show: false,
      routerShow: true,
      router_Show: false,
    };
  },
  methods: {
    list() {
      this.router_Show = !this.router_Show;
      this.routerShow = false;
      if (!this.router_Show) {
        this.Show = true;
      }
      if (this.router_Show) {
        this.Show = false;
      }
    },
    play() {
      this.router_Show = false;
      this.routerShow = !this.routerShow;
      if (!this.routerShow) {
        this.Show = true;
      }
      if (this.routerShow) {
        this.Show = false;
      }
    },
  },
};
</script>

<style scoped>
.xinyue {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.Show {
  margin: 10px 0;
  text-align: center;
  width: 100%;
  line-height: 50px;
  border: 1px solid salmon;
  padding: 0 20px;
  font-size: 1.5rem;
}
.router {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
}
.router ul {
  display: flex;
}
button {
  text-align: center;
  font-size: 1rem;
  color: white;
  border: 1px solid orange;
  outline: none;
  background-color: rgb(5, 61, 50);
  border-radius: 8px;
  width: 120px;
  line-height: 40px;
  margin: 0 10px;
}
</style>
