<template>
  <div class="con">
    <div class="blog">
      <div class="item">
        <div
          class="blog-item"
          v-for="item of newData.slice(0, show)"
          :key="item.id"
        >
          <div class="lf">
            <h2>{{ item.title }}</h2>
            <div class="ell">
              <a
                class="sp"
                @click="blogs(item.id)"
                v-dompurify-html="item.text"
              >
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
        <div class="zhan">
          <div class="kai">
            <a @click="blogShow" v-show="isShow">查看更多</a>
            <a v-show="is_Show" @click="blog">没有了/收起</a>
          </div>
        </div>
      </div>
      <!-- right -->
      <div class="rightCard">
        <div class="user">
          <div class="tp">
            <img src="@/assets/images/3.webp" alt="" />
          </div>
          <div class="user-con">
            <img src="@/assets/images/2.webp" alt="" />
            <div class="xia">
              <span>心悦</span>
              <span>好久不见</span>
            </div>
            <div class="setting">
              <div><span>文章数量</span><span>63</span></div>
              <div><span>标签数量</span><span>326</span></div>
              <div><span>运行天数</span><span>30</span></div>
            </div>
          </div>
          <div class="bt">
            <div class="info">
              <div>撰写文章</div>
              <div>新建页面</div>
              <div>查看评论</div>
              <div>站点设置</div>
              <div>主题设置</div>
              <div>退出登录</div>
            </div>
          </div>
        </div>
        <div class="user">
          <div class="tp">
            <img src="@/assets/images/ni.webp" alt="" />
          </div>
          <div class="user-con">
            <div class="xia">
              <span>经典语录</span>
              <span></span>
            </div>
            <span
              >如果觉得生活是一种刁难，一开始就输了。如果觉得刁难是一种雕刻，迟早都会赢的。</span
            >
          </div>
        </div>
        <div class="user">
          <div class="tp">
            <img src="@/assets/images/9.jpg" alt="" />
          </div>
          <div class="user-con">
            <div class="xia">
              <span>经典语录</span>
              <span></span>
            </div>
            <span
              >学会坚强
              ，其实一个人也可以活得漂亮，自己笑给自己看，自己哭给自己听。</span
            >
          </div>
        </div>
        <div class="user">
          <div class="tp">
            <img src="@/assets/images/jian.webp" alt="" />
          </div>
          <div class="user-con">
            <div class="xia">
              <span>经典语录</span>
              <span></span>
            </div>
            <span
              >你有你的背景，我有我的故事。没有读懂我的故事，别给我多余的评价。别用昨日的眼光
              ，看今日的我。</span
            >
          </div>
        </div>
        <div class="user">
          <div class="tp">
            <img src="@/assets/images/21.jpg" alt="" />
          </div>
          <div class="user-con">
            <div class="xia">
              <span>致自己</span>
              <span></span>
            </div>
            <span style="display: block; text-align: center; font-size: 20px"
              >星星之火,可以燎原</span
            >
            <span
              style="
                margin-top: 5px;
                display: block;
                text-align: center;
                font-size: 14px;
              "
              >祝大家在各自的领域里熠熠生辉</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeBlog",
  data() {
    return {
      isShow: true,
      is_Show: false,
      show: 5,
      index: 0,
      newData: [],
    };
  },
  methods: {
    blogShow() {
      this.show += 1;
      if (this.show < this.newData.length) {
        this.show += 4;
      } else if (this.show > this.newData.length) {
        this.isShow = !this.isShow;
        this.is_Show = !this.is_Show;
      }
    },
    blog() {
      this.show = 5;
      this.isShow = !this.isShow;
      this.is_Show = !this.is_Show;
    },
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
    this.$axios({
      url: "https://www.hartmore.xyz/php/indexBlog.php",
      method: "POST",
      params: {},
    }).then((response) => {
      this.newData = response.data;
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
  margin-bottom: 4rem;
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
.rt > div:first-child{
  width: 310px;
  height: 150px;
}
.blog-item .rt img {
  cursor: pointer;
  object-fit: cover;
  border-radius: 5px;
  width: 100%;
  height: 100%;
}
.blog-item .rt > div:first-child:hover {
  
  transform: scale(1.05);
  transition: 0.1s;
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
