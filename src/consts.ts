export const SITE = {
  title: 'Olis Cheatsheet',
  description: 'Olis CheatSheet ist ein öffentliches Github-Repo mit deutschsprachigen Cheat Sheets zu Programmierthemen. Es bietet Entwicklern eine schnelle Referenz zu häufig verwendeten Befehlen, Konzepten und Technologien.',
  defaultLanguage: 'de',
  siteUrl: 'https://cs.1og.de'
} as const

export const OPEN_GRAPH = {
  image: {
    src: 'https://cs.1og.de/logo.svg',
    alt: 'Olis Cheasheet'
  },
  twitter: 'OliverGruettner'
}

export const KNOWN_LANGUAGES = {
  German: 'de'
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export const ALGOLIA = {
  indexName: 'cs-1og',
  appId: 'J0D1YVVBYG',
  apiKey: '2347d816987e738f4a375780c003ce73'
}

export type Sidebar = Record<
(typeof KNOWN_LANGUAGE_CODES)[number],
Record<string, Array<{ text: string, link: string, external?: boolean }>>
>
export const SIDEBAR: Sidebar = {
  de: {
    Infos: [
      { text: 'Home', link: 'de/base/home' },
      { text: 'Mein Blog', link: 'https://1og.de', external: true },
      { text: 'Mein Github', link: 'https://github.com/Defkil', external: true }
    ],
    UML: [
      { text: 'Software Übersicht', link: 'de/uml/uml-software' },
      { text: 'Klassendiagramm', link: 'de/uml/klassendiagramm' }
    ]
  }
}
