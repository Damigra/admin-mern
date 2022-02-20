import axios from "../helpers/axios";
import { setApplication } from "../reducers/application.reducer";
import { applicationConstants } from "./constants";

export const getApplication = (sort) => {
  return async (dispatch) => {
    try {
      dispatch({ type: applicationConstants.GET_ALL_APPLICATION_REQUEST });
      let url = "application/getApplications"
      if (sort) {
        url = `application/getApplications?sort=${sort}`
      }
      const res = await axios.get(url);
      if (res.status === 200) {
        const { applications } = res.data;
        dispatch({
          type: applicationConstants.GET_ALL_APPLICATION_SUCCESS,
          payload: { applications },
        });
      } else {
        dispatch({ type: applicationConstants.GET_ALL_APPLICATION_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchApplication = (search) => {
  return async dispatch => {
    try {
      const response = await axios.get(`/application/getApplications/search?search=${search}`)
      dispatch(setApplication(response.data))
    } catch (e) {
      alert(e?.response?.data?.message)
    }
  }
}

