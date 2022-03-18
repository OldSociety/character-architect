import * as React from 'react';
import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../../utils/api';

const PatronForm = ({ religion }) => {
  const [formData, setFormData] = useState('default');
  const [fetchedData, updateFetchedData] = useState([]);
  const { data } = fetchedData;
  // const baseUrl = `/characters/builder`;

  let api = `${API_BASE_URL}/pantheon`;

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
      case 'Larimar':
        return data[1].entries[0].description[0];
      case 'Udreth-sol':
        return data[2].entries[0].description[0];
      case 'Pan-shi':
        return data[3].entries[0].description[0];
      case 'Nassenti':
        return data[4].entries[0].description[0];
      case 'Zyry':
        return data[5].entries[0].description[0];
      case 'Sen-shi':
        return data[6].entries[0].description[0];
      case 'Oth-orleth':
        return data[7].entries[0].description[0];
      case 'Benignity':
        return data[12].entries[0].description;
      case 'Conformity':
        return data[14].entries[0].description[0];
      case 'Diarchy':
        return data[15].entries[0].description[0];
      case 'Dissonance':
        return data[16].entries[0].description[0];
      case 'Ephemeron':
        return data[17].entries[0].description[0];
      case 'Incandescent':
        return data[19].entries[0].description[0];
      case 'Oracular':
        return data[21].entries[0].description[0];
      case 'Verity':
        return data[22].entries[0].description[0];
      case 'Vulnerary':
        return data[23].entries[0].description[0];
      default:
        return '';
    }
  };

  var showPatron;
  if (religion) {
    if (religion === 'Solace') {
      showPatron = (
        <div>
          <div className="row g-3">
            Which Seraph inspires you?
            <select name="" id="" onChange={handleChange} value={formData}>
              <option value="">--Select an Option--</option>
              <option value="Larimar">Larimar</option>
              <option value="Udreth-sol">Udreth-sol</option>
              <option value="Pan-shi">Pan-shi</option>
              <option value="Nassenti">Nassenti</option>
              <option value="Zyry">Zyry</option>
              <option value="Sen-shi">Sen-shi</option>
              <option value="Oth-orleth">Oth-orleth</option>
            </select>
          </div>
          <div>{handleText(formData)}</div>
        </div>
      );
    } else if (religion === 'Nobility') {
      showPatron = (
        <div className="">
          <div className="row g-3">
            Choose your Patron Elven Lord.
            <select name="" id="" onChange={handleChange} value={formData}>
              <option value="">--Select an Option--</option>
              <option value="Benignity">The Benignity</option>
              <option value="Conformity">The Conformity</option>
              <option value="Diarchy">The Diarchy</option>
              <option value="Ephemeron">The Ephemeron</option>
              <option value="Dissonance">The Dissonance</option>
              <option value="Incandescent">The Incandescent</option>
              <option value="Oracular">The Oracular</option>
              <option value="Verity">The Verity</option>
              <option value="Vulnerary">The Vulnerary</option>
            </select>
          </div>
          <div>{handleText(formData)}</div>
        </div>
      );
    } else {
      showPatron = null;
    }
  }

  return (
    <div className="container">
      <div className="row ">
        <br />
        <div className="col-5">
          <br />
          {!formData ? null : showPatron}
          <p />
        </div>
      </div>
    </div>
  );
};

export default PatronForm;
