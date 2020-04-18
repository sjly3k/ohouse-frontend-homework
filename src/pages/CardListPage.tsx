import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CheckboxIcon from "../components/common/CheckboxIcon";
import CardList from "../components/CardList";
import { getCards } from "../lib/api";

const CardListPageBlock = styled.div``;

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
      <CheckboxIcon isChecked={true} />
      <CardList cards={cards} />
    </CardListPageBlock>
  );
}

export default CardListPage;
