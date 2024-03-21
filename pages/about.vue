<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto beatae, consequatur dignissimos distinctio eum, ex explicabo, ipsum non nostrum nulla odio pariatur qui rem voluptate. Ipsam numquam velit veritatis!
    </p>
    <div>
      {{data}}
    </div>
  </div>
</template>

<script setup>
  const { data } = await useFetch('/api/currency/GBP')
</script>

<style  scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
</style>