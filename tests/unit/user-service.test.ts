jest.mock("../../src/api/repository/user-repository") // DEVE VIR PRIMEIRO

import * as userRepository from "../../src/api/repository/user-repository"
import * as userService from "../../src/api/services/user-service"
import msg from "../../src/constants"

const mockedUserRepository = userRepository as jest.Mocked<typeof userRepository>

describe("User Service", () => {
  const fakeUser = { id: 1, name: "Test User" }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test("getbyid - retorna usuário se encontrado", async () => {
    mockedUserRepository.getbyid.mockResolvedValue(fakeUser)

    const user = await userService.getbyid(1)

    expect(user).toEqual(fakeUser)
  })

  test("getbyid - lança erro se usuário não existe", async () => {
    mockedUserRepository.getbyid.mockResolvedValue(undefined)

    await expect(userService.getbyid(999)).rejects.toThrow(msg.userNotFound)
  })
})
