import React, { FC } from "react";
import useSWR from "swr";
import { RestaurantCardDesktop } from "./RestaurantCardDesktop";
import { YelpBusinessSearch } from "../types/yelp";
import { MetaText } from "./MetaText";

interface RestaurantGridPageProps {
  index: number
}

export const RestaurantGridPage: FC<RestaurantGridPageProps> = (props) => {
  const location = "Las+Vegas" // hardcoded as requested in the README
  const limit = 24
  const offset = limit * props.index
  const { data, error, isValidating } = useSWR<YelpBusinessSearch>(`/businesses/search?location=${location}&limit=${limit}&offset=${offset}`)
  if (error || data?.error) return <MetaText>Error</MetaText>
  if (!data && isValidating) return <MetaText>Loading...</MetaText>
  if (!data) return null
  return (
    <>
      {data.businesses?.map(business => (
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
