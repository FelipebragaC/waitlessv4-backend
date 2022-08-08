jest.mock('./clienteRepository')

const clienteRepository = require('./clienteRepository')


describe('Repository', () => {

  test('must return all results', async () => {

    const result =  await clienteRepository.findAll({})
    await expect(result).toEqual({id:1,nome:'xablau',estabelecimento:3})
  })

})
