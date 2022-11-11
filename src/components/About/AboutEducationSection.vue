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
            <td>{{ el.dateEnd.getFullYear() }}</td>

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
            <td>{{ el.award }}</td>
            <td>{{ el.programName }}</td>

            <td class="whitespace-normal">
              <a :href="el.url" target="_blank" rel="noopener noreferrer">
                {{ el.description }}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
// Completed [month/Year] (dateEnd)
// Organization (orgLogoUrl, orgNameAb, orgNameFull, orgUrl)
// Award (award)
// Program (programName)
// Description (description)

import { ref } from "vue";
import { getTraining } from "@/plugins/contentful.js";
import _orderBy from "lodash/orderBy";

const title = "Education & Training";
const sortData = ref([]);
const sortDirection = ref("desc");
const sortField = ref("dateEnd");

function sortBy(field) {
  if (sortDirection.value === "asc") {
    sortDirection.value = "desc";
  } else {
    sortDirection.value = "asc";
  }
  sortData.value = _orderBy(sortData.value, [field], [sortDirection.value]);
  sortField.value = field;
}

getTraining()
  .then((value) => {
    sortData.value = _orderBy(value, sortField.value, sortDirection.value);
  })
  .catch((error) => console.log(error));

const headerRow = [
  {
    label: "Completed",
    sortField: "dateEnd",
  },
  {
    label: "Organization",
    sortField: "orgNameFull",
  },
  {
    label: "Award",
    sortField: "award",
  },
  {
    label: "Program",
    sortField: "programName",
  },
  {
    label: "Description",
    sortField: "description",
  },
];
</script>
