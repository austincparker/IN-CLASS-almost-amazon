const addAuthorForm = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
        <form id="submit-author-form" class="mb-4">
            <div class="form-group">
            <label for="author-fname">First Name</label>
            <input type="text" class="form-control" id="author-fname" placeholder="Enter Author's First Name" required>
            </div>
            <div class="form-group">
            <label for="author-lname">Last Name</label>
            <input type="text" class="form-control" id="author-lname" placeholder="Enter Author's Last Name" required>
            </div>
            <div class="form-group">
            <label for="author-email">Email Address</label>
            <input type="email" class="form-control" id="author-email" placeholder="Enter Author's Email Address" required>
            </div>
            <button type="submit" id="submit-author-btn" class="btn btn-primary">Submit Author</button>
        </form>`;
};

export default addAuthorForm;
