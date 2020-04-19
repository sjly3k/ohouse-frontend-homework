import { Card } from "../modules/cards";

const LOCAL_STORAGE_SCRAP_CARDS = "SCRAP_CARDS";

export const getScrapCards = () => {
  const scrapCardsString = localStorage.getItem(LOCAL_STORAGE_SCRAP_CARDS);
  const scrapCards: Card[] = scrapCardsString
    ? JSON.parse(scrapCardsString)
    : [];
  return scrapCards;
};

export const setScrapCards = (cards: Card[]) => {
  localStorage.setItem(LOCAL_STORAGE_SCRAP_CARDS, JSON.stringify(cards));
};

export const addScrapCard = (card: Card) => {
  const scrapCards = getScrapCards();
  const nextScrapCards = scrapCards.concat(card);

  setScrapCards(nextScrapCards);
};

export const removeScrapCard = (id: number) => {
  const scrapCards = getScrapCards();
  const nextScrapCards = scrapCards.filter((card) => card.id !== id);

  setScrapCards(nextScrapCards);
};
