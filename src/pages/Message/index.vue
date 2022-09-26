<template>
  <div class="m">
    <div class="message">
      <div class="message-show">
        <h2>留言展示</h2>
        <div class="mes">
          <div class="user">
            <img src="@/assets/images/1.webp" alt="" />
            <div>飞虎队石佛沟护士的功夫倒是官方快速导航</div>
            <div>花费的时间更好发挥教师的规范化大发噶啥</div>
          </div>
          <a><h4>环节都是废话</h4></a>
          <span>2019-5-15</span>
        </div>
        <div class="mes">
          <div class="user">
            <img src="@/assets/images/1.webp" alt="" />
            <div>飞虎队石佛沟护士的功夫倒是官方快速导航</div>
            <div>花费的时间更好发挥教师的规范化大发噶啥</div>
          </div>
          <a><h4>环节都是废话</h4></a>
          <span>2019-5-15</span>
        </div>
        <div class="mes">
          <div class="user">
            <img src="@/assets/images/1.webp" alt="" />
            <div>飞虎队石佛沟护士的功夫倒是官方快速导航</div>
            <div>花费的时间更好发挥教师的规范化大发噶啥</div>
          </div>
          <a><h4>环节都是废话</h4></a>
          <span>2019-5-15</span>
        </div>
        <div class="mes">
          <div class="user">
            <img src="@/assets/images/1.webp" alt="" />
            <div>飞虎队石佛沟护士的功夫倒是官方快速导航</div>
            <div>花费的时间更好发挥教师的规范化大发噶啥</div>
          </div>
          <a><h4>环节都是废话</h4></a>
          <span>2019-5-15</span>
        </div>
      </div>
      <div class="wrapper">
        <a>首页</a>
        <a>prev</a>
        <a></a>
        <a>最后页</a>
        <div>当前第1页共5页</div>
      </div>
      <form method="POST">
        <div class="flex">
          <div class="lf">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="阁下可以在这里留言噢"
            ></textarea>
          </div>
          <div class="rg">
            <div class="login">
              <label for="">mail</label>
              <input type="text" name="mail" placeholder="请输入邮箱" />
            </div>
            <div class="password">
              <label for="">name</label>
              <input type="text" name="username" placeholder="请输入姓名" />
            </div>
            <button type="submit" class="submit">发表</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "userMessage",
};
</script>

<style scoped>
.m {
  margin:0 auto;
  background-image: linear-gradient(130deg, #f08f53ad, #6ac0f1d0, #96e6cbc8);
  overflow: hidden;
}
input,
textarea,
button {
  resize: none;
  outline: none;
  border: 1px solid teal;
  border-radius: 5px;
  text-indent: 5px;
}
.message {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.message-show {
  width: 1200px;
  border-bottom: 2px solid rgb(255, 255, 255);
  padding-bottom: 2rem;
}
.message-show h2 {
  text-align: center;
  width: 100%;
  line-height: 2rem;
  background-color: white;
  border-radius: 5px;
}
.flex {
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lf,
.rg{
  display: flex;
  justify-content: center;
  align-items: center;
}
.lf {
  width: 600px;
  height: 255px;
}
.rg {
  height: 262px;
  margin-left: 5px;
  flex-direction: column;
  width: 500px;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
}
.login,
.password {
  margin: 20px 0;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.password {
  margin-left: -9px;
}
.rg input {
  margin-left: 8px;
}
.flex input {
  width: 70%;
  height: 2rem;
}
.flex textarea {
  padding: 5px;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 15px;
  font-weight: "宋体";
  font-weight: 700;
  letter-spacing: 1px;
  color: rgb(127, 84, 108);
  background-color: white;
}
.submit {
  width: 80px;
  height: 40px;
  border-radius: 5px;
  background-color: orange;
  font-size: 1rem;
  font-weight: 700;
}
.user {
  display: flex;
  align-items: center;
}
.user div {
  margin-left: 5px;
}
.mes {
  display: flex;
  padding: 0.2rem 0.4rem;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  margin-top: 1rem;
  background-color: rgba(248, 191, 156, 0.721);
  height: 7rem;
}
.mes a {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: rgb(70, 60, 63);
}
.message_show span {
  width: 20rem;
  height: 2rem;
  font-size: 1rem;
}
.user img {
  margin-right: 0.5rem;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

/* 分页 */
.wrapper {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  /* display: flex;
     justify-content: center;
     align-items: center; */
}
/* 当前页背景颜色改变 */
.wrapper a {
  font-weight: 700;
  margin: 0 0.2rem;
  display: flex;
  justify-content: center;
  display: inline-block;
  font-size: 1rem;
  width: 4rem;
  height: 4rem;
  color: orange;
  text-align: center;
  background-color: teal;
  line-height: 4rem;
  border-radius: 6px;
}
.wrapper div {
  line-height: 4rem;
  width: 12rem;
  color: orange;
  text-align: center;
  background-color: teal;
  border-radius: 6px;
}
@media screen and (min-width: 300px) and (max-width: 450px) {
  .show-time {
    display: none;
  }
  .nav {
    left: 0 !important;
  }
  .box i::after {
    font-size: 20px !important;
  }
  .shell {
    width: 54px !important;
  }
  .w {
    width: 18rem;
  }
  .message-show {
    margin-left: 30px;
    width: 17rem;
  }
  .wrapper {
    flex-direction: column-reverse;
    align-items: center;
  }
  .wrapper a {
    width: 10rem;
    margin: 10px 0;
  }
  .flex {
    height: 750px;
    flex-direction: column;
  }
  .lf,
  .rg {
    height: 300px;
    width: 130%;
    margin: 15px 0;
    
  }
  
  .login,
  .password {
    width: 100%;
    flex-direction: column;
  }
  .flex input {
    width: 72%;
  }
}
</style>
