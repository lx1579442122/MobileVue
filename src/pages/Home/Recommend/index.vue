<template>
  <div class="xinYue">
    <div class="recommend">最新推荐</div>
    <div class="new w margin">
      <ul id="block">
        <li v-for="(item, index) in newDataTitle" :key="index">
          <div>
            <router-link to="/blog">{{ item.title }}</router-link>
          </div>
          <div>
            <img  :src="'https://www.hartmore.xyz/admin/'+item.picture" @click="blogs(item.id)"/>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import request from "../../../network/request"
export default {
  name: "homeRecommend",
  data() {
    return {
      newDataTitle: [],
      recommend: [],
    };
  },
  methods:{
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
      url: "https://www.hartmore.xyz/php/newRecommend.php",
      method: "get",
      params: {},
    }).then((response) => {
      this.newDataTitle = response.data;
      // console.log(this.newDataTitle);
    });
  },
};
</script>

<style scoped>
.xinYue {
  margin: 1rem 0;
}
.recommend {
  margin: 0 auto;
  width: 50rem;
  height: 3rem;
  background-color: #0d5231;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  line-height: 3rem;
  color: rgb(255, 255, 255);
  letter-spacing: 1rem;
  border-radius: 0.45rem;
}
.new {
  margin: 1rem auto;
  width: 1200px;
}
.new ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 1rem;
  justify-items: center;
  align-items: center;
}
.new ul li {
  position: relative;
  overflow: hidden;
}

.new ul li a{
  color: black;
  font-size: .9rem;
}
.new ul li:hover {
  transform: scale(1.1);
  transition: 0.1s;
}
.new ul li div:first-child{
  text-align: center;
  margin-bottom: 10px;
}
.new ul li div:last-child{
  object-fit: cover;
  width: 16rem;
  height: 9rem;
}
.new ul li div img{
  object-fit: cover;
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
/* js添加最新推荐 小li群border效果 */
.br {
  border: 0.2rem solid teal;
  box-shadow: 10px 5px 5px black;
}
@media screen and (min-width: 300px) and (max-width: 450px) {
  .recommend {
    width: 70%;
  }
  .new {
    width: 100%;
  }
  .new ul {
    grid-template-columns: 1fr;
  }
}
</style>
