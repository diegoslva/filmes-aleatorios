<template>
  <div>
    <div class="container">
      <Logo />
    </div>

    <Welcome />

    <div class="container">
      <!-- <TrendingPerson />
      <TrendingMovie />

      <TopRated />-->
      <Content />
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

import Content from "~/components/Content.vue";
import TopRated from "~/components/TopRated.vue";
import TrendingPerson from "~/components/TrendingPerson.vue";
import TrendingMovie from "~/components/TrendingMovie.vue";
import Welcome from "~/components/Welcome.vue";

export default {
  components: {
    Logo,
    Content,
    TrendingPerson,
    TrendingMovie,
    TopRated,
    Welcome
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
