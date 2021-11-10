/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { OpenFlagDesktop } from './OpenFlagDesktop'

describe(OpenFlagDesktop.name, () => {
  it("is open", () => {
    render(<OpenFlagDesktop open={true} />)
    expect(screen.getByText("Open now")).toBeInTheDocument()
  })
  it("is closed", () => {
    render(<OpenFlagDesktop open={false} />)
    expect(screen.getByText("Closed")).toBeInTheDocument()
  })
})
