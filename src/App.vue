<template>
  <div>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/okr">OKR</router-link> ""
      <router-link to="/login">..<router-link>
    </nav> -->
    <TheNavigation />
    <router-view/>
    <TheFooter/>
  </div>
</template>

<script>
import TheNavigation from "../src/components/TheNavigation.vue";
import TheFooter from "../src/components/TheFooter.vue";
export default {
  components: {
    TheNavigation,
    TheFooter,
  }
}
</script>

