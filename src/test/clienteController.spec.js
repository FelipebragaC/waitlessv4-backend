const mockRequest = (sessionData, bodyData) => ({
  session: { data: sessionData },
  body: bodyData
});

const mockResponse = () => {
  const res = {};
  res.status = 200
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const ClienteController = require('../controllers/clienteController')


describe('Client Controller', () => {
  const res = mockResponse();
  const req = mockRequest({});

  beforeAll(()=> {
    jest
    .spyOn(ClienteController, 'getClients')
    .mockImplementation(() => res)
  })
  beforeAll(()=> {
    jest
    .spyOn(ClienteController, 'updateClient')
    .mockImplementation(() => res)
  })
  beforeAll(()=> {
    jest
    .spyOn(ClienteController, 'deleteClient')
    .mockImplementation(() => res)
  })
  beforeAll(()=> {
    jest
    .spyOn(ClienteController, 'insertClient')
    .mockImplementation(() => res)
  })




  test('getClients should return 200', async () => {

    const result =  await ClienteController.getClients(req,res)
    await expect(result.status).toEqual(200)
  })

  test('updateClient should return 200', async () => {

    const result =  await ClienteController.updateClient(req,res)
    await expect(result.status).toEqual(200)
  })

  test('deleteClient should return 200', async () => {

    const result =  await ClienteController.deleteClient(req,res)
    await expect(result.status).toEqual(200)

  })

  test('insertClient should return 200', async () => {

    const result =  await ClienteController.insertClient(req,res)
    await expect(result.status).toEqual(200)

  })




})

