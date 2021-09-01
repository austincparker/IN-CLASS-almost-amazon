import clearDom from '../helpers/data/clearDom';

const viewAuthor = (obj) => {
  clearDom();
  document.querySelector('#view').innerHTML += `
    <div class="mt-5 d-flex flex-wrap">
    <div class="d-flex flex-column">
      <div class="mt-5">
        <i id="edit-author-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
        <i id="delete-author--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
      </div>
    </div>
    <div class="text-white ms-5 details">
      <h5>${obj.first_name} ${obj.last_name}</h5>
      <p>${obj.email}</p>
      <hr>  
      <div id="authorsBooks" class="d-flex mr-2">
       </div>;
    </div>
  </div>`;
  console.warn(obj.bookObject);
  obj.bookObject.forEach((item) => {
    document.querySelector('#authorsBooks').innerHTML += `
        <div class="card">
            <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
            <div class="card-body" style="height: 180px;">
              <h5 class="card-title" style="color: black">${item.title}</h5>
              <p class="card-text bold" style="color: black">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-book-btn--${item.firebaseKey}"></i>
        <button class="btn btn-info" id="edit-book-btn--${item.firebaseKey}">Edit Book</button>
        <button class="btn btn-danger" id="delete-book--${item.firebaseKey}">Delete Book</button>
              <hr>
            </div>
     </div>
     `;
  });
};

export default viewAuthor;
