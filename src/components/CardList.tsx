import React from "react";
import styled from "styled-components";
import { Card } from "../modules/cards";
import CardItem from "./CardItem";

const CardListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 -10px;
`;

type CardListProps = {
  cards: Card[];
};

function CardList({ cards }: CardListProps) {
  return (
    <CardListBlock>
      {cards && cards.map((card) => <CardItem key={card.id} card={card} />)}
    </CardListBlock>
  );
}

export default CardList;
