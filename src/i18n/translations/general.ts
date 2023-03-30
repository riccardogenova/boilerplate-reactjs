/** @format */

type Translations = typeof translationsGeneral;

export const translationsGeneral = {
  example: { it: 'Scopri di più', en: 'About us' },
  about: { it: 'Informazioni', en: 'About' },
  navigation: { it: 'Esempio di navigazione', en: 'Navigation example' },
};

export type TTranslationsGeneral = keyof Translations;
