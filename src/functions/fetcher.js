const fetcher = async () => {

  const url = process.env.REACT_APP_API_END;

  const parameters = {
    method: 'GET',
    headers: {},
  };

  try {
    const fetchData = await fetch(url, parameters);
    const response = await fetchData.json();
    // console.log('fetcher response =', response.exercises);

    return response.exercises;

  } catch (error) {
    console.log('fetcher Error =', error);
    return error;
  }
}

export default fetcher;