import React, { FC } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { CTADiv } from "./CTADiv"
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
  price: string | undefined
  open: boolean
  onClick?: () => any
}

export const RestaurantCardDesktop: FC<RestaurantCardProps> = (props) => {
  return (
    <Wrapper>
      <Image src={props.imageURL} alt="Thumbnail picture" />
      <Heading>{props.name}</Heading>
      <Rating value={props.rating} />
      <MetaWrapper>
        <MetaText>
          {props.cuisine}
          {props.price && <span aria-hidden> • </span>}
          {props.price && <Price dollarSigns={props.price} />}
        </MetaText>
        <MetaText>
          <OpenFlagDesktop open={props.open} />
        </MetaText>
      </MetaWrapper>
      <Link to={props.id} onClick={props.onClick}>
        <CTADiv primary>
          Learn more
        </CTADiv>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 16px;
  aspect-ratio: 4/3;
  object-fit: cover;
  background: #D8D8D8;
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
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  flex: 1;
`
