<template>
  <div class="welcome-wrapper">
    <div class="welcome-figure">
      <img src="providers.svg" alt />
    </div>
    <div class="welcome__content">
      <p class="welcome__title">Use o randomizador abaixo para encontrar algo para assistir.</p>
      <p
        class="welcome__description"
      >Vamos escolher um filme aleatoriamente para que você não perca muito tempo nessa tarefa</p>
      <slot></slot>
    </div>

    <div class="providers-list">
      <p class="providers-list__title">Titulos disponíveis em suas devidas plataformas</p>
      <!-- <a data-id="netflix" href="/source/netflix"> -->
      <a data-id="netflix" href="#">
        <div class="css-tyogit e11eoopx0">
          <img src="netflix.svg" alt="netflix" />
        </div>
      </a>
      <!-- <a data-id="amazon_prime" href="/source/amazon"> -->
      <a data-id="amazon_prime" href="#">
        <div class="css-tyogit e11eoopx0">
          <img src="amazon_prime.svg" alt="amazon_prime" />
        </div>
      </a>
      <!-- <a data-id="hbo" href="/source/hbo"> -->
      <a data-id="hbo" href="#">
        <div class="css-tyogit e11eoopx0">
          <img src="hbo.svg" alt="hbo" />
        </div>
      </a>
      <!-- <a class="css-k008qs" href="/sitemap/services"> -->
      <a class="css-k008qs" href="#">
        <span class="css-3yt47t e54d7gn2">+ outros</span>
      </a>
    </div>
  </div>
</template>

