<template lang="">
  <div>
    <h2>{{ postulate.email }}</h2>
  </div>
</template>
<script>
export default {
  props: {
    postulate: {
      type: {},
      default () {
        return { email: '', message: '' }
      }
    }
  }
}
</script>
<style lang="">

</style>
