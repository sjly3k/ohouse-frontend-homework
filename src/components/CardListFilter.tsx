import React from "react";
import styled from "styled-components";
import CheckboxIcon from "./common/CheckboxIcon";
import useCardListFilter from "../hooks/useCardListFilter";

const CardListFilterBlock = styled.div`
  display: flex;
  padding: 30px 0;
  align-items: center;

  .scrap-text {
    margin-left: 6px;
  }
`;

function CardListFilter() {
  const {
    filter: { onlyScrap },
    onToggleFilterOnlyScrap,
  } = useCardListFilter();

  return (
    <CardListFilterBlock onClick={onToggleFilterOnlyScrap}>
      <CheckboxIcon isChecked={onlyScrap} />{" "}
      <div className="scrap-text">스크랩한 것만 보기</div>
    </CardListFilterBlock>
  );
}

export default CardListFilter;
