import { getSingleAuthor, deleteAuthor } from './authorData';
import { deleteBook, getAuthorsBooks, getSingleBook } from './bookData';

const viewBookDetails = (bookFirebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(bookFirebaseKey)
    .then((bookObject) => {
      console.warn(bookObject);
      getSingleAuthor(bookObject.author_id)
        .then((authorObject) => {
          resolve({ authorObject, ...bookObject });
        });
    }).catch(reject);
});

const deleteAuthorsBooks = (authorId) => new Promise((resolve, reject) => {
  getAuthorsBooks(authorId).then((authorsBookArray) => {
    const deleteBooks = authorsBookArray.map((book) => deleteBook(book.firebaseKey));
    console.warn(deleteBooks);
    Promise.all(deleteBooks).then(() => resolve(deleteAuthor(authorId)));
  }).catch(reject);
});

const viewAuthorDetails = (authorFirebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(authorFirebaseKey)
    .then((authorObject) => {
      console.warn(authorObject);
      getAuthorsBooks(authorObject.firebaseKey)
        .then((authorBookArray) => {
          resolve({ authorBookArray, ...authorObject });
        });
    }).catch(reject);
});

export { viewBookDetails, viewAuthorDetails, deleteAuthorsBooks };
