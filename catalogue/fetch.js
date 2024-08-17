db.collection("books").get().then((querySnapshot) => {
  const bookList = document.getElementById('book-list');
  querySnapshot.forEach((doc) => {
    const book = doc.data();
    const bookId = doc.id;
    const card = document.createElement('div');

    const blurb = book.blurb.length > 210 ? book.blurb.substring(0, 300) + '...' : book.blurb;

    card.className = "col-md-6  ms-1 card";
    card.innerHTML = `
          <a href="https://bookbase.web.app/book/index.html?id=${bookId}" class="stretched-link text-decoration-none text-reset">
            <div class="row g-0">
              <img class="col-md-4" src="${book.cover || 'default.png'}" class="img-fluid rounded-start" alt="${book.title}">
                <div class="col-md-8 card-body">
                  <h5 class="card-title title">${book.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted author">${book.authors.join(', ')}</h6>
                  <p class="card-text blurb">${blurb}</p>
                  <p class="card-text publisher"><small class="text-muted">Publisher: ${book.publisher || '~'}, ${book.publishyr || '<^_^>'}</small></p>
                </div>
              </div>
          </a>
      `;
    bookList.appendChild(card);
  });
}).catch((error) => {
  console.error("Error getting documents: ", error);
});
