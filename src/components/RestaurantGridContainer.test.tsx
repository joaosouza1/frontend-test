/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { SWRConfig } from 'swr'
import swrNoCacheProvider from '../testHelpers/swrNoCacheProvider'
import { businessSearch } from '../testHelpers/yelpAPIResponse'
import { RestaurantGridContainer } from './RestaurantGridContainer'


describe(RestaurantGridContainer.name, () => {

  it("shows restaurants", async () => {
    await act(async () => {
      render(
        <SWRConfig value={{
          provider: swrNoCacheProvider,
          fetcher: () => businessSearch
        }}>
          <RestaurantGridContainer />
        </SWRConfig>
      )
    })
    expect(screen.getByText("Four Barrel Coffee")).toBeInTheDocument()
    expect(screen.getByTitle("Rating 4")).toBeInTheDocument()
  })

  it("shows loading indicator", async () => {
    await act(async () => {
      render(
        <SWRConfig value={{
          provider: swrNoCacheProvider,
          fetcher: () => new Promise(() => undefined)
        }}>
          <RestaurantGridContainer />
        </SWRConfig>
      )
    })
    expect(screen.getByText("Loading...")).toBeInTheDocument()
  })

  it("shows error indicator", async () => {
    await act(async () => {
      render(
        <SWRConfig value={{
          provider: swrNoCacheProvider,
          fetcher: () => { throw Error("404 Not Found") }
        }}>
          <RestaurantGridContainer />
        </SWRConfig>
      )
    })
    expect(screen.getByText("Error")).toBeInTheDocument()
  })

  /**
   * TODO: test clicking on Load More. It needs a more complete "fetcher" mock
   * that takes in the "offset" argument and returns a different result for each page.
   */
})
