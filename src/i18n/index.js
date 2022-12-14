import { createI18n } from "vue-i18n";
import en from "@/i18n/lang/en/index.js";
import ka from "@/i18n/lang/ka/index.js";

const messages = {
  en,
  ka,
};

const i18n = createI18n({
  locale: window.localStorage.getItem("selectedLocale") || "en",
  fallbackLocale: window.localStorage.getItem("selectedLocale") || "en",
  messages,
});

export default i18n;
