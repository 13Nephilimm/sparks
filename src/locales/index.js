import { createI18n } from "vue-i18n";

// Define translations
const messages = {
  en: {
    home: "Home",
    about: "About Us",
    services: "Services",
    blog: "Blog",
    contact: "Contact",
  },
  ge: {
    home: "მთავარი",
    about: "ჩვენ შესახებ",
    services: "სერვისები",
    blog: "ბლოგი",
    contact: "კონტაქტი",
  },
};

// Create i18n instance
const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
