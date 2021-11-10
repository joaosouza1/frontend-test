/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { OpenFlagDot } from './OpenFlagDot'

describe(OpenFlagDot.name, () => {
  it("is open", () => {
    render(<OpenFlagDot open={true} />)
    expect(screen.getByLabelText("Green dot")).toBeInTheDocument()
  })
  it("is closed", () => {
    render(<OpenFlagDot open={false} />)
    expect(screen.getByLabelText("Red dot")).toBeInTheDocument()
  })
})
