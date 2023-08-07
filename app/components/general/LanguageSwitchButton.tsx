'use client'

import { LanguageContext } from "@/app/context/LanguageProvider";
import { useContext } from "react";
import { LANGUAGE_TYPE_SLUG } from "@/app/constants/contants";

const LanguageSwitchButton = () => {
  const {language,dispatch} = useContext(LanguageContext)

  const changeLanguage = () => {
    
    if(language.type == LANGUAGE_TYPE_SLUG.EN) {
      dispatch(language)
    } else {
      dispatch(language)      
    }
    
  }

  return (
      <button onClick={changeLanguage}>
        {language.type ?? LANGUAGE_TYPE_SLUG.EN}
      </button>
  );
}

export default LanguageSwitchButton