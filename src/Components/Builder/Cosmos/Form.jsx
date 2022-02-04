// import React, { useState } from 'react';
// import UserData from 'UserData/UserData.json'


// function Form() {
//   const [formData, setFormData] = useState({ ...UserData });
//   console.log(UserData)

//   const handleChange = ({ target }) => {
//     setFormData({
//       ...formData,
//       [target.name]: target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Submitted:', formData);
//     setFormData({ ...UserData });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">
//         Enter Your Name:
//         <input
//           id="name"
//           type="text"
//           name="name"
//           onChange={handleChange}
//           value={formData.name}
//         />
//       </label>

//       <br />

//       <label htmlFor="email">
//         Your Moon:
//         <input
//           id="moon"
//           type="moon"
//           name="moon"
//           onChange={handleChange}
//           value={formData.moon}
//         />
//       </label>

//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// export default Form;
