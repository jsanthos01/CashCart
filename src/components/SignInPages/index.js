// import React from 'react'
// import SignUpForm from "./SignUpForm";
// import SignInForm from "./SignInForm";
// import { useLocation ,BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
// import hero from "../images/signup.svg"
// const Index = () => {
//   const location = useLocation();
//   console.log(location)
//   return (
//         <div className="signupBox">
//           <div className="appAside">
//             <img src={hero} />
//           </div>
//           <div className="appForm">
//             <div className="pageSwitcher">
//               <NavLink
//                 to="/sign-in"
//                 activeClassName="pageSwitcherItem-active"
//                 className="pageSwitcherItem"
//               >
//                 Sign In
//               </NavLink>
//               <NavLink
//                 exact
//                 to="/sign-up"
//                 activeClassName="pageSwitcherItem-active"
//                 className="pageSwitcherItem"
//               >
//                 Sign Up
//               </NavLink>
//             </div>

//             <div className="formTitle ">
//               <NavLink
//                 to="/sign-in"
//                 activeClassName="formTitleLink-active"
//                 className="formTitleLink"
//               >
//                 Welcome to CashCarts !!
//               </NavLink>{" "}
//             </div>
//             { location.pathname == '/sign-up' ? < SignUpForm /> : <SignInForm />}
//             {/* <Route exact path="/sign-up" component={SignUpForm} />
//             <Route exact path="/sign-in" component={SignInForm} /> */}
//           </div>
//         </div>
//     )
// }

// export default Index
