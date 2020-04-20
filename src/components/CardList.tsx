import React, { useEffect } from "react";
import styled from "styled-components";
import CardItem from "./CardItem";
import useCardList from "../hooks/useCardList";

const CardListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0 -10px;
`;

const LoadingBlock = styled.div`
  width: 100%;
  text-align: center;
  padding: 80px 0;
`;

const ErrorBlock = styled.div`
  width: 100%;
  text-align: center;
  padding: 80px 0;
`;

const EmptyBlock = styled.div`
  width: 100%;
  text-align: center;
  padding: 80px 0;
  line-height: 2;
`;

function CardList() {
  const {
    loading,
    error,
    cards,
    scrapCards,
    filter: { onlyScrap },
    page,
    isLastPage,
    onGetCards,
    onAddPage,
  } = useCardList();
  const showingCards = onlyScrap ? scrapCards : cards;

  useEffect(() => {
    function handleScroll() {
      if (loading || isLastPage || onlyScrap) {
        return;
      }

      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      ) {
        return;
      }

      onAddPage();
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, onAddPage, isLastPage, onlyScrap]);

  useEffect(() => {
    onGetCards(page);
  }, [page, onGetCards]);

  return (
    <CardListBlock>
      {!loading && showingCards.length === 0 ? (
        <EmptyBlock>
          조건에 맞는 사진이 없어요 ㅠㅠ
          <br />
          필터를 다시 설정해주세요.
        </EmptyBlock>
      ) : (
        showingCards.map((card) => <CardItem key={card.id} card={card} />)
      )}
      {loading && <LoadingBlock>로딩중...</LoadingBlock>}
      {error && (
        <ErrorBlock>요청을 처리하는 도중에 오류가 발생했어요!</ErrorBlock>
      )}
    </CardListBlock>
  );
}

export default CardList;
