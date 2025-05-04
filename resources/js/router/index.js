import { createRouter, createWebHistory } from 'vue-router';
import PropertyForm from '../components/PropertyForm.vue';
import PropertyList from '../components/PropertyList.vue';

const routes = [
  { path: '/properties/create', component: PropertyForm },
  { path: '/properties', component: PropertyList },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
