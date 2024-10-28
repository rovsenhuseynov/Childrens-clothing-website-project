import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderSearch.scss";

const HeaderSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Перенаправляем пользователя на страницу поиска с параметром запроса
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <div className="nav-search">
      <form onSubmit={handleSearchSubmit} className="nav-search__form">
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Поиск..."
          className="nav-search__input"
        />
      </form>
    </div>
  );
};

export default HeaderSearch;
