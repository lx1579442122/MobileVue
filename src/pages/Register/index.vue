<template>
  <div class="w">
    <div class="container">
      <form action="php/register.php" method="POST">
        <div class="login-box" v-show="isShow">
          <div class="title">XINYUE</div>
          <div class="input">
            <label for="username">邮箱</label>
            <input
              type="text"
              name="username"
              id="login-user"
              :placeholder = placeholder1
              @focus="placeholderF"
              @blur="placeholderB"
            />
          </div>
          <div class="input">
            <label for="userpasswer">密码</label>
            <input
              type="password"
              name="password"
              id="psw"
              :placeholder = placeholder2
              @focus="placeholderF2"
              @blur="placeholderB2"
            />
            <!-- <img src="@/assets/images/close.webp" alt="" id="eyeone" /> -->
          </div>
          <div class="btn login-brn">
            <button type="submit">登录</button>
          </div>
          <div class="change-box login-change">
            <div class="change-btn toSign" @click="isShow = !isShow">
              <span>去注册</span>
            </div>
          </div>
        </div>
      </form>
      <form action="php/login.php" method="POST">
        <div class="sign-box" v-show="!isShow">
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
          </div>
          <div>
            <label for="userpasswer">密码</label>
            <input
              type="password"
              name="password"
              placeholder="请输入密码 4-16位"
              class="pass"
              id="pswt"
            />
            <img src="@/assets/images/close.webp" alt="" id="eyetwo" />
          </div>
          <div>
            <label for="userpasswer">确认密码</label>
            <input
              type="password"
              placeholder="请确认密码 4-16位"
              class="repass"
              id="pswte"
            />
            <img src="@/assets/images/close.webp" alt="" id="eyetwo" />
            <div class="pass_error">
              <span>你输入的两次密码不同</span>
            </div>
          </div>
          <div class="btn">
            <button type="submit">注册</button>
          </div>
          <div class="change-box sign-change">
            <div class="change-btn" @click="isShow = !isShow">
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
  data() {
    return {
      isShow: true,
      placeholder1:"请输入邮箱",
      placeholder2:"请输入密码"
    };
  },
  methods: {
    placeholderF() {
      if (this.placeholder1 == "请输入邮箱") {
        this.placeholder1 = ""
      }
    },
    placeholderB(){
      this.placeholder1 = "请输入邮箱"
    },
    placeholderF2(){
      if (this.placeholder2 == "请输入密码") {
        this.placeholder2 = ""
      }
    },
    placeholderB2(){
      this.placeholder2 = "请输入密码"
    }
  },
 
};
</script>

<style lang="scss" scoped>
$shadow: rgb(32, 112, 139);
$border: rgb(65, 149, 106);
$title: rgb(237, 134, 31);
$bold: 700 !default;
.w {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  .container {
    position: absolute;
    width: 700px;
    height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    box-shadow: 0px 0px 10px $shadow;
    border: 2px solid $border;
    overflow: hidden;
    box-sizing: border-box;
    transition: 1s;
    z-index: 5;
    .login-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title {
        text-align: center;
        font-size: 2rem;
        color: $title;
        letter-spacing: 3px;
      }
      .input {
        label {
          font-size: 1rem;
          margin-right: 15px;
          color: $border;
          font-weight: $bold;
        }
        input {
          position: relative;
          outline: none;
          border-radius: 5px;
          border: 1px solid $title;
          border-bottom: 2px $border solid;
          text-indent: 5px;
          margin: 25px 0;
          width: 16rem;
          height: 2rem;
        }
      }
    }
  }
}
@media screen and (min-width: 300px) and (max-width: 450px) {
}
</style>
