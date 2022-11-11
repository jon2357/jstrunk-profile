<template>
  <div
    tabindex="0"
    class="collapse collapse-open border border-base-300 bg-base-300 rounded-2xl"
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
            <td>
              {{
                el.date.getFullYear() +
                " " +
                Intl.DateTimeFormat("en-US", { month: "long" }).format(el.date)
              }}
            </td>
            <td>{{ el.event }}</td>
            <td>{{ el.title }}</td>
            <td class="whitespace-normal">
              <ul>
                <li
                  class="badge badge-outline m-1 text-sm"
                  v-for="item in el.category"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ul>
            </td>
            <td class="whitespace-normal">
              <ul>
                <li
                  class="btn btn-accent text-sm"
                  v-for="item in el.resources"
                  :key="item.id"
                >
                  <a
                    :href="item.fields.file.url"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ item.fields.title }}
                  </a>
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
// Completed [month/Year] (dateEnd)
// Organization (orgLogoUrl, orgNameAb, orgNameFull, orgUrl)
// Award (award)
// Program (programName)
// Description (description)

import { ref } from "vue";
import { getResources } from "@/plugins/contentful.js";
import _orderBy from "lodash/orderBy";

const title = "Resources";
const sortData = ref([]);
const sortDirection = ref("desc");
const sortField = ref("date");

function sortBy(field) {
  if (sortDirection.value === "asc") {
    sortDirection.value = "desc";
  } else {
    sortDirection.value = "asc";
  }
  sortData.value = _orderBy(sortData.value, [field], [sortDirection.value]);
  sortField.value = field;
}

getResources()
  .then((value) => {
    sortData.value = _orderBy(value, sortField.value, sortDirection.value);
  })
  .catch((error) => console.log(error));

const headerRow = [
  {
    label: "Date",
    sortField: "date",
  },
  {
    label: "Event",
    sortField: "event",
  },
  {
    label: "Title",
    sortField: "title",
  },
  {
    label: "Category",
    sortField: "category",
  },
  {
    label: "Resources",
    sortField: "resources",
  },
];
</script>
