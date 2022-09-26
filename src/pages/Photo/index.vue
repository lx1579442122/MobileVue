<template>
  <div>
    <photo-rotate></photo-rotate>
    <photo-shutter></photo-shutter>
  </div>
</template>

<script>

import photoRotate from '@/pages/Photo/Rotate';
import photoShutter from '@/pages/Photo/Shutter';
export default {
 name:'userPhoto',
 components:{
  photoRotate,
  photoShutter
 }
}
</script>

<style>

</style>