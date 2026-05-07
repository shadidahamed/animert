import React from 'react';
import { motion } from 'framer-motion';
import { Scene } from './Scene';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Zap } from 'lucide-react';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Scene />
      
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full animate-pulse delay-700" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-heading tracking-widest text-primary neon-text-cyan">
            <Zap className="w-3 h-3 fill-primary" />
            VIRTUAL ARTIFACTS LOADED
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter leading-none">
            <span className="block text-white">SHADID</span>
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent neon-text-cyan">
              ANIMART
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl font-sans font-light leading-relaxed">
            {t('hero_subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button className="group relative px-8 py-4 bg-primary text-primary-foreground font-heading tracking-widest text-sm rounded-none overflow-hidden transition-all hover:scale-105 active:scale-95 neon-glow-cyan">
              <span className="relative z-10 flex items-center gap-2">
                {t('explore_now')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            </button>
            
            <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-heading tracking-widest text-sm rounded-none">
              VIEW TRENDING
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        <span className="text-[10px] font-heading tracking-[0.3em] text-muted-foreground">SCROLL</span>
      </motion.div>
    </section>
  );
}
