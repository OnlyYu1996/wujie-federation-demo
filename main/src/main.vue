<template>
  <div class="layout-app">
    <!-- host app HOST-->
    <div class="app-label">
      # Hosting App [HOST]
    </div>
    <h1>main App 1</h1>
    <div class="remote-component">
      <!-- remote-component REMOTE -->
      <div class="app-label">
        #remote-component [REMOTE]
      </div>
      <layout-element />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
components: {
    LayoutElement: defineAsyncComponent(() => import('layout/Layout'))
  }
};
</script>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
.remote-component {
  border: 1px solid blue;
  padding: 10px;
}
.layout-app {
  border: 1px solid green;
  padding: 10px;
}
.app-label {
  padding: 5px 2px;
  font-style: italic;
  font-size: 20px;
  color: gray;
}
</style>
