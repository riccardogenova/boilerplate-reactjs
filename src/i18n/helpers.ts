/** @format */

import { TTranslationsGeneral } from "./translations/general";

export type TTranslation = TTranslationsGeneral;

export const utilityGetDefaultLocale = (): "it" | "en" => {
  const localeCached = "it";
  if (localeCached) return localeCached;
  const browserLocale =
    typeof window === "object" ? window.navigator.language : "it";
  const localeFormatted = browserLocale.substring(0, 2);
  if (localeFormatted !== "it" && localeFormatted !== "en") return "it";
  return localeFormatted;
};
