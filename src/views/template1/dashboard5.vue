<template>
    <div class="flex">
        <div class="h-screen w-60 rounded-br-md rounded-tr-lg bg-[#296CF2] p-4 antialiased">
            <div class="flex items-center gap-2">
                <div
                    class="grid h-9 w-9 place-content-center rounded border border-[#4B83F2] bg-[#4B83F2]/50 text-xl text-white">
                    UI</div>
                <div class="">
                    <p class="font-medium text-white">Untitled UI</p>
                    <p class="text-sm text-slate-200">info@untitled.com</p>
                </div>

                <svg class="ml-auto h-5 w-5 self-start fill-white" viewBox="0 0 24 24">
                    <path
                        d="M18.2073 9.04304 12.0002 2.83594 5.79312 9.04304 7.20733 10.4573 12.0002 5.66436 16.7931 10.4573 18.2073 9.04304ZM5.79297 14.9574 12.0001 21.1646 18.2072 14.9574 16.793 13.5432 12.0001 18.3361 7.20718 13.5432 5.79297 14.9574Z">
                    </path>
                </svg>
            </div>

            <ul class="mt-10 flex w-full flex-col gap-3">
                <li>
                    <a href="#"
                        class="flex items-center gap-2 rounded-md border border-[#4B83F2] bg-[#4B83F2]/40 px-3 py-2 text-white">
                        <svg class="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M5 3V19H21V21H3V3H5ZM20.2929 6.29289L21.7071 7.70711L16 13.4142L13 10.415L8.70711 14.7071L7.29289 13.2929L13 7.58579L16 10.585L20.2929 6.29289Z">
                            </path>
                        </svg>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center gap-2 rounded-md px-3 py-2 text-white hover:bg-[#4B83F2]/40">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-white" viewBox="0 0 24 24">
                            <path
                                d="M21 13.2422V20H22V22H2V20H3V13.2422C1.79401 12.435 1 11.0602 1 9.5C1 8.67286 1.22443 7.87621 1.63322 7.19746L4.3453 2.5C4.52393 2.1906 4.85406 2 5.21132 2H18.7887C19.1459 2 19.4761 2.1906 19.6547 2.5L22.3575 7.18172C22.7756 7.87621 23 8.67286 23 9.5C23 11.0602 22.206 12.435 21 13.2422ZM19 13.9725C18.8358 13.9907 18.669 14 18.5 14C17.2409 14 16.0789 13.478 15.25 12.6132C14.4211 13.478 13.2591 14 12 14C10.7409 14 9.5789 13.478 8.75 12.6132C7.9211 13.478 6.75911 14 5.5 14C5.331 14 5.16417 13.9907 5 13.9725V20H19V13.9725ZM5.78865 4L3.35598 8.21321C3.12409 8.59843 3 9.0389 3 9.5C3 10.8807 4.11929 12 5.5 12C6.53096 12 7.44467 11.3703 7.82179 10.4295C8.1574 9.59223 9.3426 9.59223 9.67821 10.4295C10.0553 11.3703 10.969 12 12 12C13.031 12 13.9447 11.3703 14.3218 10.4295C14.6574 9.59223 15.8426 9.59223 16.1782 10.4295C16.5553 11.3703 17.469 12 18.5 12C19.8807 12 21 10.8807 21 9.5C21 9.0389 20.8759 8.59843 20.6347 8.19746L18.2113 4H5.78865Z">
                            </path>
                        </svg>
                        Store
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center gap-2 rounded-md px-3 py-2 text-white hover:bg-[#4B83F2]/60">
                        <svg class="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M8.00008 6V9H5.00008V6H8.00008ZM3.00008 4V11H10.0001V4H3.00008ZM13.0001 4H21.0001V6H13.0001V4ZM13.0001 11H21.0001V13H13.0001V11ZM13.0001 18H21.0001V20H13.0001V18ZM10.7072 16.2071L9.29297 14.7929L6.00008 18.0858L4.20718 16.2929L2.79297 17.7071L6.00008 20.9142L10.7072 16.2071Z">
                            </path>
                        </svg>
                        My tasks
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center gap-2 rounded-md px-3 py-2 text-white hover:bg-[#4B83F2]/60">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24">
                            <path
                                d="M8.68735 4.00008L11.294 1.39348C11.6845 1.00295 12.3176 1.00295 12.7082 1.39348L15.3148 4.00008H19.0011C19.5533 4.00008 20.0011 4.4478 20.0011 5.00008V8.68637L22.6077 11.293C22.9982 11.6835 22.9982 12.3167 22.6077 12.7072L20.0011 15.3138V19.0001C20.0011 19.5524 19.5533 20.0001 19.0011 20.0001H15.3148L12.7082 22.6067C12.3176 22.9972 11.6845 22.9972 11.294 22.6067L8.68735 20.0001H5.00106C4.44877 20.0001 4.00106 19.5524 4.00106 19.0001V15.3138L1.39446 12.7072C1.00393 12.3167 1.00393 11.6835 1.39446 11.293L4.00106 8.68637V5.00008C4.00106 4.4478 4.44877 4.00008 5.00106 4.00008H8.68735ZM6.00106 6.00008V9.5148L3.51578 12.0001L6.00106 14.4854V18.0001H9.51578L12.0011 20.4854L14.4863 18.0001H18.0011V14.4854L20.4863 12.0001L18.0011 9.5148V6.00008H14.4863L12.0011 3.5148L9.51578 6.00008H6.00106ZM12.0011 16.0001C9.79192 16.0001 8.00106 14.2092 8.00106 12.0001C8.00106 9.79094 9.79192 8.00008 12.0011 8.00008C14.2102 8.00008 16.0011 9.79094 16.0011 12.0001C16.0011 14.2092 14.2102 16.0001 12.0011 16.0001ZM12.0011 14.0001C13.1056 14.0001 14.0011 13.1047 14.0011 12.0001C14.0011 10.8955 13.1056 10.0001 12.0011 10.0001C10.8965 10.0001 10.0011 10.8955 10.0011 12.0001C10.0011 13.1047 10.8965 14.0001 12.0011 14.0001Z"
                                fill="rgba(255,255,255,1)"></path>
                        </svg>
                        Settings
                    </a>
                </li>
                <li @click="open = !open">
                    <a href="#"
                        class="flex items-center gap-2 rounded-md px-3 py-2 text-white hover:bg-[#4B83F2]/60">
                        <svg class="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M7.5 11.5C5.01472 11.5 3 9.48528 3 7C3 4.51472 5.01472 2.5 7.5 2.5C9.98528 2.5 12 4.51472 12 7C12 9.48528 9.98528 11.5 7.5 11.5ZM7.5 21.5C5.01472 21.5 3 19.4853 3 17C3 14.5147 5.01472 12.5 7.5 12.5C9.98528 12.5 12 14.5147 12 17C12 19.4853 9.98528 21.5 7.5 21.5ZM17.5 11.5C15.0147 11.5 13 9.48528 13 7C13 4.51472 15.0147 2.5 17.5 2.5C19.9853 2.5 22 4.51472 22 7C22 9.48528 19.9853 11.5 17.5 11.5ZM17.5 21.5C15.0147 21.5 13 19.4853 13 17C13 14.5147 15.0147 12.5 17.5 12.5C19.9853 12.5 22 14.5147 22 17C22 19.4853 19.9853 21.5 17.5 21.5ZM7.5 9.5C8.88071 9.5 10 8.38071 10 7C10 5.61929 8.88071 4.5 7.5 4.5C6.11929 4.5 5 5.61929 5 7C5 8.38071 6.11929 9.5 7.5 9.5ZM7.5 19.5C8.88071 19.5 10 18.3807 10 17C10 15.6193 8.88071 14.5 7.5 14.5C6.11929 14.5 5 15.6193 5 17C5 18.3807 6.11929 19.5 7.5 19.5ZM17.5 9.5C18.8807 9.5 20 8.38071 20 7C20 5.61929 18.8807 4.5 17.5 4.5C16.1193 4.5 15 5.61929 15 7C15 8.38071 16.1193 9.5 17.5 9.5ZM17.5 19.5C18.8807 19.5 20 18.3807 20 17C20 15.6193 18.8807 14.5 17.5 14.5C16.1193 14.5 15 15.6193 15 17C15 18.3807 16.1193 19.5 17.5 19.5Z">
                            </path>
                        </svg>
                        Projects
                        <div class="ml-auto">
                            <svg class="h-5 w-5 stroke-white transition-transform" :class="{ 'rotate-180': open }"
                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 8.5L12 15.5L5 8.5" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </a>
                    <ul x-transition:enter="transition ease-out duration-300"
                        x-transition:enter-start="opacity-0 translate-x-5"
                        x-transition:enter-end="opacity-100 translate-x-0"
                        x-transition:leave="transition ease-in duration-300"
                        x-transition:leave-start="opacity-100 translate-x-0"
                        x-transition:leave-end="opacity-0 translate-x-5" x-show="open"
                        class=" ml-4 pl-3 border-l border-[#4B83F2]">
                        <li
                            class="relative before:content-[''] before:h-2 before:w-2 before:rounded-full before:bg-[#4B83F2] before:absolute before:-left-4 before:bottom-4">
                            <a href=""
                                class="text-slate-200 text-sm flex items-center gap-2 rounded-md px-3 py-2  hover:bg-[#4B83F2]/60">
                                Chat App</a>
                        </li>
                        <li
                            class="relative before:content-[''] before:h-2 before:w-2 before:rounded-full before:bg-[#4B83F2] before:absolute before:-left-4 before:bottom-4">
                            <a href=""
                                class="text-slate-200 text-sm flex items-center gap-2 rounded-md px-3 py-2  hover:bg-[#4B83F2]/60">Ecommerce
                                Platform</a>
                        </li>
                        <li
                            class="relative before:content-[''] before:h-2 before:w-2 before:rounded-full before:bg-[#4B83F2] before:absolute before:-left-4 before:bottom-4">
                            <a href=""
                                class="text-slate-200 text-sm flex items-center gap-2 rounded-md px-3 py-2  hover:bg-[#4B83F2]/60">Resturent
                                Store</a>
                        </li>
                        <li
                            class="relative before:content-[''] before:h-2 before:w-2 before:rounded-full before:bg-[#4B83F2] before:absolute before:-left-4 before:bottom-4">
                            <a href=""
                                class="text-slate-200 text-sm flex items-center gap-2 rounded-md px-3 py-2  hover:bg-[#4B83F2]/60">Medical
                                Platform</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="flex-1 px-4 py-6 hidden sm:block">
            <h2 class="text-2xl font-bold text-slate-800">Welcome to your Dashboard</h2>
            <p class="font-medium text-slate-500">Track, manage and forecast your portfolio, Exports repors from this
                page</p>
            <div class="mt-5 flex flex-col">
                <div class="">
                    <p class="text-5xl font-bold text-slate-800"><span
                            class="text-2xl font-medium text-slate-800">$</span>15,077.99</p>
                    <p class="mt-4 flex items-center text-lg text-blue-500">
                        <svg class="h-5 w-5 fill-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z">
                            </path>
                        </svg>
                        $5,555,555.66 (+3.3%)
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const open = ref(false);
</script>
