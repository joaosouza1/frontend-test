import React, { FC } from "react";
import { useParams } from "react-router";
import { Divider } from "../components/Divider";
import { RestaurantDetailPageHeader } from "../components/RestaurantDetailPageHeader";

export const RestaurantDetailPage: FC = () => {
  const { id } = useParams()
  return (
    <div>
      <RestaurantDetailPageHeader id={id} />
      <Divider />
    </div>
  )
}
