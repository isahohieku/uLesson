import _axios from 'axios';
import axiosRetry from 'axios-retry';

const axios = _axios.create({
  baseURL: `test base`,
  headers: {
    'Content-Type': 'application/json'
  }
});

const retryDelay = (retryNumber = 0) => {
  const seconds = Math.pow(2, retryNumber) * 1000;
  const randomMs = 1000 * Math.random();
  return seconds + randomMs;
};

const retryConfig = {
  retries: 2,
  retryDelay,
  // retry on Network Error & 5xx responses
  retryCondition: axiosRetry.isRetryableError,
};

const handleApiSuccess = (res) => {
  return res.data;
};

const handleApiError = (err) => {
  let errorMessagge = '';

  // request was manually cancelled in a `useEffect` hook
  if (_axios.isCancel(err)) {
    return; // fail silently
  }

  if (err.response) {
    const apiError = err.response.data;
    // client received an error response (5xx, 4xx)
    console.error(
      `Backend returned code ${err.code}:${apiError.code}, ` +
      `body was: ${apiError.message}`,
      'data:', apiError.data
    );
    errorMessagge = apiError.message;
    // dispatch api errors as event for use across app
  } else if (err.request) {
    // client never received a response, or request never left
    console.error('An error occurred:', err.message);
  } else {
    // anything else
    console.error('Well, that was unexpected:', err.message);
  }

  throw errorMessagge || 'We couldn\'t complete your request. Please try again or check your internet connection.';
};

export const Api = {
  getCancelTokenSource: () => _axios.CancelToken.source(),
  get: (endpoint, config = {}) =>
    axios.get(endpoint, { 'axios-retry': retryConfig, ...config })
      .then(handleApiSuccess)
      .catch(handleApiError),
  post: (endpoint, data, config = {}) =>
    axios.post(endpoint, data, config)
      .then(handleApiSuccess)
      .catch(handleApiError),
  put: (endpoint, data, config = {}) =>
    axios.put(endpoint, data, config)
      .then(handleApiSuccess)
      .catch(handleApiError),
  delete: (endpoint, config = {}) =>
    axios.delete(endpoint, config)
      .then(handleApiSuccess)
      .catch(handleApiError),
};
