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
        path: '/'
      },
      {
        title:'Projects',
        path:'/projects'
      },
      {
        title:'Info',
        path: '/info'
      },
      {
        title:'Hire me',
        path: '/contact'
      }
    ]
  },
  "PT":{
    type: 'PT',
    header: [
      {
        title:'Home',
        path: '/'
      },
      {
        title:'Projetos',
        path:'/projects'
      },
      {
        title:'Informações',
        path: '/info'
      },
      {
        title:'Contrate me',
        path: '/contact'
      }
    ]
  }
}