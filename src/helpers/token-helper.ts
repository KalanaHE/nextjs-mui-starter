const setAccessToken = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
  } else {
    localStorage.removeItem('accessToken');
  }
};

const getAccessToken = () => localStorage.getItem('accessToken');

export {setAccessToken, getAccessToken};
