/* eslint-disable camelcase */
import type zh_CN from './nekomaid/zh_CN'

export type Language = typeof zh_CN

export const currentLanguage = localStorage.getItem('NekoMaid:language') || (navigator.language.startsWith('zh') ? 'zh_CN' : 'en')
export const languages = {
  'zh_CN': '简体中文',
  'en': 'English'
}

export let lang: Language
export let minecraft: Language['minecraft']
export const promise = import(`./nekomaid/${currentLanguage}.tsx`).then(it => {
  lang = it.default
  minecraft = lang.minecraft
})
