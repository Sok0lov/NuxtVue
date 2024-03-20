<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/products">Nuxt menu Merch</NuxtLink>
      </nav>
    </header>

    <!-- вывод контента страницы -->
    <div>
      <slot />
    </div>

    <footer>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </footer>

  </div>
</template>

<script setup>

</script>

<style  scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>