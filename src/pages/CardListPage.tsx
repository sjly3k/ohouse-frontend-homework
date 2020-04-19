import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CheckboxIcon from "../components/common/CheckboxIcon";
import CardList from "../components/CardList";
import Responsive from "../components/common/Responsive";
import colors from "../lib/colors";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { getCardsAsync, toggleFilterOnlyScrap } from "../modules/cards";

const CardListPageBlock = styled.div`
  color: ${colors.font.primary};

  .filter-wrapper {
    display: flex;
    padding: 30px 0;
    align-items: center;

    .scrap-text {
      margin-left: 6px;
    }
  }
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

  const onToggle = () => {
    dispatch(toggleFilterOnlyScrap());
  };

  return (
    <CardListPageBlock>
      <Responsive>
        <div className="filter-wrapper" onClick={onToggle}>
          <CheckboxIcon isChecked={onlyScrap} />{" "}
          <div className="scrap-text">스크랩한 것만 보기</div>
        </div>
        <CardList cards={onlyScrap ? scrapCards : cards} />
        {error && (
          <ErrorBlock>요청을 처리하는 도중에 오류가 발생했어요!</ErrorBlock>
        )}
      </Responsive>
    </CardListPageBlock>
  );
}

export default CardListPage;
