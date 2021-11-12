import styled from "styled-components";

export const Layout = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding-right: 42px;
  padding-left: 42px;

  @media (min-width: 1024px) {
    padding-right: 64px;
    padding-left: 64px;
  }
`

export const LayoutTop = styled.div`
  margin-top: 42px;

  @media (min-width: 1024px) {
    margin-top: 36px;
  }
`
