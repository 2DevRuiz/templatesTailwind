
  <template>
    <div
      class="flex w-full h-screen bg-white text-slate-800 "
      :class="isUserOnMobile && 'relative'"
    >
      <!-- Sidebar -->
  
      <div
        class="flex flex-col justify-between border-r pb-4 transition-all duration-300 dark:border-slate-600"
        :class="[
          isSidebarOpen
            ? 'w-52 px-4 opacity-100'
            : 'w-0 overflow-hidden opacity-0',
          isUserOnMobile &&
            'absolute inset-y-0 bg-white shadow-xl shadow-slate-500 dark:shadow-slate-700 dark:bg-slate-900',
        ]"
      >
        <div>
          <div class="flex h-20 items-center justify-between pl-2">
            <h2 class="text-lg font-semibold italic"><img src="@/assets/images/R2A_WB.png" class="" alt=""></h2>
  
            <!-- Sidebar Closing Icon On Mobile Menu -->
  
            <div @click="isSidebarOpen = false" v-if="isUserOnMobile">
                <span class="size-8 cursor-pointer rounded-full bg-slate-200 p-1 dark:bg-slate-800">x</span>
              <!-- <XMarkIcon
                class="size-8 cursor-pointer rounded-full bg-slate-200 p-1 dark:bg-slate-800"
              /> -->
            </div>
          </div>
  
          <!-- Top Nav Items -->
  
          <nav class="flex flex-col gap-4">
            <a href="#" :class="navItemStyle">Home</a>
            <a href="#" :class="navItemStyle">Dashboard</a>
            <a href="#" :class="navItemStyle">Analytics</a>
            <a href="#" :class="navItemStyle">Projects</a>
            <a href="#" :class="navItemStyle">Tasks</a>
            <a href="#" :class="navItemStyle">Users</a>
          </nav>
        </div>
  
        <!-- Bottom Nav Items -->
  
        <nav class="flex flex-col gap-4">
          <a href="#" :class="navItemStyle">Settings</a>
          <a href="#" :class="navItemStyle">Help</a>
        </nav>
      </div>
  
      <div class="flex grow flex-col">
        <!-- Navbar -->
  
        <div
          class="flex h-16 items-center justify-between gap-4 border-b px-6 dark:border-slate-600"
        >
          <!-- Sidebar Toggle Icon -->
  
          <div @click="isSidebarOpen = !isSidebarOpen">
            <span class="size-8 cursor-pointer rounded-full bg-slate-200 stroke-slate-400 p-1 transition-colors duration-150 hover:stroke-slate-800 "> - </span>
            <!-- <Bars2Icon
              class="size-8 cursor-pointer rounded-full bg-slate-200 stroke-slate-400 p-1 transition-colors duration-150 hover:stroke-slate-800 dark:bg-slate-800 dark:stroke-slate-500 dark:hover:stroke-slate-100"
            /> -->
          </div>
          <div v-if="!isUserOnMobile">
            <input
              type="text"
              name=""
              id=""
              class="w-full rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset ring-slate-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6  dark:ring-slate-600 dark:focus:ring-slate-400"
              placeholder="Search"
            />
          </div>
          <div class="flex items-center gap-2">
            <div
              v-if="!isUserOnMobile"
              class="flex items-center justify-center gap-3 border-r px-4"
            >
              <EnvelopeIcon class="h-6 w-6 text-slate-700  cursor-pointer" />
              <BellIcon class="h-6 w-6 text-slate-700  cursor-pointer" />
            </div>
  
            <!-- User Details -->
  
            <div class="ml-2 flex items-center justify-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1532170579297-281918c8ae72?w=600"
                alt="Profile Picture"
                class="rounded-full object-cover"
                :class="isUserOnMobile ? 'size-8' : 'size-10'"
              />
              <div class="hidden lg:block">
                <h2 class="text-sm font-semibold">Mona Rose</h2>
                <p class="text-xs text-slate-600 ">Admin</p>
              </div>
            </div>
          </div>
        </div>
  
        <div class="flex flex-col gap-6 p-6">
          <div class="h-96 rounded-lg bg-slate-200 "></div>
          <div class="h-24 rounded-lg bg-slate-200 "></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
//   import {
//     Bars2Icon,
//     BellIcon,
//     EnvelopeIcon,
//     XMarkIcon,
//   } from "@heroicons/vue/24/outline";
  
  const isSidebarOpen = ref(true);
  const isUserOnMobile = ref(true);
  
  const navItemStyle =
    "rounded-md px-2 py-1 transition-colors duration-150 hover:bg-slate-100 dark:hover:bg-slate-800";
  
  onMounted(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        isSidebarOpen.value = false;
        isUserOnMobile.value = true;
      } else {
        isSidebarOpen.value = true;
        isUserOnMobile.value = false;
      }
    }
  
    // Initial Check
    handleResize();
  
    // Listening For resize Events
    window.addEventListener("resize", handleResize);
  });
  </script>  
    