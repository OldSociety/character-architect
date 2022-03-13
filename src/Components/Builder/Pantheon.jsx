import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../utils/api';
import PatronForm from './Patron';
import { userList } from './Moons';

const ReligionForm = () => {
  const [formData, setFormData] = useState('default');
  const [fetchedData, updateFetchedData] = useState([]);
  // const { data } = fetchedData;
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
        return 'I follow the tenets of the Seraphs. (Solace)';
      case 'Nobility':
        return 'I strive to honor the Elven Lords. (Nobility)';
      case 'Exclusionism':
        return 'I look into to the Eyes of Miira. (Exclusionism)';
      case 'Asha':
        return "I worship Aurora. (Ash'a)";
      default:
        return '';
    }
  };

  handleUserData();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if user has selected an option and the stack isn't empty, add moon data
    if (formData !== 'default') {
      userList.religion = handleUserData(formData);
      //go to nations page
      console.log(userList);
      navigate(`/EndForm`);
    } //Check if user has selected an option but there is already moon in stack
    else if (formData !== 'default' && userList.key === 'race') {
      // replace moon with new choice
      userList.religion = handleUserData(formData);
      console.log('Religion has been replaced.');
      console.log(userList);
      //go to nations page
      navigate(`/EndForm`);
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
        <div className="row">
          <br />
          {<PatronForm religion={formData} />}
          <p />
          <button type="submit" className="btn btn-outline-light">
            Submit
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default ReligionForm;
