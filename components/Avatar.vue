<template>
  <div class="card-avatar">
    <div class="card-avatar__counter" v-bind:class="this.countClass">{{count}}</div>
    <figure class="card-avatar__figure">
      <img class="card-avatar__image" :src="getImageAvatar(id, src)" :alt="name" />
    </figure>
    <a href="#" class="card-avatar__name">{{name}}</a>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    id: Number,
    src: String,
    count: Number
  },
  data() {
    return {
      image: "",
      countClass: ""
    };
  },
  methods: {
    getImageAvatar(params, path_url) {
      return `https://image.tmdb.org/t/p/original/${path_url}`;
    }
  }
};
</script>


<style lang="sass">
.card-avatar
  position: relative
  text-align: center
  position: relative
  padding-left: 60px
  &__figure
    width: 130px
    height: 130px
    border-radius: 100px
    overflow: hidden
  &__name
    color: white
    font-weight: 600
    font-size: 1.3em
    margin-top: 1em
    display: block
  &__image
    width: 100%
    height: auto
  &__counter
    color: #201827
    font-weight: 700
    position: absolute
    left: 10px
    font-size: 7em
    z-index: -1
    bottom: 27px
    direction: rtl
    max-width: 80px
</style>





