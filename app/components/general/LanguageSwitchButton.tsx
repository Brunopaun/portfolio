'use client'

import { LanguageContext } from "@/app/context/LanguageProvider";
import { useContext } from "react";
import { LANGUAGE_TYPE_SLUG } from "@/app/constants/contants";
import styles from "@/app/styles/header/switchButton.module.css"

const LanguageSwitchButton = () => {
  const {language, dispatch} = useContext(LanguageContext)

  const getStyle = () => {
    return language.type === LANGUAGE_TYPE_SLUG.EN ? styles.switch_left : styles.switch_right
  }
  
  const changeLanguage = () => {

    const newLanguageType =
      language.type === LANGUAGE_TYPE_SLUG.EN
        ? LANGUAGE_TYPE_SLUG.PT
        : LANGUAGE_TYPE_SLUG.EN;

    dispatch({type:newLanguageType})
  }

  return (
    <div className={`${styles.switch} flex font-semibold items-center bg-blue-4 py-1 px-1 relative rounded-3xl`}>
      <span className={`${getStyle()} flex absolute bg-gray-15 rounded-2xl`}/>
      <span className="flex py-1 px-6 rounded-2xl cursor-pointer z-10" onClick={changeLanguage}>
        {LANGUAGE_TYPE_SLUG.EN}
      </span>
      <span className="flex py-1 px-6 rounded-2xl cursor-pointer z-10" onClick={changeLanguage}>
        {LANGUAGE_TYPE_SLUG.PT}
      </span>
    </div>
  );
}

export default LanguageSwitchButton