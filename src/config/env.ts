import { config } from 'dotenv'
import { z } from 'zod'

if (process.env.NODE_ENV === 'test') {
  config({ path: '.env.test' })
} else {
  config()
}

const envSchema = z.object({
  DATABASE_URL: z.string(),
  PORT: z.preprocess((val) => Number(val), z.number().default(3333)),
  HOST: z.string().default('0.0.0.0'),
})

export const env = envSchema.parse(process.env)
