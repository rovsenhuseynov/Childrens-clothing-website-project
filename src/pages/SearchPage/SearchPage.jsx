import React from "react";
import { useLocation } from "react-router-dom";
import "./SearchPage.scss";

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query") || "";

  // Здесь можно добавить логику для поиска и отображения результатов
  // Например, фильтрация данных или запрос к API

  return (
    <div className="search-page">
      <h1>Результаты поиска для: "{query}"</h1>
      {/* Здесь отобразим результаты поиска */}
    </div>
  );
};

export default SearchPage;