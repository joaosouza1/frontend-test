import React, { FC } from 'react'
import styled, { css } from 'styled-components'

interface OpenFlagDotProps {
  open?: boolean
}

const StyledOpenFlagDot = styled.div<OpenFlagDotProps>`
  width: 0.8em;
  height: 0.8em;
  background: #FF3548;
  border-radius: 50%;

  ${props => props.open && css`
    background: #00E8A4;
  `}
`

export const OpenFlagDot: FC<OpenFlagDotProps> = ({ open }) => {
  const ariaLabel = open ? "Green dot" : "Red dot"
  return (
    <StyledOpenFlagDot open={open} aria-label={ariaLabel} />
  )
}
