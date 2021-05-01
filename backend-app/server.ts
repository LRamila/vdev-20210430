import fastify from 'fastify'
const server = fastify()
import routes from './routes'

// routes
server.get('/', async (request, reply) => {
    reply.send({view:"web-app loading.. (needed to be added)"})
})

routes.forEach((route:any, index:any) => {
    server.route(route)
})

// Run the server!
server.listen(3000, (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server listening at ${address}`)
  })