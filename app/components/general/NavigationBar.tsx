'use client'

import { useContext } from 'react'
import LanguageSwitchButton from './LanguageSwitchButton'
import { LanguageContext } from '@/app/context/LanguageProvider'
import style from '@/app/styles/header/header.module.css'
import { ImGithub, ImLinkedin }from 'react-icons/im'
import { usePathname } from "next/navigation"
import Link from "next/link"
import { randomNumber } from 'so-toasted/lib/es6/index'

const NavigationBar = () => {
  const pathname = usePathname()

  const { language } = useContext(LanguageContext)
  
  return (
    <div className="flex justify-between px-24 pt-6">
      <div className="flex flex-col w-11 text-justify">
        <span>Bruno</span>
        <span className="w-full text-justify">Aun</span>
      </div>
      <ul className="flex space-x-2 text-base">
        {language.header.map((item:any) => {
          const isActive = pathname == item.path ? 'font-bold' : ''

          return (
          <li className="hover:text-blue-4 cursor-pointer" key={`item-${randomNumber(1,100)}-1`}>
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