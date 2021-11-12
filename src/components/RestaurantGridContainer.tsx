import React, { FC, useState } from "react";
import styled from "styled-components";
import { CTA } from "./CTA";
import { RestaurantGridPage } from "./RestaurantGridPage";
import { RestaurantGrid } from "./RestaurantGrid";

export const RestaurantGridContainer: FC = () => {
  const [pageCount, setPageCount] = useState<number>(1)

  let pages = []
  for (let i = 0; i < pageCount; i++) {
    pages.push(<RestaurantGridPage key={i} index={i} />)
  }

  // Pre-load the next page so clicking on Load More feels fast
  const preLoadedNextPage = <RestaurantGridPage index={pageCount + 1} />

  // TODO: prevent loading more pages if the previous
  // request didn't yield any more results.
  const handleLoadMore = () => setPageCount(page => page + 1)

  return (
    <div>
      <RestaurantGrid>
        {pages}
      </RestaurantGrid>
      <Hidden>
        {preLoadedNextPage}
      </Hidden>
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

const Hidden = styled.div`
  display: none;
`
