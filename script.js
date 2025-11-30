fetch("https://api.themoviedb.org/3/movie/popular?api_key=ca95e0fdd1f043969283d145a688cde4")
     .then(response => console.log(response))
     .catch(error => console.log(error))