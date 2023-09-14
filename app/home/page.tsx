"use client"

import { useContext } from "react"
import { LanguageContext } from "@/app/context/LanguageProvider"

const page = () => {
  
  const { language } = useContext(LanguageContext)
  
  
  return (
    <div className="flex items-center">
      <h1 className="text-9xl font-medium indent-36 mr-120">{language.home.hero}</h1>
    </div>
  );
}


export default page