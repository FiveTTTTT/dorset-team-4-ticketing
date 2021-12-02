document.addEventListener('DOMContentLoaded', event => {
  const app = firebase.app();
  console.log(app);

  getMovies();
})

function getMovies() {
  const db = firebase.firestore();
  const oneMovie = db.collection('movies').doc('FirstMovie');
  oneMovie.get()
  .then(doc =>{
    const data = doc.data();
    document.write(`${data.title} <br/>`)
    document.write(`${data.isTrending} <br/>`)
    document.write(`${data.summary} <br/>`)
  })

}

function googleLogin() {

  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then(result => {
      const customers = result.user;
      document.write(`hello ${customers.displayName}`);
    })
    .catch(console.log)



}
