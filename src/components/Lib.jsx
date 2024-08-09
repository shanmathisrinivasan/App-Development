import React, { useContext } from 'react';
import { BooksContext } from '../components/BooksContext';

const Lib = () => {
  const { addedBooks } = useContext(BooksContext);

  return (
    <div style={styles.pageContainer}>
      <h2>My Library</h2>
      <div style={styles.libraryContainer}>
        {addedBooks.length === 0 ? (
          <p style={styles.noBooksText}>No books added yet.</p>
        ) : (
          addedBooks.map((book) => (
            <div key={book.id} style={styles.bookContainer}>
              <img src={book.imageUrl} alt={book.title} style={styles.bookImage} />
              <div style={styles.bookTitle}>{book.title}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    minHeight: '100vh',
    backgroundColor: 'transparent', // Light background for the whole page
  },
  libraryContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: 'transparent', // No background color
  },
  noBooksText: {
    color: '#333',
    fontSize: '16px',
    fontWeight: 'bold',
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
};

export default Lib;
