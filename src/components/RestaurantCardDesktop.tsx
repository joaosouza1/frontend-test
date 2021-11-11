import React, { FC } from "react"
import styled from 'styled-components'
import { MetaText } from "./MetaText"
import { OpenFlagDesktop } from "./OpenFlagDesktop"
import { Price } from "./Price"
import { Rating } from "./Rating"

interface RestaurantCardProps {
  id: string
  name: string
  imageURL: string
  rating: number
  cuisine: string
  price: string
  open: boolean
}

export const RestaurantCardDesktop: FC<RestaurantCardProps> = (props) => {
  const imageAlt = `Picture of ${props.name}`
  return (
    <div>
      <Image src={props.imageURL} alt={imageAlt} />
      <Heading>{props.name}</Heading>
      <Rating value={props.rating} />
      <MetaWrapper>
        <MetaText>
          {props.cuisine} • <Price dollarSigns={props.price} />
        </MetaText>
        <OpenFlagDesktop open={props.open} />
      </MetaWrapper>
    </div>
  )
}

const Image = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 16px;
`

const Heading = styled.h1`
  margin-bottom: 8px;

  font-family: HelveticaNeue;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  /* or 140% */
  letter-spacing: 1px;

  color: #000000;
`

const MetaWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
`
