import React, { FC } from "react";
import { useParams } from "react-router";

export const RestaurantDetailPage: FC = () => {
  const { id } = useParams()
  return (
    <div>Restaurant {id}</div>
  )
}
