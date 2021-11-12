import React, { FC } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { Heading1 } from "../components/Heading1";
import { Layout } from "../components/Layout";
import { OpenFlagDesktop } from "../components/OpenFlagDesktop";
import { Price } from "../components/Price";
import { Rating } from "../components/Rating";
import { Subheading } from "../components/Subheading";
import { YelpBusiness } from "../types/yelp";

interface RestaurantDetailPageHeaderProps {
  id: string
}

export const RestaurantDetailPageHeader: FC<RestaurantDetailPageHeaderProps> = (props) => {
  const { data } = useSWR<YelpBusiness>(`/businesses/${props.id}`)

  return (
    <Layout>
      <StyledHeading1>{data.name}</StyledHeading1>
      <StyledRating value={data.rating} />
      <StyledWrapper>
        <Subheading>
          {data.categories[0]?.title}
          {data.price && " • "}
          {data.price && <Price dollarSigns={data.price} />}
        </Subheading>
        <Subheading>
          <OpenFlagDesktop open={!data.is_closed} />
        </Subheading>
      </StyledWrapper>
    </Layout>
  )
}

const StyledHeading1 = styled(Heading1)`
  margin-bottom: 8px;

  @media (min-width: 1024px) {
    margin-bottom: 16px;
  }
`

const StyledRating = styled(Rating)`
  margin-bottom: 16px;

  @media (min-width: 1024px) {
    margin-bottom: 24px;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (min-width: 1024px) {
    margin-bottom: 49px;
  }
`
