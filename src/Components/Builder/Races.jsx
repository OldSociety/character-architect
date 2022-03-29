import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../utils/api';
import { userList } from './Moons';

const RaceForm = () => {
  const [formData, setFormData] = useState('default');
  const [fetchedData, updateFetchedData] = useState([]);
  const { data } = fetchedData;
  const baseUrl = `/characters/builder`;

  let api = `${API_BASE_URL}/races`;
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
      case 'Asha':
        return `${data[0].entries[0].entries[0]} ${data[0].entries[3].entries[0]} ${data[0].entries[4].entries[0]}`;
      case 'Nyxen':
        return `${data[1].entries[0].entries[0]}`;
      case 'Siiq':
        return `${data[2].entries[0].entries[0]}`;
      case 'Thesian':
        return `${data[3].entries[0].entries[0]}`;
      default:
        return '';
    }
  };

  const handleUserData = (optionText) => {
    switch (formData) {
      case 'Asha':
        return `${data[0].name} (race)`;
      case 'Nyxen':
        return data[1].name;
      case 'Siiq':
        return data[2].name;
      case 'Thesian':
        return data[3].name;
      default:
        return '';
    }
  };

  handleUserData();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if user has selected an option and the stack isn't empty, add moon data
    if (formData !== 'default') {
      userList.race = handleUserData(formData);
      //go to nations page
      console.log(userList);
      navigate(`${baseUrl}/4`);
    } //Check if user has selected an option but there is already moon in stack
    else if (formData !== 'default' && userList.key === 'race') {
      // replace moon with new choice
      userList.race = handleUserData(formData);
      console.log('Race has been replaced.');
      console.log(userList);
      //go to nations page
      navigate(`${baseUrl}/4`);
    }
  };

  return (
    <div className="d-flex">
      <div className="container col-10 col-lg-8">
        <form onSubmit={handleSubmit} className="d-flex row">
          <div className="col-12 col-lg-8">
            <p>Choose your Race?</p>
            <select
              name="moonText"
              id="moonText"
              onChange={handleChange}
              value={formData}
              className="w-50 mb-4"
            >
              <option value="">--Select an Option--</option>
              <option value="Asha">Ash'a</option>
              <option value="Nyxen">Nyxen</option>
              <option value="Siiq">Siiq</option>
              <option value="Thesian">Thesian</option>
            </select>
            <div>{handleText(formData)}</div>
            <button
              type="submit"
              className="btn btn-outline-light btn-main my-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RaceForm;

// function handleDetails(formData) {
//   throw new Error('Function not implemented.')
// }
