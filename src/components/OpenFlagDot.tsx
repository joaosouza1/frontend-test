import styled, { css } from 'styled-components'

interface OpenFlagDotProps {
  open: boolean
}

export const OpenFlagDot = styled.div<OpenFlagDotProps>`
  width: 8px;
  height: 8px;
  background: #FF3548;
  border-radius: 50%;

  ${({ open = true }) => open && css`
    background: #00E8A4;
  `}
`
