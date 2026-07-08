




export const projects = [
  {
    slug: "calculadoraparacambio",
    name: "Calculadora para Cambio",
    icon: "/imgpages/projects/calculadoraparacambio/icon.png",
    tagline: "Calcula tu cambio al instante y controla las ventas de tu negocio.",
    description:
      "Convierte tu telefono en una herramienta de control completa. Calcula el cambio exacto de cada venta, gestiona tu inventario y lleva un historial detallado de todas tus transacciones.",
    features: [
      {
        title: "Calculadora de cambio",
        detail: "Ingresa el monto del pago y obten el cambio exacto de forma instantanea.",
      },
      {
        title: "Historial de ventas",
        detail: "Revisa todas tus transacciones anteriores, edita o elimina ventas y manten un registro detallado.",
      },
      {
        title: "Gestion de inventario",
        detail: "Agrega tus productos, controla el stock disponible y manten tu inventario al dia.",
      },
      {
        title: "Simple e intuitiva",
        detail: "Disenada para usarse sin complicaciones desde el primer momento.",
      },
    ],
    audience:
      "Emprendedores, vendedores de mercado, pequenos comercios, tiendas de barrio o cualquier persona que necesite una herramienta simple para su negocio.",
    platform: "Android",
    status: "Disponible",
    downloadUrl:
      "https://play.google.com/store/apps/details?id=com.volqorstudios.calculadoraparacambio",
    privacyPolicy: {
      appName: "Calculadora para Cambio",
      developer: "VOLQOR Studios",
      lastUpdated: "1 de septiembre de 2025",
      sections: [
        {
          title: "Informacion General",
          items: [
            "Esta aplicacion, 'Calculadora para Cambio', ha sido desarrollada por VOLQOR Studios para ayudar a vendedores en el calculo de cambio de manera eficiente.",
            "Esta Politica de Privacidad describe como la aplicacion maneja la informacion en tu dispositivo.",
            "Al usar esta aplicacion, aceptas las practicas descritas en esta politica.",
          ],
        },
        {
          title: "Recopilacion de Datos",
          items: [
            "La aplicacion NO recopila, transmite ni almacena datos personales en servidores externos.",
            "Toda la informacion (productos, transacciones, historial) se almacena unicamente en tu dispositivo.",
            "No se requiere conexion a internet para el funcionamiento de la aplicacion.",
            "No se utilizan servicios de analisis de terceros ni se comparten datos con otras aplicaciones.",
          ],
        },
        {
          title: "Almacenamiento Local",
          items: [
            "Los datos de productos, precios y transacciones se guardan en el almacenamiento local de tu dispositivo.",
            "El historial de transacciones permanece en tu dispositivo y no es accesible desde el exterior.",
            "Puedes eliminar todos los datos desinstalando la aplicacion o limpiando los datos desde la configuracion de Android.",
            "No se realizan copias de seguridad automaticas en la nube.",
          ],
        },
        {
          title: "Privacidad y Seguridad",
          items: [
            "No se requiere registro de usuario ni informacion personal para usar la aplicacion.",
            "No se accede a contactos, ubicacion, camara ni otros datos sensibles del dispositivo.",
            "La aplicacion funciona completamente offline despues de la instalacion.",
            "Todos los calculos y operaciones se realizan localmente en tu dispositivo.",
          ],
        },
        {
          title: "Permisos de la Aplicacion",
          items: [
            "La aplicacion solicita unicamente los permisos minimos necesarios para su funcionamiento.",
            "No se accede a datos de otras aplicaciones instaladas en tu dispositivo.",
            "No se realizan llamadas de red ni se conecta a servicios externos.",
            "El almacenamiento local es utilizado exclusivamente para los datos de la aplicacion.",
          ],
        },
        {
          title: "Actualizaciones de Politica",
          items: [
            "Esta Politica de Privacidad puede ser actualizada ocasionalmente para reflejar cambios en la aplicacion.",
            "Las actualizaciones seran notificadas a traves de Google Play Store cuando descargues nuevas versiones.",
            "Se recomienda revisar esta politica periodicamente.",
            "El uso continuado de la aplicacion despues de cambios constituye la aceptacion de la nueva politica.",
          ],
        },
      ],
      commitment: {
        title: "Compromiso con tu Privacidad",
        description:
          "\"Calculadora para Cambio\" ha sido disenada con la privacidad como prioridad principal. Eso garantiza que toda tu informacion comercial permanezca segura y privada en tu dispositivo.",
        highlights: [
          "Solo almacenamiento local",
          "Sin recopilacion de datos",
          "Sin conexion a internet",
          "Control total del usuario",
        ],
      },
      important:
        "Esta Politica de Privacidad puede ser modificada en futuras actualizaciones de la aplicacion. Cualquier cambio sera notificado a traves de Google Play Store y entrara en vigor al actualizar la aplicacion.",
    },
    openSource: [
      {
        name: "Android-ESCPOS-Bluetooth-TCP-USB",
        description:
          "Android library for communicating with ESC/POS thermal printers over Bluetooth, TCP, and USB connections.",
        url: "https://github.com/pusheandoando/Android-ESCPOS-Bluetooth-TCP-USB",
      },
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

const platformIcons = {
  Android: "/platforms/android.svg",
  iOS: "/platforms/iphone.svg",
  iPhone: "/platforms/iphone.svg",
  macOS: "/platforms/macos.svg",
  Windows: "/platforms/windows.svg",
};

export function getPlatformIcon(platform) {
  return platformIcons[platform] || null;
}