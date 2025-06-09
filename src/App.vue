<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layout/DefaultLayout.vue'
import RealGrid from "realgrid";

var realGrid2Lic = "upVcPE+wPOmtLjqyBIh9RkM/nBOseBrflwxYpzGZyYm9cY8amGDkiHqyYT2U1Yh3Dufv8SUhNy65cyAnOhnW72Se3PbBoyaMASYvQVgG5zUMAmcMJKztoIhXEbQI6QqFkxValpjT3ck=";
RealGrid.setLicenseKey(realGrid2Lic)
</script>

<style>
/* 그리드 스타일 */
@import "../node_modules/realgrid/dist/realgrid-style.css";

</style>