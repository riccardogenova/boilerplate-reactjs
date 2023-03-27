/** @format */

type Translations = typeof translationsGeneral;

export const translationsGeneral = {
  example: { it: "Ciao mondo", en: "Hello world" },
};

export type TTranslationsGeneral = keyof Translations;
