const loginPage = () => import("./loginSignup/index.vue");
const applicantLogin = () => import("./applicant/index.vue");
const recruiterLogin = () => import("./recruiter/index.vue");
const facebookEntry = () => import("./authPages/facebookEntry.vue");
export default [
  {
    path: "",
    // name: "login",
    component: loginPage
  },
  {
    path: "applicant",
    // name: "login",
    component: applicantLogin
  },
  {
    path: "recruiter",
    // name: "login",
    component: recruiterLogin
  },
  {
    path: "facebookentry",
    // name: "login",
    component: facebookEntry
  }
];
