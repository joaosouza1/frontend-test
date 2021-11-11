import React, { FC } from 'react';
import StarOutline from '../assets/StarOutline.svg'
import StarHalf from '../assets/StarHalf.svg'
import StarFill from '../assets/StarFill.svg'
import styled from 'styled-components'

interface RatingProps {
  value: number
}

const arrayOfFive = [...Array(5)]

export const Rating: FC<RatingProps> = ({ value }) => {
  const title = `Rating: ${value}`
  return (
    <Wrapper role="img" title={title}>
      {arrayOfFive.map((n, index) => {
        let icon
        if (index + 1 <= value) icon = <StarFill />
        else if (index + 0.5 <= value) icon = <StarHalf />
        else icon = <StarOutline />
        return <span key={index} aria-hidden>{icon}</span>
      })}
    </Wrapper>
  )
}

const Wrapper = styled.span`
  & > span {
    margin-right: 1px;
  }
`
