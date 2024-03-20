<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facilis officiis possimus. Amet aperiam assumenda at distinctio dolore esse in maxime odit, praesentium provident quam quia rerum sed veritatis voluptate.</p>
  </div>
</template>

<script setup>
  const { id } = useRoute().params

  definePageMeta({
    layout: 'products'
  })
</script>

<style scoped>

</style>