/** @format */

import { useCallback } from "react";

import { TTranslation } from "./helpers";
import { translations } from "./translations";

const t = ({
  id,
  locale,
}: {
  id: TTranslation;
  locale: "it" | "en";
}): string => {
  if (!translations[id]) {
    console.error(`MISS TRANSLATION FOR ID : ${id}`);
    return id;
  }
  return translations[id][locale];
};

export const useAppTranslation = () => {
  const locale = "it";
  const translate = useCallback(
    (id: TTranslation) => t({ locale, id }),
    [locale]
  );
  return { t: translate };
};
