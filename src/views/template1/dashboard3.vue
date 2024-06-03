<template>

  <body class="bg-gray-200 font-sans leading-normal tracking-normal">

    <nav class="relative bg-white border-b-2 border-gray-300 text-gray-900">
      <div class="container mx-auto flex justify-between">
        <div class="relative block p-4 lg:p-6 text-xl text-teal-600 font-bold">
          <a href="#" class="hover:text-teal-900"><img src="@/assets/images/R2A_WB.png" class="h-10" alt=""></a>
        </div>
        <ul class="flex">

          <!--Regular Link-->
          <li class="hover:bg-blue-200 hover:text-white">
            <a href="#" class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold">Home</a>
          </li>

          <!--Toggleable Link-->
          <li class="toggleable hover:bg-blue-200 hover:text-white">
            <input type="checkbox" value="selected" id="toggle-one" class="toggle-input">
            <label for="toggle-one" class="block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">PBX
             </label>
            <div role="toggle" class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-cyan-700">
              <div class="container mx-auto w-full flex flex-wrap justify-between ">
                <ul
                  class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <h3 class="font-bold text-xl text-white text-bold mb-2">Bespin</h3>
                  <li>
                    <a href="#" class="block p-3 hover:bg-teal-900 text-gray-300 hover:text-white">Lando Calrissian</a>
                  </li>
                  <li>
                    <a href="#" class="block p-3 hover:bg-teal-900 text-gray-300 hover:text-white">Nien Nunb</a>
                  </li>
                  <li>
                    <a href="#" class="block p-3 hover:bg-teal-900 text-gray-300 hover:text-white">Mon Mothma</a>
                  </li>
                  <li>
                    <a href="#" class="block p-3 hover:bg-teal-900 text-gray-300 hover:text-white">Wedge Antilles</a>
                  </li>
                  <li>
                    <a href="#" class="block p-3 hover:bg-teal-900 text-gray-300 hover:text-white">Admiral Gial
                      Ackbar</a>
                  </li>
                </ul>
                <ul
                  class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <h3 class="font-bold text-xl text-white text-bold mb-2">Ahch-To</h3>
                  <li>
                    <a href="#" class="block p-3 hover:bg-teal-900 text-gray-300 hover:text-white">Obi-Wan Kenobi</a>
                  </li>
                  <li>
                    <a href="#" class="block p-3 hover:bg-teal-900 text-gray-300 hover:text-white">Yoda</a>
                  </li>
                  <li>
                    <a href="#" class="block p-3 hover:bg-teal-900 text-gray-300 hover:text-white">Emperor Palpatine</a>
                  </li>
                  <li>
                    <a href="#" class="block p-3 hover:bg-teal-900 text-gray-300 hover:text-white">Han Solo</a>
                  </li>
                  <li>
                    <a href="#" class="block p-3 hover:bg-teal-900 text-gray-300 hover:text-white">Anakin
                      Skywalker/Darth Vader</a>
                  </li>
                </ul>
                <ul
                  class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                  <h3 class="font-bold text-xl text-white text-bold">Coruscant</h3>
                  <li>
                    <a href="#" class="block p-3 hover:bg-teal-900 text-gray-300 hover:text-white">Luke Skywalker</a>
                  </li>
                  <li>
                    <a href="#" class="block p-3 hover:bg-teal-900 text-gray-300 hover:text-white">Princess Leia</a>
                  </li>
                  <li>
                    <a href="#" class="block p-3 hover:bg-teal-900 text-gray-300 hover:text-white">Chewbacca</a>
                  </li>
                  <li>
                    <a href="#" class="block p-3 hover:bg-teal-900 text-gray-300 hover:text-white">R2-D2</a>
                  </li>
                  <li>
                    <a href="#" class="block p-3 hover:bg-teal-900 text-gray-300 hover:text-white">C-3PO</a>
                  </li>
                </ul>
                <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                  <h3 class="font-bold text-xl text-white text-bold mb-2">Endor</h3>
                  <li class="pt-3">
                    <img src="https://placehold.it/205x172">
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <!-- end Toggleable Link-->


          <!--Hoverable Link-->
          <li class="hoverable hover:bg-hover:bg-blue-200 hover:text-white">
            <a href="#"
              class="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-blue-200 hover:text-white">Hover
              to show</a>
            <div class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-cyan-700">
              <div class="container mx-auto w-full flex flex-wrap justify-between ">
                <div class="w-full text-white mb-8 text-center">
                  <h2 class="font-bold text-2xl">Listen, why don’t you wait out by the speeder.</h2>
                  <p>our droids. They’ll have to wait outside. We don’t want them here.</p>
                </div>
                <ul
                  class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div class="flex items-center">
                    <svg class="h-8 mb-3 mr-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <path
                        d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z" />
                    </svg>
                    <h3 class="font-bold text-xl text-white text-bold mb-2">Tatooine</h3>
                  </div>
                  <p class="text-gray-100 text-sm">Thul klivian doldur thisspiasian calrissian. Garindan d8 aurra
                    twi'lek tund polis gen'dai sola tarpals.</p>
                  <div class="flex items-center py-3">
                    <svg class="h-6 pr-3 fill-current text-teal-300" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <path
                        d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                    </svg>
                    <a href="#" class="text-white bold border-b-2 border-teal-300 hover:text-teal-900">Find out
                      more...</a>
                  </div>
                </ul>
                <ul
                  class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div class="flex items-center">
                    <svg class="h-8 mb-3 mr-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <path
                        d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
                    </svg>
                    <h3 class="font-bold text-xl text-white text-bold mb-2">Cantonica</h3>
                  </div>
                  <p class="text-gray-100 text-sm">Thul klivian doldur thisspiasian calrissian. Garindan d8 aurra
                    twi'lek tund polis gen'dai sola tarpals.</p>
                  <div class="flex items-center py-3">
                    <svg class="h-6 pr-3 fill-current text-teal-300" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <path
                        d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                    </svg>
                    <a href="#" class="text-white bold border-b-2 border-teal-300 hover:text-teal-900">Find out
                      more...</a>
                  </div>
                </ul>
                <ul
                  class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div class="flex items-center">
                    <svg class="h-8 mb-3 mr-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <path
                        d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
                    </svg>
                    <h3 class="font-bold text-xl text-white text-bold mb-2">Yavin 4</h3>
                  </div>
                  <p class="text-gray-100 text-sm">Thul klivian doldur thisspiasian calrissian. Garindan d8 aurra
                    twi'lek tund polis gen'dai sola tarpals.</p>
                  <div class="flex items-center py-3">
                    <svg class="h-6 pr-3 fill-current text-teal-300" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <path
                        d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                    </svg>
                    <a href="#" class="text-white bold border-b-2 border-teal-300 hover:text-teal-900">Find out
                      more...</a>
                  </div>
                </ul>
                <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                  <div class="flex items-center">
                    <svg class="h-8 mb-3 mr-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <path
                        d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                    </svg>
                    <h3 class="font-bold text-xl text-white text-bold mb-2">Alderaan</h3>
                  </div>
                  <p class="text-gray-100 text-sm">Thul klivian doldur thisspiasian calrissian. Garindan d8 aurra
                    twi'lek tund polis gen'dai sola tarpals.</p>
                  <div class="flex items-center py-3">
                    <svg class="h-6 pr-3 fill-current text-teal-300" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <path
                        d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                    </svg>
                    <a href="#" class="text-white bold border-b-2 border-teal-300 hover:text-teal-900">Find out
                      more...</a>
                  </div>
                </ul>
              </div>
            </div>
          </li>
          <!--end Hoverable Link-->

        </ul>
      </div>
    </nav>
    <div class="flex-grow text-gray-800 h-screen">
      
      <main class="p-6 sm:p-10 space-y-6">
        <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <div class="mr-6">
            <h1 class="text-4xl font-semibold mb-2">Dashboard</h1>
            <h2 class="text-gray-600 ml-0.5"></h2>
          </div>
          <!-- <div class="flex flex-wrap items-start justify-end -mb-3">
            <button
              class="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                class="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Manage dashboard
            </button>
            <button
              class="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                class="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Create new dashboard
            </button>
          </div> -->
        </div>
        <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div
              class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <span class="block text-2xl font-bold">62</span>
              <span class="block text-gray-500">Calls </span>
            </div>
          </div>
          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div
              class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <span class="block text-2xl font-bold">6.8</span>
              <span class="block text-gray-500">Average calls </span>
            </div>
          </div>
          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div
              class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
            </div>
            <div>
              <span class="inline-block text-2xl font-bold">9</span>
              <span class="inline-block text-xl text-gray-500 font-semibold">(14%)</span>
              <span class="block text-gray-500">Underperforming </span>
            </div>
          </div>
          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div
              class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <span class="block text-2xl font-bold">83</span>
              <span class="block text-gray-500">Finished calls</span>
            </div>
          </div>
        </section>
        <section class="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
          <div class="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
            <div class="px-6 py-5 font-semibold border-b border-gray-100">Usage server</div>
            <div class="p-4 flex-grow">
              <div
                class="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                Chart</div>
            </div>
          </div>
          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div
              class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path fill="#fff"
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <div>
              <span class="block text-2xl font-bold">25</span>
              <span class="block text-gray-500">Lections left</span>
            </div>
          </div>
          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div
              class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <span class="block text-2xl font-bold">139</span>
              <span class="block text-gray-500">Hours spent on lections</span>
            </div>
          </div>
          <div class="row-span-3 bg-white shadow rounded-lg">
            <div class="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
              <span>Tenants </span>
              <button type="button"
                class="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600"
                id="options-menu" aria-haspopup="true" aria-expanded="true">
                Descending
                <svg class="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </button>
              <!-- Refer here for full dropdown menu code: https://tailwindui.com/components/application-ui/elements/dropdowns -->
            </div>
            <div class="overflow-y-auto" style="max-height: 24rem;">
              <ul class="p-6 space-y-6">
                <li class="flex items-center">
                  <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/women/82.jpg" alt="Annette Watson profile picture">
                  </div>
                  <span class="text-gray-600">Annette Watson</span>
                  <span class="ml-auto font-semibold">9.3</span>
                </li>
                <li class="flex items-center">
                  <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="Calvin Steward profile picture">
                  </div>
                  <span class="text-gray-600">Calvin Steward</span>
                  <span class="ml-auto font-semibold">8.9</span>
                </li>
                <li class="flex items-center">
                  <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/men/80.jpg" alt="Ralph Richards profile picture">
                  </div>
                  <span class="text-gray-600">Ralph Richards</span>
                  <span class="ml-auto font-semibold">8.7</span>
                </li>
                <li class="flex items-center">
                  <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/men/79.jpg" alt="Bernard Murphy profile picture">
                  </div>
                  <span class="text-gray-600">Bernard Murphy</span>
                  <span class="ml-auto font-semibold">8.2</span>
                </li>
                <li class="flex items-center">
                  <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/women/78.jpg" alt="Arlene Robertson profile picture">
                  </div>
                  <span class="text-gray-600">Arlene Robertson</span>
                  <span class="ml-auto font-semibold">8.2</span>
                </li>
                <li class="flex items-center">
                  <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/women/77.jpg" alt="Jane Lane profile picture">
                  </div>
                  <span class="text-gray-600">Jane Lane</span>
                  <span class="ml-auto font-semibold">8.1</span>
                </li>
                <li class="flex items-center">
                  <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="Pat Mckinney profile picture">
                  </div>
                  <span class="text-gray-600">Pat Mckinney</span>
                  <span class="ml-auto font-semibold">7.9</span>
                </li>
                <li class="flex items-center">
                  <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Norman Walters profile picture">
                  </div>
                  <span class="text-gray-600">Norman Walters</span>
                  <span class="ml-auto font-semibold">7.7</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col row-span-3 bg-white shadow rounded-lg">
            <div class="px-6 py-5 font-semibold border-b border-gray-100">Calls By Tenant</div>
            <div class="p-4 flex-grow">
              <div
                class="flex items-center justify-center h-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                Chart</div>
            </div>
          </div>
        </section>
        <!-- <section class="text-right font-semibold text-gray-500">
                    <a href="#" class="text-purple-600 hover:underline">Recreated on Codepen</a> with <a
                        href="https://tailwindcss.com/" class="text-teal-400 hover:underline">Tailwind CSS</a> by Azri
                    Kahar, <a href="https://dribbble.com/shots/10711741-Free-UI-Kit-for-Figma-Online-Courses-Dashboard"
                        class="text-purple-600 hover:underline">original design</a> made by Chili Labs
                </section> -->
      </main>
    </div>
  </body>
</template>
<script lang="ts" setup>
</script>
<style scoped>
/* #Mega Menu Styles
  if you use sass, convert all this additional css to tailwindcss using the 'hack' @apply for all element.style (css properties)
[ https://tailwindcss.com/docs/functions-and-directives/#apply ]
example:
  .mega-menu {
  @apply
  hidden
  left-0
  absolute
  text-left
  w-full;
  }
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
.mega-menu {
  opacity: 0;
  visibility: hidden;
  z-index: -900;
  left: 0;
  position: absolute;
  text-align: left;
  width: 100%;
  transition: all 0.15s linear 0s;
}



/* #hoverable Class Styles */
.hoverable {
  position: static;
}

.hoverable>a:after {
  content: "\25BC";
  font-size: 10px;
  padding-left: 6px;
  position: relative;
  top: -1px;
}

.hoverable:hover .mega-menu {
  opacity: 1;
  visibility: visible;
  z-index: 900;
}


/* #toggle Class Styles */

.toggleable>label:after {
  content: "\25BC";
  font-size: 10px;
  padding-left: 6px;
  position: relative;
  top: -1px;
}

.toggle-input {
  display: none;
}

.toggle-input:not(checked)~.mega-menu {
  opacity: 0;
  visibility: hidden;
  z-index: -900;
}

.toggle-input:checked~.mega-menu {
  opacity: 1;
  visibility: visible;
  z-index: 900;
}

.toggle-input:checked+label {
  color: white;
  background: rgb(3, 102, 114);
  /*@apply bg-teal-700 */
}

.toggle-input:checked~label:after {
  content: "\25B2";
  font-size: 10px;
  padding-left: 6px;
  position: relative;
  top: -1px;
}
</style>