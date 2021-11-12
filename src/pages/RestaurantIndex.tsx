import React, { FC } from "react";
import styled from "styled-components";
import { Divider } from "../components/Divider";
import { Heading1 } from "../components/Heading1";
import { Heading2 } from "../components/Heading2";
import { Layout } from "../components/Layout";
import { RestaurantGridDesktopContainer } from "../components/RestaurantCardsContainer";
import { RestaurantGridDesktop } from "../components/RestaurantGridDesktop";
import { Subheading } from "../components/Subheading";

export const RestaurantIndex: FC = () => {
  return (
    <Layout>
      <HeroMini>
        <StyledHeading1>Restaurants</StyledHeading1>
        <StyledSubheading>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</StyledSubheading>
      </HeroMini>
      <Divider />
      <StyledHeading2>All Restaurants</StyledHeading2>
      <RestaurantGridDesktopContainer />
    </Layout>
  )
}

const HeroMini = styled.div`max-width: 752px;`
const StyledHeading1 = styled(Heading1)`margin-bottom: 24px;`
const StyledHeading2 = styled(Heading2)`margin-bottom: 43px; margin-top: 64px;`
const StyledSubheading = styled(Subheading)`margin-bottom: 36px;`
