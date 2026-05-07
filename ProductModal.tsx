import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ExternalLink, ShieldCheck, Truck, RefreshCw, ShoppingCart } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { Button } from '@blinkdotnew/ui';

interface ProductModalProps {
  product: any;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { formatPrice } = useCurrency();

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl p-6 md:p-10 shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative group">
                  <img 
                    src={product.image_urls[0]} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {product.image_urls.map((url: string, i: number) => (
                    <div key={i} className="aspect-square rounded-lg border border-white/10 overflow-hidden cursor-pointer hover:border-primary/50 transition-colors">
                      <img src={url} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  {/* Fill empty slots with placeholder if needed */}
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col h-full">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-heading tracking-widest rounded-full uppercase border border-primary/30">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 text-accent ml-auto">
                      <Star className="w-4 h-4 fill-accent" />
                      <span className="text-sm font-bold">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">(120+ reviews)</span>
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-heading font-black leading-tight tracking-tighter">
                    {product.name}
                  </h2>

                  <div className="flex items-baseline gap-4">
                    <span className="text-4xl font-heading font-black text-white">
                      {formatPrice(product.discount_price || product.price)}
                    </span>
                    {product.discount_price && (
                      <span className="text-xl text-muted-foreground line-through font-heading">
                        {formatPrice(product.price)}
                      </span>
                    )}
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      <div className="text-[10px] font-heading tracking-widest leading-none">
                        VERIFIED<br/><span className="text-muted-foreground">STORE</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                      <Truck className="w-5 h-5 text-secondary" />
                      <div className="text-[10px] font-heading tracking-widest leading-none">
                        GLOBAL<br/><span className="text-muted-foreground">SHIPPING</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4">
                    <p className="text-[10px] font-heading tracking-widest text-muted-foreground uppercase">TAGS</p>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag: string) => (
                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs hover:bg-white/10 cursor-default transition-colors">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 space-y-4">
                  <div className="flex gap-4">
                    <a 
                      href={product.affiliate_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full h-14 font-heading tracking-[0.2em] text-sm neon-glow-cyan">
                        BUY ON {product.store_name.toUpperCase()} <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                    <button className="w-14 h-14 rounded-xl bg-secondary/20 border border-secondary/40 flex items-center justify-center hover:bg-secondary/30 transition-all text-secondary">
                      <ShoppingCart className="w-6 h-6" />
                    </button>
                  </div>
                  <p className="text-[9px] text-center text-muted-foreground uppercase tracking-[0.3em]">
                    SECURE_CHECKOUT_ENCRYPTED_BY_ANIMART_PROTOCOL
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
