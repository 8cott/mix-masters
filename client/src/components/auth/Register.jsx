// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Register = () => {
//   const [state, setState] = useState({
//     name: "",
//     email: "",
//     password: "",
//     password2: "",
//     errors: {}
//   });

//   const onChange = (e) => {
//     setState({ ...state, [e.target.id]: e.target.value });
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const newUser = {
//       name: state.name,
//       email: state.email,
//       password: state.password,
//       password2: state.password2
//     };
    
//     fetch('http://localhost:8000/api/users/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newUser),
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch((error) => console.error('Error:', error));
//   };
  

//   const { errors } = state;

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col s8 offset-s2">
//           <Link to="/register" className="btn-flat waves-effect">
//             <i className="material-icons left">keyboard_backspace</i> Back to
//             home
//           </Link>
//           <div className="col s12" style={{ paddingLeft: "11.250px" }}>
//             <h4>
//               <b>Register</b> below
//             </h4>
//             <p className="grey-text text-darken-1">
//               Already have an account? <Link to="/login">Log in</Link>
//             </p>
//           </div>
//           <form noValidate onSubmit={onSubmit}>
//             <div className="input-field col s12">
//               <input
//                 onChange={onChange}
//                 value={state.name}
//                 error={errors.name}
//                 id="name"
//                 type="text"
//               />
//               <label htmlFor="name">Name</label>
//             </div>
//             <div className="input-field col s12">
//               <input
//                 onChange={onChange}
//                 value={state.email}
//                 error={errors.email}
//                 id="email"
//                 type="email"
//               />
//               <label htmlFor="email">Email</label>
//             </div>
//             <div className="input-field col s12">
//               <input
//                 onChange={onChange}
//                 value={state.password}
//                 error={errors.password}
//                 id="password"
//                 type="password"
//               />
//               <label htmlFor="password">Password</label>
//             </div>
//             <div className="input-field col s12">
//               <input
//                 onChange={onChange}
//                 value={state.password2}
//                 error={errors.password2}
//                 id="password2"
//                 type="password"
//               />
//               <label htmlFor="password2">Confirm Password</label>
//             </div>
//             <div className="col s12" style={{ paddingLeft: "11.250px" }}>
//               <button
//                 style={{
//                   width: "150px",
//                   borderRadius: "3px",
//                   letterSpacing: "1.5px",
//                   marginTop: "1rem"
//                 }}
//                 type="submit"
//                 className="btn btn-large waves-effect waves-light hoverable blue accent-3"
//               >
//                 Sign up
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
