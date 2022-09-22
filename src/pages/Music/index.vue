<template>
 <div class="xinYue">
  <music-play></music-play>
  <music-list></music-list>
 </div>
</template>

<script>


import musicList from '@/pages/Music/List';
import musicPlay from '@/pages/Music/Play';
export default {
  name: "userMusic",
  components: {
    musicList,
    musicPlay
  },
};
</script>

<style scoped>
.xinYue{
  height: 920px;
}
</style>
