<template>
    <div class="flex flex-wrap bg-grey-light min-h-screen">
        <nav id="sidebar" ref="sidebar"
            :class="['fixed z-10 pin-y bg-grey-lightest shadow-md w-full sm:w-1/3 lg:w-1/4', { 'sidebar-inactive': !isMenuActive }]">
            <h1 class="text-lg p-6 bg-grey-lighter border-grey-light border-b text-grey-darkest">
                Site administration panel
            </h1>
            <ul class="list-reset">
                <li class="hover:bg-teal">
                    <a href="#"
                        class="block px-6 py-4 w-full text-grey-darkest font-bold hover:text-white text-left text-sm no-underline">
                        <span class="fa fa-grip-horizontal"></span> Dashboard
                    </a>
                </li>
                <li class="hover:bg-teal">
                    <a href="#"
                        class="block px-6 py-4 w-full text-grey-darkest font-bold hover:text-white text-left text-sm no-underline">
                        <span class="fa fa-newspaper"></span> Articles
                    </a>
                </li>
                <li class="hover:bg-teal">
                    <a href="#"
                        class="block px-6 py-4 w-full text-grey-darkest font-bold hover:text-white text-left text-sm no-underline">
                        <span class="fa fa-ellipsis-h"></span> Menu
                    </a>
                </li>
                <li class="hover:bg-teal">
                    <a href="#"
                        class="block px-6 py-4 w-full text-grey-darkest font-bold hover:text-white text-left text-sm no-underline">
                        <span class="fa fa-envelope"></span> Newsletter
                    </a>
                </li>
                <li class="hover:bg-teal">
                    <a href="#"
                        class="block px-6 py-4 w-full text-grey-darkest font-bold hover:text-white text-left text-sm no-underline">
                        <span class="fa fa-cogs"></span> Settings
                    </a>
                </li>
            </ul>
        </nav>

        <div id="main" ref="main"
            :class="['w-full min-h-full absolute pin-r flex flex-col', { 'sm:w-2/3 lg:w-3/4': isMenuActive }]">
            <aside id="navbar" class="text-lg p-6 bg-grey-lighter shadow-md">
                <button id="menu-switch" @click="toggleSidebar" class="focus:outline-none">
                    <!-- <span :class="['fa', isMenuActive ? 'fa-times-circle text-red-light' : 'fa-bars']"></span> -->
                    --
                </button>
            </aside>

            <div class="flex content-between flex-wrap min-h-full flex-grow">
                <main class="w-full p-6">
                    <div role="alert" class="w-full p-2 rounded-full bg-teal-light text-teal-darker text-lg">
                        <span
                            class="inline-block font-bold text-sm bg-teal py-1 px-2 rounded-full uppercase">Notice</span>
                        Main content should be placed here
                    </div>
                </main>
                <footer class="w-full p-12 bg-black text-white flex space-between">
                    <p class="w-full text-center sm:text-left">
                        Copyright &copy; 2019
                    </p>
                    <aside class="w-full sm:w-auto text-center sm:text-right">
                        <a href="https://github.com/SlawomirChabowski" title="My Github page" class="text-white block"
                            style="transform: scale(2);">
                            <span class="fab fa-github"></span>
                        </a>
                    </aside>
                </footer>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuActive = ref(false);
const sidebar = ref(null);
const main = ref(null);

const toggleSidebar = () => {
    isMenuActive.value = !isMenuActive.value;
    setTimeout(() => {
        sidebar.value.classList.add('slow-moves');
        main.value.classList.add('slow-moves');
    }, 300);
};
</script>


<style scoped>
.slow-moves {
    transition: 0.3s;
}

.sidebar-inactive {
    transform: translateX(-100%);
}
</style>