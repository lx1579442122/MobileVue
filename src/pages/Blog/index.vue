<template>
  <div>
    <!-- 右边菜单栏 -->
    <div class="back">
      <button>背景颜色</button>
      <div class="color">
        <ul class="select">
          <li style="background-color: black"></li>
          <li style="background-color: white"></li>
          <li style="background-color: rgb(0, 255, 145)"></li>
          <li style="background-color: rgb(0, 55, 255)"></li>
          <li style="background-color: rgb(0, 195, 255)"></li>
          <li style="background-color: rgb(248, 0, 203)"></li>
          <li style="background-color: rgb(255, 0, 0)"></li>
          <li style="background-color: rgb(66, 98, 88)"></li>
          <li style="background-color: rgb(255, 94, 0)"></li>
          <li style="background-color: rgb(63, 73, 88)"></li>
          <li style="background-color: rgb(194, 167, 139)"></li>
        </ul>
      </div>
    </div>
    <div class="fon">
      <button>字体颜色</button>
      <div class="colorf">
        <ul class="select">
          <li style="background-color: black"></li>
          <li style="background-color: white"></li>
          <li style="background-color: rgb(0, 255, 145)"></li>
          <li style="background-color: rgb(0, 55, 255)"></li>
          <li style="background-color: rgb(0, 195, 255)"></li>
          <li style="background-color: rgb(248, 0, 203)"></li>
          <li style="background-color: rgb(255, 0, 0)"></li>
          <li style="background-color: rgb(66, 98, 88)"></li>
          <li style="background-color: rgb(255, 94, 0)"></li>
          <li style="background-color: rgb(63, 73, 88)"></li>
          <li style="background-color: rgb(194, 167, 139)"></li>
        </ul>
      </div>
    </div>
    <div class="blog margin">
      <div class="left">
        <div class="item">
          <div class="blog-item">
            <div class="lf">
              <div class="margin">
                <a>
                  <img
                    :src="'https://www.hartmore.xyz/admin/' + this.newData[2]"
                  />
                </a>
              </div>
              <h2>{{ newData[1] }}</h2>
              <div class="ellh">
                <a href="#" class="ell" v-dompurify-html="newData[3]">
                  {{ newData[2] }}
                </a>
              </div>
              <div class="bt">
                <ul>
                  <li>
                    <span style="display: inline"> 类型：</span>{{ newData[0] }}
                  </li>
                  <li>
                    <span style="display: inline">上传时间：</span
                    >{{ newData[5] }}
                  </li>
                </ul>
              </div>
              <div class="rt">
                <div class="fl">
                  <div class="like">
                    <button @click="good(newData[6])" ref="good">
                      <i class="iconfont icon-dianzan"></i>
                      点赞 ({{ newData[4] }})
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 评论展示 -->
      <div class="message_show">
        <h3 style="text-align: center; font-size: 1rem">评论展示</h3>
        <div class="mes" v-for="(item, index) in comment" :key="index">
          <div class="user">
            <img src="@/assets/images/105.webp" alt="" />
            <div>
              <span>
                {{ item.username }}
              </span>
              <span>{{ item.mail }}</span>
            </div>
          </div>
          <h4>{{ item.message }}</h4>
          <span>{{ item.timeInput }}</span>
        </div>
      </div>
      <!-- 翻页 -->
      <page-num></page-num>
      <div class="message">
        <div>
          <h3 style="margin-top: 1rem">评论</h3>
        </div>
        <div class="field">
          <textarea
            name="message"
            rows="10"
            cols="40"
            v-model="message"
          ></textarea>
        </div>
        <div class="fields">
          <div class="field">
            <div>
              <input
                type="text"
                name="username"
                placeholder="姓名"
                v-model="name"
              />
            </div>
          </div>
          <div class="field">
            <button type="submit" @click="submit">发布</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageNum from "@/pages/Blog/pageNum/index.vue";
export default {
  name: "userBlog",
  components: {
    pageNum,
  },
  data() {
    return {
      index: 0,
      params: "",
      newData: [],
      comment: [],
      name: "",
      message: "",
    };
  },
  methods: {
    good(g) {
      this.$axios({
        url: "https://www.hartmore.xyz/php/vueGood.php",
        method: "get",
        params: {
          id: g,
          good: true,
        },
      }).then((response) => {
        this.newData[4] = response.data;
      });
      this.$router.go(0);
    },
    submit() {
      if (this.username) {
        this.$axios({
          url: "https://www.hartmore.xyz/php/commentAdd.php",
          method: "get",
          params: {
            id: this.params,
            name: this.name,
            message: this.message,
            mail: this.username,
          },
        }).then((response) => {
          this.new = response.data;
          console.log(this.new);
        });
        this.$router.go(0);
      }else{
        console.log("请先登陆");
      }
    },
  },
  created() {
    this.username = JSON.parse(sessionStorage.getItem("token"));
  },
  mounted() {
    this.params = JSON.parse(this.$base64.decode(this.$route.query.id));
    this.$axios({
      url: "https://www.hartmore.xyz/php/blogshow.php",
      method: "POST",
      params: {
        id: this.params,
      },
    }).then((response) => {
      this.newData = response.data.split(",");
    });
    this.$axios({
      url: "https://www.hartmore.xyz/php/comment.php",
      method: "get",
      params: {
        blog_id: this.params,
      },
    }).then((response) => {
      this.comment = response.data;
      console.log(this.comment);
    });
  },
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  input {
    color: black;
    text-shadow: black;
    text-indent: 5px;
    outline: none;
    border: 1px solid rgb(215, 107, 98);
    background-color: transparent;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  em,
  i {
    font-style: normal;
  }
  img {
    /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */
    border: 0;
    /* 取消图片底侧有空白缝隙的问题 */
    vertical-align: middle;
  }
  .ella {
    width: 6rem;
    word-break: keep-all;
    border-top: 0 !important;
    border-left: 0 !important;
    border-right: 0 !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ell {
    letter-spacing: -2;
    font-family: "黑体";
    color: rgb(0, 0, 0);
  }
  .margin {
    width: 60rem;
    margin: 5px auto;
  }

  .back {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    padding: 10px 10px;
    right: 2rem;
    top: 15%;
    width: 15rem;
    background-color: teal;
    border-radius: 5px;
    z-index: 99;
  }
  .fon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    padding: 10px 10px;
    right: 2rem;
    top: 35%;
    width: 15rem;
    background-color: teal;
    border-radius: 5px;
    z-index: 99;
  }
  .back button,
  .fon button {
    width: 8rem;
    height: 2rem;
    outline: none;
    border: 0;
    border-radius: 5px;
    font-size: 1rem;
    background-color: orange;
  }
  .back ul,
  .fon ul {
    margin-top: 10px;
    display: flex;
  }
  .back ul li,
  .fon ul li {
    cursor: pointer;
    width: 15px;
    height: 15px;
    margin-left: 5px;
    border-radius: 2px;
  }
  .back ul li:nth-child(1),
  .fon ul li:nth-child(1) {
    margin-left: 0;
  }
  .item {
    margin: 5rem auto;
    width: 60rem;
    /* margin-left: 50px; */
    z-index: 1;
    span {
      display: inline-block;
      width: 100%;
      height: 50px;
      line-height: 50px;
      background-color: #fff;
      font-size: 18px;
      font-weight: 700;
      text-align: center;
    }
    .blog-item {
      margin-top: 1rem;
      background-color: #fff;
      border: 1px solid teal;
      border-radius: 5px;
      .lf {
        padding: 0 10px;
        flex: 7;
        .margin {
          width: 95%;
          height: 800px;
        }
        img {
          object-fit: cover;
          border-radius: 5px;
          width: 100%;
          height: 100%;
        }
        h2 {
          font-size: 1.5rem;
          padding-bottom: 7px;
          text-align: center;
        }
        .ellh {
          a {
            display: block;
            width: 55rem;
            margin: 0 auto;
            font-size: 0.9rem;
            color: black;
          }
        }
        .bt {
          margin-top: 2rem;
          ul {
            display: flex;
            justify-content: center;
            align-items: center;
            li {
              margin: 0 10px;
              font-size: 0.8rem;
              span {
                color: orange;
                font-size: 0.8rem;
              }
            }
          }
        }
        .rt {
          padding: 10px 10px;
          margin: 0 auto;
          width: 40rem;
          flex: 2.4;
          .like {
            margin: 0 auto;
            width: 7rem;
            border-radius: 5px;
            button {
              text-align: center;
              width: 7rem;
              line-height: 2rem;
              outline: none;
              border: solid 1px teal;
              background-color: transparent;
              border-radius: 5px;
              font-size: 1rem;
              color: orange;
              cursor: pointer;
            }
            i {
              font-size: 1.2rem;
            }
          }
          .like button:hover {
            background-color: rgb(0, 0, 0);
            color: white;
          }
        }
      }
    }
  }
}

/* 评论 */
.message {
  margin-top: 1rem;
  padding: 5px 20px;
  width: 60rem;
  height: 20rem;
  background-color: rgba(129, 186, 232, 0.496);
  border-radius: 8px;
}
input {
  outline: none;
  width: 100%;
  height: 2rem;
  border-radius: 5px;
}
.field {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  width: 100%;
}
.fields {
  width: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.field textarea {
  outline: none;
  resize: none;
  border-radius: 5px;
  width: 100%;
}
.field button {
  font-size: 1rem;
  font-weight: 700;
  width: 6rem;
  height: 2rem;
  background-color: orange;
  border-radius: 5px;
}
/* 展示 */
.message_show {
  width: 60rem;
}
.message_show h3 {
  border-radius: 5px;
  background-color: rgba(129, 186, 232, 0.496);
}
.user {
  display: flex;
  align-items: center;
}

.mes {
  display: flex;
  padding: 0.2rem 0.4rem;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  margin-top: 1rem;
  background-color: rgba(129, 186, 232, 0.496);
  width: 100%;
  height: 7rem;
}
.mes h4 {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.message_show span {
  width: 20rem;
  height: 2rem;
  font-size: 1rem;
}
.message_show img {
  margin-right: 0.5rem;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
