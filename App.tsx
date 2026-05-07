import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { CurrencyProvider } from './context/CurrencyContext';

export default function App() {
  return (
    <CurrencyProvider>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        {/* Animated Background Mesh */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
          <div className="absolute top-0 left-0 w-full h-full cyber-grid" />
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[150px] rounded-full animate-pulse delay-1000" />
        </div>

        <Navbar />
        
        <main className="relative z-10">
          <Hero />
          <ProductGrid />
          
          {/* Trending Section Overlay */}
          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -skew-y-3" />
            <div className="max-w-7xl mx-auto px-4 relative">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-3xl md:text-5xl font-heading font-black leading-none">
                      UPGRADE YOUR <br />
                      <span className="text-primary neon-text-cyan">OTAKU SETUP</span>
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Exclusive digital artifacts and premium physical collectibles curated for the modern anime enthusiast.
                    </p>
                    <button className="px-8 py-3 bg-white text-black font-heading tracking-widest text-xs hover:bg-primary transition-colors">
                      JOIN THE DISTRICT
                    </button>
                  </div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group">
                    <img 
                      src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80" 
                      alt="Cyberpunk Room" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                  </div>
               </div>
            </div>
          </section>
        </main>

        <footer className="relative z-10 border-t border-white/10 py-12 bg-background/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-2 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                    <span className="text-sm font-bold font-heading">S</span>
                  </div>
                  <span className="text-lg font-bold font-heading">SHADID <span className="text-primary">ANIMART</span></span>
                </div>
                <p className="text-muted-foreground text-sm max-w-sm">
                  The ultimate hub for anime enthusiasts and cyberpunk souls. Discover curated collectibles from across the multiverse.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xs font-heading tracking-widest text-white">DISTRICTS</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Figures</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Apparel</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Tech Gear</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Accessories</a></li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-heading tracking-widest text-white">PROTOCOL</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Affiliate Program</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Support Hub</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-heading tracking-[0.2em] text-muted-foreground">
              <p>© 2026 SHADID_ANIMART_PROTOCOL // ALL_RIGHTS_RESERVED</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary">DISCORD</a>
                <a href="#" className="hover:text-primary">X_CORP</a>
                <a href="#" className="hover:text-primary">INSTAGRAM</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Floating Background Effects */}
        <div className="fixed top-1/2 left-0 -translate-y-1/2 w-1 h-64 bg-gradient-to-b from-transparent via-primary to-transparent opacity-20" />
        <div className="fixed top-1/2 right-0 -translate-y-1/2 w-1 h-64 bg-gradient-to-b from-transparent via-secondary to-transparent opacity-20" />
      </div>
    </CurrencyProvider>
  );
}
