<template>
  <div class="app">
    <div class="wrapper">
      <HeaderVue></HeaderVue>
      <main class="container">
        <router-view/>
      </main>
    </div>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import HeaderVue from "@/components/HeaderVue";
import FooterVue from "@/components/FooterVue";
export default {
  name: 'App',
  components: {
    HeaderVue,
    FooterVue,
  }
}
let message = prompt("Как вас зовут?");
alert("Добро пожаловать "+ message);
</script>

