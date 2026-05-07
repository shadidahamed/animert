import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Heart, Star, ShoppingBag } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    discount_price?: number;
    image_urls: string[];
    category: string;
    rating: number;
    tags: string[];
    store_name: string;
    affiliate_link: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const { formatPrice } = useCurrency();
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative group w-full aspect-[3/4] glass-card rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Product Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ 
          backgroundImage: `url(${product.image_urls[0] || 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=800&q=80'})`,
          transform: "translateZ(50px)"
        }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      
      {/* Tags */}
      <div className="absolute top-4 left-4 flex flex-wrap gap-2" style={{ transform: "translateZ(70px)" }}>
        {product.tags.slice(0, 2).map(tag => (
          <span key={tag} className="px-2 py-0.5 bg-primary/20 backdrop-blur-md border border-primary/30 text-[10px] font-heading text-primary uppercase tracking-widest rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="absolute top-4 right-4 flex flex-col gap-2" style={{ transform: "translateZ(70px)" }}>
        <button className="p-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full hover:bg-secondary/20 hover:border-secondary/50 transition-all group/btn">
          <Heart className="w-4 h-4 group-hover/btn:text-secondary group-hover/btn:fill-secondary" />
        </button>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3" style={{ transform: "translateZ(100px)" }}>
        <div className="flex items-center gap-1 text-accent">
          <Star className="w-3 h-3 fill-accent" />
          <span className="text-[10px] font-bold">{product.rating}</span>
          <span className="text-[10px] text-muted-foreground ml-1">({product.store_name})</span>
        </div>
        
        <h3 className="text-xl font-heading font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-end justify-between">
          <div className="space-y-0.5">
            {product.discount_price && (
              <span className="text-xs text-muted-foreground line-through decoration-secondary/50">
                {formatPrice(product.price)}
              </span>
            )}
            <p className="text-2xl font-heading font-black text-white">
              {formatPrice(product.discount_price || product.price)}
            </p>
          </div>
          
          <a 
            href={product.affiliate_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-xl neon-glow-cyan hover:scale-110 active:scale-95 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border-2 border-primary/50 rounded-2xl" />
    </motion.div>
  );
}
