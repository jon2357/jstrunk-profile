<template>
  <div
    tabindex="0"
    class="collapse collapse-plus border border-base-300 bg-base-300 rounded-2xl"
  >
    <input type="checkbox" class="peer" />
    <div class="collapse-title text-4xl font-bold text-center p-6">
      {{ title }}
    </div>

    <div class="collapse-content overflow-x-auto">
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
              v-for="el in headerInfo"
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
            <td>{{ el.date.getFullYear() }}</td>

            <td>
              <div class="tooltip tooltip-info" :data-tip="el.orgNameFull">
                <a :href="el.orgUrl" target="_blank" rel="noopener noreferrer">
                  <img
                    class="bg-zinc-300 h-10 max-w-min"
                    :src="el.orgLogoUrl"
                  />
                </a>
              </div>
            </td>
            <td class="whitespace-normal">
              <div
                class="text-left tooltip tooltip-info"
                :data-tip="el.citation"
              >
                <a :href="el.url" target="_blank" rel="noopener noreferrer">
                  {{ el.title }}
                </a>
              </div>
            </td>
            <td>{{ el.type }}</td>
            <td>{{ el.role }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import _orderBy from "lodash/orderBy";
import { getActivities } from "@/plugins/contentful.js";

const title = "Notable Activities";
const headerInfo = [
  {
    label: "Year",
    sortField: "date",
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
    label: "Type",
    sortField: "type",
  },
  {
    label: "Role",
    sortField: "role",
  },
];

const sortData = ref([]);
const sortDirection = ref("desc");
const sortField = ref("date");

// async function loadActivities() {
//   let res = await getActivities();
//   allActivities.value = res;
// }
// loadActivities();

getActivities()
  .then((value) => {
    sortData.value = _orderBy(value, sortField.value, sortDirection.value);
  })
  .catch((error) => console.log(error));

function sortBy(field) {
  if (sortDirection.value === "asc") {
    sortDirection.value = "desc";
  } else {
    sortDirection.value = "asc";
  }
  sortData.value = _orderBy(sortData.value, [field], [sortDirection.value]);
  sortField.value = field;
}
</script>
