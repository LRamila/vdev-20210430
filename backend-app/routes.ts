import getData from './controller';
const routes = [
  {
    method: 'GET',
    url: '/api/info',
    handler: getData.getInfo
  },
  {
    method: 'GET',
    url: '/api/movies',
    handler: getData.getMovies
  },
]

export default routes