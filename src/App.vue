<script setup lang="ts"></script>

<template>
  <nav>
    <router-link to="/">Welcome</router-link>
    <router-link to="/list">List</router-link>
  </nav>
  <div>
    <router-view />
  </div>
</template>

<style scoped></style>
