import React from "react"
import { FC } from "react"
import { MetaText } from "./MetaText"

interface PriceProps {
  dollarSigns: string
}

export const Price: FC<PriceProps> = ({ dollarSigns }) => {
  const ariaLabel = `Price: ${readablePrice(dollarSigns)}`
  return <span aria-label={ariaLabel}>{dollarSigns}</span>
}

const readablePrice = (dollarSigns: string) => {
  switch(dollarSigns.length) {
    case 1: return "Very affordable"
    case 2: return "Affordable"
    case 3: return "Expensive"
    case 4: return "Very expensive"
    default: return "Unknown"
  }
}
