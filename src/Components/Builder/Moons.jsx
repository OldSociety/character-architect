import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from 'utils/api';
import UserData from '../../UserData/UserData.json';

const MoonForm = ({ Moons, userData, handleDetails }) => {
  const [formData, setFormData] = useState('default');
  const [fetchedData, updateFetchedData] = useState([]);
  const { data } = fetchedData;
  const baseUrl = `/characters/builder`;

  let api = `${API_BASE_URL}/pantheon`;
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  // console.log('fetched Data', fetchedData);
  // console.log('Data Array:', data);

  ///////////////////////////////////////////////////////

  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  const handleUserData = (optionText) => {
    switch (formData) {
      case 'Larimar':
        return data[1].name;
      case 'Udreth-sol':
        return data[2].name;
      case 'Pan-shi':
        return data[3].name;
      case 'Nassenti':
        return data[4].name;
      case 'Zyry':
        return data[5].name;
      case 'Sen-shi':
        return data[6].name;
      case 'Oth-orleth':
        return data[7].name;
      default:
        return '';
    }
  };

  handleUserData(formData);

  const handleText = (optionText) => {
    switch (formData) {
      case 'Larimar':
        return data[1].sphere[0].description;
      case 'Udreth-sol':
        return data[2].sphere[0].description;
      case 'Pan-shi':
        return data[3].sphere[0].description;
      case 'Nassenti':
        return data[4].sphere[0].description;
      case 'Zyry':
        return data[5].sphere[0].description;
      case 'Sen-shi':
        return data[6].sphere[0].description;
      case 'Oth-orleth':
        return data[7].sphere[0].description;
      default:
        return '';
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData !== 'default' && !UserData[0]) {
      UserData.push(handleUserData(formData));
      console.log("Character Sheet", UserData);
      navigate(`${baseUrl}/2`);
    } else {
      UserData[1] = handleUserData(formData);
      console.log("Character Sheet", UserData);
      navigate(`${baseUrl}/2`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            {`Meridian is one of eight moons orbiting the planet Pandem. Its only continent, also referred to as Meridian, is a conflicted
world of two powerful, yet opposing, forces: human magic and elven technology.`}
          </div>
          <br />
          <div className="row">
            {`It is found in an S-type binary star system (two stars in one system). Its suns are named Delis and Veris and are sometimes referred to as Miira's Eyes. Pandem orbits Delis, the large yellow star that provides for life on Meridian, otherwise known as its Sun. Veris, on the other hand, sheds a much dimmer red light which is near impossible 
to see when the two suns share the same sky. On the few nights where Velis appears alone - referred to as "Second Sun" or "Bloody 
Night" - the sky lights up like twilight in a grimsome, blood-red filter.`}
          </div>
          <br />
          <div className="row">
            {`Along with these two suns and the barren red planet, Pandem, seven other moons light up the night sky. Each is named after a Seraph, or celestial 
dragon from the human religion Solace, based on color and size.`}
          </div>
          <br />
          <div className="row">
            <div className="col-5">
              Under which moon were you born?
              <div className="row g-3">
                <select
                  name="moonText"
                  id="moonText"
                  onChange={handleChange}
                  value={formData}
                >
                  <option value="">Select...</option>
                  <option value="Larimar">Larimar</option>
                  <option value="Udreth-sol">Udreth-sol</option>
                  <option value="Pan-shi">Pan-shi</option>
                  <option value="Nassenti">Nassenti</option>
                  <option value="Zyry">Zyry</option>
                  <option value="Sen-shi">Sen-shi</option>
                  <option value="Oth-orleth">Oth-orleth</option>
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
    </div>
  );
};

// function handleDetails(formData) {
//   throw new Error('Function not implemented.');
// }

export default MoonForm;
