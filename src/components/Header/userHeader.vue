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
      <button class="onNav" @click="click">{{ message }}</button>
      <div class="nav" v-show="isShow">
        <ul id="nv">
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/music">音乐</router-link></li>
          <li><router-link to="/photo">图片</router-link></li>
          <li><router-link to="/message">留言</router-link></li>
          <li><router-link to="/user">关于</router-link></li>
          <li><router-link to="/video">视频</router-link></li>
          <div class="hov"></div>
        </ul>
      </div>
      <div class="search" v-show="$route.meta.showNav">
        <input
          type="text"
          name="types"
          placeholder="搜索···"
          v-model="keyword"
        />
        <button @click="goSearch">搜索</button>
      </div>
      <div class="login">
        <router-link to="/register">注册</router-link>
        <span>/</span>
        <router-link to="/register">登录</router-link>
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
      message: "点击展开菜单",
    };
  },
  methods: {
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
  },
};
</script>

<style scoped>
@font-face {
  font-family: "icomoon";
  src: url("./fonts/icomoon.eot?wrez6j");
  src: url("./fonts/icomoon.eot?wrez6j#iefix") format("embedded-opentype"),
    url("fonts/icomoon.ttf?wrez6j") format("truetype"),
    url("./fonts/icomoon.woff?wrez6j") format("woff"),
    url("./fonts/icomoon.svg?wrez6j#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  animation: none 1s ease-in-out;
  z-index: 9;
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

.nav {
  animation: block 0.5s ease-in-out;
  width: 45rem;
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
.hov {
  position: absolute;
  width: 6rem;
  height: 3rem;
  left: 0;
  top: 0;
  transition: all 0.5s;
  background-color: orange;
  border-radius: 25px 10px 25px 10px;
  z-index: 5;
}
.nav ul li::before {
  vertical-align: bottom;
  padding-right: 0.5rem;
  font-family: "icomoon";
  color: rgb(108, 218, 163);
}
.nav ul li:nth-child(1)::before {
  content: "";
}
.nav ul li:nth-child(2)::before {
  content: "";
}
.nav ul li:nth-child(3)::before {
  content: "";
}
.nav ul li:nth-child(4)::before {
  content: "";
}
.nav ul li:nth-child(5)::before {
  content: "";
}
.nav ul li:nth-child(6)::before {
  content: "";
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
  width: 20rem;
  height: 2rem;
  border: 0;
  border-radius: 10px;
  outline: none;
  font-size: 1rem;
  color: teal;
  text-indent: 1rem;
}
.search button {
  cursor: pointer;
  position: absolute;
  border-radius: 5px;
  width: 50px;
  height: 2rem;
  outline: none;
  border: 0;
  background: #49cc7d;
  top: 0;
  right: 0;
  font-size: 1rem;
  font-weight: 700;
}
.login {
  width: 12rem;
  font-size: 1.5rem;
  animation: block 0.7s ease-in-out;
}
.login a {
  color: white;
}
.login span {
  color: white;
}

@media screen and (min-width: 300px) and (max-width: 450px) {
  .onNav {
    display: block;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9;
    width: 90%;
    border-radius: 5px;
    height: 3rem;
    font-size: 1rem;
    font-weight: 700;
    outline: none;
    background-color: rgb(232, 92, 37);
    border: 0;
    z-index: 99999;
  }
  .nav {
    padding: 10px;
    background-color: rgb(235, 95, 43);
    width: 100%;
    position: fixed;
    bottom: 6%;
    left: 0;
  }
  .nav ul {
    flex-wrap: wrap;
  }
  .nav ul li {
    width: 30%;
  }
  
  .search{
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
    left: 15px;
    width: 60px;
    font-size: 28px;
  }
  .login {
    position: absolute;
    right: 0;
    width: 7rem;
  }
  .hed{
    justify-content: center;
  }
}
</style>
