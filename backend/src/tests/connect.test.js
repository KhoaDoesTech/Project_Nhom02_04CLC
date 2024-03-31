const { describe, it, expect } = require('@jest/globals');
import axios from 'axios';
describe('POST /v1/api/auth/login', () => {
  it('should return 400 if the user is not registered', async () => {
    const email = 'inet.ngocmai.v6@gmail.com';
    const password = '1337';

    const url = 'http://localhost:8081/v1/api/auth/login';
    try {
      const response = await axios.post(url, {
        email: email,
        password: password,
      });
      console.log(response);

      expect(response.status).toEqual(200);
      expect(response.data.metadata).toHaveProperty('tokens');
    } catch (error) {
      console.log(error);
    }
  });
});
