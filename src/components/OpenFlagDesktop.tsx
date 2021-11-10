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
    <MetaText>
      <DotWrapper>
        <OpenFlagDot open={open} />
      </DotWrapper>
      {metaText}
    </MetaText>
  )
}

const DotWrapper = styled.span`
  margin-right: 4px;
  vertical-align: -1px;
  display: inline-block;
`
