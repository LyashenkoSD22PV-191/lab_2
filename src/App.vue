<template>
  <HeaderVue/>
  <CatalogVue/>
  <FooterVue/>
</template>

<script>
import HeaderVue from "@/components/HeaderVue";
import FooterVue from "@/components/FooterVue";
import CatalogVue from "@/components/CatalogVue";
export default {
  name: 'App',
  components: {
    CatalogVue,
    HeaderVue,
    FooterVue,
  }
}
</script>

