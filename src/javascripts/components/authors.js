// FIXME: STUDENTS show your authors

const showAuthors = (array) => {
  document.querySelector('#store').innerHTML = '';
  // CREATE A BUTTON TO ADD BOOKS
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4 mx-2" id="add-author-btn">Add an Author</button><button class="btn btn-primary btn-lg mb-4" id="fav-author-btn">Favorite Authors Only</button>';
  array.forEach((item) => {
    // FIXME: STUDENTS create cards for your authors
    document.querySelector('#store').innerHTML += `<div class="card w-50">
    <div class="card-body">
      <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
      <p class="card-text">${item.email}</p>
      <a href="#" class="btn btn-primary" id="edit-author-btn--${item.firebaseKey}">Update</a>
      <a href="#" class="btn btn-danger" id="del-author-btn--${item.firebaseKey}">Delete</a>
    </div>
  </div>
  `;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
