import React, { FC } from 'react';
import StarOutline from '../assets/StarOutline.svg'
import StarHalf from '../assets/StarHalf.svg'
import StarFill from '../assets/StarFill.svg'
import styled from 'styled-components'

interface RatingProps {
  value: number
  className?: string
}

const arrayOfFive = [...Array(5)]

export const Rating: FC<RatingProps> = ({ value, className }) => {
  const title = `Rating ${value}`
  return (
    <Wrapper role="img" title={title} className={className}>
      {arrayOfFive.map((n, index) => {
        let Icon
        if (index + 1 <= value) Icon = StarFill
        else if (index + 0.5 <= value) Icon = StarHalf
        else Icon = StarOutline
        return <Icon key={index} aria-hidden />
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  column-gap: 1px;
`
