/** @format */

export const TLanguage = {
  IT: 'it',
  EN: 'en',
} as const;

export type TObjectValues<TO> = TO[keyof TO];

export type TLocale = TObjectValues<typeof TLanguage>;

export const utilityGetFromLocalStorage = (ref: string, def: string | null) => {
  if (!ref) return {};
  const storage = localStorage.getItem(ref);
  return storage ? JSON.parse(storage) : def;
};

export const utilityGetDefaultLocale = (): TLocale => {
  const localeLocalStorage = utilityGetFromLocalStorage('locale', null);
  if (localeLocalStorage) return localeLocalStorage;
  const isBrowser = typeof window === 'object';

  const localeBrowser = isBrowser ? window.navigator.language.substring(0, 2) : 'it';
  const isValidLocale = localeBrowser === 'it' || localeBrowser === 'en';

  return isValidLocale ? localeBrowser : 'it';
};
