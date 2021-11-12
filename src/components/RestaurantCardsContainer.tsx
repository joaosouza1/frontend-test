import React, { FC } from "react";
import useSWR from "swr";
import { RestaurantCardDesktop } from "../components/RestaurantCardDesktop";
import { YelpBusinessSearch } from "../types/yelp";

export const RestaurantCardsContainer: FC = () => {
  const { data } = useSWR<YelpBusinessSearch>('/businesses/search?location=Las+Vegas')
  return (
    <>
      {data.businesses.map(business => (
        <RestaurantCardDesktop
          key={business.id}
          id={business.id}
          name={business.name}
          imageURL={business.image_url}
          rating={business.rating}
          cuisine={business.categories[0]?.title}
          price={business.price}
          open={!business.is_closed}
        />
      ))}
    </>
  )
}
