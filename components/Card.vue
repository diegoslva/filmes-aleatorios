<template>
  <div class="card">
    <img
      class="card__image"
      src="https://m.media-amazon.com/images/M/MV5BNzNhZjQyMTEtNDAxNi00YmRkLWIzMTMtZTA0MzQzODkwZjc5XkEyXkFqcGdeQXVyOTY2MzYwMTc@._V1_.jpg"
      alt
    />
    <div class="card-content">
      <a href="#" class="card-content__title">Avenger: End Game</a>
      <div class="year">2019</div>
      <div class="gender">Marvel</div>
      <div class="rating">10/10</div>
    </div>
  </div>
</template>


<style lang="sass">
.card
  background: #000
  border-radius: 10px
  position: relative
  overflow: hidden

  &__image
    width: 100%
    height: 100%

  .card-head
    grid-row: 1
    position: relative
    background-size: cover
    background-repeat: no-repeat
    a
      display: block
      height: 100%
      width: 100%
      .material-icons
        color: #fff
        font-size: 45px
        animation: icon-latido 0.5s infinite

  .card-content
    padding: 10px
    grid-row: 2
    color: #fff
    display: grid
    grid-template-columns: 70% auto

    &__title
      display: block
      font-size: 18px
      text-decoration: none
      color: #e0086a
      font-weight: 600
    .year, .gender
      font-size: 11px

    .year, .rating
      text-align: right

    &:hover
      grid-row: 1/2
</style>





