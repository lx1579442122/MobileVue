<template>
  <!-- menu start -->
  <div class="menu">
    <div class="hed">
      <div class="logo">
        <router-link to="/home"
          ><img class="scroll-con-img" src="./images/logo.webp" alt=""
        /></router-link>
        <span>心悦</span>
      </div>
      <button class="onNav" @click="click">
        <i class="iconfont icon-daohang1"></i><span>导航</span>
      </button>
      <div class="nav" v-show="isShow">
        <ul id="nv">
          <li>
            <i class="iconfont icon-shouye"></i
            ><router-link to="/home">首页</router-link>
          </li>
          <li>
            <i class="iconfont icon-yinle"></i
            ><router-link to="/music">音乐</router-link>
          </li>
          <li>
            <i class="iconfont icon-xiangce"></i
            ><router-link to="/photo">图片</router-link>
          </li>
          <li>
            <i class="iconfont icon-liuyan"></i
            ><router-link to="/message">留言</router-link>
          </li>
          <li>
            <i class="iconfont icon-wode"></i
            ><router-link to="/user">关于</router-link>
          </li>
          <li>
            <i class="iconfont icon-shipin"></i
            ><router-link to="/video">视频</router-link>
          </li>
          <div class="hov"></div>
        </ul>
      </div>
      <div class="search" v-show="$route.meta.showNav">
        <input
          type="text"
          name="types"
          placeholder="搜索···"
          v-model="keyword"
          @blur="blur"
          ref="sea"
          @keyup.enter="goSearch"
        />
        <button @click="goSearch">搜索</button>
      </div>
      <div class="login">
        <div v-show="show">
          <router-link to="/register">注册</router-link>
          <span>/</span>
          <router-link to="/register">登录</router-link>
        </div>
        <div v-show="show2">
          {{ username }}
          <span @click="unLogin"> 退出登录</span>
        </div>
      </div>
    </div>
  </div>
  <!-- menu end -->
</template>

<script>
export default {
  name: "userHeader",
  data() {
    return {
      keyword: "",
      isShow: false,
      show: true,
      show2: false,
      message: "点击展开菜单",
      username: "",
    };
  },
  methods: {
    // 退出登陆
    unLogin: function () {
      sessionStorage.removeItem("token");
      setTimeout(function () {
        window.location.reload();
      }, 100);
    },
    goSearch() {
      this.$router.push({
        name: "search",
        params: { keyword: this.keyword },
        query: { k: this.keyword.toUpperCase() },
      });
    },
    click() {
      this.isShow = !this.isShow;
      if (this.isShow) {
        this.message = "点击关闭菜单";
      } else {
        this.message = "点击展开菜单";
      }
    },
    blur() {
      this.$refs.sea.value = "";
    },
  },
  created() {
    this.username = JSON.parse(sessionStorage.getItem("token"));
  },
  mounted() {
    if (this.username) {
      this.show = !this.show;
      this.show2 = !this.show2;
    }
  },
};
</script>

<style scoped>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  animation: none 1s ease-in-out;
  z-index: 9999;
}
.hed {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  background-color: #0b444ae8;
}

.logo span {
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  font-size: 42px;
  font-family: 宋体;
  font-weight: 700;
  color: #d4cf69;
}
.logo img {
  animation: block 0.3s ease-in-out;
  margin: 5rem 0 0 6rem;
  width: 7rem;
  height: 7rem;
}
.onNav {
  padding: 5px;
  outline: none;
  background-color: transparent;
  border: 1px solid rgb(208, 218, 234);
  border-radius: 5px;
  position: fixed;
  left: 200px;
  top: 14px;
  color: white;
}
.onNav span {
  margin: 0 5px;
}
.nav {
  animation: block 0.5s ease-in-out;
  width: 35rem;
}
.nav ul {
  position: absolute;
  position: relative;
  display: flex;
}
.nav ul li {
  /* margin-right: 1rem; */
  width: 6rem;
  line-height: 3rem;
  text-align: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  z-index: 10;
}
.nav ul li i {
  color: orange;
  font-size: 1.5rem;
}
.hov {
  position: absolute;
  width: 6rem;
  height: 3rem;
  left: 0;
  top: 0;
  transition: all 0.5s;
  background-color: rgb(69, 104, 67);
  border-radius: 25px 10px 25px 10px;
  z-index: 5;
}
.nav ul li::before {
  vertical-align: bottom;
  padding-right: 0.5rem;
  font-family: "icomoon";
  color: rgb(108, 218, 163);
}

.nav ul li a {
  font-family: "宋体";
  font-weight: 700;
  color: white;
}
.usern {
  display: flex;
  color: white;
}
.usern a {
  color: white;
}
.usern span {
  display: block;
  margin: 0 0.5rem;
  line-height: 2rem;
  cursor: pointer;
}
.usern img {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
.search {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: block 0.6s ease-in-out;
}
.search input {
  width: 18rem;
  height: 2rem;
  border: 0;
  border-radius: 10px;
  outline: none;
  font-size: 1rem;
  color: teal;
  text-indent: 8px;
}
.search button {
  cursor: pointer;
  position: absolute;
  border-radius: 5px;
  width: 42px;
  height: 2rem;
  outline: none;
  border: 0;
  background: #49cc7d;
  top: 0;
  right: 0;
  font-size: 0.8rem;
  font-weight: 700;
}
.login {
  width: 14rem;
  font-size: 1.5rem;
  animation: block 0.7s ease-in-out;
}
.login div {
  font-size: 1rem;
  color: white;
}
.login div a {
  font-size: 1.3rem;
  color: white;
}
.login div span {
  cursor: pointer;
  margin-left: 7px;
  color: white;
}

@media screen and (min-width: 300px) and (max-width: 450px) {
  .onNav {
    display: block;
    position: fixed;
    top: 8px;
    left: 10px;
    z-index: 9;
    width: 3rem;
    border-radius: 5px;
    height: 3rem;
    font-size: 1rem;
    font-weight: 700;
    outline: none;
    background-color: rgb(232, 92, 37);
    border: 0;
    z-index: 99999;
    border: #114827 2px solid;
  }
  .onNav span {
    display: none;
  }
  .nav {
    padding: 10px;
    background-color: rgba(10, 87, 113, 0.948);
    width: 60%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
  .nav ul {
    margin-top: 30px;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .hov {
    width: 150px;
    left: 50%;
    top: 40px;
    transform: translateX(-50%);
  }
  .nav ul li {
    height: 15%;
    width: 100%;
    letter-spacing: 10px;
    font-size: 1.5rem;
  }

  .search {
    position: absolute;
    top: 70px;
    z-index: -1;
  }
  .search input {
    width: 300px;
    border: #49cc7d 1px solid;
  }
  .logo img {
    width: 4rem;
    height: 4rem;
    margin-top: 0;
    margin-left: 0;
  }
  .logo span {
    position: absolute;
    left: 65px;
    width: 60px;
    font-size: 28px;
  }
  .login {
    position: absolute;
    right: 0;
    width: 7rem;
  }
  .hed {
    justify-content: center;
  }
}
</style>
