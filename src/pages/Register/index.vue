<template>
  <div class="w">
    <div class="container">
      <form
        action="https://www.hartmore.xyz/php/iphoneRegister.php"
        method="POST"
      >
        <div class="login-box" v-show="isShow">
          <div class="title">XINYUE</div>
          <div class="input">
            <label for="username">邮箱</label>
            <input
              type="text"
              name="username"
              id="login-user"
              :placeholder="placeholder1"
              @focus="placeholderF"
              @blur="placeholderB"
            />
          </div>
          <div class="input">
            <label for="userpasswer">密码</label>
            <input
              ref="show"
              type="password"
              name="password"
              id="psw"
              :placeholder="placeholder2"
              @focus="placeholderF2"
              @blur="placeholderB2"
            />
            <div class="show" @click="pass">
              <img v-show="closeShow" src="@/assets/images/close.webp" />
              <img v-show="openShow" src="@/assets/images/open.webp" />
            </div>
          </div>
          <div class="btn">
            <button type="submit">登录</button>
          </div>
          <div class="change-box">
            <div class="toSign" @click="isShow = !isShow">
              <span>去注册</span>
            </div>
          </div>
        </div>
      </form>
      <form action="https://www.hartmore.xyz/php/iphoneLogin.php" method="POST">
        <div class="sign-box" v-show="!isShow">
          <div class="title">XINYUE</div>
          <div class="input">
            <label for="username">邮箱</label>
            <input
              type="text"
              name="username"
              id="sign-user"
              class="username pos"
              :placeholder="placeholder3"
              @focus="placeholderF3"
              @blur="placeholderB3"
            />
          </div>
          <div class="input">
            <label for="userpasswer">密码</label>
            <input
              ref="show1"
              type="password"
              name="password"
              class="pass"
              id="pswt"
              :placeholder="placeholder4"
              @focus="placeholderF4"
              @blur="placeholderB4"
            />
            <div class="show" @click="pass1">
              <img v-show="closeShow" src="@/assets/images/close.webp" />
              <img v-show="openShow" src="@/assets/images/open.webp" />
            </div>
            <!-- <img src="@/assets/images/close.webp" alt="" id="eyetwo" />
            <img src="@/assets/images/open.webp"/> -->
          </div>
          <div class="input">
            <label for="userpasswer">确认密码</label>
            <input
              ref="show2"
              type="password"
              class="repass"
              id="pswte"
              :placeholder="placeholder5"
              @focus="placeholderF5"
              @blur="placeholderB5"
            />
            <div class="show" @click="pass2">
              <img v-show="closeShow1" src="@/assets/images/close.webp" />
              <img v-show="openShow1" src="@/assets/images/open.webp" />
            </div>
            <!-- <img src="@/assets/images/close.webp" alt="" id="eyetwo" />
            <img src="@/assets/images/open.webp"/> -->
          </div>
          <div class="btn">
            <button type="submit">注册</button>
          </div>
          <div class="change-box">
            <div class="toLogin" @click="isShow = !isShow">
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
      openShow: false,
      closeShow: true,
      openShow1: false,
      closeShow1: true,
      placeholder1: "请输入邮箱",
      placeholder2: "请输入密码",
      placeholder3: "请输入邮箱",
      placeholder4: "请输入密码",
      placeholder5: "请再次确认密码",
    };
  },
  methods: {
    placeholderF() {
      if (this.placeholder1 == "请输入邮箱") {
        this.placeholder1 = "";
      }
    },
    placeholderB() {
      this.placeholder1 = "请输入邮箱";
    },
    placeholderF2() {
      if (this.placeholder2 == "请输入密码") {
        this.placeholder2 = "";
      }
    },
    placeholderB2() {
      this.placeholder2 = "请输入密码";
    },
    placeholderF3() {
      if (this.placeholder3 == "请输入邮箱") {
        this.placeholder3 = "";
      }
    },
    placeholderB3() {
      this.placeholder3 = "请输入邮箱";
    },
    placeholderF4() {
      if (this.placeholder4 == "请输入密码") {
        this.placeholder4 = "";
      }
    },
    placeholderB4() {
      this.placeholder4 = "请输入密码";
    },
    placeholderF5() {
      if (this.placeholder5 == "请再次确认密码") {
        this.placeholder5 = "";
      }
    },
    placeholderB5() {
      this.placeholder5 = "请再次确认密码";
    },
    pass() {
      this.closeShow = !this.closeShow;
      this.openShow = !this.openShow;
      if (this.openShow) {
        this.$refs.show.type = "text";
      } else {
        this.$refs.show.type = "password";
      }
    },
    pass1() {
      this.closeShow = !this.closeShow;
      this.openShow = !this.openShow;
      if (this.openShow) {
        this.$refs.show1.type = "text";
      } else {
        this.$refs.show1.type = "password";
      }
    },
    pass2() {
      this.closeShow1 = !this.closeShow1;
      this.openShow1 = !this.openShow1;
      if (this.openShow1) {
        this.$refs.show2.type = "text";
      } else {
        this.$refs.show2.type = "password";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$shadow: rgb(32, 112, 139);
$border: rgb(107, 195, 150);
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
        position: relative;
        label {
          font-size: 1rem;
          margin-right: 15px;
          color: $border;
          font-weight: $bold;
        }
        input {
          outline: none;
          border-radius: 5px;
          border: 1px solid $title;
          border-bottom: 2px $border solid;
          text-indent: 5px;
          margin: 25px 0;
          width: 16rem;
          height: 2rem;
        }
        .show {
          position: absolute;
          width: 30px;
          height: 30px;
          top: 28px;
          right: 35px;
          img {
            margin-top: 6px;
            line-height: 30px;
            width: 25px;
            height: 15px;
          }
        }
      }
      .btn {
        margin-top: 10px;
        width: 200px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
          cursor: pointer;
          width: 60%;
          height: 30%;
          letter-spacing: 8px;
          font-size: 1rem;
          font-weight: $bold;
          color: white;
          outline: none;
          background-color: rgba(234, 99, 50, 0.743);
          border: 1px solid $title;
          border-bottom: 2px solid $border;
          border-radius: 3px;
        }
      }
      .toSign {
        cursor: pointer;
        span {
          border-radius: 3px;
          text-align: center;
          display: block;
          width: 100px;
          height: 25px;
          font-size: 1rem;
          border: 1px solid $title;
          border-bottom: 2px solid $border;
        }
      }
    }
    .sign-box {
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
        width: 21.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        label {
          font-size: 1rem;
          margin-right: 15px;
          color: $border;
          font-weight: $bold;
        }
        input {
          outline: none;
          border-radius: 5px;
          border: 1px solid $title;
          border-bottom: 2px $border solid;
          text-indent: 5px;
          margin: 15px 0;
          width: 16rem;
          height: 2rem;
        }
        .show {
          position: absolute;
          width: 30px;
          height: 30px;
          top: 28px;
          right: 0;
          img {
            margin-top: -1px;
            line-height: 30px;
            width: 25px;
            height: 15px;
          }
        }
      }
      .btn {
        width: 200px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
          cursor: pointer;
          width: 60%;
          height: 40%;
          letter-spacing: 8px;
          font-size: 1rem;
          font-weight: $bold;
          color: white;
          outline: none;
          background-color: rgba(234, 99, 50, 0.743);
          border: 1px solid $title;
          border-bottom: 2px solid $border;
          border-radius: 3px;
        }
      }
      .toLogin {
        cursor: pointer;
        span {
          border-radius: 3px;
          text-align: center;
          display: block;
          width: 100px;
          height: 25px;
          font-size: 1rem;
          border: 1px solid $title;
          border-bottom: 2px solid $border;
        }
      }
    }
  }
}
@media screen and (min-width: 300px) and (max-width: 450px) {
  .container {
    width: 90% !important;
    height: 400px !important;
  }
  .sign-box {
    width: 100%;
  }
  .input {
    width: 17.5rem !important;
    input {
      width: 12rem !important;
    }
  }
  .login-box .input img {
    right: 45px !important;
  }
}
</style>
