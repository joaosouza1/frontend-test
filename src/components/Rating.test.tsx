/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { Rating } from './Rating'

describe(Rating.name, () => {
  test("0.0", () => {
    render(<Rating value={0.0} />)
    expect(screen.getByTitle("Rating 0")).toBeInTheDocument()
  })
  test("2.5", () => {
    render(<Rating value={2.5} />)
    expect(screen.getByTitle("Rating 2.5")).toBeInTheDocument()
  })
  test("5.0", () => {
    render(<Rating value={5.0} />)
    expect(screen.getByTitle("Rating 5")).toBeInTheDocument()
  })
})
