<template>
  <div class="error">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "error.vue"
    }
</script>

<style scoped>
  .error{
    background: #ff0039;
    color: white;
    margin: 8px;
    padding: 8px;
  }

  strong{
    font-size: 130%;
  }
</style>