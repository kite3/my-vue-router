<template>
  <div>
    about
    <router-view></router-view>
    <br />
    <router-link to="/about/one">child one</router-link>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/about/two">child two</router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
