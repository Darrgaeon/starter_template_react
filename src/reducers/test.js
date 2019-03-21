import {
  TEST_LOAD_REQUEST,
  TEST_LOAD_SUCCESS,
  TEST_LOAD_FAIL,
} from "../actions/TestActions";


const initialState = {
  data: []
};

export function getDataTest(state = initialState, action) {
  switch (action.type) {
    case TEST_LOAD_REQUEST:
      return {
        ...state,
        data: [],
      };

    case TEST_LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    case TEST_LOAD_FAIL:
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
}
