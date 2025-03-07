<template>
  <div class="experience">
    <h2 class="experience_title">Опыт</h2>
    <ExperienceItem/>
  </div>
</template>

<script lang="ts" setup>
// Components
import ExperienceItem from '~/components/landing/ExperienceItem.vue'
</script>

<style scoped>
.experience {
  display: flex;
  flex-direction: column;
  margin-top: 70px;
}

.experience_title {
  margin-bottom: 40px;
}
</style>