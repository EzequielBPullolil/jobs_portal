<template>
  <div>
    <h1>Job detail</h1>

    <article>
      <header>
        <h4>
          {{ job.title }}
        </h4>
        <span>Minimal Experience: {{ job.minimal_experience }}</span>
      </header>
      <section>
        <p>
          {{ job.description }}
        </p>
      </section>
      <footer>
        email : <span>{{ job.email }}</span>
        <a class="btn btn-green"> Postulate! </a>
      </footer>
    </article>
  </div>
</template>
<script>
export default {
  data () {
    return {
      job: {}
    }
  },
  async created () {
    await this.$axios.get(`/api/jobs/${this.$route.params.id}`)
      .then(response => response.data)
      .then((data) => {
        this.job = data
      })
  }
}
</script>
<style>
.btn {
  display: block;
  background-color: dodgerblue;
  padding: 10px;
  width: 10%;
  margin: auto, 0;
}
.btn:hover {
  background-color: grey;
}

.btn-green {
  background-color: #5F8D4E;
}

.btn-green:hover {
  background-color: #285430;
  transition: background-color 200ms linear;
}
</style>
