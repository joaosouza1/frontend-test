/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { Price } from './Price'

describe(Price.name, () => {
  
  describe("valid", () => {
    test("$", () => {
      render(<Price dollarSigns="$" />)
      expect(screen.getByText("$")).toBeInTheDocument()
      expect(screen.getByLabelText("Price: Very affordable")).toBeInTheDocument()
    })
    test("$$", () => {
      render(<Price dollarSigns="$$" />)
      expect(screen.getByText("$$")).toBeInTheDocument()
      expect(screen.getByLabelText("Price: Affordable")).toBeInTheDocument()
    })
    test("$$$", () => {
      render(<Price dollarSigns="$$$" />)
      expect(screen.getByText("$$$")).toBeInTheDocument()
      expect(screen.getByLabelText("Price: Expensive")).toBeInTheDocument()
    })
    test("$$$$", () => {
      render(<Price dollarSigns="$$$$" />)
      expect(screen.getByText("$$$$")).toBeInTheDocument()
      expect(screen.getByLabelText("Price: Very expensive")).toBeInTheDocument()
    })
  })

  describe("invalid", () => {
    test("$$$$$", () => {
      render(<Price dollarSigns="$$$$$" />)
      expect(screen.getByText("$$$$$")).toBeInTheDocument()
      expect(screen.getByLabelText("Price: Unknown")).toBeInTheDocument()
    })
    test("", () => {
      render(<Price dollarSigns="" />)
      expect(screen.getByLabelText("Price: Unknown")).toBeInTheDocument()
    })
  })

})
