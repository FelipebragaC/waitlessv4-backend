
const Repository = require('../repositories/repository')
const repository = new Repository()


describe('Repository', () => {

  beforeAll(()=> {
    jest
    .spyOn(repository, 'findAll')
    .mockImplementation(() => {return{
      findAll:jest.fn().mockReturnValue({id:1,nome:'xablau',estabelecimento:3})
    }})
  })

  test('must return all results', async () => {

    const result =  await repository.findAll()
    await expect(result).toEqual({id:1,nome:'xablau',estabelecimento:3})
  })
})
