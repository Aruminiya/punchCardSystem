<template>
  <div class="sideNav container grid grid-cols-12 gap-4 sm:h-full mx-auto">
    <div class="sideNav__col col-span-12 sm:col-span-3 bg-white h-full shadow-md pt-12 sm:block mb-12"
      :class="{ hidden: isOpen}"
    >
      <template
        v-for="link in TempLinks"
        :key="link.path"
      >
        <section class="sideNav__col__section mb-5"> 
          <NuxtLink class="sideNav__col__section__link"
            :to="link.path" @click="setActiveLink(link.path)"
          >
            <div class="sideNav__col__section__link__content flex items-center px-6 py-1">
              <UIcon class="sideNav__col__section__link__content--icon mr-1" :name="link.icon" />
              <h2 class="sideNav__col__section__link__content--name">{{ link.name }}</h2>
            </div>
          </NuxtLink>
          <div class="sideNav__col__section__childLink pl-11" v-if="activeLink === link.path && link.child.length > 0">
            <template v-for="child in link.child" :key="child.path">
              <NuxtLink class="sideNav__col__section__childLink--link" :to="child.path">
                <p class="sideNav__col__section__childLink--name pt-2">{{ child.name }}</p>
              </NuxtLink>
            </template>
          </div>
        </section>
      </template>
      <div class="sideNav__col__logout px-4">
        <UButton class="sideNav__col__logout--buttin w-32 sm:w-full my-1"><p class="w-full text-center">登出</p></UButton>
      </div>          
    </div>
    <div class="sideNav__col__section col-span-12 sm:col-span-9 px-4">
      <!-- Page -->
      <slot />
    </div>
  </div>
</template>
<script setup>
  const isOpen = useState('navOpen');

  // 判斷當前路由並決定要不要展開子連結
  const activeLink = ref(useRoute().path);
  
  const setActiveLink = (path) => {
    activeLink.value = path;
  };
  
  const TempLinks = [
    { icon: 'i-heroicons-check-circle-solid', name: '開始打卡', path: '/punch',
      child: [
        { icon: '', name: '打卡', path: '/punch/' },
        { icon: '', name: '補打卡', path: '/punch/make' }
      ] 
    },
    { icon: 'i-heroicons-face-smile-solid', name: '請假/補修', path: '/leave', 
    child: [
      { icon: '', name: '補修', path: '/leave/' },
      { icon: '', name: '請假', path: '/leave/make' },
    ] 
    },
    { icon: 'i-heroicons-book-open-solid', name: '請假狀態', path: '/checkLeave/', child: [] },
    { icon: 'i-heroicons-pencil-solid', name: '打卡記錄', path: '/checkTimestamp/', child: [] }
  ];
  </script>
  <style scoped lang="scss"> 
  .mainLink, .router-link-exact-active {
    color: $phototaxisBlue-500;
    div {
      span {
        color: $phototaxisBlue-500;
      }
    //   background-color: theme('colors.slate.100');
    }
    h2 {
      display: block;
    }
  }
  </style>