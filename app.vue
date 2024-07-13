<template>
 <nav class="topNav bg-white shadow-md px-2 py-3 z-10">
  <div class="topNav__container container mx-auto flex justify-between items-center">
    <section class="topNav__container__section flex justify-center items-center">
      <NuxtLink class="topNav__container__section__link" to="/">
        <img class="topNav__container__section__link--img" src="/logo.svg" alt="logo">
      </NuxtLink>
    </section>
    <section class="topNav__container__section flex justify-centrer items-center">
      <button class="px-4 items-center flex" @click="isOpen = !isOpen">
        <UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="Avatar"
        />
        <h2 class="ml-2">使用者</h2>
      </button>
    </section>
  </div>
 </nav>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// nav 手機版是否打開
const isOpen = useState('navOpen', () => ref(true));
</script>

<style lang="scss">
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>