const mockRequest = (sessionData, bodyData) => ({
  session: { data: sessionData },
  body: bodyData
});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const ClienteController = require('../controllers/clienteController')
describe('Client Controller', () => {


  test('should return 200', async () => {
    const req = mockRequest({});
    const res = mockResponse();
    await ClienteController.getClients(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
  })
})
