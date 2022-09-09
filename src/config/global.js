export default {
  global: {
    componenteFormativo: 'Procedimientos del efectivo y cheques',
    descripcionCurso:
      'A través del presente componente formativo comprenderá los procedimientos técnicos que se deben aplicar dentro de una organización en cuanto al manejo y la gestión del efectivo a través de diversas operaciones financieras, la relevancia de la verificación de los cheques o documentos comerciales y los procesos establecidos por las entidades financieras, implementados siempre bajo el marco legal vigente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.png'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-7.png'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-8.png'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-9.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Transacciones en efectivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Medidas de seguridad de los billetes y moneda',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características y elementos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Protocolos de novedades en billetes',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Normatividad institucional',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Procedimiento en el manejo de billetes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Fajo de billete',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Efectivo en caja y en bóveda',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Medidas de seguridad',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Manejo de cheques',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Características de documentos comerciales',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Formas y tipos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Procedimientos de visación',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Seguridad y normatividad vigente',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Proceso de canje y compensaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Contexto',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Procedimientos',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Manejo de códigos',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Transacciones de efectivo',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Fondo de caja o base [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=oxzRCxlLcUo',
    },
    {
      tema: 'Procedimiento en el manejo de billetes',
      referencia:
        'Banco de la República de Colombia. (2015). El Banco de la República introducirá una nueva familia de billetes [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MNFgTYXyceA',
    },
    {
      tema: 'Manejo de cheques',
      referencia:
        'Consultorio Jurídico Luis Alberto Ariza Ospino. (2018). Títulos valores - El cheque [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vuNLFaPlMzs',
    },
    {
      tema: 'Proceso de canje y compensaciones',
      referencia:
        'Morales. J. (2020). El cheque Cámara de compensación acdcomco [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=c83SXP81g9o',
    },
    {
      tema: 'Proceso de canje y compensaciones',
      referencia:
        'Banco de la República. (s.f.). Reglamentación de compensación de cheques. Banrep.',
      tipo: 'Sitio web',
      link: 'https://www.banrep.gov.co/es/contenidos/compensacion-cheques',
    },
  ],
  glosario: [
    {
      termino: 'Billete',
      significado:
        'Representación monetaria de una determinada nación que determina y clasifica el valor pecuniario en general.',
    },
    {
      termino: 'Bóveda',
      significado:
        'Elemento de seguridad, cuya función principal es custodiar o proteger algún objeto de valor para salvaguardar su destino.',
    },
    {
      termino: 'Caja',
      significado:
        'Elemento donde se consolidan y se implementan los recursos en efectivo, ya sean cheques, monedas o billetes.',
    },
    {
      termino: 'Canje',
      significado:
        'Método alternativo por el cual se cambian cheques por efectivo, generando un descuento porcentual sobre el valor del cheque.',
    },
    {
      termino: 'Compensación',
      significado:
        'Es el proceso en el cual se consolida y se refleja el valor del cheque al banco destinatario.',
    },
    {
      termino: 'Entidad financiera',
      significado:
        'Organización bancaria que su objeto se basa en la administración de la moneda o todo elemento que esté vinculado con el sector financiero.',
    },
    {
      termino: 'Falsificación',
      significado:
        'Procedimiento ilícito que consta de copiar algún objeto o moneda sin contar con los derechos o permisos autorizados. ',
    },
    {
      termino: 'Seguridad',
      significado:
        'Es un sistema que disminuye el peligro en general, eliminando los riesgos directos que amenazan su nivel de vulnerabilidad.',
    },
    {
      termino: 'Transacciones',
      significado:
        'Operaciones generales que se desarrollan en un sistema financiero ya sea bancario o en efectivo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Banco de la República de Colombia. (s.f.). Billetes y monedas. Banrep.',
      link: 'https://www.banrep.gov.co/es/billetes-y-monedas-0',
    },
    {
      referencia:
        'Castro, S. (2017). Proyecto F. Diagnóstico del uso del efectivo en Colombia. Asobancaria.',
      link:
        'https://www.asobancaria.com/wp-content/uploads/2017/12/Proyecto-F.pdf',
    },
    {
      referencia:
        'Gestiopolis. (2009). Administración del efectivo. Qué es, importancia y función en la empresa. Contabilidad y Finanzas. Gestiopolis.',
      link:
        'https://www.gestiopolis.com/administracion-del-efectivo-y-contabilidad-administrativa/',
    },
    {
      referencia:
        'McLeay, M., Radia, A. y Thomas, R. (2015). El dinero en la economía moderna: una introducción. Revista de Economía Institucional, 17, (33), p. 333-353.',
    },
    {
      referencia:
        'Van Horne, J. y Wachowicz, J. (2002). Fundamentos de Administración Financiera. Pearson Education.',
      link:
        'https://catedrafinancierags.files.wordpress.com/2014/09/fundamentos-de-administracion-financiera-13-van-horne.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Francisco Chará Carrero',
        cargo: 'Experto temático',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Diego E. Acevedo Guevara',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - CIES Norte de Santander',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuly Rey',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
