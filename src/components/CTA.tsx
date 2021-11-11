import styled, { css } from 'styled-components'

interface CTAProps {
  primary?: boolean
}

export const CTA = styled.button<CTAProps>`
  border: 1px solid #002B56;
  border-radius: 2px;

  padding: 16px;

  font-family: HelveticaNeue;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 114% */
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;

  cursor: pointer;

  transition-property: background-color;
  transition-duration: 100ms;

  ${props => props.primary && css`
    background: #002B56;
    color: #FFFFFF;

    &:hover {
      background: #0066cc;
      border-color: #0066cc;
    }
  `}

  ${props => !props.primary && css`
    background: #FFFFFF;
    color: #002B56;

    &:hover {
      color: #0066cc;
      border-color: #0066cc;
    }
  `}
`
