import { buildApp } from './app'
import { env } from './config/env'

async function startServer() {
  const app = await buildApp()

  const PORT = env.PORT
  const HOST = env.HOST

  try {
    await app.listen({ port: PORT, host: HOST })
    app.log.info(`🚀 Server running at http://${HOST}:${PORT}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

startServer()
