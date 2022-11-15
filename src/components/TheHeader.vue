<script setup>
import { RouterLink } from "vue-router";
import { siteInfo, navigationData } from "@/data/index.js";

const brandData = {
  name: siteInfo.title, //"Jon Strunk, Ph.D.",
  logoPath: siteInfo.logo, //"/logo.svg",
};
</script>

<template>
  <header class="sticky top-0 z-50 pb-1">
    <nav>
      <div class="navbar bg-base-300 rounded-3xl">
        <!-- Display Branding Name and Logo on the top Left  -->
        <div class="navbar-start shrink-1">
          <a class="btn btn-ghost normal-case text-xl">
            <RouterLink to="/">
              <div class="flex items-stretch">
                <div class="self-center">
                  <img :src="`${brandData.logoPath}`" width="50" />
                </div>
                <div class="self-center ml-5">
                  <h1>{{ brandData.name }}</h1>
                </div>
              </div>
            </RouterLink>
          </a>
        </div>
        <!-- Navigation Links -->
        <!-- For large screens display links across the top of the navbar -->
        <div class="navbar-end">
          <ul class="menu menu-horizontal p-0 hidden lg:flex shrink-0">
            <li v-for="item in navigationData" :key="item.name">
              <RouterLink class="btn btn-ghost" :to="item.path"
                ><font-awesome-icon class="ml-2" :icon="`${item.icon}`" />
                <p>{{ item.name }}</p>
              </RouterLink>
            </li>
          </ul>

          <!-- For less than a large screen use a drop down menu -->
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <font-awesome-icon class="text-2xl" icon="fa-solid fa-bars" />
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-base-300"
            >
              <li v-for="item in navigationData" :key="item.name">
                <RouterLink :to="item.path"
                  ><font-awesome-icon :icon="`${item.icon}`" />{{
                    item.name
                  }}</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
