<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Manejo de cheques
    
    p Los procedimientos de emisión de cheques son uno de los más fáciles de administrar y uno de los más críticos, ya que a menudo tiene el mayor margen de error y potencialmente, de fraude. 
    p Es conveniente conocer el procedimiento, así:

    figure.mb-4(data-aos="zoom-in")
      img(src='@/assets/curso/tema3/img01.svg')

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1.	Características de documentos comerciales
    
    p Si se contextualiza de cerca la definición de un cheque, queda claro que un cheque tiene los siguientes 10 elementos o características esenciales:

    AcordionA.mb-5(tipo="a" clase-tarjeta="BGR01")
      .row.justify-content-center(titulo="Instrumento por escrito")
        .col-md-6.order-md-1.order-2
          p Un cheque debe ser por escrito. Una orden verbal de pago no constituye un cheque.
        .col-md-5.col-10.order-md-2.order-1.mb-md-0.mb-4
          img(src='@/assets/curso/tema3/img02.png')
      .row.justify-content-center(titulo="Debe girarse sobre el banquero")
        .col-md-6.order-md-1.order-2
          p Siempre gira sobre un banquero específico. Un cheque se puede girar en un banco donde el girador tiene una cuenta, caja de ahorros o corriente.
        .col-md-5.col-10.order-md-2.order-1.mb-md-0.mb-4
          img(src='@/assets/curso/tema3/img03.png')
      .row.justify-content-center(titulo="Incondicional")
        .col-md-6.order-md-1.order-2
          p Un cheque es una orden de pago y no es una solicitud. La orden debe ser incondicional.
        .col-md-5.col-10.order-md-2.order-1.mb-md-0.mb-4
          img(src='@/assets/curso/tema3/img04.png')
      .row.justify-content-center(titulo="El cheque debe contener una orden de pago de cierta suma")
        .col-md-6.order-md-1.order-2
          p Si se libra un cheque para hacer algo además de pagar dinero, o que no sea para pagarlo, no puede ser un cheque.
        .col-md-5.col-10.order-md-2.order-1.mb-md-0.mb-4
          img(src='@/assets/curso/tema3/img05.png')
      .row.justify-content-center(titulo="Debe estar firmado por el librador y debe estar fechado")
        .col-md-6.order-md-1.order-2
          p Un cheque no tiene validez a menos que esté firmado por el librador original. También debe estar fechado.
        .col-md-5.col-10.order-md-2.order-1.mb-md-0.mb-4
          img(src='@/assets/curso/tema3/img06.png')
      .row.justify-content-center(titulo="Es pagadero a la vista")
        .col-md-6.order-md-1.order-2
          p Un cheque debe ser una orden de pago de una determinada suma de dinero a la vista; pero no es necesaria la palabra 'a la vista' o palabras equivalentes.
        .col-md-5.col-10.order-md-2.order-1.mb-md-0.mb-4
          img(src='@/assets/curso/tema3/img07.png')
      .row.justify-content-center(titulo="Validez")
        .col-md-6.order-md-1.order-2
          p Normalmente un cheque tiene una validez de seis meses a partir de la fecha en que se emite. A partir de entonces se denomina cheque vencido. Un cheque posfechado o antedatado no será inválido. En ambos casos se presume que la validez del cheque comienza a partir de la fecha indicada en el mismo.
        .col-md-5.col-10.order-md-2.order-1.mb-md-0.mb-4
          img(src='@/assets/curso/tema3/img08.png')
      .row.justify-content-center(titulo="Puede ser pagadero al propio girador")
        .col-md-6.order-md-1.order-2
          p Los cheques pueden ser pagaderos al propio girador. Puede girarse pagadero al portador a la vista, a diferencia de una letra o un bono.
        .col-md-5.col-10.order-md-2.order-1.mb-md-0.mb-4
          img(src='@/assets/curso/tema3/img09.png')
      .row.justify-content-center(titulo="Solo para un banquero específico")
        .col-md-6.order-md-1.order-2
          p Un cheque siempre se libra solo a nombre de un banquero en particular. Por lo general, el nombre y la dirección del banquero están claramente impresos en la hoja del cheque.
        .col-md-5.col-10.order-md-2.order-1.mb-md-0.mb-4
          img(src='@/assets/curso/tema3/img10.png')
      .row.justify-content-center(titulo="No requiere aceptación y sello")
        .col-md-6.order-md-1.order-2
          p A diferencia de una letra de cambio, el cheque no requiere aceptación por parte del girado; sin embargo, existe una costumbre entre los bancos de marcar los cheques como "buenos" a los efectos de compensación. Pero esta marca no es una aceptación, del mismo modo, no es necesario colocar un sello fiscal en los cheques.
        .col-md-5.col-10.order-md-2.order-1.mb-md-0.mb-4
          img(src='@/assets/curso/tema3/img11.png')

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2.	Formas y tipos

    .row.justify-content-center.align-items-center.mb-4
      .col-md-5.col-10.mb-md-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img12.png')
      .col-md-7
        p Un cheque es un documento que puede emitir al banco, indicando que pague la suma especificada mencionada en dígitos y palabras a la persona cuyo nombre figura en el cheque.
        p Los cheques también se denominan instrumentos negociables. En términos bancarios, un instrumento negociable es un documento que promete a su portador el pago de la cantidad especificada, ya sea al entregar el documento al banquero o en una fecha determinada.
        p.mb-0 La cantidad de tipos de cheques en uso depende de elementos como quién es el emisor y quién es el librado.

    p Observe  detenidamente los tipos de cheques:
  
    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema3/img13.png')
      .BGR05.p-3(x="73%" y="35%" numero="1")
        .h4.mb-2 1. Cheque al portador
        p Es aquel en el cual el pago se hace a la persona que lleva el cheque. Estos cheques son transferibles por entrega, es decir, si lleva el cheque al banco se le puede emitir el pago. Los bancos no necesitan ninguna otra autorización del emisor para poder realizar el pago.
        p.mb-0 #[strong ¿Cómo identificar un cheque al portador?] Sabe que es un cheque al portador cuando ve las palabras “o al portador" impresas en este.
      .BGR05.p-3(x="17.5%" y="46%" numero="2")
        .h4.mb-2 2. Comprobación del pedido
        p.mb-0 En estos cheques las palabras "o al portador" están canceladas. Dichos cheques solo se pueden emitir a nombre de la persona cuyo nombre se menciona en el cheque, y el banco realizará una verificación de antecedentes para autenticar la identidad del portador del cheque antes de liberar el pago.
      .BGR05.p-3(x="73%" y="46%" numero="3")
        .h4.mb-2 3. Cheque cruzado 
        p.mb-0 Es posible que haya observado cheques con dos líneas paralelas inclinadas con las palabras "beneficiario a/c" escritas en la parte superior izquierda, so es un cheque cruzado. Las líneas aseguran que, independientemente de quién presente el cheque, el pago solo se realizará a la persona cuyo nombre está escrito en el cheque, en otras palabras, el beneficiario del a/c junto con el número de cuenta. Estos cheques son relativamente seguros porque solo se pueden cobrar en el banco del librado.
      .BGR05.p-3(x="22%" y="54.5%" numero="4")
        .h4.mb-2 4. Cheque abierto
        p.mb-0 Es básicamente un cheque sin cruzar. Este cheque se puede cobrar en cualquier banco y el pago se puede hacer a la persona que lleva el cheque. Este cheque es transferible del beneficiario original (el destinatario original del pago) a otro beneficiario también. El emisor debe poner la firma tanto en el anverso como en el reverso del cheque.
      .BGR05.p-3(x="17.5%" y="62.5%" numero="5")
        .h4.mb-2 5. Cheque posfechado
        p.mb-0 Este tipo de cheques tienen una fecha posterior de cobro. Incluso si el portador presenta este cheque al banco inmediatamente después de recibirlo, el banco solo procederá el pago en la fecha mencionada en el cheque. Este cheque es válido después de la fecha mencionada, pero no antes.
      .BGR05.p-3(x="78.5%" y="54.5%" numero="6")
        .h4.mb-2 6. Cheque vencido
        p.mb-0 Tres meses después de la fecha de emisión se denomina cheque vencido.
      .BGR05.p-3(x="47%" y="65%" numero="7")
        .h4.mb-2 7. Cheque de viajero 
        p.mb-0 Los extranjeros de vacaciones llevan cheques de viajero en lugar de dinero en efectivo, lo que puede ser engorroso. Estos cheques son emitidos por un banco y pueden cobrarse en forma de moneda en un banco ubicado en otro lugar o país. Los cheques de viajero no caducan y pueden utilizarse en futuros viajes.
      .BGR05.p-3(x="58%" y="70.5%" numero="8")
        .h4.mb-2 8. Autocomprobación 
        p.mb-0 Puede identificar los autocheques por la palabra "auto" escrita en la columna girada. Los autocheques solo se pueden girar en el banco del emisor.
      .BGR05.p-3(x="52%" y="76.5%" numero="9")
        .h4.mb-2 9. Cheque bancario
        p.mb-0 Un banco es el emisor de este tipo de cheques. El banco emite estos cheques a nombre del titular de una cuenta para hacer una remesa a otra persona en la misma ciudad. Aquí, el monto especificado se debita de la cuenta del cliente y luego, el banco emite el cheque.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3.	Procedimientos de visación
    
    p Los cheques no vienen con instrucciones y se cometen errores al escribir uno, lo que podría afectar financieramente. Pero una vez que comprenda las diferentes partes de un cheque, con seguridad se realizarán sin ningún temor al completar, recibir y depositar cheques en papel.
    p Los cheques contienen información preimpresa que es importante comprender, así como secciones en blanco que deben completarse con cuidado y precisión cada vez que se escribe un cheque.
    p.mb-5 A continuación se mencionan las secciones o partes que debe contener un cheque con la justificación:

    .row.justify-content-center.mb-4
      .col-md-3.col-10.mb-4
        .tarjeta-avatar-b.img02(data-aos="fade-right")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img14.png' alt='AvatarTop')
          .BGR04.p-4
            p.ms-2.mb-0 #[strong Información personal]: proporciona detalles sobre el titular de la cuenta, quien paga el dinero.
      .col-md-3.col-10.mb-4
        .tarjeta-avatar-b.img02(data-aos="zoom-in")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img15.png' alt='AvatarTop')
          .BGR04.p-4
            p.ms-2.mb-5 #[strong Línea de beneficiario]: designa quién puede recibir el dinero.
      .col-md-3.col-10.mb-4
        .tarjeta-avatar-b.img02(data-aos="zoom-in")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img16.png' alt='AvatarTop')
          .BGR04.p-4
            p.ms-2.mb-5 #[strong Valor]: muestra el valor del cheque en formato numérico.
      .col-md-3.col-10.mb-4
        .tarjeta-avatar-b.img02(data-aos="fade-left")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img17.png' alt='AvatarTop')
          .BGR04.p-4
            p.ms-2.mb-0 #[strong Monto del cheque]: esto se escribe en una sección usando palabras en lugar de números.
      .col-md-3.col-10.mb-4
        .tarjeta-avatar-b.img02(data-aos="fade-right")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img18.png' alt='AvatarTop')
          .BGR04.p-4
            p.ms-2.mb-0 #[strong Línea de notas]: un espacio para cualquier nota sobre el propósito del cheque.
      .col-md-3.col-10.mb-4
        .tarjeta-avatar-b.img02(data-aos="zoom-in")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img19.png' alt='AvatarTop')
          .BGR04.p-4
            p.ms-2.mb-4 #[strong Línea de fecha]: sirve como marca de tiempo para el cheque.
      .col-md-3.col-10.mb-4
        .tarjeta-avatar-b.img02(data-aos="zoom-in")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img20.png' alt='AvatarTop')
          .BGR04.p-4
            p.ms-2.mb-0 #[strong Línea de firma]: verifica que el propietario de la cuenta haya aprobado el pago.
      .col-md-3.col-10.mb-4
        .tarjeta-avatar-b.img02(data-aos="fade-left")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img21.png' alt='AvatarTop')
          .BGR04.p-4
            p.ms-2.mb-0 #[strong La información de contacto y/o el logotipo del banco]: generalmente está impreso en el cheque.
      .col-md-3.col-10.mb-4
        .tarjeta-avatar-b.img02(data-aos="fade-right")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img22.png' alt='AvatarTop')
          .BGR04.p-4
            p.ms-2.mb-0 #[strong El número de ruta de la asociación de banqueros]: esto les dice a los bancos dónde encontrar los fondos para el cheque.
      .col-md-3.col-10.mb-4
        .tarjeta-avatar-b.img02(data-aos="zoom-in")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img23.png' alt='AvatarTop')
          .BGR04.p-4
            p.ms-2.mb-4 #[strong Número de cuenta]: es el identificador que le permite al destinatario saber de dónde provendrá el dinero del cheque.
      .col-md-3.col-10.mb-4
        .tarjeta-avatar-b.img02(data-aos="fade-left")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img24.png' alt='AvatarTop')
          .BGR04.p-4
            p.ms-2.mb-4 #[strong El número del cheque]: aparece en dos lugares y es una medida de seguridad para identificar cada pago y evitar fraudes.

    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4.	Seguridad y normatividad vigente

    p.mb-5 Los lineamientos normativos que reglamentan todos los elementos del cheque están establecidos por la legislación nacional, a través de la Ley 15 del año 1916. A continuación se presenta lo más relevante: 

    .tabla-b.color-acento-contenido.mb-5(data-aos="zoom-in")
      .tabla-b__header
        h4.mb-0 LEY 75 de 1916
      table
        tr
          th(style="background-color: #FED5B1;" colspan="3").text-center ARTÍCULO
          th(style="background-color: #FED5B1;" colspan="9").text-center DESCRIPCIÓN   
        tr
          td.text-center.text-bold(colspan="3") Artículo 1.°
          td(colspan="9") La orden de pago escrita conocida con el nombre de cheque permite al girador retirar en provecho propio o en el de un tercero, todos o parte de los fondos que tenga disponibles en poder del girado, en la forma y con los requisitos que esta ley determina.
        tr
          td.text-center.text-bold(colspan="3") Artículo 2.°
          td(colspan="9") El cheque deberá tener la expresión de su número de orden, de plaza y de la fecha en que se gira, la designación de la persona a cuyo favor se extiende y la de girado, la cantidad que se gira, expresada en letras y números, y la firma del girador o de la persona que suscriba por él.
        tr
          td.text-center.text-bold(colspan="3") Artículo 3.°
          td(colspan="9") Los cheques a la orden podrán endosarse en la forma regular, y en este caso serán aplicables a ellos las reglas relativas al endoso y solidaridad establecidas en el Código de Comercio para las letras de cambio giradas a la vista.
        tr
          td.text-center.text-bold(colspan="3") Artículo 4.°
          td(colspan="9") El cheque no puede ser girado si no a la vista.
        tr
          td.text-center.text-bold(colspan="3") Artículo 5.°
          td(colspan="9") Son aplicables al cheque las reglas relativas a la solidaridad, aval, pago, protesto por falta de pago, extravío, intervención y prescripción, establecidas en el Código de Comercio paras las letras de cambio giradas a las vista, y al ejercicio, en esos casos, de las acciones provenientes de tales letras, salvo disposiciones especiales de esta Ley.
        tr
          td.text-center.text-bold(colspan="3") Artículo 6.°
          td(colspan="9") El cheque debe ser presentado para su pago dentro del término de treinta días, si su emisión se hizo en la misma plaza en que debe ser pagado dentro de sesenta días, si es en plaza distinta en la República, y dentro de ciento veinte días si es en plaza extranjera.
        tr
          td.text-center.text-bold(colspan="3") Artículo 7.°
          td(colspan="9") Cuando la emisión de un cheque sin previa provisión de fondos o sin autorización del girado no constituye estafa, se castigará con la pena de dos a seis meses de arresto.
        tr
          td.text-center.text-bold(colspan="3") Artículo 8.°
          td(colspan="9") El girador o cualquier tenedor legal de un cheque podrá establecer en él que se pague por conducto de un banco, banquero o sociedad de comercio legalmente constituida, lo cual se indicará por medio de dos líneas paralelas trazadas transversalmente en el anverso del cheque.
        tr
          td.text-center.text-bold(colspan="3") Artículo 9.°
          td(colspan="9") El girador o cualquier tenedor legal de un cheque podrá establecer en él que se pague por conducto de un banco, banquero o sociedad de comercio legalmente constituida, lo cual indicará por medio de dos líneas paralelas trazadas transversalmente en el anverso del cheque.
        tr 
          td.text-center.text-bold(colspan="3") Artículo 10.°
          td(colspan="9") El girado que pagare un cheque en contravención a lo dispuesto en los artículos anteriores será responsable con el verdadero dueño del cheque por cualquier pérdida que este sufriere, como consecuencia de su pago irregular.


</template>
<script>
export default {
  name: 'Tema3',
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
