import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../utils/api';
import UserData from '../../UserData/UserData.json';

const NationForm = () => {
  const [formData, setFormData] = useState('default');
  const [fetchedData, updateFetchedData] = useState([]);
  const { data } = fetchedData;
  // const baseUrl = `/characters/builder`;

  let api = `${API_BASE_URL}/pantheon`;
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
      case 'Solace':
        return `I follow Miira and her seven Seraphs.`;
      case 'Nobility':
        return `There is no god. I believe in the Elven Nobles who transcended mortality.`;
      case 'Exclusionism':
        return `I trust in Miira alone to lead us from the darkness.`;
      case 'Asha':
        return `The god-Queen Aurora protects Meridian from the true evil that is man.`;
      default:
        return '';
    }
  };

  const handleUserData = (optionText) => {
    switch (formData) {
      case 'Solace':
        return data[0].name;
      case 'Nobility':
        return data[1].name;
      case 'Exclusionism':
        return data[2].name;
      case 'Asha':
        return data[3].name;
      default:
        return '';
    }
  };

  handleUserData();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData !== 'default' && !UserData[0] && !UserData[1]) {
      UserData.push(handleUserData(formData));
      console.log('Character Sheet', UserData);
      navigate(`/endform`);
    } else {
      UserData[1] = handleUserData(formData);
      console.log('Character Sheet', UserData);
      navigate(`/endform`);
    }
  };

  return (
    <div className="d-flex row main__container min-vh-100">
      <div className="container col-10 col-lg-8">
        <form onSubmit={handleSubmit} className="d-flex row">
          <div className="col-12 col-lg-8">
            <p>Choose your Religion?</p>
            <select
              name="moonText"
              id="moonText"
              onChange={handleChange}
              value={formData}
              className="w-50 mb-4"
            >
              <option value="">--Select an Option--</option>
              <option value="Solace">Solace</option>
              <option value="Nobility">Nobility</option>
              <option value="Exclusionism">Exclusionism</option>
              <option value="Asha">Ash'a</option>
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

export default NationForm;

// function handleDetails(formData) {
//   throw new Error('Function not implemented.')
// }
