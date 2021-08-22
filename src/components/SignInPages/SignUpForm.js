// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../contexts/AuthContext"
// const SignUpForm = () => {
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const nameRef = useRef();

//   const { signup } = useAuth();


//   const handleChange = (event) => {
//     let target = event.target;
//     let value = target.type === "checkbox" ? target.checked : target.value;
//     let name = target.name;

//     setState({...state, [name]: value});
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const emailValue = emailRef.current.value;
//     const passwordValue = passwordRef.current.value; ;
//     const nameValue = nameRef.current.value;
//     if (emailValue.length < 0 || nameValue.length < 0 || passwordValue.length < 0){
//       return;
//     }
//     signup(emailValue , passwordValue, nameValue);
//   }

//     return (
//       <div className="formCenter">
//         <form onSubmit={handleSubmit} className="formFields">
//           <div className="formField">
//             <label className="formFieldLabel" htmlFor="name">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="formFieldInput"
//               placeholder="Enter your full name"
//               name="name"
//               value={state.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="formField">
//             <label className="formFieldLabel" htmlFor="password">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="formFieldInput"
//               placeholder="Enter your password"
//               name="password"
//               value={state.password}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="formField">
//             <label className="formFieldLabel" htmlFor="email">
//               E-Mail Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="formFieldInput"
//               placeholder="Enter your email"
//               name="email"
//               value={state.email}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="formField">
//             <button className="formFieldButton">Sign Up</button>{" "}
//             <Link to="/sign-in" className="formFieldLink">
//               I'm already member
//             </Link>
//           </div>
//         </form>
//       </div>
//     );
// }
// export default SignUpForm;
