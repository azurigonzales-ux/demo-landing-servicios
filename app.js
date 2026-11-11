/**
 * ============================================================================
 * CONFIGURACIÓN CENTRALIZADA DEL NEGOCIO (Editable en 2 minutos)
 * ============================================================================
 * Adapta esta Landing Page para cualquier negocio local (Clínica Dental,
 * Barbería, Spa, Consultorio Médico, Fisioterapia, Veterinaria, etc.)
 * modificando únicamente los valores de este objeto CONFIG.
 */
const CONFIG = {
  negocio: {
    nombre: "NovaDent Studio — Clínica Dental & Estética",
    nombreCorto: "NovaDent Studio",
    subtitulo: "Clínica Dental & Estética",
    eslogan: "Especialistas en Diseño de Sonrisa y Odontología sin Dolor",
    insigniaHero: "Atención en Villahermosa • Citas disponibles hoy",
    tituloHero: "Transforma tu sonrisa con tecnología digital y atención de primer nivel",
    descripcionHero:
      "En NovaDent Studio combinamos especialistas certificados, escaneo intraoral 3D sin molestias y materiales estéticos de alta gama para devolverte la seguridad al sonreír desde tu primera visita.",
    whatsapp: "5219930000000",
    telefonoVisible: "(993) 000-0000",
    direccion: "Av. Paseo Tabasco #1204, Tabasco 2000, Villahermosa",
    referenciaDireccion: "Plaza Corporativa Tabasco 2000, Local 4B (Estacionamiento gratuito frente a la clínica)",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Av.+Paseo+Tabasco+1204+Tabasco+2000+Villahermosa",
    imagenHero:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
    imagenHeroFallback:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    estadisticas: [
      { valor: "+1,200", etiqueta: "Pacientes atendidos" },
      { valor: "4.9★", etiqueta: "Calificación en Google" },
      { valor: "100%", etiqueta: "Garantía escrita" }
    ],
    horarios: [
      { dias: "Lunes a Viernes", horas: "9:00 AM – 8:00 PM", estado: "Abierto en horario corrido" },
      { dias: "Sábados", horas: "9:00 AM – 3:00 PM", estado: "Citas matutinas y vespertinas" },
      { dias: "Domingos", horas: "Urgencias Dentales", estado: "Atención previa cita por WhatsApp" }
    ]
  },

  servicios: [
    {
      id: "limpieza-ultrasonica",
      nombre: "Limpieza Ultrasónica",
      categoria: "Prevención & Salud",
      Destacado: false,
      etiqueta: "Más solicitado",
      icono: "fa-solid fa-tooth",
      precio: 650,
      precioAnterior: 900,
      duracion: "45 min",
      descripcion:
        "Eliminación profunda de sarro, placa bacteriana y manchas superficiales sin dolor mediante tecnología ultrasónica.",
      incluye: [
        "Valoración clínica con cámara intraoral HD",
        "Remoción de sarro con ultrasonido indoloro",
        "Pulido espejo con pasta profiláctica y bicarbonato",
        "Aplicación de flúor fortalecedor de esmalte"
      ]
    },
    {
      id: "blanqueamiento-led",
      nombre: "Blanqueamiento LED",
      categoria: "Estética Dental",
      Destacado: true,
      etiqueta: "Paquete Estrella",
      icono: "fa-solid fa-wand-magic-sparkles",
      precio: 2400,
      precioAnterior: 3200,
      duracion: "60 min",
      descripcion:
        "Aclara hasta 4 tonos tu sonrisa en una sola sesión clínica con lámpara de fotocurado LED frío y gel desensibilizante.",
      incluye: [
        "Limpieza ultrasónica previa incluida sin costo",
        "2 a 3 ciclos de aclaramiento con lámpara LED fría",
        "Barrera gingival protectora de encías",
        "Gel remineralizante contra sensibilidad dental"
      ]
    },
    {
      id: "diseno-de-sonrisa",
      nombre: "Diseño de Sonrisa",
      categoria: "Alta Estética",
      Destacado: false,
      etiqueta: "Simulación Digital 3D",
      icono: "fa-solid fa-gem",
      precio: 4800,
      precioAnterior: 6000,
      duracion: "90 min",
      descripcion:
        "Planificación digital personalizada con carillas de resina de alta estética o porcelana E-Max adaptadas a tus facciones.",
      incluye: [
        "Estudio fotográfico clínico y escaneo digital 3D",
        "Mockup (prueba estética real en boca antes de iniciar)",
        "Diseño personalizado de forma, tamaño y brillo",
        "Precio base por paquete inicial de valoración + mockup"
      ]
    },
    {
      id: "ortodoncia",
      nombre: "Ortodoncia",
      categoria: "Alineación Dental",
      Destacado: false,
      etiqueta: "Sin enganche alto",
      icono: "fa-solid fa-teeth-open",
      precio: 1500,
      precioAnterior: 2200,
      duracion: "60 min",
      descripcion:
        "Corrige la posición de tus dientes y mordida con brackets metálicos de autoligado, zafiro estético o alineadores invisibles.",
      incluye: [
        "Valoración de mordida y plan de tratamiento mensual",
        "Colocación de arcada inicial (brackets metálicos o estéticos)",
        "Kit de higiene ortodóntica y cera protectora",
        "Mensualidades accesibles y congeladas desde $650 MXN"
      ]
    },
    {
      id: "resinas",
      nombre: "Resinas",
      categoria: "Restauración Estética",
      Destacado: false,
      etiqueta: "Color natural exacto",
      icono: "fa-solid fa-shield-heart",
      precio: 750,
      precioAnterior: 950,
      duracion: "40 min",
      descripcion:
        "Eliminación de caries, fracturas o cambio de amalgamas grises por resinas nanohíbridas invisibles de alta resistencia.",
      incluye: [
        "Anestesia tópica y local suave sin dolor",
        "Retiro conservador de caries o amalgama antigua",
        "Resina importada 3M con igualación exacta de tono",
        "Ajuste de mordida y pulido de alto brillo"
      ]
    },
    {
      id: "urgencias",
      nombre: "Urgencias",
      categoria: "Atención Inmediata",
      Destacado: false,
      etiqueta: "Atención Hoy Mismo",
      icono: "fa-solid fa-kit-medical",
      precio: 500,
      precioAnterior: 800,
      duracion: "30–60 min",
      descripcion:
        "Atención prioritaria el mismo día para dolor agudo, infección, inflamación, fractura dental o desalojo de corona.",
      incluye: [
        "Recepción prioritaria sin tiempo de espera en sala",
        "Radiografía periapical digital de diagnóstico inmediato",
        "Manejo clínico para alivio del dolor en la misma cita",
        "Receta médica especializada y plan definitivo"
      ]
    }
  ],

  testimonios: [
    {
      nombre: "Lic. Mariana Gómez R.",
      servicio: "Blanqueamiento LED + Limpieza",
      fecha: "Hace 1 semana • Tabasco 2000",
      calificacion: 5,
      avatar: "MG",
      comentario:
        "Agenda rapidísima por WhatsApp. Llegué puntual y me pasaron de inmediato. Tenía miedo a la sensibilidad por el blanqueamiento, pero no sentí absolutamente nada de dolor y mis dientes aclararon muchísimo."
    },
    {
      nombre: "Ing. Carlos Eduardo Pérez",
      servicio: "Urgencias & Resinas Estéticas",
      fecha: "Hace 3 semanas • Col. Centro",
      calificacion: 5,
      avatar: "CP",
      comentario:
        "Se me fracturó una muela un sábado por la mañana. Escribí desde esta página, me confirmaron espacio en 10 minutos y me quitaron el dolor en la primera media hora. Las instalaciones están impecables."
    },
    {
      nombre: "Dra. Sofía Villamil",
      servicio: "Diseño de Sonrisa Digital",
      fecha: "Hace 1 mes • Deportiva",
      calificacion: 5,
      avatar: "SV",
      comentario:
        "El trato es sumamente humano y transparente. Te muestran con cámara intraoral exactamente lo que necesitas sin inventar tratamientos extra. Mi diseño de sonrisa quedó súper natural."
    }
  ],

  faqs: [
    {
      pregunta: "¿Cómo funciona la agenda de citas por WhatsApp?",
      respuesta:
        "Solo elige el tratamiento que te interesa, haz clic en 'Agendar', selecciona el día y turno de tu preferencia (Mañana o Tarde) y presiona confirmar. Se abrirá tu WhatsApp con toda la información lista para que nuestra recepcionista te confirme la hora exacta en menos de 5 minutos."
    },
    {
      pregunta: "¿Aceptan pagos con tarjeta de crédito, débito o meses sin intereses?",
      respuesta:
        "Sí, aceptamos todas las tarjetas Visa, MasterCard y American Express, transferencias SPEI y efectivo. En tratamientos de Diseño de Sonrisa, Ortodoncia y Rehabilitación contamos con opciones de 3 y 6 meses sin intereses."
    },
    {
      pregunta: "¿Los tratamientos duelen? Tengo nervios al ir al dentista.",
      respuesta:
        "Nuestra prioridad es la odontología sin dolor. Utilizamos gel anestésico tópico de alta potencia antes de cualquier procedimiento, técnicas mínimamente invasivas y explicamos cada paso con calma para que te sientas 100% tranquilo."
    },
    {
      pregunta: "¿Emiten factura fiscal y formatos para aseguradoras?",
      respuesta:
        "Por supuesto. Todos nuestros precios incluyen la posibilidad de emitir factura CFDI 4.0 al instante para deducción médica personal o reembolso de gastos médicos mayores."
    },
    {
      pregunta: "¿Dónde me puedo estacionar al llegar a la clínica?",
      respuesta:
        "Contamos con cajones de estacionamiento gratuitos y exclusivos para pacientes justo frente a la entrada en Av. Paseo Tabasco #1204, además de acceso de planta baja sin escalones."
    }
  ]
};

/**
 * Componente Alpine.js principal de la aplicación
 */
document.addEventListener("alpine:init", () => {
  Alpine.data("landingApp", () => ({
    config: CONFIG,
    mobileMenuOpen: false,
    modalOpen: false,
    faqActiva: 0,
    scrolled: false,
    errorValidacion: "",

    form: {
      servicio: "Limpieza Ultrasónica",
      precioServicio: 650,
      nombreCliente: "",
      fechaDeseada: "",
      turnoPreferido: "Mañana (9:00 AM - 2:00 PM)",
      comentario: ""
    },

    init() {
      // Configurar fecha mínima y por defecto (hoy)
      const hoy = new Date();
      const yyyy = hoy.getFullYear();
      const mm = String(hoy.getMonth() + 1).padStart(2, "0");
      const dd = String(hoy.getDate()).padStart(2, "0");
      this.minDate = `${yyyy}-${mm}-${dd}`;
      this.form.fechaDeseada = this.minDate;

      // Detectar scroll para estilizar el navbar glassmorphism
      window.addEventListener("scroll", () => {
        this.scrolled = window.scrollY > 20;
      });
    },

    formatearMoneda(monto) {
      return new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
        maximumFractionDigits: 0
      }).format(monto);
    },

    abrirModal(servicioObj = null) {
      this.errorValidacion = "";
      if (servicioObj) {
        this.form.servicio = servicioObj.nombre;
        this.form.precioServicio = servicioObj.precio;
      } else if (!this.form.servicio && this.config.servicios.length > 0) {
        this.form.servicio = this.config.servicios[0].nombre;
        this.form.precioServicio = this.config.servicios[0].precio;
      }
      this.modalOpen = true;
      this.mobileMenuOpen = false;
    },

    cerrarModal() {
      this.modalOpen = false;
      this.errorValidacion = "";
    },

    actualizarPrecioSeleccionado() {
      const encontrado = this.config.servicios.find(
        (s) => s.nombre === this.form.servicio
      );
      if (encontrado) {
        this.form.precioServicio = encontrado.precio;
      }
    },

    toggleFaq(index) {
      this.faqActiva = this.faqActiva === index ? null : index;
    },

    confirmarCitaWhatsApp() {
      this.errorValidacion = "";

      const nombre = this.form.nombreCliente.trim();
      if (!nombre || nombre.length < 2) {
        this.errorValidacion = "Por favor escribe tu nombre completo para registrar tu cita.";
        return;
      }

      if (!this.form.fechaDeseada) {
        this.errorValidacion = "Por favor selecciona la fecha deseada para tu cita.";
        return;
      }

      if (!this.form.turnoPreferido) {
        this.errorValidacion = "Por favor elige tu turno preferido (Mañana o Tarde).";
        return;
      }

      this.actualizarPrecioSeleccionado();

      const fechaFormateada = this.formatearFechaHumana(this.form.fechaDeseada);
      const precioTexto = this.formatearMoneda(this.form.precioServicio);
      const comentarioTexto = this.form.comentario.trim()
        ? this.form.comentario.trim()
        : "Sin comentarios adicionales";

      const LineasMensaje = [
        `👋 ¡Hola equipo de *${this.config.negocio.nombre}*!`,
        `Quiero agendar una cita desde su página web:`,
        ``,
        `🦷 *Servicio:* ${this.form.servicio} (${precioTexto} MXN)`,
        `👤 *Paciente:* ${nombre}`,
        `📅 *Fecha deseada:* ${fechaFormateada}`,
        `⏰ *Turno preferido:* ${this.form.turnoPreferido}`,
        `💬 *Comentarios:* ${comentarioTexto}`,
        ``,
        `📍 *Sucursal:* ${this.config.negocio.direccion}`,
        `¿Me podrían confirmar los horarios disponibles para ese turno? ¡Gracias!`
      ];

      const urlWhatsApp = `https://wa.me/${this.config.negocio.whatsapp}?text=${encodeURIComponent(
        LineasMensaje.join("\n")
      )}`;

      window.open(urlWhatsApp, "_blank", "noopener,noreferrer");
      this.cerrarModal();
    },

    solicitarDemoWhatsApp() {
      const texto = `👋 ¡Hola! Vi la *Demo Interactiva de ${this.config.negocio.nombreCorto}* y me interesa solicitar una página web con agenda a WhatsApp para mi negocio.`;
      const url = `https://wa.me/${this.config.negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    },

    formatearFechaHumana(fechaISO) {
      try {
        const [year, month, day] = fechaISO.split("-").map(Number);
        const fecha = new Date(year, month - 1, day);
        return fecha.toLocaleDateString("es-MX", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric"
        });
      } catch (e) {
        return fechaISO;
      }
    }
  }));
});
