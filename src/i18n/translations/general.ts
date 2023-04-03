/** @format */

type Translations = typeof translationsGeneral;

export const translationsGeneral = {
  default: { it: 'Inserisci il tuo testo', en: 'Insert your text' },
  example: { it: 'Scopri di più', en: 'About us' },
  about: { it: 'Informazioni', en: 'About' },
  navigation: { it: 'Esempio di navigazione', en: 'Navigation example' },
  '404-not-found': { it: '404 - Pagina non trovata', en: '404 - Page not found' },
  'not-found-content': { it: 'La pagina non è stata trovata', en: 'The page is not found' },
  'go-back': { it: 'Torna indietro', en: 'Go back' },
};

export type TTranslationsGeneral = keyof Translations;
