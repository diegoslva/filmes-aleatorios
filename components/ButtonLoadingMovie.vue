<template>
  <button class="btn-primary" @click.prevent="handlerRandomMovies">Sugerir outra coisa</button>
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
      page: "",
      max: 500,
      results: [],
      movie: [],
      params: {
        url: `discover/movie/?${this.$API_LANG}&certification_country=BR`,
        network: 213,
        sort_by: "sort_by=populatiry.asc",
        vote_count: "vote_count.gte=50",
        vote_count_lte: "vote_count.lte=500"
      }
    };
  },
  methods: {
    RandomPage(max) {
      this.page = Math.floor(Math.random() * max);
      return this.page;
    },
    async handlerRandomMovies() {
      this.$root.$emit("isLoading", true);

      this.RandomPage(this.max);

      const { data } = await this.$http.get(
        `${this.$BASE_URL}${this.params.url}&network=${this.params.network}&${this.params.sort_by}&${this.params.vote_count}&${this.params.vote_count_lte}&page=${this.page}`
      );

      this.results = data.results;
      this.SelectTheMovie(this.results);
    },

    SelectTheMovie(list) {
      const random = Math.floor(Math.random() * list.length);
      this.movie = list[random];

      // setState and data <mainMovie>
      this.$root.$emit("isLoading", false);

      const dataMovie = {
        data: this.movie,
        state: true
      };
      this.$root.$emit("movieItem", dataMovie);
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





