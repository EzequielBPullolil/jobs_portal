<template>
  <section>
    <form @submit.prevent="sendPostulate">
      <input id="" v-model="email" type="email" name="">
      <!-- <input id="" type="file" name="" @change="handleFile"> <br> -->
      <textarea id="" v-model="message" name="" cols="30" rows="10" />
      <input type="submit" value="Postulate!">
    </form>
  </section>
</template>
<script>
export default {
  data () {
    return {
      email: '',
      message: '',
      cv: 'test'
    }
  },
  methods: {
    handleFile (e) {
      const files = e.target.files || e.dataTransfer.files
      this.cv = files

      // eslint-disable-next-line no-console
      console.log(this)
    },
    async sendPostulate () {
      await this.$axios.post(`/api/postulates/${this.$route.params.id}`, {
        email: this.email,
        message: this.message,
        jobId: this.$route.params.id,
        cv: this.cv
      })
        .then(response => response.data)
        .then((data) => { this.status = data.status })
        .catch((err) => { this.status = err })
    }
  }
}
</script>
