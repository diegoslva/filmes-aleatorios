<template>
  <div clas="container">
    <div class="section-description">Uma lista basica com top filmes</div>
    <h2>TOP FILMES</h2>
    <div class="grid-movies">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>
<script>
import Card from "~/components/Card.vue";

export default {
  components: {
    Card
  }
};
</script>

<style>
.grid-movies {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(350px, auto);
}
svg {
  fill: white;
}

.logo-site span {
  display: block;
  margin-top: 20px;
  font-size: 20px;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
