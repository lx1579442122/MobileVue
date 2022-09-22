<template>
  <div class="xinYue">
    <div class="recommend">最新推荐</div>
    <div class="new w margin">
      <ul id="block">
        <li>
          <div><router-link to="/blog">xinyue</router-link></div>
          <img loading="lazy" src="./images/dis1.webp" />
        </li>
        <li>
          <div><router-link to="/blog">xinyue</router-link></div>
          <img loading="lazy" src="./images/dis2.webp" />
        </li>
        <li>
          <div><router-link to="/blog">xinyue</router-link></div>
          <img loading="lazy" src="./images/dis3.webp" />
        </li>
        <li>
          <div><router-link to="/blog">xinyue</router-link></div>
          <img loading="lazy" src="./images/dis4.webp" />
        </li>
        <li>
          <div><router-link to="/blog">xinyue</router-link></div>
          <img loading="lazy" src="./images/dis5.webp" />
        </li>
        <li>
          <div><router-link to="/blog">xinyue</router-link></div>
          <img loading="lazy" src="./images/dis6.webp" />
        </li>
        <li>
          <div><router-link to="/blog">xinyue</router-link></div>
          <img loading="lazy" src="./images/dis7.webp" />
        </li>
        <li>
          <div><router-link to="/blog">xinyue</router-link></div>
          <img loading="lazy" src="./images/dis8.webp" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeRecommend",
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
  margin: 0 auto;
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
  border-radius: 0.4rem;
  overflow: hidden;
  height: 10rem;
}
.new ul li:hover {
  transform: scale(1.05);
  transition: 0.1s;
}
.new ul li img {
  object-fit: cover;
  width: 16rem;
  height: 100%;
}
/* js添加最新推荐 小li群border效果 */
.br {
  border: 0.2rem solid teal;
  box-shadow: 10px 5px 5px black;
}
@media screen and (min-width: 300px) and (max-width: 450px) {
  .recommend{
    width: 70%;
  }
  .new{
    width: 100%;
  }
  .new ul{
    grid-template-columns: 1fr;
  }
 
  
}

</style>
