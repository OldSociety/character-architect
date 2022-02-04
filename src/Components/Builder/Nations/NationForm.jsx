// import * as React from 'react';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const NationForm = ({ Nations, userData, handleDetails }) => {
//   const [formData, setFormData] = useState('default');
//   console.log(userData);

//   const handleChange = (event) => {
//     setFormData(event.target.value);
//   };

//   const handleText = (optionText) => {
//     switch (formData) {
//       case 'fairbourne':
//         return `I am ${Nations[0].nationality}.`;
//       case 'whitepine':
//         return `I bow to no king.`;
//       case 'uruban':
//         return `I am ${Nations[2].nationality}.`;
//       case 'ashahla':
//         return `I am ${Nations[3].nationality}.`;
//       case 'egress':
//         return `I am ${Nations[4].nationality}.`;
//       case 'medina':
//         return `I am ${Nations[5].nationality}.`;
//       case 'medun':
//         return `I bow to no king.`;
//       case 'karaj':
//         return `I am ${Nations[7].nationality}.`;
//       case 'zemer':
//         return `I am ${Nations[8].nationality}.`;
//       case 'seneka':
//         return `I am ${Nations[9].nationality}.`;
//       default:
//         return '';
//     }
//   };

//   let navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (formData !== 'default') {
//       handleDetails(formData);
//       navigate('/endform');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="container">
//         <div className="row">
//           <div className="col-5">
//             From which nation do you hail?
//             <div className="row g-3">
//               <select
//                 name="moonText"
//                 id="moonText"
//                 onChange={handleChange}
//                 value={formData}
//               >
//                 <option value="">--Select an Option--</option>
//                 <option value="Fairbourne">Fairbourne</option>
//                 <option value="Whitepine">Whitepine</option>
//                 <option value="Uruban">Uruban</option>
//                 <option value="Egress">Egress</option>
//                 <option value="Ash'ahla">Ash'ahla</option>
//                 <option value="Medina">Medina</option>
//                 <option value="Medun">Medun</option>
//                 <option value="Karaj">Karaj</option>
//                 <option value="Zemér">Zemér</option>
//                 <option value="Seneka">Seneka</option>
//               </select>
//             </div>
//           </div>
//           <div className="col-1"></div>
//           <div className="col-6">
//             <div>{handleText(formData)}</div>
//           </div>
//         </div>
//         <div className="row">
//           <br />
//           <p />
//           <button type="submit" className="btn btn-outline-light">
//             Submit
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default NationForm;

// // function handleDetails(formData) {
// //   throw new Error('Function not implemented.')
// // }
