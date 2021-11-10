/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { MetaText } from './MetaText'

describe(MetaText.name, () => {
  it("renders empty", () => {
    render(<MetaText data-testid="empty-meta" />)
    expect(screen.getByTestId("empty-meta")).toBeEmptyDOMElement()
  })
  it("renders text", () => {
    render(<MetaText>This is meta text</MetaText>)
    expect(screen.getByText("This is meta text")).toBeInTheDocument()
  })
})
