<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Transacciones en efectivo
    
    .row.justify-content-center.align-items-center.mb-4
      .col-md-4.col-8.mb-md-0.mb-4(data-aos="fade-right")
        figure.mb-4
          img(src='@/assets/curso/tema1/img01.png')
      .col-md-8
        p Implican el intercambio de efectivo por un activo. Debido a que el intercambio es inmediato el vendedor no asume ningún riesgo crediticio de que el comprador no pague, como sería el caso si se le concediera un crédito al comprador. Las transacciones en efectivo son más comunes para transacciones minoristas más pequeñas.
        p No existe el riesgo de que surja una deuda incobrable a partir de una transacción en efectivo, mientras que este es un riesgo siempre presente cuando se utilizan transacciones de crédito en su lugar.
        p.mb-0 Las transacciones en efectivo pueden estar orientadas al consumidor o al negocio, contrasta con otros modos de pago como las transacciones de crédito en un negocio que involucra efectos por cobrar. Del mismo modo, una transacción en efectivo también es diferente de las transacciones con tarjeta de crédito.
      .col-12
        p.mb-0 Un ejemplo de una transacción en efectivo es entrar a una tienda comprar ropa y pagar con una tarjeta débito. Un pago con tarjeta débito es lo mismo que un pago inmediato en efectivo, ya que el monto se debita instantáneamente de la cuenta bancaria; sin embargo, los pagos con tarjeta de crédito no tienen el mismo efecto para el comprador.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-7.order-md-1.order-2
        p En un pago con tarjeta de crédito el importe no se debita de la cuenta bancaria al instante. Pero, puede comprar el producto dentro del límite de crédito con la tarjeta y se debe realizar el pago solo después de la generación de la factura. Nuevamente, se disfruta de un período de crédito hasta la última fecha disponible para el pago.
        p Desde una perspectiva comercial las transacciones en efectivo por encima de un límite mínimo podrían ser rechazadas por la ley del impuesto sobre la renta. Una empresa también necesita informar todas las transacciones en efectivo más allá de un límite de umbral; sin embargo, desde la perspectiva del consumidor, no todas las transacciones en efectivo son reportables.
      .col-md-5.col-10.order-md-2.order-1.mb-md-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img02.jpg')

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1.	Medidas de seguridad de los billetes y monedas
    
    p.mb-5 Se debe aplicar los elementos de seguridad de los billetes con el fin de reconocer un billete como auténtico, estos tienen algunas características de seguridad como particularidades táctiles, nitidez, variación óptica y fluorescencia.

    .h4.mb-5(data-aos="fade-right") <span style="background-color:#FC8116 !important; color:#FC8116 !important;">oo</span>  Funciones de seguridad comunes utilizadas

    p Muchas casas de moneda nacionales han adoptado tecnologías antifalsificación similares para los billetes, estas son algunas: 

    .row.justify-content-center.mb-4
      .col-md-8.order-md-1.order-2(data-aos="fade-right")
        TabsA.color-acento-contenido.mb-5
          .BGR01.p-4(titulo="Dinero plástico")
            h4 Dinero plástico
            .row.justify-content-center.align-items-center
              .col-md-3.col-4.mb-md-0.mb-4
                img(src='@/assets/curso/tema1/img04.png')
              .col-md-9
                p El Banco de Canadá introdujo recientemente billetes de polímero que dificultan considerablemente la falsificación.
          .BGR01.p-4(titulo="Billetes de polímero")
            h4 Billetes de polímero
            .row.justify-content-center.align-items-center
              .col-md-3.col-4.mb-md-0.mb-4
                img(src='@/assets/curso/tema1/img05.png')
              .col-md-9
                p Fueron pioneros en Australia en 1988 y, al igual que Canadá, muchos países han hecho el cambio a polímero, incluidos el Reino Unido, Malasia, Chile, Nueva Zelanda y México.
          .BGR01.p-4(titulo="Hologramas")
            h4 Hologramas
            .row.justify-content-center.align-items-center
              .col-md-3.col-4.mb-md-0.mb-4
                img(src='@/assets/curso/tema1/img06.png')
              .col-md-9
                p Más de 300 denominaciones en 97 monedas utilizan hologramas para la protección, lo que los convierte en una de las características de seguridad más comunes a nivel mundial. Se pueden incorporar los diseños mediante hilos de seguridad, franjas, parches y elementos de ventana.
          .BGR01.p-4(titulo="Marcas de agua")
            h4 Marcas de agua
            .row.justify-content-center.align-items-center
              .col-md-3.col-4.mb-md-0.mb-4
                img(src='@/assets/curso/tema1/img07.png')
              .col-md-9
                p Una de las características de seguridad más comunes, las marcas de agua, que se crean utilizando diferentes grosores de papel en el proceso de impresión. Cuando se golpea con la luz, se iluminará una imagen.
          .BGR01.p-4(titulo="Microtexto")
            h4 Microtexto
            .row.justify-content-center.align-items-center
              .col-md-3.col-4.mb-md-0.mb-4
                img(src='@/assets/curso/tema1/img08.png')
              .col-md-9
                p El texto diminuto, que solo se puede leer con una lupa, es una característica de seguridad común en muchos billetes en todo el mundo.
          .BGR01.p-4(titulo="Funciones de cambio de color")
            h4 Funciones de cambio de color
            .row.justify-content-center.align-items-center
              .col-md-3.col-4.mb-md-0.mb-4
                img(src='@/assets/curso/tema1/img09.png')
              .col-md-9
                p Aproximadamente el 42% de los billetes emitidos desde 2011 utilizan funciones de cambio de color en las que las partes del billete cambian de color para el espectador según el ángulo.
          .BGR01.p-4(titulo="Hilo de seguridad")
            h4 Hilo de seguridad
            .row.justify-content-center.align-items-center
              .col-md-3.col-4.mb-md-0.mb-4
                img(src='@/assets/curso/tema1/img10.png')
              .col-md-9
                p Muchos billetes utilizan esta función de seguridad, que consiste en una cinta delgada que se pasa por el papel del billete.
          .BGR01.p-4(titulo="Marcas invisibles")
            h4 Marcas invisibles
            .row.justify-content-center.align-items-center
              .col-md-3.col-4.mb-md-0.mb-4
                img(src='@/assets/curso/tema1/img11.png')
              .col-md-9
                p Las notas también pueden incorporar tinta o marcas que solo son visibles con luz fluorescente o infrarroja, lo que las hace invisibles a simple vista.
      .col-md-4.col-8.order-md-2.order-1.mb-md-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img03.png')
    
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2.	Características y elementos

    p El peso colombiano es la moneda de curso legal de Colombia, su abreviación formal es COP, localmente con el signo pesos($). Esta moneda circula en Colombia desde 1810, año en que reemplazó al real que había funcionado hasta ese momento. Su circulación es controlada por el Banco de la República de Colombia.
    p A continuación  se relata cómo fue el origen e historia:

    .BGR01.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-5.col-11.order-md-1.order-2
            .h4 Tipos de monedas y billetes
            p La unidad monetaria de curso legal en Colombia, incluyendo sus islas de San Andrés y Providencia, es el peso colombiano. Esta divisa tiene en circulación, actualmente, cinco tipos de monedas y billetes de seis valores distintos. 
          .col-md-5.col-10.order-md-2.order-1.mb-md-0.mb-4
            img(src='@/assets/curso/tema1/img12.png')
        .row.justify-content-center.align-items-center
          .col-md-5.col-11.order-md-1.order-2
            .h4 Orígenes e historia
            p El peso colombiano es la moneda oficial que circula en Colombia desde 1810, año en que reemplazó al real, moneda de curso legal hasta esa fecha. Luego de una serie de cambios, en 1871 Colombia adoptó el patrón oro, vinculando el peso al franco francés a una tasa de cambio de un peso por cinco francos, tasa que se mantuvo hasta 1886.
          .col-md-5.col-10.order-md-2.order-1.mb-md-0.mb-4
            img(src='@/assets/curso/tema1/img13.png')
        .row.justify-content-center.align-items-center
          .col-md-5.col-11.order-md-1.order-2
            .h4 Creación del Banco de la República
            p En 1880 el presidente del país, Rafael Núñez, creó el Banco de la República de Colombia, que tenía, entre otras funciones, la tarea de imprimir el papel moneda, que a partir de 1888 sufrió una acelerada inflación. Después de la Primera Guerra Mundial, el país sufrió una serie de problemas monetarios, lo que llevó al presidente Pedro Nel Ospina a pedir consejo económico a los Estados Unidos de América en 1922. Los expertos estadounidenses partieron en una misión conocida como "la Misión Kemmerer". encabezada por Edwin Walter Kemmerer, bajo cuyas recomendaciones se creó en 1923 la actual autoridad emisora, El Banco de la República de Colombia.
          .col-md-5.col-10.order-md-2.order-1.mb-md-0.mb-4
            img(src='@/assets/curso/tema1/img14.png')
        .row.justify-content-center.align-items-center
          .col-md-5.col-11.order-md-1.order-2
            .h4 Convertibilidad del peso colombiano
            p La convertibilidad del peso colombiano en oro llegó a su fin en 1993, cuando una demanda interpuesta por el exsenador Pablo Victoria ante el Estado y el Concejo hizo que la palabra "dorado" y la frase "pagará al portador" se eliminaran de todos los billetes.
          .col-md-5.col-10.order-md-2.order-1.mb-md-0.mb-4
            img(src='@/assets/curso/tema1/img15.png')
        .row.justify-content-center.align-items-center
          .col-md-5.col-11.order-md-1.order-2
            .h4 Paralización de acuñación de moneda
            p Antes de que la moneda dejara de acuñar centavos en 1984, un peso se subdividió en cien centavos. La paralización de la acuñación de los centavos se debió a su nulidad como consecuencia de la alta inflación que azotó a Colombia en las décadas de 1970 y 1980.
          .col-md-5.col-10.order-md-2.order-1.mb-md-0.mb-4
            img(src='@/assets/curso/tema1/img16.png')
        .row.justify-content-center.align-items-center
          .col-md-5.col-11.order-md-1.order-2
            .h4 Evolución de la moneda colombiana
            p El país reemplazó el real colonial español con el real colombiano, y 17 años después se introdujo el actual peso como moneda de curso legal. En ese momento, un peso era ocho reales (plural o real).
          .col-md-5.col-10.order-md-2.order-1.mb-md-0.mb-4
            img(src='@/assets/curso/tema1/img17.png')
        .row.justify-content-center.align-items-center
          .col-md-5.col-11.order-md-1.order-2
            .h4 La nueva serie de monedas bimetálicas
            p Para 2002, la moneda estaba fuera de circulación y las acuñaciones de monedas de 5, 10 y 20 pesos mueren debido a la inflación. En 2012 el Banco de la República de Colombia introdujo en la economía una nueva serie de monedas de 500 y 1000 pesos, ahora acuñadas como monedas bimetálicas.
          .col-md-5.col-10.order-md-2.order-1.mb-md-0.mb-4
            img(src='@/assets/curso/tema1/img18.png')
        .row.justify-content-center.align-items-center
          .col-md-5.col-11.order-md-1.order-2
            .h4 Recuperación del peso colombiano
            p Si Colombia puede aprovechar su poder de capacidad de producción en caña de azúcar, petróleo crudo y briquetas de carbón, café, aguacate, aceite de palma, remar su sector energético y otros productos agrícolas que tienen una gran demanda en el mercado mundial, tal vez el peso colombiano se recupere.
          .col-md-5.col-10.order-md-2.order-1.mb-md-0.mb-4
            img(src='@/assets/curso/tema1/img19.png')

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3.	Protocolos de novedades en billetes
    
    .BGIMG01.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center
        .col-md-6.order-md-1.order-2
          .h4.mt-4 Los siguientes son consejos para evitar la falsificación de moneda en Colombia:
          ul.lista-ul--color
            li 
              i.fas.fa-exclamation-triangle
              | Si alguien se acerca por la calle y solicita que le cambie un billete, lo mejor es decir que no.
            li 
              i.fas.fa-exclamation-triangle
              | Tratar de cambiar billetes de grandes denominaciones en negocios de buena reputación, no en bares, restaurantes o pequeñas tiendas.
            li 
              i.fas.fa-exclamation-triangle
              | 	Cuando una vez se compruebe que un dinero es falso prestar especial atención a los billetes de 10, 20 y 50 mil, ya que la mayoría de los billetes falsos son de estas denominaciones.
            li 
              i.fas.fa-exclamation-triangle
              | Optar por llevar billetes de denominación pequeña para que no existan preocupaciones por el cambio.
            li 
              i.fas.fa-exclamation-triangle
              | Cuando se retire dinero de un banco o de un cajero automático verificar el dinero rápidamente frente al cajero o la cámara del cajero automático.
        .col-md-4.col-8.order-md-2.order-1.mb-md-0.mb-4
          img(src='@/assets/curso/tema1/img21.png')

    .h4.mb-5(data-aos="fade-right") <span style="background-color:#FC8116 !important; color:#FC8116 !important;">oo</span> Protocolos para detectar moneda falsa en Colombia 

    .row.justify-content-center.align-items-center.mb-5
      .col-md-3.col-6.mb-md-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img22.jpg')
      .col-md-9
        ul.lista-ul--color
          li 
            i.fas.fa-exclamation-triangle
            | #[strong Tratar de reconocer la apariencia de los billetes colombianos.]
          li 
            i.fas.fa-exclamation-triangle
            | #[strong Doblar un billete por la mitad y frotar las dos mitades para identificar la textura del dinero colombiano en las manos. La moneda colombiana genuina tiene una textura particular, mientras que los billetes falsos generalmente se sienten suaves.]
          li 
            i.fas.fa-exclamation-triangle
            | #[strong Observar para ver si todos los detalles y líneas finas en el billete están impresos claramente. Es muy difícil para los falsificadores reproducir las complejidades de los billetes colombianos.]
          li 
            i.fas.fa-exclamation-triangle
            | #[strong Sostener los billetes a contraluz y buscar marcas de agua.]
          li 
            i.fas.fa-exclamation-triangle
            | #[strong Inclinar los billetes bajo la luz y buscar los cambios de color en las tiras reflectantes de seguridad. Buscar escritura o imágenes en las tiras de seguridad.]

    .h4.mb-5(data-aos="fade-right") <span style="background-color:#FC8116 !important; color:#FC8116 !important;">oo</span> La nueva serie de billetes colombianos

    .row.justify-content-center.align-items-end.mb-4
      .col-md-8.order-md-1.order-2
        p El Banco Central de la República de Colombia presentó una nueva serie de billetes en 2016. #[strong La nueva familia de billetes colombianos consta de seis denominaciones: $2.000, $5.000, $10.000, $20.000, $50.000 y $100.000 COP.]
        p Las monedas lanzadas en 2012 expresan la idea de biodiversidad, naturaleza y símbolos culturales importantes para los colombianos. Se rinde homenaje a ciudadanos que han hecho importantes aportes a la cultura y tejido de la sociedad colombiana, y se reconoce el papel de la mujer en la historia de Colombia.
        .tarjeta-avatar-b(data-aos="fade-right")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img23.png' alt='AvatarTop')
          .BG02.p-4
            .h4.mb-0.ms-3 La nueva serie de billetes tiene muchas características de seguridad contra la falsificación; estos incluyen marcas de agua, fibras fluorescentes y tinta, efectos de color y movimiento, texto en relieve y braille.
      .col-md-4.col-8.order-md-2.order-1.mb-md-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img24.png')

    p A continuación se revisa cada una de las denominaciones de la nueva familia de billetes, por medio de unos videos que analizan las características de seguridad únicas de cada billete. Estos videos son la mejor manera de aprender a diferenciar entre un billete falso y un billete colombiano genuino; tenga en cuenta que luego de cada uno se dará una explicación de lo que representan o las características:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Billete 100 mil" :icono="require('@/assets/curso/tema1/img25.png')")
        .row.justify-content-center
          .col-md-7.mb-md-0.mb-4
            .row.justify-content-center
              .col-md-3.col-6.mb-md-0.mb-4
                img(src='@/assets/curso/tema1/img31.png')
              .col-md-9
                p El billete de #[strong 100 mil pesos presenta al expresidente colombiano Carlos Lleras Restrepo], es la moneda de mayor denominación en Colombia. 
                p Lleras se desempeñó como presidente de Colombia de 1966 a 1970. Es mejor conocido por alentar la unión económica en América Latina durante la década de 1960 y desempeñó un papel clave en la redacción del Pacto Andino, un acuerdo que consolidó el comercio entre Venezuela, Colombia, Perú, Bolivia y Chile.
            ul.lista-ul--color
              li
                <i class="fas fa-money-bill-wave" style="color:#529D2E"></i>
                | El anverso del billete también tiene una imagen de la flor sietecueros.
              li 
                <i class="fas fa-money-bill-wave" style="color:#529D2E"></i>
                | El reverso del billete de $100,000 presenta el Valle de Cocora, un valle en el departamento del Quindío, así como el árbol nacional de Colombia, la palmera de cera.
              li 
                <i class="fas fa-money-bill-wave" style="color:#529D2E"></i>
                | A ambos lados del billete se aprecia la imagen de un ave barranquera.
              li 
                <i class="fas fa-money-bill-wave" style="color:#529D2E"></i>
                | El billete de $100,000 es predominantemente de color verde y con un tamaño de 153 x 56 mm, es el billete más grande en circulación.
              li 
                <i class="fas fa-money-bill-wave" style="color:#529D2E"></i>
                | Este billete no se usa comúnmente en Colombia para las transacciones diarias. La mayoría de las tiendas no los aceptarán. Es demasiado dinero para que pierdan si uno resulta ser falso.
          .col-md-4.col-8
            figure.mb-4
              img(src='@/assets/curso/tema1/img32.png')
            figure.mb-4
              img(src='@/assets/curso/tema1/img33.png')
        .row
          .col-md-5.col-10
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/embed/ln0AFdoFK7w" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[strong Enlace <em>web</em>]. Estos videos son la mejor manera de aprender a diferenciar entre un billete de 100 mil falso.
      .py-4.py-md-5(titulo="Billete 50 mil" :icono="require('@/assets/curso/tema1/img26.png')")
        .row.justify-content-center
          .col-md-7.mb-md-0.mb-4
            .row.justify-content-center
              .col-md-3.col-6.mb-md-0.mb-4
                img(src='@/assets/curso/tema1/img34.png')
              .col-md-9
                p El anverso del #[strong billete de $50.000 rinde homenaje al escritor colombiano Gabriel García Márquez].
                p García Márquez ganó un Premio Nobel de Literatura en 1982 y es considerado uno de los autores más importantes del Siglo XX. Es mejor conocido por su libro de 1967 “Cien años de soledad” y por popularizar el estilo literario del realismo mágico.
            ul.lista-ul--color
              li
                <i class="fas fa-money-bill-wave" style="color:#529D2E"></i>
                | El anverso del billete también tiene la imagen de un colibrí alimentándose de una flor.
              li 
                <i class="fas fa-money-bill-wave" style="color:#529D2E"></i>
                | El reverso del billete de $50.000 presenta dibujos de indígenas y viviendas de la cultura Tayrona en la Ciudad Perdida de la Sierra Nevada de Santa Marta.
              li 
                <i class="fas fa-money-bill-wave" style="color:#529D2E"></i>
                | Se puede ver un caracol burgao en ambos lados del pico.
              li 
                <i class="fas fa-money-bill-wave" style="color:#529D2E"></i>
                | El valor del billete de $50.000 en dólares estadounidenses es de aproximadamente $14,95 (asumiendo que está cambiando dólares a pesos colombianos a una tasa de cambio de $1 USD = $3347 COP. Ver XE para la tasa de cambio actual).
          .col-md-4.col-8
            figure.mb-4
              img(src='@/assets/curso/tema1/img35.png')
            figure.mb-4
              img(src='@/assets/curso/tema1/img36.png')
        .row
          .col-md-5.col-10
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/embed/XsPcVefiP9U" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[strong Enlace <em>web</em>]. Estos videos son la mejor manera de aprender a diferenciar entre un billete de 50 mil falso.      
      .py-4.py-md-5(titulo="Billete 20 mil" :icono="require('@/assets/curso/tema1/img27.png')")
        .row.justify-content-center
          .col-md-7.mb-md-0.mb-4
            .row.justify-content-center
              .col-md-3.col-6.mb-md-0.mb-4
                img(src='@/assets/curso/tema1/img37.png')
              .col-md-9
                ul.lista-ul--color
                  li
                    <i class="fas fa-money-bill-wave" style="color:#529D2E"></i>
                    | El anverso del billete también tiene la imagen de una anona o anón.
                  li
                    <i class="fas fa-money-bill-wave" style="color:#529D2E"></i>
                    | El reverso del billete de $20,000 presenta imágenes de los canales de Mojana en el norte de Colombia, donde se cree que vivió el pueblo precolombino Zenú entre el 200 a. C. y el 1600-d. También hay imágenes de un campesino que lleva un bastón Arrow y un sombrero vueltiao.
            ul.lista-ul--color
              li
                <i class="fas fa-money-bill-wave" style="color:#529D2E"></i>
                | El poema alusivo al sombrero, escrito por Benjamín Puche Villadiego, está escrito en microtexto en el banco del billete.
              li
                <i class="fas fa-money-bill-wave" style="color:#529D2E"></i>
                | Hay una imagen de un sombrero como se vería directamente desde arriba a ambos lados del billete.
          .col-md-4.col-8
            figure.mb-4
              img(src='@/assets/curso/tema1/img38.png')
            figure.mb-4
              img(src='@/assets/curso/tema1/img39.png')
        .row
          .col-md-5.col-10
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/embed/xaRTmgXddro" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[strong Enlace <em>web</em>]. Estos videos son la mejor manera de aprender a diferenciar entre un billete de 20 mil falso.       
      .py-4.py-md-5(titulo="Billete 10 mil" :icono="require('@/assets/curso/tema1/img28.png')")
        .row.justify-content-center
          .col-md-7.mb-md-0.mb-4
            .row.justify-content-center
              .col-md-3.col-6.mb-md-0.mb-4
                img(src='@/assets/curso/tema1/img40.png')
              .col-md-9
                p El anverso del #[strong billete de $10,000 rinde homenaje a la antropóloga colombiana Virginia Gutiérrez], quien fue pionera en la investigación sobre la antropología familiar y médica colombiana.
                p Gutiérrez fue nombrada Mujer del Año en Colombia en 1967 y desde entonces ha recibido numerosos premios y medallas por sus aportes a la cultura colombiana. La Doctora Gutiérrez celebró su 98 cumpleaños el 4 de noviembre de 2019.
            ul.lista-ul--color
              li
                <i class="fas fa-money-bill-wave" style="color:#529D2E"></i>
                | El reverso del billete presenta el paisaje de la región amazónica en el que un río se convierte en serpiente. La escena también contiene un dibujo de un hombre pescando en una canoa, así como varias imágenes de la vida acuática.
              li
                <i class="fas fa-money-bill-wave" style="color:#529D2E"></i>
                | En ambos lados del billete se puede ver una ilustración de la flor de la Victoria Regia.
              li
                <i class="fas fa-money-bill-wave" style="color:#529D2E"></i>
                | El valor del billete de $10.000 en dólares estadounidenses es de aproximadamente 2,5 USD.
          .col-md-4.col-8
            figure.mb-4
              img(src='@/assets/curso/tema1/img41.png')
            figure.mb-4
              img(src='@/assets/curso/tema1/img42.png')
        .row
          .col-md-5.col-10
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/embed/3KKEPDkmMZI" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[strong Enlace <em>web</em>]. Estos videos son la mejor manera de aprender a diferenciar entre un billete de 10 mil falso.
      .py-4.py-md-5(titulo="Billete 5 mil" :icono="require('@/assets/curso/tema1/img29.png')")
        .row.justify-content-center
          .col-md-7.mb-md-0.mb-4
            .row.justify-content-center
              .col-md-3.col-6.mb-md-0.mb-4
                img(src='@/assets/curso/tema1/img43.png')
              .col-md-9
                p El anverso del #[strong billete de $5.000 rinde homenaje al poeta colombiano José Asunción Silva].
                p Nacido en 1865, Silva es el poeta más famoso de Colombia. Es mejor conocido por contribuir con una especie de lirismo deprimente a la poesía hispanoamericana, y su escritura refleja la vida difícil que vivió. Silva se suicidó, su obra fue recopilada y publicada póstumamente.
            ul.lista-ul--color
              li
                <i class="fas fa-money-bill-wave" style="color:#529D2E"></i>
                | El anverso del billete también muestra una planta de puya, impresa en tinta de cobre, que cambia a verde cuando se inclina a la luz.
              li
                <i class="fas fa-money-bill-wave" style="color:#529D2E"></i>
                | El reverso del billete exalta los páramos colombianos y los frailejones, arbustos perennes que forman parte de la familia del girasol.
              li
                <i class="fas fa-money-bill-wave" style="color:#529D2E"></i>
                | 	El reverso del billete también presenta ilustraciones de un cóndor andino, un oso de anteojos y el poema “Melancolía” de José Asunción Silva.
              li
                <i class="fas fa-money-bill-wave" style="color:#529D2E"></i>
                | A ambos lados del billete se puede ver la imagen de un abejorro.
          .col-md-4.col-8
            figure.mb-4
              img(src='@/assets/curso/tema1/img44.png')
            figure.mb-4
              img(src='@/assets/curso/tema1/img45.png')
        .row
          .col-md-5.col-10
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/embed/fop771ZJ5CM" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[strong Enlace <em>web</em>]. Estos videos son la mejor manera de aprender a diferenciar entre un billete de 5 mil falso.      
      .py-4.py-md-5(titulo="Billete 2 mil" :icono="require('@/assets/curso/tema1/img30.png')")
        .row.justify-content-center
          .col-md-7.mb-md-0.mb-4
            .row.justify-content-center
              .col-md-3.col-6.mb-md-0.mb-4
                img(src='@/assets/curso/tema1/img46.png')
              .col-md-9
                p El anverso del #[strong billete de $2,000 muestra a la artista colombiana Débora Arango].
                p Nacida en Medellín, Arango es conocida internacionalmente por su obra de arte provocativa y políticamente cargada que a menudo refleja los males sociales de la sociedad colombiana. Aunque su trabajo fue a menudo recibido con críticas y fue fuente de gran controversia, ahora es celebrada como una de las artistas más importantes de Colombia. En 2003, Arango recibió la Orden de Boyacá, el más alto honor otorgado a oficiales militares o civiles en Colombia. Arango tenía 98 años cuando murió en 2005.
            ul.lista-ul--color
              li
                <i class="fas fa-money-bill-wave" style="color:#529D2E"></i>
                | El anverso del billete de $2,000 también presenta una representación digital del ave de la pintura “Las monjas y el cardenal”.
              li
                <i class="fas fa-money-bill-wave" style="color:#529D2E"></i>
                | El reverso del billete destaca Caño Cristales (el río de los cinco colores), que se encuentra en la Serranía de la Macarena, provincia del Meta. A veces llamado “el arcoíris líquido”, Caño Cristales es considerado por muchos como “el río más hermoso del mundo”. La revista National Geographic ha llamado a Caño Cristales “el río que se escapó del paraíso”.
              li
                <i class="fas fa-money-bill-wave" style="color:#529D2E"></i>
                | Con un tamaño de 128 x 66 mm el billete de $2,000 es el más pequeño en circulación.
          .col-md-4.col-8
            figure.mb-4
              img(src='@/assets/curso/tema1/img47.png')
            figure.mb-4
              img(src='@/assets/curso/tema1/img48.png')
        .row
          .col-md-5.col-10
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/embed/EGhj45-hToM" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[strong Enlace <em>web</em>]. Estos videos son la mejor manera de aprender a diferenciar entre un billete de 2 mil falso.         

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4.	Normatividad institucional
    
    p Dentro de las funciones de la banca central se encuentra la de emitir de manera exclusiva e indelegable la moneda legal colombiana, constituida por billetes y monedas metálicas. En consecuencia, realiza la producción, emisión, provisión y destrucción de especies monetarias.
    p Se destaca  lo siguiente:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/02qy0U7bzIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
