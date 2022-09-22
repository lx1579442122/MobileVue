<template>
  <!-- footer start -->
  <div class="footer">
    <div class="bd">
      <div class="tp">
        <ul>
          <li>
            <img
              class="scroll-con-img"
              loading="lazy"
              src="./images/gongzhonghao.webp"
              alt=""
            />
          </li>
          <li>
            <div>
              <a href="#">
                <h2>联系我</h2>
              </a>
              <div class="wrap">
                <div>QQ邮箱: <a href="#">1579442122 @qq.com</a></div>
                <div>Github: <a href="#">lx1579442122</a></div>
              </div>
            </div>
          </li>
          <li>
            <div class="com">
              <h2>网站简介</h2>
              <span>
                心悦是一个动漫分享平台,分享动漫资源、资讯、动漫美图壁纸、音乐和cosplay资源的小站，阿宅们快到碗里来ヽ(✿ﾟ▽ﾟ)ノ如果有什么不理解的或是对本站的建议,可以在留言区给我留言(注：本站大部分素材来源于网络，如有侵权，QQ联系删除)
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div class="bm">
        <p style="text-align: center; height: 35px">
          <span>本站非商用,以展示我的个人分享为主</span>
        </p>
        <div style="text-align: center; color: white"></div>
        <p style="text-align: center; height: 30px">
          <a style="color: white" href="https://www.hartmore.xyz/index.php">
            ©2022&nbsp;www.hartmore.xyz
          </a>
        </p>

        <div class="bei">
          <img src="./images/备案图标.webp" alt="" />
          <span class="beian">滇公网安备 53062502000130号</span>
          <span class="beian media">滇ICP备2022001646号</span>
        </div>
      </div>
    </div>
  </div>
  <!-- footer end -->
</template>

<script>
export default {
  name: "userFooter",
};
</script>

<style scoped>
.footer {
  margin: 0 auto;
  bottom: 0;
  width: 99vw;
  height: 22rem;
  background: linear-gradient(200deg, #f89090 0%, #fec08adf 100%);
  /* background-color: rgba(10, 72, 111, 0.453); */
  font-size: 1.2rem;
  border-radius: 8px;
}
.bd {
  position: absolute; 
  left: 50%;
  transform: translateX(-50%);
  width: 95rem;
  z-index: 9999;
}
.tp {
  padding-top: 3rem;
  height: 12rem;
  color: white;
}
.tp ul {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
}

.tp ul li {
  text-align: center;
  padding: 1rem 1.5rem;
  border-left: 2px solid teal;
}
.tp ul li:nth-child(1) {
  border-left: none;
  flex: 1;
}
.tp ul li:nth-child(2) {
  flex: 3;
}
.tp ul li:nth-child(3) {
  flex: 6;
}
.tp ul li a,
.bm span {
  color: white;
}
.tp ul li:nth-child(1) img {
  border-radius: 5px;
}
.com h2,
.tp ul li:nth-child(2) a h2 {
  margin-top: -1rem;
  margin-bottom: 1rem;
}
.bm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  line-height: 2.8rem;
}
.bei {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bei span{
  margin-left: 15px;
}
</style>
