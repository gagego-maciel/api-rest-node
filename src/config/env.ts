import { config } from 'dotenv'
import { z } from 'zod'

if (process.env.NODE_ENV === 'test') {
  config({ path: '.env.test' })
} else {
  config()
}

const envSchema = z.object({
  DATABASE_URL: z.string(),
  DATABASE_CLIENT: z.enum(['sqlite', 'pg']).default('sqlite'),
  PORT: z.coerce.number().default(3333),
  HOST: z.string().default('0.0.0.0'),
})

export const env = envSchema.parse(process.env)
