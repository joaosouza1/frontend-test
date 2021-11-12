import styled from "styled-components";

export const RestaurantGrid = styled.div`
  display: grid;
  column-gap: 32px;
  row-gap: 80px;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
