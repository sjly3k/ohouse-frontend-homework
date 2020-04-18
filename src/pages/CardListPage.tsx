import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CheckboxIcon from "../components/common/CheckboxIcon";
import CardList from "../components/CardList";
import { getCards } from "../lib/api";
import Responsive from "../components/common/Responsive";
import colors from "../lib/colors";

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
          <CheckboxIcon isChecked={true} />{" "}
          <div className="scrap-text">스크랩한 것만 보기</div>
        </div>
        <CardList cards={cards} />
      </Wrapper>
    </CardListPageBlock>
  );
}

export default CardListPage;
