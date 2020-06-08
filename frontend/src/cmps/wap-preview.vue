<template>
  <section class="wap-preview ratio-poster">
    <div>{{wap.title}}</div>
    <img :src="wap.imgUrl">
    <!-- <div>{{wap.img}}</div> -->
  </section>
</template>

<script>
import { eventBus } from "../services/eventBus.service.js";
export default {
  props: {
    wap: Object
  }
};
</script>

<style lang="scss" scoped>
img{
  object-fit: fill !important;
}
</style>

    <!-- <img src="http://res.cloudinary.com/omer1234/image/upload/v1585601751/qaoqihi5htn7aaru2osy.png" alt=""> -->
    <!-- <img src="http://res.cloudinary.com/omer1234/image/upload/v1585603162/nhl6kgpigxvw0rfiv8a3.png" alt=""> -->
    <!-- <img src="http://res.cloudinary.com/omer1234/image/upload/v1585603987/pbqmntitqvxzob7mwmrv.png" alt=""> -->
    <!-- <img src="http://res.cloudinary.com/omer1234/image/upload/v1585604699/aodxac0v7mzwtclrgrdo.png" alt=""> -->
   