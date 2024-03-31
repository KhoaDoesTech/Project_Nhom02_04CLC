const request = require('supertest');
const { describe, it, expect } = require('@jest/globals');
const app = 'http://localhost:8081'; // Use your server URL instead of the Express app

describe('POST /v1/api/auth/login', () => {
  it('should return 400 if the user is not registered', async () => {
    const body = { email: 'nonexistent@example.com', password: 'password' };

    const res = await request(app).post('/v1/api/auth/login').send(body);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('message', 'User not registered');
  });

  it('should return 401 if the password is incorrect', async () => {
    const body = { email: 'inet.ngocmai.v6@gmail.com', password: '1111' };

    const res = await request(app).post('/v1/api/auth/login').send(body);

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('message', 'Incorrect password');
  });

  it('should return 200 and a token if the user is registered and the password is correct', async () => {
    const body = { email: 'inet.ngocmai.v6@gmail.com', password: '1337' };

    const res = await request(app).post('/v1/api/auth/login').send(body);

    expect(res.statusCode).toEqual(200);
    expect(res.body.metadata).toHaveProperty('tokens');
  });
});
