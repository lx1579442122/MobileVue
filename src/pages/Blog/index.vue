<template>
  <div>
    <div style="margin-top: 5rem">我是博客页</div>
    <div>{{ params }}</div>
    <div>{{newData[0]}}</div>
    <!-- <div>{{newData[1]}}</div> -->
    <!-- <div>{{newData[2]}}</div> -->
    <div>{{newData[3]}}</div>
  </div>
</template>

<script>
export default {
  name: "userBlog",
  data() {
    return {
      params: "",
      newData: [],
    };
  },
  mounted() {
    this.params = JSON.parse(this.$base64.decode(this.$route.query.id));
    this.$axios({
      url: "https://www.hartmore.xyz/php/blogshow.php",
      method: "POST",
      params: {
        id: this.params,
      },
    }).then((response) => {
      this.newData = response.data.split(',');
    });
  },
};
</script>

<style></style>
