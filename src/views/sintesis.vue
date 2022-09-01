<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p La siguiente síntesis da cuenta de la gestión del efectivo o caja dentro de una organización, que se desarrolla a través de varios elementos esenciales para lograr la funcionalidad y la satisfacción de su naturaleza como controlar todo tipo de transferencia en cuanto al proceso que se realiza en el ejercicio y el tipo de medio de pago, de igual forma, fortalecer este proceso incorporando tecnología para la identificación y eliminación de algún riesgo que provenga de la moneda nacional o de los documentos comerciales que estén relacionados en el sector financiero.
    p.mb-5 La custodia y protección del efectivo se debe desarrollar mediante bóvedas, cajas fuertes o sitios seguros donde se establezcan por medio de procedimientos internos de prioridad y cumplimiento con la finalidad de implementar planes de protección de los recursos financieros, siempre enmarcados bajo los lineamientos normativos aplicados por las entidades competentes financieras o de ámbito legal nacional. Resumido todo lo anterior y la temática tratada en el componente formativo se presenta el mapa:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
