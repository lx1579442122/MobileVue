<template>
  <div>
    <div class="list">
      <div class="list-con">
        <ul></ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name:"musicList",
};
</script>

<style scoped>
.list-con {
  position: absolute;
  top: 15%;
  left: 76%;
  width: 9rem;
  height: 35rem;
  background: linear-gradient(80deg, #dd8561f4, #71cba9dc);
  font-family: "宋体";
  font-size: 1.1rem;
  color: #2c606d;
  border-radius: 8px;
  animation: bounceInLeft 1.5s linear;
  padding: 10px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.564);
  overflow: auto;
}

.list-con ul li {
  display: flex;
  flex-direction: column;
  justify-content: column;
  align-items: center;
  width: 100%;
  height: 30px;
  color: white;
  transition: all 0.2s;
  border-radius: 5px;
  cursor: pointer;
  font-size: 10px;
  line-height: 30px;
}
.list-con ul li:hover {
  text-shadow: 1px 1px 2px rgb(241, 205, 205);
  background-color: rgb(245, 213, 213);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.564);
}
.list-style {
  text-shadow: 1px 1px 2px rgb(241, 205, 205);
  background-color: rgb(188, 94, 94);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.564);
}
</style>
