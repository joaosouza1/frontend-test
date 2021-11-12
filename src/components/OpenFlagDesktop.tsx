import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { MetaText } from './MetaText'
import { OpenFlagDot } from './OpenFlagDot'

interface OpenFlagProps {
  open?: boolean
}

export const OpenFlagDesktop: FC<OpenFlagProps> = ({ open }) => {
  const metaText = open ? "Open now" : "Closed"
  return (
    <span>
      <DotWrapper>
        <OpenFlagDot open={open} />
      </DotWrapper>
      {metaText}
    </span>
  )
}

const DotWrapper = styled.span`
  margin-right: 0.4em;
  vertical-align: -0.1em;
  display: inline-block;
`
