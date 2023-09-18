import { LanguageTypes } from '../types/general-types'

export const LANGUAGE_TYPE_SLUG:LanguageTypes = {
  EN: 'EN',
  PT: 'PT'
}


export const data:any = {
  "EN":{
    type: 'EN',
    header: [
      {
        title:'Home',
        path: '/home'
      },
      {
        title:'Portfolio',
        path:'/portfolio'
      },
      {
        title:'About me',
        path: '/info'
      },
      {
        title:'Hire',
        path: '/contact'
      }
    ],
    home: {
      hero: 'Hey! We love good work. We work just right.'
    }
  },
  "PT":{
    type: 'PT',
    header: [
      {
        title:'Home',
        path: '/home'
      },
      {
        title:'Portfólio',
        path:'/portfolio'
      },
      {
        title:'Informações',
        path: '/info'
      },
      {
        title:'Contrate-me',
        path: '/contact'
      }
    ],
    home: {
      hero: 'Ei! A gente curte um trabalho bem feito. Nós fazemos direito.'
    }
  }
}