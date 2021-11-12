// Enable importing SVG as React component in Jest
// - https://react-svgr.com/docs/jest/
// - https://jestjs.io/docs/manual-mocks

import React from 'react'

const SimpleSVG = () => (
  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" />
  </svg>
)

export default SimpleSVG
export const ReactComponent = SimpleSVG
