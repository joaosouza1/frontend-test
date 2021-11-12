import React, { FC, useCallback } from "react";
import useSWR, { useSWRConfig } from "swr";
import { YelpBusiness, YelpBusinessSearch } from "../types/yelp";
import { MetaText } from "./MetaText";
import { RestaurantCardDesktop } from "./RestaurantCardDesktop";

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
        <RestaurantCardContainer key={business.id} business={business} />
      ))}
    </>
  )
}

interface RestaurantCardDesktopContainerProps {
  business: YelpBusiness
}

export const RestaurantCardContainer: FC<RestaurantCardDesktopContainerProps> = ({ business }) => {
  const { mutate } = useSWRConfig()

  // Pre-fill restaurant data so visiting the detail page feels fast
  const preFillRestaurantDetail = useCallback(async () => {
    await mutate(`/businesses/${business.id}`, business, false)
    console.warn("MUTATED", business.name)
  }, [business.id])

  return (
    <RestaurantCardDesktop
      key={business.id}
      id={business.id}
      name={business.name}
      imageURL={business.image_url}
      rating={business.rating}
      cuisine={business.categories[0]?.title}
      price={business.price}
      open={!business.is_closed}
      onClick={preFillRestaurantDetail}
    />
  )
}
