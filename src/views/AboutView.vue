<template>
  <!-- Insert Hero section with an image and a long description -->
  <section id="hero">
    <BaseHeroSection
      :title="inputData.title"
      :description="inputData.description"
      :imageUrl="inputData.imageUrl"
      :imageAlt="inputData.imageAlt"
    />
  </section>
  <div class="divider"></div>
  <!-- Insert a time line section  -->
  <section id="timeline">
    <AboutTimeLineSection
      :title="aboutMe.timeLineTitle"
      :timeline="aboutMe.timeLine"
    />
  </section>

  <!-- *TODO: Insert: Full Experience Information -->
  <div class="divider"></div>
  <AboutEducationSection />
  <div class="divider"></div>
  <AboutCorporateSection />
  <div class="divider"></div>
  <AboutActivityTable />
  <!-- ! Diags: Delete once section is completed -->
  <section id="Diags">
    <div class="divider"></div>
    <div></div>
  </section>
</template>

<!-- Code -->
<script setup>
import { aboutMe } from "@/data";
import BaseHeroSection from "../components/Base/BaseHeroSection.vue";
import AboutTimeLineSection from "@/components/About/AboutTimeLineSection.vue";
import AboutActivityTable from "../components/About/AboutActivityTable.vue";
import AboutEducationSection from "../components/About/AboutEducationSection.vue";
import AboutCorporateSection from "../components/About/AboutCorporateSection.vue";
const inputData = aboutMe;
</script>

<!-- Full Experience Summary
    - Data is in contentful

Summary Section
	- Aggregate Counts: 
		○ Category (Completed Works, Volunteer, Awards)
		○ Roles (Primary, Contributor, Mentor)

Full on Table
  - Filtering Options
    - Type
    - Role
    - Category

  - Table Columns (on Mobile: Hide Month, Category, Type, Role Columns: Keep Filtering options) Should auto sort by date descending: year, month
		1. Year
		2. Month
		3. Category
		4. Type
		5. Role
		6. Organization (Logo image on top, Abbreviated name on bottom) (links to the organization site, tool tip should be Organization Full Name)
		7. Title (links to the website if there is one, tooltip should be either citation or description)

  -->
