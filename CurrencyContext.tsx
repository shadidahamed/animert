import React, { createContext, useContext, useState, useEffect } from 'react';

type Currency = 'USD' | 'BDT' | 'EUR' | 'GBP' | 'INR' | 'JPY';

interface CurrencyContextType {
  currency: Currency;
  rate: number;
  setCurrency: (c: Currency) => void;
  formatPrice: (price: number) => string;
}

const rates: Record<Currency, number> = {
  USD: 1,
  BDT: 110,
  EUR: 0.92,
  GBP: 0.79,
  INR: 83,
  JPY: 150,
};

const symbols: Record<Currency, string> = {
  USD: '$',
  BDT: '৳',
  EUR: '€',
  GBP: '£',
  INR: '₹',
  JPY: '¥',
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('USD');

  const formatPrice = (price: number) => {
    const converted = price * rates[currency];
    return `${symbols[currency]}${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, rate: rates[currency], setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error('useCurrency must be used within CurrencyProvider');
  return context;
}
