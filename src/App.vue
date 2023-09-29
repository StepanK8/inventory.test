<template>
  <inventory-view/>
</template>

<script setup>
import InventoryView from '@/views/InventoryView.vue'
</script>

<style lang="scss">
@import '@/style/template.scss';
@import '@/style/reset.scss';



/* Удаляем все анимации и переходы для людей, которые предпочитай их не использовать */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
// @font-face {
//   font-family: "Montserrat";
//   src: url("@/fonts/Montserrat.ttf") format("truetype");
//   font-style: normal;
//   font-weight: normal;
// }

@font-face {
  font-family: "Montserrat-bd";
  src: url("@/fonts/Montserrat-bd.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "Montserrat";
  src: url("@/fonts/Montserrat-md.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "CeraPro";
  src: url("@/fonts/CeraPro.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "CeraProRegular";
  src: url("@/fonts/CeraPro-Regular.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "ArialNova";
  src: url("@/fonts/ArialNova.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "ArialBold";
  src: url("@/fonts/ArialNova-Bold.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "Halvar";
  src: url("@/fonts/Halvar.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "Halvar-bd";
  src: url("@/fonts/Halvar_bold.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "Halvar-th";
  src: url("@/fonts/Halvar_thin.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

</style>
