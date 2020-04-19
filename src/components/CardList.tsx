import React from "react";
import styled from "styled-components";
import { Card } from "../modules/cards";
import CardItem from "./CardItem";
import { RootState } from "../modules";
import { useSelector } from "react-redux";

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
  const { loading } = useSelector((state: RootState) => ({
    ...state,
    loading: state.loading["cards/GET_CARDS"],
  }));
  return (
    <CardListBlock>
      {cards && cards.map((card) => <CardItem key={card.id} card={card} />)}
      {loading && "loading"}
    </CardListBlock>
  );
}

export default CardList;
