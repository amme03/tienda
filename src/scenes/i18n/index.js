import RNLanguajes from 'react-native-languages';
import i18n from 'i18n-js';
import en from'./lang/en.json';
import es from'./lang/es.json';
i18n.locale=RNLanguajes.language;
i18n.fallbacks=true;
//si queremos un leguaje por defectos
//i18n.defaultLocale='es';
i18n.translations={en, es};

export default i18n;
