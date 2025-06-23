jest.mock("../../src/api/services/user-service") // DEVE VIR PRIMEIRO

import { Request, Response } from "express"
import * as userService from "../../src/api/services/user-service"
import * as userController from "../../src/api/controllers/user-controller"
import msg from "../../src/constants"

const mockedUserService = userService as jest.Mocked<typeof userService>

describe("User Controller", () => {
  const fakeRequest = { params: { id: "1" } } as unknown as Request
  const fakeResponse = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as unknown as Response

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test("getbyid - deve retornar 200 com usuário", async () => {
    const mockUser = { id: 1, name: "Test" }
    mockedUserService.getbyid.mockResolvedValue(mockUser)

    await userController.getbyid(fakeRequest, fakeResponse)

    expect(fakeResponse.status).toHaveBeenCalledWith(200)
    expect(fakeResponse.json).toHaveBeenCalledWith(mockUser)
  })

  test("getbyid - deve retornar 500 em erro", async () => {
    mockedUserService.getbyid.mockRejectedValue(new Error(msg.userNotFound))

    await userController.getbyid(fakeRequest, fakeResponse)

    expect(fakeResponse.status).toHaveBeenCalledWith(500)
    expect(fakeResponse.json).toHaveBeenCalledWith({
      message: msg.userNotFound,
    })
  })
})
