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

// SWRConfig that uses yelpFetcher by default.
// https://swr.vercel.app/docs/global-configuration
export const SWRConfigYelp: FC = (props) => {
  return (
    <SWRConfig value={{ fetcher: yelpFetcher }}>
      {props.children}
    </SWRConfig>
  )
}
