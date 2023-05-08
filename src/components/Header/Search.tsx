/** @jsxImportSource react */
import { useState, useCallback, useRef } from 'react'
import { ALGOLIA } from '../../consts'
import '@docsearch/css'
import './Search.css'

import { createPortal } from 'react-dom'
import * as docSearchReact from '@docsearch/react'

const DocSearchModal = docSearchReact.DocSearchModal ?? (docSearchReact as any).default.DocSearchModal
const useDocSearchKeyboardEvents = docSearchReact.useDocSearchKeyboardEvents ?? (docSearchReact as any).default.useDocSearchKeyboardEvents

const translations: docSearchReact.DocSearchTranslations = {
  button: {
    buttonText: 'Suche',
    buttonAriaLabel: 'Suche'
  },
  modal: {
    searchBox: {
      resetButtonTitle: 'Suchanfrage löschen',
      resetButtonAriaLabel: 'Suchanfrage löschen',
      cancelButtonText: 'Abbrechen',
      cancelButtonAriaLabel: 'Abbrechen'
    },
    startScreen: {
      recentSearchesTitle: 'Zuletzt gesucht',
      noRecentSearchesText: 'Keine letzten Suchen',
      saveRecentSearchButtonTitle: 'Diese Suche speichern',
      removeRecentSearchButtonTitle: 'Diese Suche aus dem Verlauf entfernen',
      favoriteSearchesTitle: 'Favoriten',
      removeFavoriteSearchButtonTitle: 'Diese Suche aus den Favoriten entfernen'
    },
    errorScreen: {
      titleText: 'Ergebnisse können nicht abgerufen werden',
      helpText: 'Möglicherweise möchten Sie Ihre Netzwerkverbindung überprüfen.'
    },
    footer: {
      selectText: 'zum Auswählen',
      selectKeyAriaLabel: 'Enter-Taste',
      navigateText: 'zur Navigation',
      navigateUpKeyAriaLabel: 'Pfeil nach oben',
      navigateDownKeyAriaLabel: 'Pfeil nach unten',
      closeText: 'zum Schließen',
      closeKeyAriaLabel: 'Escape-Taste',
      searchByText: 'Suche nach'
    },
    noResultsScreen: {
      noResultsText: 'Keine Ergebnisse für',
      suggestedQueryText: 'Versuchen Sie es mit der Suche nach',
      reportMissingResultsText: 'Glauben Sie, dass diese Abfrage Ergebnisse liefern sollte?',
      reportMissingResultsLinkText: 'Lassen Sie es uns wissen.'
    }
  }
}

export default function Search (): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const searchButtonRef = useRef<HTMLButtonElement>(null)
  const [initialQuery, setInitialQuery] = useState('')

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const onInput = useCallback((e: any) => {
    setIsOpen(true)
    setInitialQuery(e.key)
  }, [setIsOpen, setInitialQuery])

  useDocSearchKeyboardEvents({
    isOpen, onOpen, onClose, onInput, searchButtonRef
  })

  return (<>
    <button type="button" ref={searchButtonRef} onClick={onOpen} className="search-input">
      <svg width="24" height="24" fill="none">
        <path
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span>Search</span>

      <span className="search-hint">
        <span className="sr-only">Press </span>
        <kbd>/</kbd>
        <span className="sr-only"> to search</span>
      </span>
    </button>

    {isOpen && createPortal(<DocSearchModal
      initialQuery={initialQuery}
      initialScrollY={window.scrollY}
      onClose={onClose}
      indexName={ALGOLIA.indexName}
      appId={ALGOLIA.appId}
      apiKey={ALGOLIA.apiKey}
      translations={translations}
      transformItems={(items) => {
        return items.map((item) => {
          const a = document.createElement('a')
          a.href = item.url
          const hash = a.hash === '#overview' ? '' : a.hash
          return {
            ...item, url: `${a.pathname}${hash}`
          }
        })
      }}
    />, document.body)}
  </>)
}
