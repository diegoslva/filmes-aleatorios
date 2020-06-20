<template>
  <section class="section-person">
    <div clas="container">
      <h2>Celebridades mais assistidas da semana</h2>
      <div class="grid-person">
        <Avatar
          v-for="(person, key) in results"
          v-bind:key="key"
          :name="person.name"
          :id="person.id"
          :src="person.profile_path"
          :count="key + 1"
        />
      </div>
    </div>
  </section>
</template>
<script>
import Avatar from "~/components/Avatar.vue";

export default {
  components: {
    Avatar
  },
  data() {
    return {
      results: {},
      params: {
        url: "trending/person/week?"
      }
    };
  },
  mounted() {
    this.asyncData(this.params);
  },
  methods: {
    async asyncData(params) {
      const { data } = await this.$http.get(
        `${this.$BASE_URL}${params.url}/${this.$API_LANG}`
      );
      return (this.results = data.results);
    }
  }
};
</script>

<style>
.section-person {
  margin: 3em 0;
}
.grid-person {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  margin: 20px 0;
}
svg {
  fill: white;
}
</style>
