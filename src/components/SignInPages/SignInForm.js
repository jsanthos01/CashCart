// // import React,{ useState } from "react";
// // import { Link } from "react-router-dom";
// // // import {
// // //   FacebookLoginButton,
// // //   InstagramLoginButton
// // // } from "react-social-login-buttons";

// // const SignInForm = () => {
// //   const [state, setState] = useState({
// //       email: "",
// //       password: ""
// //     });

// //   const handleChange = (event) => {
// //     let target = event.target;
// //     let value = target.type === "checkbox" ? target.checked : target.value;
// //     let name = target.name;

// //     setState({
    
// //       [name]: value
// //     });
// //   }

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     console.log("The form was submitted with the following data:");
// //   }

// //   return (
// //       <div className="formCenter">
// //         <form className="formFields" onSubmit={handleSubmit}>
// //           <div className="formField">
// //             <label className="formFieldLabel" htmlFor="email">
// //               E-Mail Address
// //             </label>
// //             <input
// //               type="email"
// //               id="email"
// //               className="formFieldInput"
// //               placeholder="Enter your email"
// //               name="email"
// //               value={state.email}
// //               onChange={handleChange}
// //             />
// //           </div>

// //           <div className="formField">
// //             <label className="formFieldLabel" htmlFor="password">
// //               Password
// //             </label>
// //             <input
// //               type="password"
// //               id="password"
// //               className="formFieldInput"
// //               placeholder="Enter your password"
// //               name="password"
// //               value={state.password}
// //               onChange={handleChange}
// //             />
// //           </div>

// //           <div className="formField">
// //             <button className="formFieldButton">Sign In</button>{" "}
// //             <Link to="/sign-up" className="formFieldLink">
// //               Create an account
// //             </Link>
// //           </div>

// //           {/* <div className="socialMediaButtons">
// //             <div className="facebookButton">
// //               <FacebookLoginButton onClick={() => alert("Hello")} />
// //             </div>

// //             <div className="instagramButton">
// //               <InstagramLoginButton onClick={() => alert("Hello")} />
// //             </div>
// //           </div> */}
// //         </form>
// //       </div>
// //   );
// // }

// // export default SignInForm;
// import React, { useRef, useState } from "react"
// import { Form, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from "../contexts/AuthContext"
// import { Link, useHistory } from "react-router-dom"

// export default function Signup() {
//   const emailRef = useRef()
//   const passwordRef = useRef()
//   const passwordConfirmRef = useRef()
//   const { signup } = useAuth()
//   const [error, setError] = useState("")
//   const [loading, setLoading] = useState(false)
//   const history = useHistory()

//   async function handleSubmit(e) {
//     e.preventDefault()

//     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
//       return setError("Passwords do not match")
//     }

//     try {
//       setError("")
//       setLoading(true)
//       await signup(emailRef.current.value, passwordRef.current.value)
//       history.push("/")
//     } catch {
//       setError("Failed to create an account")
//     }

//     setLoading(false)
//   }

//   return (
//     <>
//       <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Sign Up</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form onSubmit={handleSubmit}>
//             <Form.Group id="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" ref={emailRef} required />
//             </Form.Group>
//             <Form.Group id="password">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" ref={passwordRef} required />
//             </Form.Group>
//             <Form.Group id="password-confirm">
//               <Form.Label>Password Confirmation</Form.Label>
//               <Form.Control type="password" ref={passwordConfirmRef} required />
//             </Form.Group>
//             <Button disabled={loading} className="w-100" type="submit">
//               Sign Up
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//       <div className="w-100 text-center mt-2">
//         Already have an account? <Link to="/login">Log In</Link>
//       </div>
//     </>
//   )
// }