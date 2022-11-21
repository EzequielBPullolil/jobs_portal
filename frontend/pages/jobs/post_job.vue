<template>
  <div>
    <h1>postjob home</h1>
    <span>{{ status }}</span>
    <section class="form-wrapper center">
      <form @submit.prevent="PostJob">
        <div class="input-row">
          <label for="title">
            Title
            <input id="title" :value="title" type="text" name="title" placeholder="Junior dev...">
          </label>
          <label for="experience">
            Minimal experience
            <input id="experience" :value="minimal_experience" type="number" min="0" name="minimal_experience">
          </label>
        </div>
        <div class="input-row">
          <label for="email">
            Email
            <input id="email" :value="email" type="email" name="email">
          </label>
        </div>

        <section>
          <label class="description" for="description">
            Description:
          </label>
          <textarea id="description" :value="description" class="post-description" name="description" />
        </section>
        <input type="submit" value="Post job">
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      email: '',
      description: '',
      minimal_experience: 0,
      status: ''
    }
  },
  methods: {
    async PostJob () {
      await this.$axios.post('/api/jobs', {
        title: this.title,
        email: this.email,
        description: this.description,
        minimal_experience: this.minimal_experience
      })
        .then(response => response.data)
        .then((data) => { this.status = data.status })
        .catch((err) => { this.status = err })
    }
  }
}
</script>
<style>
.center {
  margin: auto;
  width: 80%;
  padding: 10px;
}

.form-wrapper {
  height: 90vh;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: auto auto;
  background-color: #404258;
}

.form-container>input-row {
  grid-column: col / span 2;
  grid-row: row;
}

.post-description {
  width: 90%;
  height: 70vh;
}
</style>
