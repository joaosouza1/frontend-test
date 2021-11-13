import { css } from 'styled-components'

export interface CTAProps {
  primary?: boolean
  small?: boolean
}

export const CTACSS = css<CTAProps>`
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
  text-decoration: none;

  cursor: pointer;

  transition-property: background-color;
  transition-duration: 100ms;

  &:disabled {
    cursor: not-allowed;
  }

  ${props => props.primary && css`
    background: #002B56;
    color: #FFFFFF;

    &:hover {
      background: #0066cc;
      border-color: #0066cc;
    }

    &:disabled {
      color: #ffffff;
      background: C8C8C8;
      border-color: C8C8C8;
    }
  `}

  ${props => !props.primary && css`
    background: #FFFFFF;
    color: #002B56;

    &:hover {
      color: #0066cc;
      border-color: #0066cc;
    }

    &:disabled {
      color: #C8C8C8;
      border-color: #E6E6E6;
    }
  `}

  ${props => props.small && css`
    font-size: 12px;
    letter-spacing: 0.857143px;
    border-radius: 0;
    padding: 11px 16px;
  `}
`
