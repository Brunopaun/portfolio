'use client'

import { useContext } from "react";
import LanguageSwitchButton from "./LanguageSwitchButton";
import { LanguageContext } from "@/app/context/LanguageProvider";


const NavigationBar = () => {

  const {language } = useContext(LanguageContext)

  return (
    <div className="flex justify-between px-24  ">
      {language.header}
      <ul className="flex">
        <li>Home</li>
        <li>Projects</li>
        <li>Info</li>
        <li>Hire Me</li>
      </ul>
      <LanguageSwitchButton/>
    </div>
  );
}


export default NavigationBar