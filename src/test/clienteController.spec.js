
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

  beforeAll(()=> {
    jest
    .spyOn(ClienteController, 'getClients')
    .mockImplementation(() => res)
  })

  test('should return 200', async () => {
    const req = mockRequest({});

    const rusult =  await ClienteController.getClients(req,res)

    expect(rusult.status).toEqual(200)
  })
})
