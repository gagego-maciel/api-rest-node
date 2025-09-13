import request from 'supertest'
import { buildApp } from '../../app'
import { test, describe, expect, beforeEach, beforeAll } from 'vitest'
import { execSync } from 'node:child_process'

describe('Transactions routes', () => {
  let app: Awaited<ReturnType<typeof buildApp>>

  beforeAll(async () => {
    app = await buildApp()
    await app.ready()
  })

  beforeEach(async () => {
    execSync('npm run knex migrate:rollback --all')
    execSync('npm run knex migrate:latest')
  })

  test('should allow the user to create a transaction', async () => {
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 5000,
        type: 'credit',
      })
      .expect(201)
  })

  test('should be able to list all transactions', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 5000,
        type: 'credit',
      })

    const cookies = createTransactionResponse.get('Set-Cookie')

    const listTransactionsResponse = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies ?? [])
      .expect(200)

    expect(listTransactionsResponse.body.transactions).toEqual([
      expect.objectContaining({
        title: 'New transaction',
        amount: 5000,
        type: 'credit',
      }),
    ])
  })

  test('should be able to get a specific transactions', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'Almoço com a familia',
        amount: 200,
        type: 'credit',
      })

    const cookies = createTransactionResponse.get('Set-Cookie')

    const listTransactionsResponse = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies ?? [])
      .expect(200)

    const { id, created_at, session_id } =
      listTransactionsResponse.body.transactions[0]

    const getTransactionsResponse = await request(app.server)
      .get(`/transactions/${id}`)
      .set('Cookie', cookies ?? [])
      .expect(200)

    expect(getTransactionsResponse.body.transaction).toEqual(
      expect.objectContaining({
        id: id,
        title: 'Almoço com a familia',
        amount: 200,
        type: 'credit',
        created_at: created_at,
        session_id: session_id,
      }),
    )
  })

  test('should be able to get the summary', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'Nova transação 01',
        amount: 1000,
        type: 'credit',
      })

    const cookies = createTransactionResponse.get('Set-Cookie')

    await request(app.server)
      .post('/transactions')
      .set('Cookie', cookies ?? [])
      .send({
        title: 'Nova transação 02',
        amount: 300,
        type: 'debit',
      })

    const summaryResponse = await request(app.server)
      .get('/transactions/summary')
      .set('Cookie', cookies ?? [])
      .expect(200)

    expect(summaryResponse.body.summary).toEqual({ amount: 700 })
  })
})
