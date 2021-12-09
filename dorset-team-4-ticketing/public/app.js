document.addEventListener('DOMContentLoaded', event => {

  const app = firebase.app();
  console.log(app);

  getMovies();


});


function getMovies() {
  const db = firebase.firestore();
  const myMovie = db.collection('movies').doc('FirstMovie');
  myMovie.get()
    .then(doc => {
      const data = doc.data();
      document.write(` movie title: ${data.title} <br/>`);
      document.write(` movie summary: ${data.summary} <br/>`);
      document.write(` movie isTRending: ${data.isTRending} <br/>`);
    })
}

function googleLogin() {
  console.log("hello");
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      document.write(`Hello ${user.displayName}`);
    })
    .catch(console.log)
}
