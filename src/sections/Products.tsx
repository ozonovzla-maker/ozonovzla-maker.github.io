import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const products = [
  {
    id: 1,
    name: 'Serie 1 Mini',
    description:
      'Generador de ozono compacto de uso médico, ideal para consultorios y terapias de ozono.',
    price: 'Consultar',
    image: '/images/serie-1-mini.jpeg',
    availability: 'https://schema.org/InStock',
    features: [
      'Concentración: 10-99 μg/mL',
      'Flujo de regulador: 1/32 - 1 L/min',
      'Modo: Normal',
      'Energía: 110V 25W',
      'Refrigeración: Fan Cooler',
    ],
    badge: 'Disponible',
    badgeColor: 'bg-green-500',
  },
  {
    id: 2,
    name: 'Serie 1 Plus',
    description:
      'Generador de ozono compacto y duradero con carcasa de acero inoxidable #304. Electrodo de titanio con tubo de cuarzo y refrigeración por aire con ventilador integrado de 15 CFM para operación continua 24h.',
    price: 'Consultar',
    image: '/images/serie-1-plus.jpeg',
    availability: 'https://schema.org/InStock',
    features: [
      'Concentración: 10-99 μg/mL',
      'Flujo de oxígeno: 1/32 - 4 L/min',
      'Dimensiones: 192×67×40 mm | Peso: 1,5 kg',
      'Entrada: 100-240 VCA (50/60Hz) | 12V DC',
      'Vida útil: +10.000 horas',
    ],
    badge: 'Disponible',
    badgeColor: 'bg-green-500',
  },
  {
    id: 3,
    name: 'Serie 1000',
    description:
      'Generador de ozono médico con modo de bomba al vacío para aplicaciones clínicas avanzadas.',
    price: 'Consultar',
    image: '/images/serie-1000v2.jpeg',
    availability: 'https://schema.org/InStock',
    features: [
      'Concentración: 1-120 μg/mL',
      'Flujo de regulador: 1/32 - 1 L/min',
      'Modos: Normal / Bomba al vacío',
      'Energía: 110V 25W',
      'Refrigeración: Fan Cooler',
    ],
    badge: 'Disponible',
    badgeColor: 'bg-green-500',
  },
  {
    id: 4,
    name: 'Serie 3000',
    description:
      'Generador de ozono médico de alta gama con temporizador y pedal de acción para máximo control en procedimientos clínicos.',
    price: 'Consultar',
    image: '/images/serie-3000.jpeg',
    availability: 'https://schema.org/InStock',
    features: [
      'Concentración: 3-125 μg/mL',
      'Flujo de regulador: 1/32 - 1 L/min',
      'Modos: Normal / Temporizador / Pedal de acción',
      'Energía: 110V 25W',
      'Peso: 3 kg',
    ],
    badge: 'Disponible',
    badgeColor: 'bg-green-500',
  },
];

export function Products() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Catálogo de productos Ozono Venezuela',
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: `https://www.ozonovenezuela.com${product.image}`,
        brand: {
          '@type': 'Brand',
          name: 'Ozono Venezuela',
        },
        category: 'Equipos médicos de ozono y oxígeno',
        url: 'https://www.ozonovenezuela.com/#productos',
        availability: product.availability,
      },
    })),
  };

  return (
    <section
      id="productos"
      aria-labelledby="productos-title"
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-oxy-blue/10 text-oxy-blue text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
            CATÁLOGO
          </span>
          <h2
            id="productos-title"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-oxy-black mb-3 sm:mb-4 px-2"
          >
            Generadores de Ozono Médico
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-oxy-light-grey max-w-2xl mx-auto px-4">
            Línea completa de generadores de ozono médico con diferentes
            capacidades para cada necesidad clínica.
          </p>
        </motion.div>

        {/* Products Grid */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8"
          staggerDelay={0.2}
        >
          <div className="contents" role="list" aria-label="Listado de productos">
            {products.map((product) => (
              <StaggerItem key={product.id}>
                <motion.article
                  role="listitem"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-400"
                >
                    {/* Product Image */}
                    <div className="relative overflow-hidden bg-oxy-grey h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64">
                      {product.image ? (
                        <motion.img
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.5 }}
                          src={product.image}
                          alt={`${product.name} | Ozono Venezuela`}
                          width={1200}
                          height={900}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-oxy-blue/10 to-oxy-blue/5">
                          <span className="text-oxy-blue/40 text-lg font-medium">{product.name}</span>
                        </div>
                      )}
                      {/* Badge */}
                      <div
                        className={`absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 ${product.badgeColor} text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full`}
                      >
                        {product.badge}
                      </div>
                      {/* Overlay on hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="hidden sm:flex absolute inset-0 bg-oxy-black/40 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <a
                          href="https://wa.me/584143146421"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="bg-white text-oxy-black hover:bg-oxy-orange hover:text-oxy-black text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2">
                            Consultar por WhatsApp
                          </Button>
                        </a>
                      </motion.div>
                    </div>

                    {/* Product Content */}
                    <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                      <h3 className="text-base sm:text-lg md:text-xl font-heading font-medium text-oxy-black mb-1.5 sm:mb-2">
                        {product.name}
                      </h3>
                      <p className="text-oxy-light-grey text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5 md:mb-6">
                        {product.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs md:text-sm text-oxy-black"
                          >
                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 gap-2">
                        <div className="flex-shrink-0">
                          <span className="text-[10px] sm:text-xs md:text-sm text-oxy-light-grey block">Precio</span>
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-oxy-blue">
                            {product.price}
                          </p>
                        </div>
                        <a
                          href="https://wa.me/584143146421"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0"
                        >
                          <Button
                            variant="outline"
                            className="border-oxy-blue text-oxy-blue hover:bg-oxy-blue hover:text-white group/btn text-xs sm:text-sm px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 h-auto"
                          >
                            <span className="hidden sm:inline">Cotizar</span>
                            <span className="sm:hidden">Ver</span>
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </motion.article>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <a
            href="https://wa.me/584143146421"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-oxy-blue hover:bg-oxy-blue/90 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base"
            >
              Consultar por WhatsApp
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
