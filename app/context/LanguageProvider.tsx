
'use client'

import React, { useReducer, createContext } from 'react'
import { LANGUAGE_TYPE_SLUG } from '../constants/contants' 
import { getLocalData } from '../utils/static-data'

export const LanguageContext = createContext({})

const reducer = (state:any, action:any) => {
  if(!action.type) {
    return state[LANGUAGE_TYPE_SLUG.EN]
  }
  return state[action.type]
}

const LanguageProvider = ({
  children,
  localData
}: {
  children: React.ReactNode,
  localData:any
}) => {
  

  const [language, dispatch] = useReducer(reducer, localData)

  return (
    <LanguageContext.Provider value={{language, dispatch }}>
      {children}
    </LanguageContext.Provider>
  );
}

export async function getStaticProps(){
  const localData = await getLocalData()
  return {
    props: { localData }
  }
}

export default LanguageProvider