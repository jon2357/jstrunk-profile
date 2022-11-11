<template>
  <div
    tabindex="0"
    class="collapse collapse-plus border border-base-300 bg-base-300 rounded-2xl"
  >
    <input type="checkbox" class="peer" />
    <div class="collapse-title text-4xl font-bold text-center p-6">
      {{ title }}
    </div>
    <div class="collapse-content">
      <table
        class="table table-auto w-full table-zebra table-normal"
        data-role="table"
        data-pagination="true"
      >
        <!-- head -->
        <thead>
          <tr>
            <td
              class="hover:bg-secondary min-w-fit"
              v-for="el in headerRow"
              :key="el"
              @click="sortBy(el.sortField)"
            >
              <p class="">
                {{ el.label }}
                <font-awesome-icon
                  v-if="
                    (sortField === el.sortField) & (sortDirection === 'asc')
                  "
                  class="px-1"
                  icon="fa-solid fa-arrow-down"
                />
                <font-awesome-icon
                  v-else-if="
                    (sortField === el.sortField) & (sortDirection === 'desc')
                  "
                  class="px-1"
                  icon="fa-solid fa-arrow-up"
                />
              </p>
            </td>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr class="hover" v-for="el in sortData" :key="el.id">
            <td v-if="el.dateEnd.getFullYear()">
              {{ el.dateEnd.getFullYear() }}
            </td>
            <td v-else>Active</td>

            <td>
              <div class="tooltip tooltip-info" :data-tip="el.orgNameFull">
                <a :href="el.orgUrl" target="_blank" rel="noopener noreferrer">
                  <img
                    class="bg-zinc-300 h-10 max-w-min"
                    :src="el.orgLogoUrl"
                  />{{ el.orgNameAb }}
                </a>
              </div>
            </td>
            <td>{{ el.title }}</td>
            <td class="whitespace-normal">
              <a :href="el.url" target="_blank" rel="noopener noreferrer">
                {{ el.description }}
              </a>
              <ul class="ml-6">
                <li
                  class="list-disc text-sm"
                  v-for="item in el.achievements"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ul>
            </td>
            <td class="whitespace-normal">
              <ul>
                <li
                  class="list-disc text-sm"
                  v-for="item in el.technologyStack"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getCorporate } from "@/plugins/contentful.js";
import _orderBy from "lodash/orderBy";

const title = "Corporate & Industry";
const sortData = ref([]);
const sortDirection = ref("desc");
const sortField = ref("dateStart");

function sortBy(field) {
  if (sortDirection.value === "asc") {
    sortDirection.value = "desc";
  } else {
    sortDirection.value = "asc";
  }
  sortData.value = _orderBy(sortData.value, [field], [sortDirection.value]);
  sortField.value = field;
}

getCorporate()
  .then((value) => {
    sortData.value = _orderBy(value, sortField.value, sortDirection.value);
  })
  .catch((error) => console.log(error));

const headerRow = [
  {
    label: "Completed",
    sortField: "dateStart",
  },
  {
    label: "Organization",
    sortField: "orgNameFull",
  },
  {
    label: "Title",
    sortField: "title",
  },
  {
    label: "Description",
    sortField: "description",
  },
  {
    label: "Tech Stack",
    sortField: "technologyStack",
  },
];
</script>
