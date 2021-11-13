import React, { FC } from "react";
import styled from "styled-components";
import { Divider } from "../components/Divider";
import { Heading1 } from "../components/Heading1";
import { Heading2 } from "../components/Heading2";
import { Layout, LayoutTop } from "../components/Layout";
import { RestaurantFilterBar } from "../components/RestaurantFilterBar";
import { RestaurantGridContainer } from "../components/RestaurantGridContainer";
import { Subheading } from "../components/Subheading";
import { FilterContextContainer } from "../contexts/FilterContextContainer";

export const RestaurantIndexPage: FC = () => {
  return (
    <div>
      <Layout>
        <LayoutTop>
          <HeroMini>
            <StyledHeading1>Restaurants</StyledHeading1>
            <StyledSubheading>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</StyledSubheading>
          </HeroMini>
        </LayoutTop>
      </Layout>
      <Divider />
      <FilterContextContainer>
        <Layout>
          <RestaurantFilterBar />
        </Layout>
        <Divider />
        <Layout>
          <StyledHeading2>All Restaurants</StyledHeading2>
          <RestaurantGridContainer />
        </Layout>
      </FilterContextContainer>
    </div>
  )
}

const HeroMini = styled.div`max-width: 752px;`
const StyledHeading1 = styled(Heading1)`margin-bottom: 24px;`
const StyledHeading2 = styled(Heading2)`margin-bottom: 43px; margin-top: 64px;`
const StyledSubheading = styled(Subheading)`margin-bottom: 36px;`
