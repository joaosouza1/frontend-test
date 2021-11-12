import React, { FC } from "react";
import { useParams } from "react-router";
import { Divider } from "../components/Divider";
import { LayoutTop } from "../components/Layout";
import { RestaurantDetailPageHeader } from "../components/RestaurantDetailPageHeader";
import { ReviewList } from "../components/ReviewList";

export const RestaurantDetailPage: FC = () => {
  const { id } = useParams()
  return (
    <div>
      <LayoutTop>
        <RestaurantDetailPageHeader id={id} />
      </LayoutTop>
      <Divider />
      <ReviewList id={id} />
    </div>
  )
}
