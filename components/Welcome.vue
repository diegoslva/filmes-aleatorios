<template>
  <div style="height: 100vh;background-color: #080808;">
    <Loading @loading="getStateLoading()" v-show="state.isLoading" />

    <MainMovie v-show="!state.isLoading && state.isMovie" :item="data.movie">
      <ButtonLoadingMovie />
    </MainMovie>

    <WelcomeDisclaimer v-show="!state.isMovie">
      <ButtonLoadingMovie />
    </WelcomeDisclaimer>
  </div>
</template>

<script>
import ButtonLoadingMovie from "~/components/ButtonLoadingMovie.vue";
import WelcomeDisclaimer from "~/components/WelcomeDisclaimer.vue";
import MainMovie from "~/components/MainMovie.vue";
import Loading from "~/components/Loading.vue";
export default {
  components: {
    ButtonLoadingMovie,
    WelcomeDisclaimer,
    MainMovie,
    Loading
  },
  data() {
    return {
      state: {
        isLoading: false,
        isMovie: false
      },
      data: {
        movie: []
      }
    };
  },

  mounted() {
    this.$root.$on("isLoading", data => {
      this.state.isLoading = data;
    });
    this.$root.$on("movieItem", payload => {
      this.state.isMovie = payload.state;
      this.data.movie = payload.data;
    });
  },
  methods: {
    getStateLoading() {
      this.eventHub.$on("update", data => {
        this.isLoading = data.isLoading;
      });
    }
  }
};
</script>



<style lang='sass'>
.welcome-wrapper
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: center
  height: 90vh
  text-align: center

.welcome
  &__content
    padding: 0 15px
    @media(min-width: 1000px)
      width: 50%
    .btn-primary
      margin: 30px auto auto
  &__title
    font-size: #{'min(2.5em, 9vw)'}
    font-weight: 600
  &__description
    font-size: #{'min(1.2em, 5vw)'}
    margin: 22px 0
    color: #9383a1

.providers-list
  width: 100%
  display: flex
  flex-wrap: wrap
  justify-content: center
  border-top: 1px solid #22172b
  padding-top: 25px
  &__title
    width: 100%
    text-align: center
    margin-bottom: 20px
    font-weight: 700
    color: white
  img
    width: 50px
    margin: 0 10px
</style>
