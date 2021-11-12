import React, { FC } from "react";
import styled from "styled-components";
import { PreLineParagraph } from "./Paragraph";
import { Rating } from "./Rating";

interface ReviewCardProps {
  authorImageURL: string
  authorName: string
  date: Date
  rating: number
  text: string
}

export const ReviewCard: FC<ReviewCardProps> = (props) => {
  return (
    <Article>
      <AuthorWrapper>
        <AuthorImage src={props.authorImageURL} alt="Reviewer's picture" />
        <div>
          <AuthorName>{props.authorName}</AuthorName>
          <DateWrapper>{props.date.toString()}</DateWrapper>
        </div>
      </AuthorWrapper>
      <div>
        <StyledRating value={props.rating} />
        <PreLineParagraph>{props.text}</PreLineParagraph>
      </div>
    </Article>
  )
}

const Article = styled.article`
  margin-bottom: 40px;

  @media (min-width: 1024px) {
    display: flex;
    margin-bottom: 80px;
  }
`

const AuthorWrapper = styled.div`
  display: flex;
`

const AuthorImage = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 18px;
  flex-shrink: 0;
  background: #D8D8D8;

  @media (min-width: 1024px) {
    width: 80px;
    height: 80px;
  }
`

const AuthorName = styled.h3`
  margin-top: 2px;
  margin-bottom: 6px;

  font-family: HelveticaNeue;
  font-size: 18px;
  letter-spacing: 0.75px;

  @media (min-width: 1024px) {
    font-size: 22px;
    line-height: 24px;
    letter-spacing: 0.916667px;
  }
`

const DateWrapper = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #666666;

  @media (min-width: 1024px) {
    width: 304px;
  }
`

const StyledRating = styled(Rating)`
  margin-top: 16px;
  margin-bottom: 24px;

  @media (min-width: 1024px) {
    margin-top: 4px;
    margin-bottom: 20px;
  }
`
