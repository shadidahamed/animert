import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const DUMMY_PRODUCTS = [
  {
    id: '1',
    name: 'Cyber Samurai Action Figure - Limited Edition',
    description: 'High-detail cybernetic warrior figure with LED effects and modular armor.',
    price: 129.99,
    discount_price: 99.99,
    image_urls: ['https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=800&q=80'],
    category: 'Figures',
    rating: 4.9,
    tags: ['Limited', 'Cyberpunk'],
    store_name: 'Tokyo Collectibles',
    affiliate_link: '#'
  },
  {
    id: '2',
    name: 'Neon District Oversized Bomber Jacket',
    description: 'Cyberpunk aesthetic street wear with embroidered kanji and glow-in-the-dark elements.',
    price: 85.00,
    image_urls: ['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80'],
    category: 'Apparel',
    rating: 4.7,
    tags: ['Streetwear', 'Anime'],
    store_name: 'Otaku Style',
    affiliate_link: '#'
  },
  {
    id: '3',
    name: 'Digital Soul Katana - RGB Prop',
    description: 'Immersive light-up katana with motion-sensing sound effects.',
    price: 199.99,
    discount_price: 159.99,
    image_urls: ['https://images.unsplash.com/photo-1589736829878-18567114da95?w=800&q=80'],
    category: 'Props',
    rating: 4.8,
    tags: ['RGB', 'Holographic'],
    store_name: 'Blade Master',
    affiliate_link: '#'
  },
  {
    id: '4',
    name: 'Virtual Idol Holographic Display',
    description: 'Desktop holographic projector featuring your favorite virtual singers.',
    price: 45.99,
    image_urls: ['https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&q=80'],
    category: 'Tech',
    rating: 4.5,
    tags: ['Idol', 'Hologram'],
    store_name: 'NeoTech JP',
    affiliate_link: '#'
  }
];

export function ProductGrid() {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <section className="py-24 max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-primary neon-text-cyan font-heading text-xs tracking-[0.3em]"
          >
            <div className="w-8 h-[1px] bg-primary" />
            ARTIFACTS_FOUND
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter">
            {t('featured_products')}
          </h2>
        </div>
        
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-white/5 border border-white/10 text-xs font-heading tracking-widest hover:bg-primary/10 hover:border-primary/50 transition-all rounded-full">
            {t('all')}
          </button>
          <button className="px-6 py-2 bg-white/5 border border-white/10 text-xs font-heading tracking-widest hover:bg-secondary/10 hover:border-secondary/50 transition-all rounded-full">
            TRENDING
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {DUMMY_PRODUCTS.map((product) => (
          <div key={product.id} onClick={() => setSelectedProduct(product)}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      
      <ProductModal 
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      
      <div className="mt-16 text-center">
        <button className="group px-10 py-4 bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all font-heading tracking-widest text-sm relative overflow-hidden">
          <span className="relative z-10 flex items-center gap-2">
            LOAD MORE DATA <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
          </span>
        </button>
      </div>
    </section>
  );
}
