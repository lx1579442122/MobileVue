<template>
  <div>
    <!-- <h3>params---{{ $route.params.keyword }}</h3>
    <h3>query---{{ $route.query.k }}</h3> -->
    <div class="con">
      <div class="blog">
        <div class="item">
          <div class="blog-item" v-for="(item, index) in search" :key="index">
            <div class="lf">
              <h2>{{ item.title }}</h2>
              <div class="ell">
                <a class="sp" @click="blogs(item.id)" v-dompurify-html="item.text">
                  {{ item.text }}
                </a>
              </div>
              <div class="bt-like">
                <ul>
                  <li>
                    <i class="iconfont icon-dianzan"></i>
                    <a>{{ item.good_num }}</a>
                  </li>
                  <li>
                    <i class="iconfont icon-a-xingxingkong"></i>
                    <a> {{ item.types }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="rt">
              <div>
                <img
                  :src="'https://www.hartmore.xyz/admin/' + item.picture"
                  @click="blogs(item.id)"
                />
              </div>
              <div class="fl">
                <div class="like">
                  <i class="iconfont icon-dianzan"></i>
                  <a>点赞</a>
                </div>
                <div class="like">
                  <i class="iconfont icon-a-xingxingkong"></i>
                  <a>收藏</a>
                </div>
                <div class="like last">
                  <i class="iconfont icon-xihuan"></i>
                  <a>关注</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="this.search.length != 0"
      style="
        margin: 1rem auto;
        display: flex;
        justify-content: center;
        font-size: 1rem;
      "
    >
      没有更多了···
    </div>
    <div
      v-show="this.search.length === 0"
      style="
        margin: 1rem auto;
        display: flex;
        justify-content: center;
        font-size: 1rem;
      "
    >
      暂时没有此内容哟···（可留言给小二站长添加）
    </div>
  </div>
</template>

<script>
export default {
  name: "userSearch",
  components: {},
  data() {
    return { index: 0, search: [] };
  },
  methods: {
    blogs(item) {
      this.$router.push({
        path: "/blog",
        query: {
          id: this.$base64.encode(item),
        },
      });
    },
  },
  mounted() {
    let v = this.$route.params.keyword;
    localStorage.search = JSON.stringify(v);
    this.$axios({
      url: "https://www.hartmore.xyz/php/search.php",
      method: "get",
      params: {
        types: v,
      },
    }).then((response) => {
      this.search = response.data;
    });
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
  color: rgb(0, 0, 0);
}

.con {
  width: 1400px;
  margin: 0 auto;
}
.blog {
  margin: 4rem 0;
  opacity: 0.8;
  display: flex;
  justify-content: center;
}

.blog .left {
  z-index: 1;
}
.rightCard {
  width: 500px;
}
.rightCard .user:nth-child(2),
.rightCard .user:nth-child(3),
.rightCard .user:nth-child(4) {
  margin-top: 25px;
  height: 250px;
}
.rightCard .user:nth-child(5) {
  margin-top: 23px;
  height: 200px;
}
.user {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  margin: 1rem auto;
  width: 90%;
  height: 300px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(110, 218, 240);
}
.user .tp {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 40%;
}
.user .tp img {
  border-radius: 5px 5px 0 0;
  object-fit: cover;
  width: 100%;
  height: 85%;
}
.user-con {
  width: 100%;
  height: 110px;
}
.user-con img {
  position: absolute;
  top: 27%;
  left: 15%;
  object-fit: cover;
  width: 60px;
  height: 60px;
  border-radius: 100%;
}
.user-con > span {
  letter-spacing: 1px;
  padding: 0 20px;
  display: block;
  font-size: 16px;
}
.user-con .xia {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 50px;
  margin-top: -10px;
}
.user-con .xia span {
  text-align: center;
  display: block;
}
.user-con .xia span:first-child {
  font-size: 22px;
}
.user-con .xia span:last-child {
  font-size: 16px;
}
.user-con .setting {
  margin-top: 20px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.setting div {
  width: 80px;
  border-right: 1px solid teal;
}
.setting div:last-child {
  border: 0;
}
.setting div span {
  display: block;
  text-align: center;
}
.bt .info {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
}
.bt .info div {
  padding-top: 5px;
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  width: 90px;
}
.blog-item {
  margin: 0 20px;
  display: flex;
  justify-content: center;
  padding: 15px;
  margin-top: 2rem;

  /* background-color: rgba(103, 147, 117, 0.817); */
  border: 1px solid orange;
  border-bottom: 3px solid rgba(11, 119, 30, 0.839);
  border-radius: 5px;
}

.lf {
  position: relative;
}
.lf .ell {
  font-size: 1.5rem;
  width: 98%;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
.blog-item .lf h2 {
  font-size: 1.3rem;
}
.blog-item .lf a {
  font-size: 1rem;
}
.rt {
  width: 40%;
}
.blog-item .rt img {
  cursor: pointer;
  object-fit: cover;
  border-radius: 5px;
  width: 310px;
  height: 170px;
}
.rt > div {
  overflow: hidden;
}
.rt img:hover {
  animation: img_enlarge 3s ease-in-out;
}
.bt-like {
  position: absolute;
  bottom: -6px;
  margin-left: -20px;
  margin-top: 8px;
  width: 280px;
  height: 25px;
}
.lf .bt-like ul li a {
  font-size: 14px;
}
.bt-like ul li {
  padding: 0 12px;
}
.bt-like ul li button {
  outline: none;
  border: 0;
}
.lf .bt-like ul {
  width: 13rem;
  display: flex;
}
.bt-like ul :nth-child(1) a {
  color: black;
}

.like {
  width: 27.5%;
  height: 1.5rem;
  border: solid 1px rgb(9, 124, 68);
  margin-top: 7px;
  border-radius: 5px;
  float: left;
  margin-right: 21px;
}
.rt .last {
  margin-right: 0;
}
.like:nth-child(1) a,
.like:nth-child(2) a,
.like:nth-child(3) a {
  margin-left: 9px;
  font-size: 1rem;
}
.like:hover {
  background-color: rgb(0, 0, 0);
}
.like:hover a {
  color: white;
}
.like i {
  margin-left: 12px;
  color: rgb(221, 17, 17);
  font-size: 1rem;
}
.item {
  position: relative;
  height: 100%;
}
.zhan {
  position: absolute;
  width: 150px;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgb(252, 125, 125);
  border-bottom: 3px solid rgb(9, 124, 68);
  border-radius: 0 0 15px 15px;
  z-index: 9;
}
.zhan a {
  cursor: pointer;
  color: white;
}
@media screen and (min-width: 300px) and (max-width: 450px) {
  .con {
    width: 100%;
  }
  .blog-item {
    flex-direction: column-reverse;
    height: 430px;
  }

  .rt {
    width: 99%;
  }
  .rightCard {
    margin-top: 2rem;
    width: 100%;
  }
  .bt-like {
    height: 6px;
  }
  .blog {
    flex-direction: column;
  }
}
</style>
