<template>
  <div class="w">
    <div class="container">
      <form action="php/register.php" method="POST">
        <div class="login-box">
          <div class="title">xinyue</div>
          <div class="input margin-top">
            <label for="username">邮箱</label>
            <input
              type="text"
              name="username"
              id="login-user"
              placeholder="请输入邮箱"
            />
          </div>
          <div class="input cos">
            <label for="userpasswer">密码</label>
            <input
              type="password"
              name="password"
              placeholder="请输入密码"
              id="psw"
            />
            <img src="@/assets/images/close.webp" alt="" id="eyeone" />
          </div>
          <div class="btn login-brn">
            <button type="submit">登录</button>
          </div>
          <div class="change-box login-change">
            <div class="change-btn toSign">
              <span>去注册</span>
            </div>
          </div>
        </div>
      </form>
      <form action="php/login.php" method="POST">
        <div class="sign-box">
          <div class="chec">
            <div id="chec">
              <span></span><span></span><span></span><span></span>
            </div>
          </div>
          <div class="title">xinyue</div>
          <div class="input">
            <label for="username">邮箱</label>
            <input
              type="text"
              name="username"
              id="sign-user"
              class="username pos"
              placeholder="请输入邮箱"
            />
            <div class="user_error">
              <span>你输入的邮箱有误</span>
            </div>
          </div>
          <div class="input bos q">
            <label for="userpasswer">密码</label>
            <input
              type="password"
              name="password"
              placeholder="请输入密码 4-16位"
              class="pass"
              id="pswt"
            />
            <img src="img/close.webp" alt="" id="eyetwo" />
          </div>
          <div class="input bose que q">
            <label for="userpasswer">确认密码</label>
            <input
              type="password"
              placeholder="请确认密码 4-16位"
              class="repass"
              id="pswte"
            />
            <img src="img/close.webp" alt="" id="eyetwo" />
            <div class="pass_error">
              <span>你输入的两次密码不同</span>
            </div>
          </div>

          <div class="btn sign-brn">
            <button type="submit" class="subbtn">注册</button>
          </div>
          <div class="change-box sign-change">
            <div class="change-btn toLogin">
              <span>去登录</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "userRegister",
  // data() {
  //   return {
  //     state: "active",
  //     class: "animate_login",
  //   };
  // },
};
</script>

<style scoped>
.w {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
}
.container {
  position: absolute;
  width: 700px;
  height: 400px;
  /* background-color: #fff; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(14, 35, 60, 0.8);
  border: 2px solid teal;
  overflow: hidden;
  box-sizing: border-box;
  transition: 1s;
  z-index: 9;
}

/* 鼠标悬浮式样式 */

.container:hover .change-box {
  height: 200px;
}

.container:hover .change-btn {
  display: block;
}

.container-show {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.title {
  margin-top: 20px;
  position: relative;
  height: 40px;
  width: 100%;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 4px;
  transition: 0.4s;
}
.margin-top {
  position: absolute;
  top: 2rem;
}
.input {
  /* position: relative; */
  width: 400px;
  height: 45px;
  position: relative;
  margin: 36px auto;
}

.input img {
  width: 30px;
  position: absolute;
  top: 11px;
  right: 41px;
}
.q img {
  top: 8px;
}
.sign-box {
  position: relative;
}
.sign-box .chec #chec {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 10px;

  left: 50%;
  transform: translateX(-50%);
}
.chec #chec span {
  display: block !important;
  width: 7%;
  height: 7px;
  margin: 0 7px;
  background-color: rgba(221, 102, 138, 0.5);
}
.container input {
  /* position: relative; */
  margin-left: 10px;
  width: 80%;
  height: 90%;
  border: none;
  outline: none;
  padding-left: 15px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 45px;
}

.btn {
  display: flex;
  height: 40px;
  width: 100px;
  margin: -10px auto;
  background-color: rgba(250, 250, 250, 0.7);

  justify-content: center;
  align-items: center;
  transition: 0.4s;
  border-radius: 40px;
}
.btn button {
  /* width: 100%;
  height: 100%; */
  outline: none;
  border: none;
  font-size: 24px;
  font-family: "宋体";
  letter-spacing: 3px;
  font-weight: 700;
  cursor: pointer;
  background-color: transparent;
  /* border-radius: 40px; */
}
.sign-brn button {
  display: none;
}

.change-box {
  position: absolute;
  height: 0px;
  width: 100%;
  /* clip-path: padding-box circle(100% at 100% 100%); */
  clip-path: polygon(75% 100%, 100% 50%, 100% 100%);
  bottom: 0px;
  /* clip-path: border-box circle(25% at 25% 25%); */
  transition: 0.4s;
  z-index: 9999;
}

.change-btn {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 25px;
  display: none;
  font-weight: 500;
}

.change-btn:hover {
  text-shadow: 0 0 5px rgba(200, 200, 200, 0.8);
  cursor: pointer;
}

/* 登录框样式 */

.login-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(29, 134, 118, 0.3);
  transition: 0.4s;
  z-index: 9999;
  transform-origin: 0 100%;
}

.login-box .title {
  color: white;
  text-shadow: 0px, 0px, 7px, rgba(255, 255, 255, 0.9);
}

.login-box input:focus {
  box-shadow: 0 0 10px rgba(28, 62, 13, 0.9);
}

.login-box input {
  caret-color: white;
  color: rgba(0, 0, 0, 0.8);
  font-size: 19px;
}

.login-btn:hover {
  color: white;
  background-color: #57606f;
  box-shadow: rgba(53, 43, 43, 0.1);
  text-shadow: 0 0 2px rgba(63, 45, 45, 0.1);
}

.login-box .btn:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(87, 153, 131);
}

.login-change {
  background-color: rgba(255, 255, 255, 0.8);
}

.animate_login {
  transform: rotate(-90deg);
}

.animate_sign {
  transform: rotate(0deg) !important;
}

/* 注册框样式 */

.sign-box {
  position: absolute;
  height: 100%;
  width: 100%;
  /* background-color: rgba(255, 255, 255, .3); */
  transform-origin: 0 100%;
  transform: rotate(90deg);
  transition: 0.4s;
  z-index: 9999;
}

.sign-box .title {
  text-shadow: 0 0 10px rgba(200, 200, 200, 0.8);
  font-weight: 500;
}

.sign-change {
  background-color: rgba(34, 90, 64, 0.8);
}

.toLogin {
  color: white;
}

.sign-box input {
  box-shadow: 0 0 3px black;
}
.sign-box .que label {
  margin-left: -34px;
}
.sign-box .btn {
  color: #1e90ff;
  background-color: rgba(200, 200, 200, 0.1);
  transition: 0.5s;
}

.sign-box .btn:hover {
  color: white;
  background-color: #1e90ff;
}

.user_error,
.pass_error {
  display: none;
  width: 10rem;
  position: absolute;
  left: 23rem;
  top: 0;
  color: red;
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
  .bgck,
  .bgc {
    display: none !important;
  }
  .container {
    width: 18rem;
    height: 42rem;
    margin-left: 15px;
  }
  .container input {
    width: 52%;
    height: 64%;
  }
  .change-box {
    height: 200px;
    clip-path: polygon(42% 100%, 100% 42%, 100% 100%);
  }
  .change-btn {
    display: block;
  }
  .input {
    margin-top: 6rem !important;
    width: 500px;
    height: 58px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 22px auto;
  }
  .input label {
    text-align: center;
  }
  .sign-box input {
    display: block;
  }
  .input img {
    top: 1.7rem;
    right: 15rem;
  }
}
</style>
