import { useState, useEffect } from 'react'
import { AppState } from 'react-native'

/**
 * Hook to call handler function when app is in foreground
 * @param {Function} handler Handler function to be called
 *
 */
const useForeground = (handler) => {
  const [appState, setAppState] = useState(null)

  const handleAppStateChanged = (nextAppState) => {
    if (
      (appState === null || appState.match(/inactive|background/)) &&
      nextAppState === 'active'
    ) {
      handler(nextAppState)
    }
    setAppState(nextAppState)
  }

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChanged)
    return () => AppState.removeEventListener('change', handleAppStateChanged)
  }, [])
}

export default useForeground
