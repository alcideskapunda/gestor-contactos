// tests/integration/userRoutes.test.ts

import { testServer } from "../jest.setup"

describe("Rotas de usuário - Integração", () => {
  let userId: number

  test("POST /v1/api/users - cria usuário", async () => {
    const res = await testServer.post("/v1/api/users").send({
      name: "Novo usuário"
    })

    expect(res.status).toBe(201)
    expect(res.body.user).toHaveProperty("id")
    expect(res.body.user.name).toBe("Novo usuário")

    userId = res.body.user.id
  })

  test("GET /v1/api/users/:id - retorna usuário criado", async () => {
    const res = await testServer.get(`/v1/api/users/${userId}`)

    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty("id", userId)
  })

  test("DELETE /v1/api/users/:id - apaga usuário", async () => {
    const res = await testServer.delete(`/v1/api/users/${userId}`)

    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty("message")
  })
})
