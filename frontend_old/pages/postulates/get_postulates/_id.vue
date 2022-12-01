<template lang="">
  <div>
    <h1>Job postulates</h1>
    <PostulatePreview v-for="postulate in postulates" :key="postulate.id" :postulate="postulate" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      postulates: []
    }
  },
  async created () {
    await this.$axios.get(`/api/postulates/${this.$route.params.id}`)
      .then(response => response.data)
      .then(data => data.postulates)
      .then((postulates) => { this.postulates = postulates })
  }
}
</script>
