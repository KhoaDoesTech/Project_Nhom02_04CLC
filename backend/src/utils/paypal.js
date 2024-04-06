import { paypal } from '~/configs/environment';
const { clientId, clientSecret, url } = paypal;
const { BadRequestError } = require('~/helpers/error.response');
/**
 * Fetches an access token from the PayPal API
 * @see {@link https://developer.paypal.com/reference/get-an-access-token/#link-getanaccesstoken}
 *
 * @returns {Promise<string>} Access token if the request is successful
 */
const getPayPalAccessToken = async () => {
  const auth = Buffer.from(clientId + ':' + clientSecret).toString('base64');

  const urlApi = `${url}/v1/oauth2/token`;

  const headers = {
    Accept: 'application/json',
    'Accept-Language': 'en_US',
    Authorization: `Basic ${auth}`,
  };

  const body = 'grant_type=client_credentials';
  const response = await fetch(urlApi, {
    method: 'POST',
    headers,
    body,
  });

  if (!response.ok) throw new BadRequestError('Failed to get access token');

  const paypalData = await response.json();

  return paypalData.access_token;
};

const verifyPayPalPayment = async (paypalTransactionId) => {
  const accessToken = await getPayPalAccessToken();
  const paypalResponse = await fetch(
    `${url}/v2/checkout/orders/${paypalTransactionId}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!paypalResponse.ok) throw new BadRequestError('Failed to verify payment');

  const paypalData = await paypalResponse.json();
  return {
    verified: paypalData.status === 'COMPLETED',
    value: paypalData.purchase_units[0].amount.value,
  };
};

module.exports = {
  getPayPalAccessToken,
  verifyPayPalPayment,
};
