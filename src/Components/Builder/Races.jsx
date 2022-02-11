import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from 'utils/api';
import UserData from '../../UserData/UserData.json';

const NationForm = ({ handleDetails }) => {
  const [formData, setFormData] = useState('default');
  const [fetchedData, updateFetchedData] = useState([]);
  const { data } = fetchedData;
  // const baseUrl = `/characters/builder`;

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
        return data[0].name;
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

  handleUserData()

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData !== 'default' && !UserData[0] && !UserData[1] ) {
      UserData.push(handleUserData(formData));
      console.log("Character Sheet",UserData);
      navigate(`/endform`);
    } else {
      UserData[1] = handleUserData(formData);
      console.log("Character Sheet",UserData);
      navigate(`/endform`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">
          <div className="col-5">
            {`Choose your Race?`}
            <div className="row g-3">
              <select
                name="moonText"
                id="moonText"
                onChange={handleChange}
                value={formData}
              >
                <option value="">--Select an Option--</option>
                <option value="Asha">Ash'a</option>
                <option value="Nyxen">Nyxen</option>
                <option value="Siiq">Siiq</option>
                <option value="Thesian">Thesian</option>
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
