export async function getAllJobs(signal: AbortSignal) {
  return fetch(`https://culture.iportfolio.co.kr/api/homepage/career`, {
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

export async function getJobDetail(details: string, signal: AbortSignal) {
  return fetch(`https://culture.iportfolio.co.kr/api/doc/${details}`, {
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
