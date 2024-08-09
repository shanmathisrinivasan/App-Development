import React, { createContext, useState, useContext } from 'react';
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import { Button, Typography } from '@mui/material';
import { BooksContext } from '../components/BooksContext';

// Create the BooksContext
//export const BooksContext = createContext();

const books = [
  { id: 1, title: 'Book 1', imageUrl: 'https://i.pinimg.com/474x/dc/42/4d/dc424dc254700f3d601571cc6dc102ed.jpg' },
  { id: 2, title: 'Book 2', imageUrl: 'https://i.pinimg.com/564x/e6/3b/06/e63b063386975e9ad42453c87a037291.jpg' },
  { id: 3, title: 'Book 3', imageUrl: 'https://i.pinimg.com/564x/c8/1e/c8/c81ec80c8a7960b0acd85bd918b3ddca.jpg' },
  { id: 4, title: 'Book 4', imageUrl: 'https://i.pinimg.com/564x/a9/16/43/a916431a88a3e6aac3479d96c96664c5.jpg' },
  { id: 5, title: 'Book 5', imageUrl: 'https://i.pinimg.com/564x/c9/3f/6a/c93f6abc5cfa7567fe943201073e8215.jpg' },
  { id: 6, title: 'Book 6', imageUrl: 'https://i.pinimg.com/736x/62/55/79/625579d6cc34ca17b6b40ead040e146e.jpg' },
  // Add more books as needed
  { id: 7, title: 'Book 7', imageUrl: 'https://i.pinimg.com/564x/01/01/48/010148efa00bf7074328f5b473fd3576.jpg' },
  { id: 8, title: 'Book 8', imageUrl: 'https://i.pinimg.com/564x/58/95/ba/5895ba596af333aa03397b41c077d708.jpg' },
  { id: 9, title: 'Book 9', imageUrl: 'https://i.pinimg.com/564x/0b/a1/c6/0ba1c61f3301802e02b052be277dc746.jpg' },
  { id: 10, title: 'Book 10', imageUrl: 'https://i.pinimg.com/236x/4e/88/9f/4e889ffd6caca37b9730b58e669bb814.jpg' },
  { id: 11, title: 'Book 11', imageUrl: 'https://i.pinimg.com/236x/8e/92/d3/8e92d3d06b806408af5e7ad086a8bfcf.jpg' },
  { id: 12, title: 'Book 12', imageUrl: 'https://i.pinimg.com/236x/d0/19/ed/d019ed2a913fa3985586d887caf31378.jpg' },
  // Add more books as needed
  { id: 13, title: 'Book 13', imageUrl: 'https://i.pinimg.com/736x/de/4b/8b/de4b8bf47ae4052630568768757d44a8.jpg' },
  { id: 14, title: 'Book 14', imageUrl: 'https://i.pinimg.com/736x/0a/9d/aa/0a9daab45a1d094884986c1436dcaad7.jpg' },
  { id: 15, title: 'Book 15', imageUrl: 'https://i.pinimg.com/736x/be/e1/0c/bee10c53dd72e5a2931dd192c6f1ba72.jpg' },
  { id: 16, title: 'Book 16', imageUrl: 'https://i.pinimg.com/236x/80/08/52/80085212d14b44cd06ffac409d7b6c24.jpg' },
  { id: 17, title: 'Book 17', imageUrl: 'https://i.pinimg.com/564x/d2/28/31/d228313fd6c8f5f6d08451b5bbb2f0e8.jpg' },
  { id: 18, title: 'Book 18', imageUrl: 'https://i.pinimg.com/236x/54/4c/d1/544cd197c567eadcadc6fa8d29fa08eb.jpg' },
  // Add more books as needed
];

const Library = () => {
  const { addedBooks, addBook } = useContext(BooksContext);

  return (
    <div style={styles.libraryContainer}>
      <div style={styles.header}>
        Our Books
        <Link to="/lib" style={styles.navigateButton}>
          <Button
            
            variant="text"
            style={{ backgroundColor: 'transparent', boxShadow: 'none', color: 'inherit', padding:0, minWidth:'auto' }}
            type="submit"
            
          >
            LIBRARY
          </Button>
        </Link>
      </div>
      <div style={styles.booksContainer}>
        {books.map((book) => (
          <div key={book.id} style={styles.bookContainer}>
            <img src={book.imageUrl} alt={book.title} style={styles.bookImage} />
            <div style={styles.bookTitle}>{book.title}</div>
            <div onClick={() => addBook(book)} style={styles.iconContainer}>
              {addedBooks.find((b) => b.id === book.id) ? <FaThumbsUp /> : <FaRegThumbsUp />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  libraryContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'transparent',
    backgroundImage: `url('https://i.pinimg.com/736x/28/0b/f9/280bf98e01079e1ace56392f149ccd3b.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  },
  header: {
    width: '100%',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
    position: 'relative',
  },
  navigateButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    padding: '10px 20px',
    fontSize: '14px',
    backgroundColor: 'none',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  booksContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  bookContainer: {
    width: '150px',
    height: '250px',
    margin: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bookImage: {
    width: '100%',
    height: '80%',
    objectFit: 'cover',
  },
  bookTitle: {
    padding: '5px',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  iconContainer: {
    cursor: 'pointer',
    marginTop: '5px',
  },
};

export default Library;