'use client'

import { useContext } from "react";
import LanguageSwitchButton from "./LanguageSwitchButton";
import { LanguageContext } from "@/app/context/LanguageProvider";
import style from '@/app/styles/header/header.module.css'
import { ImGithub, ImLinkedin }from 'react-icons/im'
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavigationBar = () => {
  const pathname = usePathname()

  const {language} = useContext(LanguageContext)
  
  return (
    <div className="flex justify-between px-24 pt-6">
      <ul className="flex space-x-2 text-base">
        {language.header.map((item:any) => {
          const isActive = pathname == item.path ? 'font-bold' : ''

          return (
          <li className="hover:text-blue-4 cursor-pointer" key={`item-${item}`}>
            <Link href={item.path} className={`${style.anchor} ${isActive}`}>
              {item.title}
            </Link>
          </li>
          )})}
      </ul>
      <div className="flex items-center space-x-4">
        <ImGithub size={26}/>
        <ImLinkedin size={26} />    
        <LanguageSwitchButton/>
      </div>
    </div>
  )
}


export default NavigationBar