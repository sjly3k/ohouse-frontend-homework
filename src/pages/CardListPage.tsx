import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CheckboxIcon from "../components/common/CheckboxIcon";
import CardList from "../components/CardList";
import { getCards } from "../lib/api";
import Responsive from "../components/common/Responsive";

const CardListPageBlock = styled.div`
  .filter-wrapper {
    padding: 30px 0;
  }
`;

const Wrapper = styled(Responsive)``;

type CardListPageProps = {};

function CardListPage(props: CardListPageProps) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCards();
        setCards(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <CardListPageBlock>
      <Wrapper>
        <div className="filter-wrapper">
          <CheckboxIcon isChecked={true} /> 스크랩한 것만 보기
        </div>
        <CardList cards={cards} />
      </Wrapper>
    </CardListPageBlock>
  );
}

export default CardListPage;
