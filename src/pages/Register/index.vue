<template>
  <div class="w">
    <user-poppup
      :success="success"
      :timer="this.time"
      :msg="msg"
      v-show="show"
    ></user-poppup>
    <div class="container">
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
            v-model="rgusername"
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
            v-model="rgpassword"
          />
          <div class="show" @click="pass">
            <img v-show="closeShow" src="@/assets/images/close.webp" />
            <img v-show="openShow" src="@/assets/images/open.webp" />
          </div>
        </div>
        <div class="btn">
          <button type="submit" @click="registerSubmit">登录</button>
        </div>
        <div class="change-box">
          <div class="toSign" @click="isShow = !isShow">
            <span>去注册</span>
          </div>
        </div>
      </div>
      <div class="sign-box" v-show="!isShow">
        <div class="passw">
          <span ref="ruo" v-show="ruo">弱</span>
          <span ref="zhong" v-show="zhong">中</span>
          <span ref="qiang" v-show="qiang">强</span>
        </div>
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
            v-model="lgusername"
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
            v-model="lgpassword"
          />
          <div class="show" @click="pass2">
            <img v-show="closeShow1" src="@/assets/images/close.webp" />
            <img v-show="openShow1" src="@/assets/images/open.webp" />
          </div>
          <!-- <img src="@/assets/images/close.webp" alt="" id="eyetwo" />
            <img src="@/assets/images/open.webp"/> -->
        </div>
        <div class="btn">
          <button type="submit" @click="loginSubmit">注册</button>
        </div>
        <div class="change-box">
          <div class="toLogin" @click="isShow = !isShow">
            <span>去登录</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userPoppup from "@/components/Poppup";
export default {
  name: "userRegister",
  components: {
    userPoppup,
  },
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
      rgusername: "",
      rgpassword: "",
      lgusername: "",
      lgpassword: "",
      newData: [],
      success: "",
      time: 0,
      show: false,
      msg: "",
      new: "",
      ruo: false,
      zhong: false,
      qiang: false,
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
    loginSubmit() {
      this.$axios({
        url: "https://www.hartmore.xyz/php/iphoneLogin.php",
        method: "get",
        params: {
          username: this.lgusername,
          password: this.lgpassword,
        },
      }).then((response) => {
        this.new = response.data;
        if (this.new == "注册失败") {
          this.msg = "注册失败！";
          this.show = true;
          this.time = 1;
          setInterval(this.countDown, 1000);
          setTimeout(() => {
            this.$router.go(0);
          }, 1000);
        }
        if (this.new == "注册成功") {
          this.show = true;
          // 登录成功效果书写
          this.msg = "注册成功！";
          this.success = this.newData;
          this.time = 5;
          setInterval(this.countDown, 1000);
          setTimeout(() => {
            this.$router.go(0);
          }, 5000);
        }
        console.log(this.new);
      });
    },
    registerSubmit() {
      this.$axios({
        url: "https://www.hartmore.xyz/php/iphoneRegister.php",
        method: "get",
        params: {
          username: this.rgusername,
          password: this.rgpassword,
        },
      }).then((response) => {
        this.newData = response.data;
        if (this.newData == 0) {
          this.msg = "登陆失败！";
          this.show = true;
          this.time = 1;
          setInterval(this.countDown, 1000);
          setTimeout(() => {
            this.$router.go(0);
          }, 1000);
        } else {
          if (this.rgusername !== "" && this.rgpassword !== "") {
            this.show = true;
            window.sessionStorage.setItem("token", this.newData);
            // 登录成功效果书写
            this.msg = "登陆成功！欢迎你！";
            this.success = this.newData;
            this.time = 3;
            setInterval(this.countDown, 1000);
            setTimeout(() => {
              this.$router.push({ path: "/home" });
              setTimeout(function () {
                window.location.reload();
              }, 100);
            }, 3000);
          }
        }
      });
    },
    countDown: function () {
      this.time--;
    },
  },
  watch: {
    lgpassword: {
      handler: function (newVal) {
        // 是数字
        // let isDigit = /^.*[0-9]+.*/;
        // isLowerCase 小写字母
        // let isLowerCase = /^.*[a-z]+.*/;
        // isUpperCase 大写字母
        // let isUpperCase = /^.*[A-Z]+.*/;
        // 特殊字符
        // let regEx = /^.*[^a-zA-Z0-9]+.*/;
        if (newVal == "") {
           this.show = true
           this.msg = "不能为空！";
        }else{
          this.show = true
          this.msg = "";
        }
      },
    },
    lgusername: {
      handler: function (newVal) {
        if (newVal == "") {
           this.show = true
           this.msg = "不能为空！";
        }else{
          this.show = true
          this.msg = "";
        }
      },
    },
    rgusername: {
      handler: function (newVal) {
        if (newVal == "") {
           this.show = true
           this.msg = "不能为空！";
        }else{
          this.show = true
          this.msg = "";
        }
      },
    },
    rgpassword: {
      handler: function (newVal) {
        if (newVal == "") {
           this.show = true
           this.msg = "不能为空！";
        }else{
          this.show = true
          this.msg = "";
        }
      },
    },
  },
  // watch: {
  //   time: function (newVal) {
  //     if (newVal === 0) {
  //       this.$router.push({ path: "/home" });
  //     }
  //   },
  // },
  // beforeDestroy() {
  //   clearInterval(this.timer);
  // },
  mounted() {
    this.show = true
    this.msg = "不能为空！";
    this.time = ""

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
      .passw {
        width: 100%;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.6rem;
        span {
          border-radius: 5px;
          text-align: center;
          display: block;
          width: 100px;
          margin: 0 3px;
        }
        span:first-child {
          background-color: rgb(251, 0, 0);
        }
        span:nth-child(2) {
          background-color: rgb(2, 145, 254);
        }
        span:last-child {
          background-color: rgb(0, 240, 56);
        }
      }
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
