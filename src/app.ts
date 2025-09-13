import fastify from 'fastify'
import fastifyHelmet from '@fastify/helmet'
import fastifyCors from '@fastify/cors'
import { createTransactionRoute } from './rotas/Transactions/transactions'
import cookie from '@fastify/cookie'

export async function buildApp() {
  const app = fastify({
    logger: true,
  })

  // Plugins
  await app.register(fastifyHelmet)
  await app.register(fastifyCors, {
    origin: true,
  })
  await app.register(cookie)

  // Rotas
  app.register(createTransactionRoute)

  return app
}
