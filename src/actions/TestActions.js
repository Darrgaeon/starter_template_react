export const TEST_LOAD_REQUEST = "TEST_LOAD_REQUEST";
export const TEST_LOAD_SUCCESS = "TEST_LOAD_SUCCESS";
export const TEST_LOAD_FAIL = "TEST_LOAD_FAIL";

export const testRequest = () => ({
  type: TEST_LOAD_REQUEST
});

export const testSuccess = (data) => ({
  type: TEST_LOAD_SUCCESS,
  payload: data
});

export const testFail = (errorMsg) => ({
  type: TEST_LOAD_FAIL,
  payload: errorMsg
});

export const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const testLoadData = (url) => dispatch => {
  dispatch({
    type: testRequest
  });

  fetch(url)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      console.log(json);
      dispatch(testSuccess(json));
      return json;
    })
    .catch(error => dispatch(testFail(error)));
};
