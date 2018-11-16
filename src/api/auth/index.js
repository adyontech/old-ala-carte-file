import axios from "axios";

import store from "./../../store/store";

const ERROR_MSG = "Something happened. Please try again.";

function handleError(error, message) {
  if (error)
    if (error.response)
      if (error.response.status === 403) {
        store.commit("removeUser");
        router.push({
          path: "/"
        });
        return {
          error: message
        };
      }

  console.log(error);
  return {
    error: message
  };
}

function loginRecruiter(userData) {
  return axios
    .post(`${store.getters.getBaseURL}/auth/recruiterLogin`, userData)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return handleError(error, ERROR_MSG);
    });
}

function registerRecruiter(userData) {
  return axios
    .post(`${store.getters.getBaseURL}/auth/recruiterSignup`, userData)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return handleError(error, ERROR_MSG);
    });
}

function refereshRecruiterToken() {
  return axios
    .post(`${store.getters.getBaseURL}/api/refereshRecruiterToken`, {})
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return handleError(error, ERROR_MSG);
    });
}

function loginApplicant(userData) {
  return axios
    .post(`${store.getters.getBaseURL}/auth/applicantLogin`, userData)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return handleError(error, ERROR_MSG);
    });
}

function registerApplicant(userData) {
  return axios
    .post(`${store.getters.getBaseURL}/auth/applicantSignup`, userData)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return handleError(error, ERROR_MSG);
    });
}

function refereshApplicantToken() {
  return axios
    .post(`${store.getters.getBaseURL}/api/refereshApplicantToken`, {})
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return handleError(error, ERROR_MSG);
    });
}

function facebookRecruiterEntry(code) {
  console.log("sending");
  return axios
    .get(`${store.getters.getBaseURL}/pass/facebook?token${code}`)
    .then(response => {
      console.log(response);
      return response.data;
    })
    .catch(error => {
      return handleError(error, ERROR_MSG);
    });
}

export {
  registerRecruiter,
  loginRecruiter,
  handleError,
  refereshRecruiterToken,
  loginApplicant,
  registerApplicant,
  refereshApplicantToken,
  facebookRecruiterEntry
};
