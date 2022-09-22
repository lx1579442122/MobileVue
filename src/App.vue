<template>
  <div class="xinYue">
    <user-header></user-header>
    <router-view></router-view>
    <user-footer v-show="$route.meta.show"></user-footer>
  </div>
</template>

<script>
import userHeader from "./components/Header/userHeader";
import userFooter from "./components/Footer/userFooter";

export default {
  name: "App",
  components: {
    userHeader,
    userFooter,
  },
};
</script>

<style>
body{
  /* background:#f4baa7a5; */
  
}
.xinYue {
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(200deg, #f54982 0%, #26e4ca 100%);
 border-radius: 5px;
  height: 2rem;
}
html {
  overflow-y: scroll;
}

:root {
  overflow-y: auto;
  overflow-x: hidden;
}

:root body {
  position: absolute;
}

body {
  width: 100vw;
  overflow: hidden;
}
</style>
