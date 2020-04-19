import React from "react";
import styled from "styled-components";
import CardList from "../components/CardList";
import Responsive from "../components/common/Responsive";
import colors from "../lib/colors";
import CardListFilter from "../components/CardListFilter";

const CardListPageBlock = styled(Responsive)`
  color: ${colors.font.primary};
`;

function CardListPage() {
  return (
    <CardListPageBlock>
      <CardListFilter />
      <CardList />
    </CardListPageBlock>
  );
}

export default CardListPage;
