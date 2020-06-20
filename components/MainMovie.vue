<template>
  <div>
    <div
      class="featured-movie__backdrop-blur"
      v-bind:style="{ backgroundImage: getCover(item.backdrop_path) }"
    ></div>
    <div class="featured-movie-wrapper">
      <div class="featured-movie">
        <figure class="featured-movie__image">
          <img :src="getPoster(item.poster_path)" alt />
        </figure>

        <div class="featured-movie__content">
          <div class="featured-movie__tite">{{item.title}}</div>
          <!-- <div class="featured-movie__facts">
            <span class="certification">TV-MA</span>

            <span class="genres">
              {{getGenre(item.genre_ids)}}
              <a href="/genre/80-crime/tv">Crime</a>,&nbsp;
              <a href="/genre/18-drama/tv">Drama</a>
            </span>

            <span class="runtime">43m</span>
          </div>-->
          <div class="featured-movie__reviews">
            <span class="featured-movie__reviews--numbers">{{ formatAverage(item.vote_average) }}</span>
            Gostaram desse filme
          </div>
          <div class="featured-movie__description">
            <p>{{item.overview}}</p>
          </div>

          <!-- <div class="featured-movie__provider">
            <img src="https://images.justwatch.com/icon/52449861/s100" alt="Netflix" />
            <a href="#">
              <span>Disponível</span>
              <br />Assistir agora
            </a>
          </div>-->
        </div>
      </div>
      <div class="column">
        <p style="width: 100%;margin-bottom: 20px;text-align: center">Já assistiu esse filme?</p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: ""

    // backdrop_path:null
    // genre_ids:Array[2]
    // id:24675
    // overview:""
    // popularity:4.283
    // poster_path:"/2YyasmVeayH4DH0BfaeYsT06D6k.jpg"
    // release_date:"2003-02-09"
    // title:"Beyond"
    // video:false
    // vote_average:7.4
    // vote_count:59
  },

  methods: {
    formatAverage(value) {
      var result = Math.round((value / 10) * 100);
      return result + "%";
    },
    getPoster(image) {
      return `https://image.tmdb.org/t/p/w500/${image}`;
    },
    getCover(image) {
      return `url(https://image.tmdb.org/t/p/original/${image})`;
    }
  }
};
</script>





<style lang='sass'>
.featured-movie-wrapper
  display: grid
  grid-template-columns: minmax(14rem, 2fr) 1fr
  height: 80vh
  position: relative
  max-width: 85%
  z-index: 5
  margin: 0 auto
  .btn-primary
    margin: 0 auto

.featured-movie
  display: grid
  grid-template-columns: 1fr 2fr
  align-content: center
  &__content
    padding-left: 20px
  &__image
    max-width: 230px
    margin: 0 auto
    img
      border-radius: 5px
      width: 100%
      height: auto
  &__tite
    font-size: 2.5em
    font-weight: 700
    margin-bottom: 10px
  &__review
    margin: 20px 0
  &__description
    font-size: 15px
    margin-right: 20px
    font-weight: 400
    color: #bcbabd
    line-height: 24px
    margin-top: 20px
  &__provider
    margin-top: 20px
    display: flex
    color: white
    font-weight: 700
    span
      font-size: 13px
      letter-spacing: 1px
    img
      width: 40px
      height: auto
      border-radius: 6px
      vertical-align: middle
      margin-right: 5px
  &__facts
    .certification
      display: inline-flex
      padding: 1px 8px
      border: 1px solid rgba(210, 210, 210, 0.6)
      border-radius: 2px
      margin-right: 7px
      font-size: 15px

.column
  display: flex
  flex-wrap: wrap
  align-items: center
  align-content: center
  text-align: center

.featured-movie__cover

.featured-movie__backdrop-blur
  background-size: cover
  background-repeat: no-repeat
  position: absolute
  top: 0
  width: 100%
  height: 100%
  z-index: 1
  &:after
    content: ''
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: #00000094
    z-index: 3
  &:before
    z-index: 2
    content: ""
    display: block
    position: absolute
    z-index: 0
    pointer-events: none
    width: 100%
    top: 0
    left: 50%
    -webkit-transform: translateX(-50%)
    transform: translateX(-50%)
    height: 100%
    background-repeat: no-repeat
    background: linear-gradient(90deg,#121212,rgba(18,18,18,.985) 1%,rgba(18,18,18,.945) 2.2%,rgba(18,18,18,.883) 3.3%,rgba(18,18,18,.803) 4.6%,rgba(18,18,18,.71) 6%,rgba(18,18,18,.609) 7.4%,rgba(18,18,18,.503) 8.8%,rgba(18,18,18,.397) 10.2%,rgba(18,18,18,.295) 11.5%,rgba(18,18,18,.202) 12.8%,rgba(18,18,18,.122) 14%,rgba(18,18,18,.058) 15%,rgba(18,18,18,.016) 16%,rgba(18,18,18,0) 16.6%,rgba(18,18,18,0) 83.4%,rgba(18,18,18,.016) 84%,rgba(18,18,18,.058) 85%,rgba(18,18,18,.122) 86%,rgba(18,18,18,.202) 87.2%,rgba(18,18,18,.295) 88.5%,rgba(18,18,18,.397) 89.8%,rgba(18,18,18,.503) 91.2%,rgba(18,18,18,.609) 92.6%,rgba(18,18,18,.71) 94%,rgba(18,18,18,.803) 95.4%,rgba(18,18,18,.883) 96.7%,rgba(18,18,18,.945) 97.8%,rgba(18,18,18,.985) 99%,#121212),linear-gradient(0deg,#121212,#121212 21.4%,rgba(18,18,18,.985) 23.6%,rgba(18,18,18,.945) 26.1%,rgba(18,18,18,.883) 28.8%,rgba(18,18,18,.803) 31.7%,rgba(18,18,18,.71) 34.7%,rgba(18,18,18,.609) 37.8%,rgba(18,18,18,.503) 41%,rgba(18,18,18,.397) 44%,rgba(18,18,18,.295) 47%,rgba(18,18,18,.202) 49.9%,rgba(18,18,18,.122) 52.5%,rgba(18,18,18,.058) 54.8%,rgba(18,18,18,.016) 56.8%,rgba(18,18,18,0) 58.5%)
</style>
