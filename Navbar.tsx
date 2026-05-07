import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart, Search, User, Globe, DollarSign, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCurrency } from '../context/CurrencyContext';
import { useAuth } from '../hooks/useAuth';
import { Button } from '@blinkdotnew/ui';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const { currency, setCurrency } = useCurrency();
  const { user, login, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'ja', name: 'JA' },
    { code: 'bn', name: 'BN' }
  ];

  const currencies: ('USD' | 'BDT' | 'EUR' | 'GBP' | 'INR' | 'JPY')[] = ['USD', 'BDT', 'EUR', 'GBP', 'INR', 'JPY'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center neon-glow-cyan">
            <span className="text-xl font-bold font-heading">S</span>
          </div>
          <span className="text-xl font-bold font-heading tracking-tighter hidden md:block">
            SHADID <span className="text-primary neon-text-cyan">ANIMART</span>
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder={t('search_placeholder')}
              className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 w-64 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-sans text-sm"
            />
          </div>

          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <select 
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                className="bg-transparent text-sm focus:outline-none cursor-pointer hover:text-primary transition-colors"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code} className="bg-background">{lang.name}</option>
                ))}
              </select>
            </div>

            {/* Currency Selector */}
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-muted-foreground" />
              <select 
                value={currency}
                onChange={(e) => setCurrency(e.target.value as any)}
                className="bg-transparent text-sm focus:outline-none cursor-pointer hover:text-primary transition-colors"
              >
                {currencies.map(curr => (
                  <option key={curr} value={curr} className="bg-background">{curr}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 border-l border-white/10 pl-6">
            <button className="p-2 hover:bg-white/5 rounded-full transition-colors relative group">
              <Heart className="w-5 h-5 group-hover:text-secondary group-hover:fill-secondary transition-all" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full text-[10px] flex items-center justify-center font-bold">0</span>
            </button>
            <button className="p-2 hover:bg-white/5 rounded-full transition-colors relative group">
              <ShoppingCart className="w-5 h-5 group-hover:text-primary transition-all" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground rounded-full text-[10px] flex items-center justify-center font-bold">0</span>
            </button>
            
            {user ? (
              <div className="flex items-center gap-3 ml-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <button onClick={logout} className="text-sm hover:text-primary transition-colors">{t('logout')}</button>
              </div>
            ) : (
              <Button onClick={() => login()} size="sm" className="ml-2 font-heading tracking-widest text-xs h-9 neon-glow-cyan">
                {t('login')}
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder={t('search_placeholder')}
                  className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 w-full focus:outline-none"
                />
              </div>
              <div className="flex justify-between items-center px-2">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase font-heading">Language</p>
                  <select 
                    value={i18n.language}
                    onChange={(e) => i18n.changeLanguage(e.target.value)}
                    className="bg-transparent font-medium"
                  >
                    {languages.map(lang => (
                      <option key={lang.code} value={lang.code} className="bg-background">{lang.name}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1 text-right">
                  <p className="text-xs text-muted-foreground uppercase font-heading">Currency</p>
                  <select 
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value as any)}
                    className="bg-transparent font-medium"
                  >
                    {currencies.map(curr => (
                      <option key={curr} value={curr} className="bg-background">{curr}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="flex-1 neon-glow-cyan" onClick={() => login()}>{t('login')}</Button>
                <Button variant="outline" className="flex-1">{t('signup')}</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
