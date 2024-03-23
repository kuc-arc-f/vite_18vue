<script setup lang="ts">
//import HelloWorld from './components/HelloWorld.vue'
import { RouterLink } from 'vue-router';
import Header from './components/Header.vue'
//
const pages = import.meta.glob('./client/*.vue', { eager: true })
const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/client\/(.*)\.vue$/)[1]
  return {
    name,
    path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
    component: pages[path].default,
  }
})
console.log("#App.vue");
console.log(routes);
let items = routes;
</script>

<template>
  <div>
    <Header />
    <hr />
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>

<!--
<hr />
<h1>hello, vue</h1>
<router-link to="/about">About</router-link>
<router-link to="{ path: item.path }">link={{ item.name }}</router-link>
<li v-for="item in items" :key="item.id">
  <a href={{item.path}}>{{ item.name }}</a><br />
  <router-link to="{ 
  name: 'post',
  params: {{id: item.path }} 
  }
  ">link={{ item.name }}</router-link>
</li>
<hr />
-->