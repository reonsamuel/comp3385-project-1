<template>
  <div v-for="property in properties" :key="property.id">
    <h3>{{ property.title }}</h3>
    <p>{{ property.description }}</p>
    <img :src="`/storage/${property.photo}`" alt="Property photo" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const properties = ref([]);

onMounted(() => {
  fetch('/api/v1/properties')
    .then(res => res.json())
    .then(data => {
      properties.value = data.properties;
    });
});
</script>
