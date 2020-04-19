import React from "react";
import styled from "styled-components";
import CardItem from "./CardItem";
import useCardList from "../hooks/useCardList";

const CardListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0 -10px;
`;

const ErrorBlock = styled.div`
  width: 100%;
  text-align: center;
  padding: 80px 0;
`;

function CardList() {
  const {
    loading,
    error,
    cards,
    scrapCards,
    filter: { onlyScrap },
  } = useCardList();

  const showingCards = onlyScrap ? scrapCards : cards;

  return (
    <CardListBlock>
      {showingCards &&
        showingCards.map((card) => <CardItem key={card.id} card={card} />)}
      {loading && "loading"}
      {error && (
        <ErrorBlock>요청을 처리하는 도중에 오류가 발생했어요!</ErrorBlock>
      )}
    </CardListBlock>
  );
}

export default CardList;
