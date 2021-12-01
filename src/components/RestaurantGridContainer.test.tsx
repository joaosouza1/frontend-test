/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { MemoryRouter } from 'react-router-dom'
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
          <MemoryRouter>
            <RestaurantGridContainer />
          </MemoryRouter>
        </SWRConfig>
      )
    })
    const elements = screen.getAllByText("Four Barrel Coffee")
    expect(elements).toHaveLength(2) // the visible page and the pre-loaded hidden next page
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
    const elements = screen.getAllByText("Loading...")
    expect(elements).toHaveLength(2) // the visible page and the pre-loaded hidden next page
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
    const elements = screen.getAllByText("Error")
    expect(elements).toHaveLength(2) // the visible page and the pre-loaded hidden next page
  })

  /**
   * TODO: test clicking on Load More. It needs a more complete "fetcher" mock
   * that takes in the "offset" argument and returns a different result for each page.
   */
})
