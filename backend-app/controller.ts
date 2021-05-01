
const dataFile: any = require('./dataFile.json');
// loads json file
function getMovies() {
  try {
    const movies = dataFile.movies;
    return movies;
  }
  catch (err) {
     console.log(err)
  }
}
function getInfo() {
  try {
    const info = dataFile.info;
    return info;
  }
  catch (err) { 
    console.log(err) 
  }
}

export default { getMovies, getInfo };