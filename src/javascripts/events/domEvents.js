/* eslint-disable no-alert */
import { showBooks } from '../components/books';
import addBookForm from '../components/forms/addBookForm';
import {
  createBook, deleteBook, getSingleBook, updateBook
} from '../helpers/data/bookData';
import addAuthorForm from '../components/forms/addAuthorForm';
import {
  authorFav, createAuthor, deleteAuthor, getSingleAuthor, updateAuthor
} from '../helpers/data/authorData';
import { showAuthors } from '../components/authors';
import viewBook from '../components/viewBook';
import viewAuthor from '../components/viewAuthor';
import { deleteAuthorsBooks, viewAuthorDetails, viewBookDetails } from '../helpers/data/mergedData';

const domEvents = (userId) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      if (window.confirm('Want to delete?')) {
        // console.warn('CLICKED DELETE BOOK', e.target.id);
        const [, id] = e.target.id.split('--');
        deleteBook(id, userId).then(showBooks);
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      console.warn('CLICKED ADD BOOK BUTTON', e.target.id);
      addBookForm(userId);
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-book')) {
      e.preventDefault();
      const bookObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        description: document.querySelector('#description').value,
        sale: document.querySelector('#sale').value,
        author_id: document.querySelector('#author_id').value,
        uid: userId
      };
      createBook(bookObject).then((booksArray) => showBooks(booksArray));
    }

    // CLICK EVENT FOR EDITING / UPDATING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      console.warn('CLICKED EDIT BOOK', e.target.id);

      const [, id] = e.target.id.split('--');

      getSingleBook(id).then((bookObj) => addBookForm(bookObj.uid, bookObj));
      // console.warn(id);
    }

    // CLICK EVENT FOR EDITING / UPDATING A BOOK
    if (e.target.id.includes('update-book')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const bookObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        description: document.querySelector('#description').value,
        sale: document.querySelector('#sale').value,
        author_id: document.querySelector('#author_id').value,
        firebaseKey,
        uid: userId
      };
      console.warn(bookObject);
      updateBook(bookObject).then(showBooks);
      // console.warn('CLICKED EDIT BOOK', e.target.id);
    }

    // VIEW BOOK BUTTON

    if (e.target.id.includes('view-book-btn')) {
      console.warn(e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      viewBookDetails(firebaseKey).then(viewBook);
    }

    // VIEW AUTHOR BUTTON

    if (e.target.id.includes('view-author-btn')) {
      console.warn(e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(firebaseKey);
      viewAuthorDetails(firebaseKey).then(viewAuthor);
    }

    // ADD CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('del-author-btn')) {
      if (window.confirm('Want to delete?')) {
        // console.warn(e.target.id);
        const [, id] = e.target.id.split('--');
        deleteAuthorsBooks(id);
        deleteAuthor(id, userId).then(showAuthors);
      }
    }

    // ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('add-author-btn')) {
      addAuthorForm();
    }
    // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('submit-author-btn')) {
      console.warn('clicked submit author');
      e.preventDefault();
      const authorObject = {
        first_name: document.querySelector('#author-fname').value,
        last_name: document.querySelector('#author-lname').value,
        email: document.querySelector('#author-email').value,
        uid: userId
      };
      createAuthor(authorObject).then((authorsArray) => showAuthors(authorsArray));
    }
    // ADD CLICK EVENT FOR EDITING AN AUTHOR

    if (e.target.id.includes('edit-author-btn')) {
      console.warn('CLICKED EDIT AUTHOR', e.target.id);

      const [, id] = e.target.id.split('--');

      getSingleAuthor(id).then((authorObj) => addAuthorForm(authorObj));
      // console.warn(id);
    }

    // ADD CLICK EVENT FOR UPDATING AN AUTHOR
    if (e.target.id.includes('update-author')) {
      console.warn('clicked update author');
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const authorObject = {
        first_name: document.querySelector('#author-fname').value,
        last_name: document.querySelector('#author-lname').value,
        email: document.querySelector('#author-email').value,
        firebaseKey,
        uid: userId
      };
      console.warn(authorObject);
      updateAuthor(authorObject).then(showAuthors);
    }

    // ADD CLICK EVENT TO FILTER FAV AUTHORS
    if (e.target.id.includes('fav-author-btn')) {
      authorFav(userId).then(showAuthors);
    }
  });
};

export default domEvents;
