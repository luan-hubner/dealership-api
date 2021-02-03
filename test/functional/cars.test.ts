import supertest from 'supertest';

describe('Disponible cars functional tests', () => {
  it('should return disponible cars', async() => {
    const { body, status } = await supertest(app).get('/cars');
    expect(status).toBe(200);
    expect(body).toEqual([{
      "description": "Corsa",
      "brand": "Chevrolet",
      "year": "2010/2011",
      "color": "Black",
      "motor": 1.4,
      "horsepower": 500,
      "price": 27000,
      "km": 0,
      "img": "https://www.google.com.br"
    }, {
      "description": "Hilux",
      "brand": "Toyota",
      "year": "2015/2016",
      "color": "Prata",
      "motor": 1.4,
      "horsepower": 800,
      "price": 127000,
      "km": 12000,
      "img": "https://www.google.com.br"
    }]);
  });
});