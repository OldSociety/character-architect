import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../utils/api';
import { userStack } from 'UserData/User';

const NationForm = () => {
  const [formData, setFormData] = useState('default');
  const [fetchedData, updateFetchedData] = useState([]);
  const { data } = fetchedData;
  const baseUrl = `/characters/builder`;

  let api = `${API_BASE_URL}/nations`;
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  console.log('fetched Data', fetchedData);

  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  const handleText = (optionText) => {
    switch (formData) {
      case 'Fairbourne':
        return `I am ${data[0].nationality}.`;
      case 'Whitepine':
        return `${data[1].nationality}`;
      case 'Uruban':
        return `I am ${data[2].nationality}.`;
      case 'Ashahla':
        return `I am ${data[3].nationality}.`;
      case 'Egress':
        return `I am ${data[4].nationality}.`;
      case 'Medina':
        return `${data[5].nationality}.`;
      case 'Medun':
        return `${data[6].nationality}`;
      case 'Karaj':
        return `I am ${data[7].nationality}.`;
      case 'Zemér':
        return `I am ${data[8].nationality}.`;
      case 'Seneka':
        return `I am ${data[9].nationality}.`;
      default:
        return '';
    }
  };

  const handleUserData = (optionText) => {
    switch (formData) {
      case 'Fairbourne':
        return data[0].nationality;
      case 'Whitepine':
        return data[1].nationality;
      case 'Uruban':
        return data[2].nationality;
      case 'Ashahla':
        return data[3].nationality;
      case 'Egress':
        return data[4].nationality;
      case 'Medina':
        return data[5].nationality;
      case 'Medun':
        return data[6].nationality;
      case 'Karaj':
        return data[7].nationality;
      case 'Zemér':
        return data[8].nationality;
      case 'Seneka':
        return data[9].nationality;
      default:
        return '';
    }
  };

  handleUserData();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if a nation has been chosen and that there is a moon in the stack
    if (formData !== 'default' && userStack.top.value === 'moon') {
      //remove moon declaration from stack, add selected nation and add a nation designation
      userStack.pop()
      userStack.push(handleUserData(formData));
      userStack.push('nation');
      //go to races page
      navigate(`${baseUrl}/3`);
    } else if (formData !== 'default' && userStack.top.value === 'nation') {
      //remove both the selected nation and nation designation
      userStack.pop();
      userStack.pop();
      // add new selected nation and add a nation designation
      userStack.push(handleUserData(formData));
      userStack.push('nation');
      console.log("Your nation has been replaced.")
      console.log(userStack)
      //go to races page
      navigate(`${baseUrl}/3`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">
          <div className="col-5">
            From which nation do you hail?
            <div className="row g-3">
              <select
                name="moonText"
                id="moonText"
                onChange={handleChange}
                value={formData}
              >
                <option value="">--Select an Option--</option>
                <option value="Fairbourne">Fairbourne</option>
                <option value="Whitepine">Whitepine</option>
                <option value="Uruban">Uruban</option>
                <option value="Egress">Egress</option>
                <option value="Ashahla">Ash'ahla</option>
                <option value="Medina">Medina</option>
                <option value="Medun">Medun</option>
                <option value="Karaj">Karaj</option>
                <option value="Zemér">Zemér</option>
                <option value="Seneka">Seneka</option>
              </select>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-6">
            <div>{handleText(formData)}</div>
          </div>
        </div>
        <div className="row">
          <br />
          <p />
          <button type="submit" className="btn btn-outline-light">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default NationForm;

// function handleDetails(formData) {
//   throw new Error('Function not implemented.')
// }
