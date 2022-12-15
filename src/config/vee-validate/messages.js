import { configure } from "vee-validate";
import { localize, setLocale } from "@vee-validate/i18n";
import en from "@/config/vee-validate/en.js";
import ka from "@/config/vee-validate/ka.js";

configure({
  generateMessage: localize({
    en: en,
    ka: ka,
  }),
});

setLocale(window.localStorage.getItem("selectedLocale"));
