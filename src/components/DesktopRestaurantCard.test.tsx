/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { Meta } from './DesktopRestaurantCard'

describe("Meta", () => {
  it("renders empty", () => {
    render(<Meta data-testid="empty-meta" />)
    expect(screen.getByTestId("empty-meta")).toBeEmptyDOMElement()
  })
  it("renders text", () => {
    render(<Meta>This is meta text</Meta>)
    expect(screen.getByText("This is meta text")).toBeInTheDocument()
  })
})
