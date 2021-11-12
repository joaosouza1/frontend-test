import React, { FC, useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { RestaurantCardDesktop } from "../components/RestaurantCardDesktop";
import { YelpBusinessSearch } from "../types/yelp";
import { CTA } from "./CTA";
import { MetaText } from "./MetaText";
import { RestaurantGridDesktop } from "./RestaurantGridDesktop";

export const RestaurantGridDesktopContainer: FC = () => {
  const [pageCount, setPageCount] = useState<number>(1)
  let pages = []
  for (let i = 0; i < pageCount; i++) {
    pages.push(<RestaurantCardPage index={i} />)
  }
  const handleLoadMore = () => setPageCount(page => page + 1)
  return (
    <div>
      <RestaurantGridDesktop>
        {pages}
      </RestaurantGridDesktop>
      <LoadMoreWrapper>
        <CTA onClick={handleLoadMore}>Load more</CTA>
      </LoadMoreWrapper>
    </div>
  )
}

const LoadMoreWrapper = styled.div`
  margin: 48px auto;
  max-width: 212px;

  @media (min-width: 1024px) {
    margin-top: 80px;
    max-width: 416px;
  }

  & > button {
    width: 100%;
  }
`


interface RestaurantCardPageProps {
  index: number
}

export const RestaurantCardPage: FC<RestaurantCardPageProps> = (props) => {
  const location = "Las+Vegas" // hardcoded as requested in the README
  const limit = 24
  const offset = limit * props.index
  const { data, error, isValidating } = useSWR<YelpBusinessSearch>(`/businesses/search?location=${location}&limit=${limit}&offset=${offset}`)
  if (error) return <MetaText>Error</MetaText>
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
