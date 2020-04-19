import React, { useEffect } from "react";
import styled from "styled-components";
import CardList from "../components/CardList";
import Responsive from "../components/common/Responsive";
import colors from "../lib/colors";
import { useDispatch } from "react-redux";
import { getCardsAsync } from "../modules/cards";
import CardListFilter from "../components/CardListFilter";

const CardListPageBlock = styled(Responsive)`
  color: ${colors.font.primary};
`;

function CardListPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardsAsync.request(1));
  }, [dispatch]);

  return (
    <CardListPageBlock>
      <CardListFilter />
      <CardList />
    </CardListPageBlock>
  );
}

export default CardListPage;
