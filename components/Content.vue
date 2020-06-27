<template>
  <div class="container">
    <div class="page-content">
      <section class="site-explanation">
        <h2 class="site-explanation__title">Não sabe o que ver na Netflix?</h2>
        <p
          class="site-explanation__content"
        >Se você está se perguntando qual filme ou programa de TV deve assistir a seguir - Fica pulando de titulo em titulo e passa mais tempo escolhendo algo do que assistindo ? Bom tambem já passei por isso e te entendo.</p>
        <p class="site-explanation__content">
          A ideia aqui é te ajudar. clique em sugestão e vamos esolhe um filme aleatorio com uma boas avaliações. Avaliações feitas por pessoas comuns, assim como nós.
          Assim filtramos o joio do trigo e voce assiste algo sem perder tempo esolhendo muito.
        </p>
      </section>

      <section class="site-explanation">
        <h2 class="site-explanation__title">E como funciona?</h2>
        <p
          class="site-explanation__content"
        >Use o botão do randomizador. Assim podemos sugerir uma opção entre diversos filmes pré definidos por nós para escolher algo que não seja tão obvio mas que não seja um filme ruim. Em Breve vamos adicionar mais opções como filtro por genero ano, etc..</p>
      </section>

      <section class="site-explanation">
        <ul class="site-explanation__list">
          <li title="filtro para essa sessão em breve">Sugestão filmes de comédia</li>
          <li title="filtro para essa sessão em breve">Sugestão filmes de terror</li>
          <li title="filtro para essa sessão em breve">Sugestões filmes de suspense</li>
          <li title="filtro para essa sessão em breve">sugestão filmes de ação</li>
          <li title="filtro para essa sessão em breve">sugestão filmes de terror netflix</li>
        </ul>
        <ul class="site-explanation__list">
          <li title="filtro para essa sessão em breve">sugestoes filmes amazon</li>
          <li title="filtro para essa sessão em breve">sugestão filme ação amazon</li>
          <li title="filtro para essa sessão em breve">sugestões filmes de terror amazon</li>
          <li title="filtro para essa sessão em breve">sugestões filmes de comedia amazon</li>
          <li title="filtro para essa sessão em breve">sugestões filmes de suspense amazon</li>
        </ul>
        <ul class="site-explanation__list">
          <li title="filtro para essa sessão em breve">sugestoes filmes Netflix</li>
          <li title="filtro para essa sessão em breve">sugestão filme ação Netflix</li>
          <li title="filtro para essa sessão em breve">sugestões filmes de terror Netflix</li>
          <li title="filtro para essa sessão em breve">sugestões filmes de comedia Netflix</li>
          <li title="filtro para essa sessão em breve">sugestões filmes de suspense Netflix</li>
        </ul>
      </section>

      <section class="site-presentation" style="text-align: center;">
        <h2
          class="site-presentation__title"
        >Sugestão de filmes online - Assistir filmes - Filmes online</h2>O site é apenas uma forma de facilitar a escolha de um
        <strong>filme</strong> ou
        <strong>series!</strong>
        O nosso site não armazena filmes e series, por isso apenas utilizamos um banco de dados
        com todos os filmes e disponibilizamos para a plataforma de stream que contem o diretio de exibição do conteudo. A distribuição de filmes é da parte de plataformas como
        <strong>Netflix</strong> e entre outros. Qualquer violação de direitos autorais, entre em contato com o distribuidor.
        Em caso de dúvidas ou reclamações sobre conteúdo, funcionalidade do site, anúncios entre outros, entre em contato com a equipe de suporte do vizer.
      </section>
    </div>
  </div>
</template>

<style lang='sass'>
.page-content
  color: white
  max-width: 80%
  margin: 2em auto
  @media (max-width: 800px)
    max-width: 95%
    margin-top: 9em

.site-presentation
  font-size: 14px
  margin-top: 10em

.site-explanation
  margin-top: 20px
  display: flex
  flex-wrap: wrap
  align-items: flex-start
  &__title
    width: 100%
    margin-bottom: 15px
  &__content
    color: #aea6b5
  &__list
    width: calc(100% / var(--items, 3))
    padding: 20px
    color: #cac0d4
    font-size: 14px
    font-weight: 600
    @media(max-width: 600px)
      --items: 1
    li
      margin-bottom: 10px

.site-presentation__title
  text-transform: uppercase
  margin-bottom: 20px
</style>
