import React, { FC } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { Layout } from "./Layout";
import { YelpReviewsResponse } from "../types/yelp";
import { Divider } from "./Divider";
import { ReviewCard } from "./ReviewCard";
import { Subheading } from "./Subheading";

interface RestaurantDetailPageReviewListProps {
  id: string
}

export const ReviewList: FC<RestaurantDetailPageReviewListProps> = (props) => {
  const { data } = useSWR<YelpReviewsResponse>(`/businesses/${props.id}/reviews`)
  if (!data) return null

  return (
    <Layout>
      <StyledSubheading>{data.total} Reviews</StyledSubheading>
      {data.reviews.map(review => (
        <div>
          <ReviewCard
            key={review.id}
            authorImageURL={review.user.image_url}
            authorName={review.user.name}
            date={new Date(review.time_created)}
            rating={review.rating}
            text={review.text}
          />
          <StyledDivider />
        </div>
      ))}
    </Layout>
  )
}

const StyledSubheading = styled(Subheading)`
  margin-bottom: 48px;
`

const StyledDivider = styled(Divider)`
  margin-bottom: 40px;

  @media (min-width: 1024px) {
    margin-bottom: 80px;
  }
`

