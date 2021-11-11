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

// SWRConfig that uses yelpFetcher by default.
// https://swr.vercel.app/docs/global-configuration
export const SWRConfigYelp: FC = (props) => {
  return (
    <SWRConfig value={{ fetcher: yelpFetcher, provider: localStorageProvider }}>
      {props.children}
    </SWRConfig>
  )
}
