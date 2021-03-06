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

  // prevent loading out of order
  useEffect(() => {
    if (userList.moon === '') {
      navigate(`${baseUrl}`);
    }
  });

  console.log('fetched Data', fetchedData);

  const handleChange = (event) => {
    setFormData(event.target.value);
    console.log(userList);
  };

  // Detailed ancestry text
  const handleText = (optionText) => {
    switch (formData) {
      case 'Asha':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[0].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[0].entries[0].entries[0]}`}</div>
          </div>
        );
      case 'Nyxen':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[1].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[1].entries[0].entries[0]}`}</div>
          </div>
        );
      case 'Siiq':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[2].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[2].entries[0].entries[0]}`}</div>
          </div>
        );;
      case 'Thesian':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[3].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[3].entries[0].entries[0]}`}</div>
          </div>
        );;
      case 'High':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[4].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[4].entries[0].entries[0]}`}</div>
          </div>
        );;
      case 'Moon':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[5].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[5].entries[0].entries[0]}`}</div>
          </div>
        );
      case 'Wood':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[6].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[6].entries[0].entries[0]}`}</div>
          </div>
        );
      case 'Dark':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[7].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[7].entries[0].entries[0]}`}</div>
          </div>
        );
      case 'Sea':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[8].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[8].entries[0].entries[0]}`}</div>
          </div>
        );
      case 'Halfelf':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[9].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[9].entries[0].entries[0]}`}</div>
          </div>
        );
      case 'Lynx':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[10].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[10].entries[0].entries[0]}`}</div>
          </div>
        );
      case 'Prideborn':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[11].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[11].entries[0].entries[0]}`}</div>
          </div>
        );
      case 'Snakeskin':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[12].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[12].entries[0].entries[0]}`}</div>
          </div>
        );
      case 'Lizardskin':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[13].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[13].entries[0].entries[0]}`}</div>
          </div>
        );
      case 'Naga':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[14].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[14].entries[0].entries[0]}`}</div>
          </div>
        );
      case 'Sigri':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[15].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[15].entries[0].entries[0]}`}</div>
          </div>
        );
      case 'Pureblood':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[16].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[16].entries[0].entries[0]}`}</div>
          </div>
        );
      case 'Nightblood':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[17].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[17].entries[0].entries[0]}`}</div>
          </div>
        );
      case 'Wren':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[18].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[18].entries[0].entries[0]}`}</div>
          </div>
        );
      case 'Blackwren':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[19].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[19].entries[0].entries[0]}`}</div>
          </div>
        );
      case 'GenerationI':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[20].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[20].entries[0].entries[0]}`}</div>
          </div>
        );
      case 'GenerationII':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[21].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[21].entries[0].entries[0]}`}</div>
          </div>
        );
      case 'GenerationIII':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[22].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[22].entries[0].entries[0]}`}</div>
          </div>
        );
      case 'Unmarked':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[23].entries[1].href.url}
              alt="missingpicture"
              width="200"
            />
            <div className="">{`${data[23].entries[0].entries[0]}`}</div>
          </div>
        );
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
      case 'High':
        return data[4].name;
      case 'Moon':
        return `${data[5].name}`;
      case 'Wood':
        return `${data[6].name}`;
      case 'Dark':
        return `${data[7].name}`;
      case 'Sea':
        return `${data[8].name} `;
      case 'Halfelf':
        return `${data[9].name}`;
      case 'Lynx':
        return `${data[10].name}`;
      case 'Prideborn':
        return `${data[11].name}`;
      case 'Snakeskin':
        return `${data[12].name}}`;
      case 'Lizardskin':
        return `${data[13].name}`;
      case 'Naga':
        return `${data[14].name}`;
      case 'Sigri':
        return `${data[15].name}`;
      case 'Pureblood':
        return `${data[16].name}`;
      case 'Nightblood':
        return `${data[17].name}}`;
      case 'Wren':
        return `${data[18].name}`;
      case 'Blackwren':
        return `${data[19].name}`;
      case 'GenerationI':
        return `${data[20].name}}`;
      case 'GenerationII':
        return `${data[21].name}`;
      case 'GenerationIII':
        return `${data[22].name}`;
      case 'Unmarked':
        return `${data[23].name}`;
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
      navigate(`${baseUrl}/3`);
    } //Check if user has selected an option but there is already moon in stack
    else if (formData !== 'default' && userList.key === 'race') {
      // replace race with new choice
      userList.race = handleUserData(formData);
      console.log('Race has been replaced.');
      console.log(userList);
      //go to nations page
      navigate(`${baseUrl}/3`);
    }
  };

  return (
    <div className="d-flex">
      <div className="container col-10 col-lg-8">
        <form onSubmit={handleSubmit} className="d-flex row">
          <div className="col-12 col-lg-8">
            <p>Choose your Ancestry?</p>
            {/* dropdown */}
            <select
              name="moonText"
              id="moonText"
              onChange={handleChange}
              value={formData}
              className="w-50 mb-4"
            >
              {/* dropdown selections */}
              <option value="">--Select an Option--</option>
              <optgroup label="Human">
                <option value="Asha">Ash'a</option>
                <option value="Nyxen">Nyxen</option>
                <option value="Siiq">Siiq</option>
                <option value="Thesian">Thesian</option>
              </optgroup>
              <optgroup label="Elf">
                <option value="High">High</option>
                <option value="Moon">Moon</option>
                <option value="Wood">Wood</option>
                <option value="Dark">Dark</option>
                <option value="Sea">Sea</option>
                <option value="Halfelf">Half-elf</option>
              </optgroup>
              <optgroup label="Furborn">
                <option value="Lynx">Lynx</option>
                <option value="Prideborn">Prideborn</option>
              </optgroup>
              <optgroup label="Scaleborn">
                <option value="Snakeskin">Snakeskin</option>
                <option value="Lizardskin">Lizardskin</option>
              </optgroup>
              <optgroup label="Seaborn">
                <option value="Naga">Naga</option>
                <option value="Sigri">Sigri</option>
              </optgroup>
              <optgroup label="Stoneborn">
                <option value="Pureblood">Pureblood</option>
                <option value="Nightblood">Nightblood</option>
              </optgroup>
              <optgroup label="Skyborn">
                <option value="Wren">Wren</option>
                <option value="Blackwren">Blackwren</option>
              </optgroup>
              <optgroup label="Marksmen">
                <option value="GenerationI">Generation I</option>
                <option value="GenerationII">Generation II</option>
                <option value="GenerationIII">Generation III</option>
              </optgroup>
              <optgroup label="Unmarked">
                <option value="Unmarked">Unmarked</option>
              </optgroup>
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
