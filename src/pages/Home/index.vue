<template>
  <div>
    <home-banner></home-banner>
    <home-recommend></home-recommend>
    <home-blog></home-blog>
    <home-list></home-list>
  </div>
</template>

<script>
import homeRecommend from "@/pages/Home/Recommend";
import homeBanner from "@/pages/Home/Banner";
import homeBlog from '@/pages/Home/Blog';
import homeList from '@/pages/Home/List';
export default {
  name: "userHome",
  components: {
    homeRecommend,
    homeBanner,
    homeBlog,
    homeList
  },
};
</script>

<style scoped>

</style>
