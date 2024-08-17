function submitForm() {
  var title = document.getElementById('title').value;
  var alt_title = document.getElementById('alt_title').value;
  var blurb = document.getElementById('blurb').value;
  var catagory = document.getElementById('catagory').value;
  var genres = document.getElementById('genres').value.split(',');
  var tags = document.getElementById('tags').value.split(',');
  var authors = document.getElementById('authors').value.split(',');
  var contributors = document.getElementById('contributors').value.split(',');
  var publisher = document.getElementById('publisher').value;
  var pub_year = document.getElementById('pub_year').value;
  var edition = document.getElementById('edition').value;
  var language = document.getElementById('language').value;
  var isbn = document.getElementById('isbn').value;
  var isbn13 = document.getElementById('isbn13').value;
  var goodreads_id = document.getElementById('goodreads_id').value;
  var avg_user_rating = document.getElementById('avg_user_rating').value;
  var regions = document.getElementById('regions').value.split(',');
  var series_number = parseInt(document.getElementById('series_number').value);
  var seriesname = document.getElementById('seriesname').value;
  var page_count = document.getElementById('page_count').value;
  var coverInput = document.getElementById('CoverInput');

  if (coverInput.files && coverInput.files[0]) {
    var file = coverInput.files[0];
    var storageRef = firebase.storage().ref();
    var coverRef = storageRef.child('covers/' + file.name);

    coverRef.put(file).then(function (snapshot) {
      snapshot.ref.getDownloadURL().then(function (coverURL) {
        saveBookData(coverURL);
      }).catch(function (error) {
        console.error("Error getting cover URL: ", error);
        alert("Error uploading cover image. Please try again.");
      });
    }).catch(function (error) {
      console.error("Error uploading cover: ", error);
      alert("Error uploading cover image. Please try again.");
    });
  } else {
    saveBookData("");
  }

  function saveBookData(coverURL) {
    db.collection("books").add({
      title: title,
      alt_title: alt_title,
      blurb: blurb,
      catagory: catagory,
      genres: genres,
      tags: tags,
      authors: authors,
      contributors: contributors,
      publisher: publisher,
      publishyr: pub_year,
      edition: edition,
      language: language,
      isbn: isbn,
      isbn13: isbn13,
      goodreads_id: goodreads_id,
      avg_user_rating: avg_user_rating,
      regions: regions,
      series_number: series_number,
      seriesname: seriesname,
      page_count: page_count,
      cover: coverURL
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      alert("Book added successfully!");
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
      alert("Error adding book. Please try again.");
    });
  }
}

// Add event listener to the form submit button
document.getElementById('btn-submit').addEventListener('click', function(event) {
  event.preventDefault();
  submitForm();
});
