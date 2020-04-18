import React, { useState, useEffect } from "react";
import CardList from "./components/CardList";
import { getCards } from "./lib/api";

function App() {
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
    <div>
      <CardList cards={cards} />
    </div>
  );
}

export default App;
