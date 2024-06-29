/* eslint-disable no-unused-vars */
function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch((error) => {
      console.log('Got a response from the API');
    });
}

export default handleResponseFromAPI;
