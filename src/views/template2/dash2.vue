<template>

<!--
// v0 by Vercel.
// https://v0.dev/t/N67sPHs5d4w
-->

<div class="grid min-h-screen w-full grid-cols-1 lg:grid-cols-[280px_1fr]">
  <div class="border-r bg-gray-950 lg:block">
    <div class="flex h-full max-h-screen flex-col gap-2">
      <div class="flex h-[60px] items-center border-b px-6">
        <a class="flex items-center gap-2 font-semibold" href="#">
          <img src="@/assets/images/R2A_WB.png" class="w-36 object-cover " alt="">
        </a>
        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground ml-auto h-8 w-8">
          <span class="text-white">-</span>
          <span class="sr-only">Toggle notifications</span>
        </button>
      </div>
      <div class="flex-1 overflow-auto py-2">
        <nav class="grid items-start px-4 text-sm font-medium">
          <a
            href="#"
            class="flex items-center gap-3 rounded-lg bg-gray-800 px-3 py-2 text-gray-50 transition-all hover:text-gray-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Home
          </a>
          <a
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-gray-50 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Users
          </a>
          <a
            href="#"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-gray-50 dark:text-gray-400 dark:hover:text-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
            >
              <path d="m7.5 4.27 9 5.15"></path>
              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
              <path d="m3.3 7 8.7 5 8.7-5"></path>
              <path d="M12 22V12"></path>
            </svg>
            Products
          </a>
          <a
            href="#"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-gray-50 dark:text-gray-400 dark:hover:text-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Settings
          </a>
        </nav>
      </div>
    </div>
  </div>
  <div class="flex flex-col">
    <header class="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 lg:h-[60px]">
      <div class="w-full flex-1">
        <form>
          <div class="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              class="flex h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
              placeholder="Search..."
              type="search"
            />
          </div>
        </form>
      </div>
    </header>
    <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6 pb-4">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Total Calls</h3>
            <!-- <p class="text-sm text-muted-foreground">The total number of registered users.</p> -->
          </div>
          <div class="p-6">
            <div class="text-4xl font-bold">1,234</div>
          </div>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6 pb-4">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Total Tenants</h3>
            <!-- <p class="text-sm text-muted-foreground">The number of new users in the last 30 days.</p> -->
          </div>
          <div class="p-6">
            <div class="text-4xl font-bold">234</div>
          </div>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6 pb-4">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Total Products</h3>
            <!-- <p class="text-sm text-muted-foreground">The total number of products in the catalog.</p> -->
          </div>
          <div class="p-6">
            <div class="text-4xl font-bold">567</div>
          </div>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6 pb-4">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Calls </h3>
            <!-- <p class="text-sm text-muted-foreground">The number of orders waiting to be fulfilled.</p> -->
          </div>
          <div class="p-6">
            <div class="text-4xl font-bold">45</div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6 pb-4">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Server Overview</h3>
            <!-- <p class="text-sm text-muted-foreground">A chart showing sales trends over time.</p> -->
          </div>
          <div class="p-6">
            <div class="w-full aspect-[4/3]">
              <div style="width: 100%; height: 100%;">
                <div style="position: relative;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="343.5" height="257.625" role="application">
                    <rect width="343.5" height="257.625" fill="transparent"></rect>
                    <g transform="translate(40,10)">
                      <g>
                        <line
                          opacity="1"
                          x1="0"
                          x2="0"
                          y1="0"
                          y2="207.625"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="23.625"
                          x2="23.625"
                          y1="0"
                          y2="207.625"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="47.25"
                          x2="47.25"
                          y1="0"
                          y2="207.625"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="70.875"
                          x2="70.875"
                          y1="0"
                          y2="207.625"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="94.5"
                          x2="94.5"
                          y1="0"
                          y2="207.625"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="118.125"
                          x2="118.125"
                          y1="0"
                          y2="207.625"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="141.75"
                          x2="141.75"
                          y1="0"
                          y2="207.625"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="165.375"
                          x2="165.375"
                          y1="0"
                          y2="207.625"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="189"
                          x2="189"
                          y1="0"
                          y2="207.625"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="212.625"
                          x2="212.625"
                          y1="0"
                          y2="207.625"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="236.25"
                          x2="236.25"
                          y1="0"
                          y2="207.625"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="259.875"
                          x2="259.875"
                          y1="0"
                          y2="207.625"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="283.5"
                          x2="283.5"
                          y1="0"
                          y2="207.625"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                      </g>
                      <g>
                        <line
                          opacity="1"
                          x1="0"
                          x2="283.5"
                          y1="208"
                          y2="208"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="0"
                          x2="283.5"
                          y1="182"
                          y2="182"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="0"
                          x2="283.5"
                          y1="156"
                          y2="156"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="0"
                          x2="283.5"
                          y1="130"
                          y2="130"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="0"
                          x2="283.5"
                          y1="104"
                          y2="104"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="0"
                          x2="283.5"
                          y1="78"
                          y2="78"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="0"
                          x2="283.5"
                          y1="52"
                          y2="52"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="0"
                          x2="283.5"
                          y1="26"
                          y2="26"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line opacity="1" x1="0" x2="283.5" y1="0" y2="0" stroke="#f3f4f6" stroke-width="1"></line>
                      </g>
                      <g transform="translate(0,207.625)">
                        <g transform="translate(0,0)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="text-before-edge"
                            text-anchor="middle"
                            transform="translate(0,16) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            01
                          </text>
                        </g>
                        <g transform="translate(47.25,0)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="text-before-edge"
                            text-anchor="middle"
                            transform="translate(0,16) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            02
                          </text>
                        </g>
                        <g transform="translate(94.5,0)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="text-before-edge"
                            text-anchor="middle"
                            transform="translate(0,16) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            03
                          </text>
                        </g>
                        <g transform="translate(141.75,0)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="text-before-edge"
                            text-anchor="middle"
                            transform="translate(0,16) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            04
                          </text>
                        </g>
                        <g transform="translate(189,0)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="text-before-edge"
                            text-anchor="middle"
                            transform="translate(0,16) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            05
                          </text>
                        </g>
                        <g transform="translate(236.25,0)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="text-before-edge"
                            text-anchor="middle"
                            transform="translate(0,16) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            06
                          </text>
                        </g>
                        <g transform="translate(283.5,0)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="text-before-edge"
                            text-anchor="middle"
                            transform="translate(0,16) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            07
                          </text>
                        </g>
                        <line x1="0" x2="283.5" y1="0" y2="0" style="stroke: transparent; stroke-width: 1;"></line>
                      </g>
                      <g transform="translate(0,0)">
                        <g transform="translate(0,208)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="central"
                            text-anchor="end"
                            transform="translate(-16,0) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            0
                          </text>
                        </g>
                        <g transform="translate(0,143)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="central"
                            text-anchor="end"
                            transform="translate(-16,0) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            5
                          </text>
                        </g>
                        <g transform="translate(0,78)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="central"
                            text-anchor="end"
                            transform="translate(-16,0) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            10
                          </text>
                        </g>
                        <g transform="translate(0,13)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="central"
                            text-anchor="end"
                            transform="translate(-16,0) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            15
                          </text>
                        </g>
                        <line
                          x1="0"
                          x2="0"
                          y1="0"
                          y2="207.625"
                          style="stroke: transparent; stroke-width: 1;"
                        ></line>
                      </g>
                      <path
                        d="M0,91L47.25,104L94.5,39L141.75,130L189,104L236.25,26L283.5,65"
                        fill="none"
                        stroke-width="2"
                        stroke="#e11d48"
                      ></path>
                      <path
                        d="M0,117L47.25,143L94.5,65L141.75,91L189,52L236.25,0L283.5,39"
                        fill="none"
                        stroke-width="2"
                        stroke="#2563eb"
                      ></path>
                      <g>
                        <g transform="translate(283.5, 65)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#e11d48"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(236.25, 26)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#e11d48"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(189, 104)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#e11d48"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(141.75, 130)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#e11d48"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(94.5, 39)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#e11d48"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(47.25, 104)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#e11d48"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(0, 91)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#e11d48"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(283.5, 39)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#2563eb"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(236.25, 0)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#2563eb"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(189, 52)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#2563eb"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(141.75, 91)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#2563eb"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(94.5, 65)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#2563eb"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(47.25, 143)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#2563eb"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(0, 117)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#2563eb"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                      </g>
                      <g transform="translate(0,0)">
                        <rect
                          data-ref="mesh-interceptor"
                          width="283.5"
                          height="207.625"
                          fill="red"
                          opacity="0"
                          style="cursor: auto;"
                        ></rect>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6 pb-4">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Top Products</h3>
            <p class="text-sm text-muted-foreground">A chart showing the best selling products.</p>
          </div>
          <div class="p-6">
            <div class="w-full aspect-[4/3]">
              <div style="width: 100%; height: 100%;">
                <div style="position: relative;">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="343.5"
                    height="257.625"
                    role="application"
                    aria-label="A bar chart showing data"
                    focusable="false"
                  >
                    <rect width="343.5" height="257.625" fill="transparent"></rect>
                    <g transform="translate(40,0)">
                      <g>
                        <line
                          opacity="1"
                          x1="0"
                          x2="303.5"
                          y1="218"
                          y2="218"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="0"
                          x2="303.5"
                          y1="148"
                          y2="148"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="0"
                          x2="303.5"
                          y1="79"
                          y2="79"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="0"
                          x2="303.5"
                          y1="10"
                          y2="10"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                      </g>
                      <g transform="translate(0,217.625)">
                        <g transform="translate(32,0)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="text-before-edge"
                            text-anchor="middle"
                            transform="translate(0,16) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            Jan
                          </text>
                        </g>
                        <g transform="translate(80,0)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="text-before-edge"
                            text-anchor="middle"
                            transform="translate(0,16) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            Feb
                          </text>
                        </g>
                        <g transform="translate(128,0)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="text-before-edge"
                            text-anchor="middle"
                            transform="translate(0,16) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            Mar
                          </text>
                        </g>
                        <g transform="translate(176,0)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="text-before-edge"
                            text-anchor="middle"
                            transform="translate(0,16) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            Apr
                          </text>
                        </g>
                        <g transform="translate(224,0)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="text-before-edge"
                            text-anchor="middle"
                            transform="translate(0,16) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            May
                          </text>
                        </g>
                        <g transform="translate(272,0)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="text-before-edge"
                            text-anchor="middle"
                            transform="translate(0,16) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            Jun
                          </text>
                        </g>
                        <line x1="0" x2="303.5" y1="0" y2="0" style="stroke: transparent; stroke-width: 1;"></line>
                      </g>
                      <g transform="translate(0,0)">
                        <g transform="translate(0,218)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="central"
                            text-anchor="end"
                            transform="translate(-16,0) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            0
                          </text>
                        </g>
                        <g transform="translate(0,148)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="central"
                            text-anchor="end"
                            transform="translate(-16,0) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            50
                          </text>
                        </g>
                        <g transform="translate(0,79)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="central"
                            text-anchor="end"
                            transform="translate(-16,0) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            100
                          </text>
                        </g>
                        <g transform="translate(0,10)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="central"
                            text-anchor="end"
                            transform="translate(-16,0) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            150
                          </text>
                        </g>
                        <line
                          x1="0"
                          x2="0"
                          y1="0"
                          y2="217.625"
                          style="stroke: transparent; stroke-width: 1;"
                        ></line>
                      </g>
                      <g transform="translate(15, 64)">
                        <rect
                          width="34"
                          height="154"
                          rx="0"
                          ry="0"
                          fill="#2563eb"
                          stroke-width="0"
                          stroke="#2563eb"
                          focusable="false"
                        ></rect>
                      </g>
                      <g transform="translate(63, 0)">
                        <rect
                          width="34"
                          height="218"
                          rx="0"
                          ry="0"
                          fill="#2563eb"
                          stroke-width="0"
                          stroke="#2563eb"
                          focusable="false"
                        ></rect>
                      </g>
                      <g transform="translate(111, 39)">
                        <rect
                          width="34"
                          height="179"
                          rx="0"
                          ry="0"
                          fill="#2563eb"
                          stroke-width="0"
                          stroke="#2563eb"
                          focusable="false"
                        ></rect>
                      </g>
                      <g transform="translate(159, 10)">
                        <rect
                          width="34"
                          height="208"
                          rx="0"
                          ry="0"
                          fill="#2563eb"
                          stroke-width="0"
                          stroke="#2563eb"
                          focusable="false"
                        ></rect>
                      </g>
                      <g transform="translate(207, 53)">
                        <rect
                          width="34"
                          height="165"
                          rx="0"
                          ry="0"
                          fill="#2563eb"
                          stroke-width="0"
                          stroke="#2563eb"
                          focusable="false"
                        ></rect>
                      </g>
                      <g transform="translate(255, 118)">
                        <rect
                          width="34"
                          height="100"
                          rx="0"
                          ry="0"
                          fill="#2563eb"
                          stroke-width="0"
                          stroke="#2563eb"
                          focusable="false"
                        ></rect>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6 pb-4">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">User Activity</h3>
            <p class="text-sm text-muted-foreground">A chart showing user activity over time.</p>
          </div>
          <div class="p-6">
            <div class="w-full aspect-[4/3]">
              <div style="width: 100%; height: 100%;">
                <div style="position: relative;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="343.5" height="257.625" role="application">
                    <rect width="343.5" height="257.625" fill="transparent"></rect>
                    <g transform="translate(40,10)">
                      <g>
                        <line
                          opacity="1"
                          x1="0"
                          x2="0"
                          y1="0"
                          y2="207.625"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="58.7"
                          x2="58.7"
                          y1="0"
                          y2="207.625"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="117.4"
                          x2="117.4"
                          y1="0"
                          y2="207.625"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="176.10000000000002"
                          x2="176.10000000000002"
                          y1="0"
                          y2="207.625"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="234.8"
                          x2="234.8"
                          y1="0"
                          y2="207.625"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="293.5"
                          x2="293.5"
                          y1="0"
                          y2="207.625"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                      </g>
                      <g>
                        <line
                          opacity="1"
                          x1="0"
                          x2="293.5"
                          y1="208"
                          y2="208"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="0"
                          x2="293.5"
                          y1="157"
                          y2="157"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="0"
                          x2="293.5"
                          y1="106"
                          y2="106"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line
                          opacity="1"
                          x1="0"
                          x2="293.5"
                          y1="55"
                          y2="55"
                          stroke="#f3f4f6"
                          stroke-width="1"
                        ></line>
                        <line opacity="1" x1="0" x2="293.5" y1="4" y2="4" stroke="#f3f4f6" stroke-width="1"></line>
                      </g>
                      <g transform="translate(0,207.625)">
                        <g transform="translate(0,0)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="text-before-edge"
                            text-anchor="middle"
                            transform="translate(0,16) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            Jan
                          </text>
                        </g>
                        <g transform="translate(58.7,0)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="text-before-edge"
                            text-anchor="middle"
                            transform="translate(0,16) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            Feb
                          </text>
                        </g>
                        <g transform="translate(117.4,0)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="text-before-edge"
                            text-anchor="middle"
                            transform="translate(0,16) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            Mar
                          </text>
                        </g>
                        <g transform="translate(176.10000000000002,0)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="text-before-edge"
                            text-anchor="middle"
                            transform="translate(0,16) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            Apr
                          </text>
                        </g>
                        <g transform="translate(234.8,0)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="text-before-edge"
                            text-anchor="middle"
                            transform="translate(0,16) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            May
                          </text>
                        </g>
                        <g transform="translate(293.5,0)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="text-before-edge"
                            text-anchor="middle"
                            transform="translate(0,16) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            Jun
                          </text>
                        </g>
                        <line x1="0" x2="293.5" y1="0" y2="0" style="stroke: transparent; stroke-width: 1;"></line>
                      </g>
                      <g transform="translate(0,0)">
                        <g transform="translate(0,208)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="central"
                            text-anchor="end"
                            transform="translate(-16,0) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            0
                          </text>
                        </g>
                        <g transform="translate(0,157)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="central"
                            text-anchor="end"
                            transform="translate(-16,0) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            50
                          </text>
                        </g>
                        <g transform="translate(0,106)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="central"
                            text-anchor="end"
                            transform="translate(-16,0) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            100
                          </text>
                        </g>
                        <g transform="translate(0,55)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="central"
                            text-anchor="end"
                            transform="translate(-16,0) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            150
                          </text>
                        </g>
                        <g transform="translate(0,4)" style="opacity: 1;">
                          <line
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="0"
                            style="stroke: rgb(119, 119, 119); stroke-width: 1;"
                          ></line>
                          <text
                            dominant-baseline="central"
                            text-anchor="end"
                            transform="translate(-16,0) rotate(0)"
                            style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
                          >
                            200
                          </text>
                        </g>
                        <line
                          x1="0"
                          x2="0"
                          y1="0"
                          y2="207.625"
                          style="stroke: transparent; stroke-width: 1;"
                        ></line>
                      </g>
                      <path
                        d="M0,147L58.7,159L117.4,27L176.1,128L234.8,110L293.5,0"
                        fill="none"
                        stroke-width="2"
                        stroke="#e11d48"
                      ></path>
                      <path
                        d="M0,164L58.7,68L117.4,146L176.1,60L234.8,181L293.5,51"
                        fill="none"
                        stroke-width="2"
                        stroke="#2563eb"
                      ></path>
                      <g>
                        <g transform="translate(293.5, 0)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#e11d48"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(234.8, 110)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#e11d48"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(176.10000000000002, 128)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#e11d48"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(117.4, 27)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#e11d48"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(58.7, 159)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#e11d48"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(0, 147)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#e11d48"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(293.5, 51)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#2563eb"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(234.8, 181)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#2563eb"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(176.10000000000002, 60)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#2563eb"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(117.4, 146)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#2563eb"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(58.7, 68)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#2563eb"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                        <g transform="translate(0, 164)" style="pointer-events: none;">
                          <circle
                            r="3"
                            fill="#2563eb"
                            stroke="transparent"
                            stroke-width="0"
                            style="pointer-events: none;"
                          ></circle>
                        </g>
                      </g>
                      <g transform="translate(0,0)">
                        <rect
                          data-ref="mesh-interceptor"
                          width="293.5"
                          height="207.625"
                          fill="red"
                          opacity="0"
                          style="cursor: auto;"
                        ></rect>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border shadow-sm rounded-lg">
        <div class="relative w-full overflow-auto">
          <table class="w-full caption-bottom text-sm">
            <thead class="[&amp;_tr]:border-b">
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  ID
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Name
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Email
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Role
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Status
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="[&amp;_tr:last-child]:border-0">
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">1</td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">John Doe</td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">john@example.com</td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Admin</td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    Active
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div class="flex items-center gap-2">
                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-4 w-4"
                      >
                        <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                        <line x1="18" x2="12" y1="9" y2="15"></line>
                        <line x1="12" x2="18" y1="9" y2="15"></line>
                      </svg>
                      <span class="sr-only">Edit</span>
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-4 w-4"
                      >
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      </svg>
                      <span class="sr-only">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2</td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Jane Smith</td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">jane@example.com</td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">User</td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    Active
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div class="flex items-center gap-2">
                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-4 w-4"
                      >
                        <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                        <line x1="18" x2="12" y1="9" y2="15"></line>
                        <line x1="12" x2="18" y1="9" y2="15"></line>
                      </svg>
                      <span class="sr-only">Edit</span>
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-4 w-4"
                      >
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      </svg>
                      <span class="sr-only">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">3</td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Bob Johnson</td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">bob@example.com</td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">User</td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    Pending
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div class="flex items-center gap-2">
                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-4 w-4"
                      >
                        <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                        <line x1="18" x2="12" y1="9" y2="15"></line>
                        <line x1="12" x2="18" y1="9" y2="15"></line>
                      </svg>
                      <span class="sr-only">Edit</span>
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-4 w-4"
                      >
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      </svg>
                      <span class="sr-only">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">4</td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Alice Williams</td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">alice@example.com</td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">User</td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    Inactive
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div class="flex items-center gap-2"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</div>


</template>