/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Counter from './Counter'

describe('Counter', () => {
  it('adds 1 on every click', () => {
    render(<Counter />)
    expect(screen.getByText('0')).toBeInTheDocument()
    screen.getByText('0').click()
    expect(screen.getByText('1')).toBeInTheDocument()
    screen.getByText('1').click()
    expect(screen.getByText('2')).toBeInTheDocument()
  })
})
