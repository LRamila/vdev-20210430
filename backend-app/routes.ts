import fastify from 'fastify';
const path = require('path');
const server = fastify();
const dataFile: any = require('./dataFile.json');

async function routes (server:any) {

  server.register(require('fastify-static'), {
    root: path.join(__dirname, '../web-app/dist'),
  })
  server.get('/', async (request:any, reply:any) => {
    return reply.sendFile('index.html')
  })
  server.get('/api/movies', async (request:any, reply:any) => {
    const movies = dataFile.movies;
    reply.send(movies);
  })
  server.get('/api/info', async (request:any, reply:any) => {
    const info = dataFile.info;
    reply.send(info);
  })
}

export default routes