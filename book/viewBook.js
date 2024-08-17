// Get the book ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('id');

// Fetch book details from Firestore
db.collection("books").doc(bookId).get().then((doc) => {
    if (doc.exists) {
        const book = doc.data();

        // Set the book cover image
        document.getElementById('book-cover').src = book.cover || './default.png';
        document.getElementById('book-cover').alt = book.title || "Book Cover";

        // Set the book title and year
        const bookTitle = book.title || 'Title Unavailable';
        const bookYear = book.publishyr ? ` (${book.publishyr})` : '';
        document.getElementById('book-title').textContent = bookTitle;
        document.getElementById('book-year').textContent = bookYear;

        // Set the book author
        document.getElementById('book-author').textContent = book.authors ? book.authors.join(', ') : 'Author Unavailable';

        // Set the book blurb
        document.getElementById('book-blurb').textContent = book.blurb || 'No description available.';

        // Set ISBN
        document.getElementById('ISBN').textContent = book.isbn || 'N/A';

        // Set Publisher
        document.getElementById('Publisher').textContent = book.publisher || 'N/A';

        // Set Edition
        document.getElementById('Edition').textContent = book.edition || 'N/A';

        // Set Language
        document.getElementById('Language').textContent = book.language || 'N/A';

        // Set Goodreads ID as clickable link
        const goodreadsIDElement = document.getElementById('GoodReadsID');
        if (book.goodreads_id) {
            const goodreadsURL = `https://www.goodreads.com/book/show/${book.goodreads_id}`;
            goodreadsIDElement.href = goodreadsURL;
            goodreadsIDElement.textContent = book.goodreads_id;
        } else {
            goodreadsIDElement.textContent = 'N/A';
        }

        // Set Page Count
        document.getElementById('PageCount').textContent = book.page_count || 'N/A';

    } else {
        console.log("No such document!");
        // Optionally, redirect to an error page or show an error message
    }
}).catch((error) => {
    console.error("Error getting document: ", error);
    // Optionally, handle the error, such as showing an error message to the user
});
