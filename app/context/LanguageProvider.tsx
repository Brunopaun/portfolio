
'use client'

import React, { useReducer, createContext } from 'react'
import { LANGUAGE_TYPE_SLUG, data } from '../constants/contants' 

const reducer = (state:any) => {
  console.log('state',state)
  if(state.type == LANGUAGE_TYPE_SLUG.EN) {
    return data[LANGUAGE_TYPE_SLUG.PT]
  }
  return data[LANGUAGE_TYPE_SLUG.EN]
}

export const LanguageContext = createContext({language:data[LANGUAGE_TYPE_SLUG.EN], dispatch:reducer})

const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode,
}) => {

  const [language, dispatch] = useReducer(reducer, data[LANGUAGE_TYPE_SLUG.EN])

  return (
    <LanguageContext.Provider value={{language, dispatch }}>
      {children}
    </LanguageContext.Provider>
  );
}


export default LanguageProvider