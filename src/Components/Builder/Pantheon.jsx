import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../utils/api';
import { userStack } from 'Components/Builder/User';

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

  handleUserData()


  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if a nation has been chosen and that there is a moon in the stack
    if (formData !== 'default' && userStack.top.value === 'race') {
      //remove moon declaration from stack, add selected nation and add a nation designation
      userStack.pop()
      userStack.push(handleUserData(formData));
      userStack.push('religion');
      //go to races page
      navigate(`/endform`);
    } else if (formData !== 'default' && userStack.top.value === 'religion') {
      //remove both the selected nation and nation designation
      userStack.pop();
      userStack.pop();
      // add new selected nation and add a nation designation
      userStack.push(handleUserData(formData));
      userStack.push('religion');
      console.log("Your religion has been replaced.")
      console.log(userStack)
      //go to races page
      navigate(`/endform`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">
          <div className="col-5">
            {`Choose your Religion?`}
            <div className="row g-3">
              <select
                name="moonText"
                id="moonText"
                onChange={handleChange}
                value={formData}
              >
                <option value="">--Select an Option--</option>
                <option value="Solace">Solace</option>
                <option value="Nobility">Nobility</option>
                <option value="Exclusionism">Exclusionism</option>
                <option value="Asha">Ash'a</option>
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
