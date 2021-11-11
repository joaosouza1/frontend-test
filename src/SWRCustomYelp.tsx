import React from "react"
import { FC } from "react"
import { SWRConfig } from "swr"
import invariant from 'tiny-invariant'

const API_URL = process.env.YELP_API_URL
const API_KEY = process.env.YELP_API_KEY
invariant(API_URL, "API_URL missing in .env")
invariant(API_KEY, "API_KEY missing in .env")

// Fetch Yelp Fusion API data.
//
// This function sets the Authorization header as indicated here:
// https://www.yelp.com/developers/documentation/v3/authentication
//
// It also prepends all paths with the base API path indicated here:
// https://www.yelp.com/developers/documentation/v3/get_started
//
// Usage:
//
//   const { data } = useSWR('/businesses/search', yelpFetcher)
//
// Or set it as the default fetcher globally:
//
//   <SWRConfig value={{ fetcher: yelpFetcher }}>
//     <MyApp />
//   </SWRConfig>
const yelpFetcher = (input: RequestInfo, init?: RequestInit) => (
  fetch(`${API_URL}/${input}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${API_KEY}`
    }
  }).then(res => res.json())
)

// Persist the SWR cache to local storage.
//
// Possible improvements:
// - Save periodically
// - Replace with IndexedDB
//
// https://swr.vercel.app/docs/advanced/cache#localstorage-based-persistent-cache
function localStorageProvider() {
  // When initializing, we restore the data from `localStorage` into a map.
  const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'))

  // Before unloading the app, we write back all the data into `localStorage`.
  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()))
    localStorage.setItem('app-cache', appCache)
  })

  // We still use the map for write & read for performance.
  return map
}

// 24-hour SWR dedupping interval.
//
// Yelp recommends caching API data for up to 24 hours to avoid hitting the usage limit.
// This is a frontend app, so it doesn't really store Yelp data in a third-party server,
// just in the client's local storage. But the 24 hour interval still reduces API hits.
//
// Note: the interval only works in the current window.
// If the user refreshes the page or opens a new window, the interval is reset there.
//
// Possible improvements:
// - Set up a 24-hour cache on the production proxy
const yelpRecommendedDedupingInterval = 24 * 60 * 60 * 1000

// SWRConfig that uses yelpFetcher by default.
// https://swr.vercel.app/docs/global-configuration
export const SWRConfigYelp: FC = (props) => {
  return (
    <SWRConfig value={{
      fetcher: yelpFetcher,
      provider: localStorageProvider,
      dedupingInterval: yelpRecommendedDedupingInterval
    }}>
      {props.children}
    </SWRConfig>
  )
}
