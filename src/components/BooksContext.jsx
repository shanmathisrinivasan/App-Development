// src/context/BooksContext.js
import React, { createContext, useState } from 'react';

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [addedBooks, setAddedBooks] = useState([]);

  const addBook = (book) => {
    setAddedBooks((prevAddedBooks) => {
      if (!prevAddedBooks.find((b) => b.id === book.id)) {
        return [...prevAddedBooks, book];
      }
      return prevAddedBooks;
    });
  };

  return (
    <BooksContext.Provider value={{ addedBooks, addBook }}>
      {children}
    </BooksContext.Provider>
  );
};
