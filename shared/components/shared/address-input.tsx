"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const fetchSuggestions = async (query: string) => {
    if (query.length > 3) {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${encodeURIComponent(
            query
          )}`
        );

        const data = response.data;
        const newSuggestions = data.map((item: any) => item.display_name);
        setSuggestions(newSuggestions);
      } catch (error) {
        console.error("Error fetching address suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    fetchSuggestions(value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Zadejte adresu"
        style={{
          minWidth: "750px",
          padding: "10px",
          borderRadius: "10px",
          fontSize: "16px",
          backgroundColor: "#f1f1f1",
          border: "1px solid transparent",
          outline: "none",
        }}
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => {
                setInputValue(suggestion);
                onChange?.(suggestion);
                setSuggestions([]);
              }}
              style={{
                cursor: "pointer",
                padding: "5px",
                backgroundColor: "#fff",
                borderBottom: "1px solid #ddd",
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
