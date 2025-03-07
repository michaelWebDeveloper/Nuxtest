<template>
  <div
      class="experience-item"
      v-for="(item, index) in ExperienceItems"
      :key="index">
    <div class="experience_point_wrapper">
      <div class="experience_point"></div>
    </div>
    <div class="experience_content">
      <div class="experience-item_position">{{ item.position }}</div>
      <div class="experience-item_company">{{ item.company }}</div>
      <div class="experience-item_period_wrapper">
        <div class="experience-item_period">{{ item.period }}</div>
      </div>
      <div class="experience-item_site">{{ item.site }}</div>
      <div class="experience-item_description">{{ item.description }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Const
import { ExperienceItems } from "~/data/ExperienceItems";
</script>

<style scoped>
.experience-item {
  margin-bottom: 30px;
  position: relative;
  padding-left: 30px;
  border-left: 3px solid #d8d8d8;
}

.experience-item_position {
  font-size: 20px;
  margin-bottom: 10px;
}

.experience_point_wrapper {
  position: absolute;
  top: -6px;
  left: -20px;
  background-color: #181818;
  padding: 10px;
  border-radius: 50%
}

.experience_point {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #f4773a;
  box-shadow: 0 0 10px #e18a60;
}

.experience-item_period_wrapper {
  position: absolute;
  top: 2px;
  left: -125px;
  background-color: #232323;
  padding: 5px 20px 5px 10px;
}

.experience-item_period {
  text-align: center;
}
</style>