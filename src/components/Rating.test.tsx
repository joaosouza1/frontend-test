test("note", () => {
  // I couldn't make Jest work with SVG files, which are used in the Rating component.
  // I'm leaving the commented-out test below in case I find a solution later.
})

/**
 * @jest-environment jsdom
 */

// import '@testing-library/jest-dom'
// import { render, screen } from '@testing-library/react'
// import React from 'react'
// import { Rating } from './Rating'

// describe(Rating.name, () => {
//   test("0.0", () => {
//     render(<Rating value={0.0} />)
//     expect(screen.getByLabelText("Rating: 0")).toBeInTheDocument()
//   })
//   test("2.5", () => {
//     render(<Rating value={2.5} />)
//     expect(screen.getByLabelText("Rating: 2.5")).toBeInTheDocument()
//   })
//   test("5.0", () => {
//     render(<Rating value={5.0} />)
//     expect(screen.getByLabelText("Rating: 5")).toBeInTheDocument()
//   })
// })
