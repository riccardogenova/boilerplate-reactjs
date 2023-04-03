/** @format */

type Translations = typeof translationsGeneral;

export const translationsGeneral = {
  example: { it: 'Scopri di più', en: 'About us' },
  about: { it: 'Informazioni', en: 'About' },
  navigation: { it: 'Esempio di navigazione', en: 'Navigation example' },
  '404-not-found': { it: '404 - Pagina non trovata', en: '404 - Page not found' },
  'not-found-content': { it: 'La pagina non è stata trovata', en: 'The page is not found' },
  'go-back': { it: 'Torna indietro', en: 'Go back' },
  edit: { it: 'Modifica', en: 'Edit' },
  save: { it: 'salva e aggiorna.', en: 'and save to reload.' },
};

export type TTranslationsGeneral = keyof Translations;
