import React, { useEffect } from "react";
import styled from "styled-components";
import CardList from "../components/CardList";
import Responsive from "../components/common/Responsive";
import colors from "../lib/colors";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { getCardsAsync } from "../modules/cards";
import CardListFilter from "../components/CardListFilter";

const CardListPageBlock = styled.div`
  color: ${colors.font.primary};
`;

const ErrorBlock = styled.div`
  text-align: center;
  padding: 80px 0;
`;

function CardListPage() {
  const {
    cards,
    scrapCards,
    error,
    filter: { onlyScrap },
  } = useSelector((state: RootState) => state.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardsAsync.request(1));
  }, [dispatch]);

  return (
    <CardListPageBlock>
      <Responsive>
        <CardListFilter />
        <CardList cards={onlyScrap ? scrapCards : cards} />
        {error && (
          <ErrorBlock>요청을 처리하는 도중에 오류가 발생했어요!</ErrorBlock>
        )}
      </Responsive>
    </CardListPageBlock>
  );
}

export default CardListPage;
