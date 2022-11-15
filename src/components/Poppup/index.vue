<template>
    <div>
        <i class="iconfont icon-gou1"></i>
        {{msg}}
        <p>{{success}}</p>
        <p >{{timer}}</p>
    </div>
</template>
<script>
export default {
  name: "userPoppup",
  data() {
    return {
        
    }
  },

  props:['success','timer','msg']
}
</script>
<style scoped lang="scss">
div{
    padding: 5px 0;
    position: absolute;
    text-align: center;
    width: 200px;
    top: 5rem;
    right: 8rem;
    font-size: 1rem;
    background-color: rgba(83, 166, 146, 0.5);
    border-radius: 5px;
    i{
        color: rgb(0, 137, 96);
    }
}
</style>