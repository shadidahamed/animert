import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "hero_title": "Neon Otaku Marketplace",
      "hero_subtitle": "Discover the next generation of anime collectibles in the heart of Night City.",
      "explore_now": "Explore Now",
      "featured_products": "Featured Products",
      "trending": "Trending Now",
      "search_placeholder": "Search for your soul artifact...",
      "categories": "Categories",
      "all": "All",
      "wishlist": "Wishlist",
      "login": "Login",
      "signup": "Signup",
      "logout": "Logout",
    }
  },
  ja: {
    translation: {
      "hero_title": "ネオン・オタク・マーケットプレイス",
      "hero_subtitle": "ナイトシティの中心で次世代のアニメコレクションを見つけよう。",
      "explore_now": "今すぐ探索",
      "featured_products": "おすすめ商品",
      "trending": "トレンド",
      "search_placeholder": "魂のアーティファクトを探す...",
      "categories": "カテゴリー",
      "all": "すべて",
      "wishlist": "ウィッシュリスト",
      "login": "ログイン",
      "signup": "サインアップ",
      "logout": "ログアウト",
    }
  },
  bn: {
    translation: {
      "hero_title": "নিওন ওটাকু মার্কেটপ্লেস",
      "hero_subtitle": "নাইট সিটির কেন্দ্রে পরবর্তী প্রজন্মের অ্যানিমে সংগ্রহযোগ্য খুঁজে নিন।",
      "explore_now": "এখনই অন্বেষণ করুন",
      "featured_products": "বৈশিষ্ট্যযুক্ত পণ্য",
      "trending": "এখন ট্রেন্ডিং",
      "search_placeholder": "আপনার আত্মার নিদর্শন অনুসন্ধান করুন...",
      "categories": "বিভাগ",
      "all": "সব",
      "wishlist": "উইশলিস্ট",
      "login": "লগইন",
      "signup": "সাইনআপ",
      "logout": "লগআউট",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
