
const { connection } = require('../config/db')
const { loginRepository } = require('./loginRepository')

jest.mock('../config/db')
describe('loginRepository', () => {
  test('findUser', async () => {
    connection.mockReturnValue({})
    const result = await loginRepository.findUser()

    expect(result).toEqual({})
  })
})
