// eslint-disable-next-line import/prefer-default-export
export async function getNewsData(signal: AbortSignal) {
  return fetch(`https://culture.iportfolio.co.kr/api/homepage/news`, {
    signal: signal,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('HTTP Status is above 299');
      }

      return response.json();
    })
    .catch((error) => {
      if (error.name !== 'AbortError') {
        console.error('request failed', error);
      } else {
        console.error('request cancelled', error);
      }
    });
}
