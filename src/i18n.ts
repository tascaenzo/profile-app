import i18next from "i18next";
//import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import it from "@/locales/it.json";

i18next
  //.use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: "it",
    debug: true,
    resources: {
      it: { translation: it },
    },
  });

export default i18next;
