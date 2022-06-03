import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../utils/api';
import { userList } from './Moons';

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

  //Prevent loading out of order
  useEffect(() => {
    if (userList.moon === '' || userList.race === '') {
      navigate(`${baseUrl}`);
    }
  });

  console.log('fetched Data', fetchedData);

  const handleChange = (event) => {
    setFormData(event.target.value);
    console.log(userList);
  };

  const handleText = (optionText) => {
    // Changes text based on chosen option value
    switch (formData) {
      case 'Arxyk':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[0].entries[0].href.url}
              alt="missingpicture"
              width="500"
            />
            <div className="">{`${data[0].description}`}</div>
          </div>
        )
      case 'Fairbourne':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[1].entries[0].href.url}
              alt="missingpicture"
              width="500"
            />
            <div className="">{`${data[1].description}`}</div>
          </div>
        )
      case 'Whitepine':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[2].entries[0].href.url}
              alt="missingpicture"
              width="500"
            />
            <div className="">{`${data[2].description}`}</div>
          </div>
        )
      case 'Uruban':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[3].entries[0].href.url}
              alt="missingpicture"
              width="500"
            />
            <div className="">{`${data[3].description}`}</div>
          </div>
        )
      case 'Ashahla':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[4].entries[0].href.url}
              alt="missingpicture"
              width="500"
            />
            <div className="">{`${data[4].description}`}</div>
          </div>
        )
      case 'Egress':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[5].entries[0].href.url}
              alt="missingpicture"
              width="500"
            />
            <div className="">{`${data[5].description}`}</div>
          </div>
        )
      case 'Medina':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[6].entries[0].href.url}
              alt="missingpicture"
              width="500"
            />
            <div className="">{`${data[6].description}`}</div>
          </div>
        )
      case 'Medun':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[7].entries[0].href.url}
              alt="missingpicture"
              width="500"
            />
            <div className="">{`${data[7].description}`}</div>
          </div>
        )
      case 'Karaj':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[8].entries[0].href.url}
              alt="missingpicture"
              width="500"
            />
            <div className="">{`${data[8].description}`}</div>
          </div>
        )
      case 'Zemér':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[9].entries[0].href.url}
              alt="missingpicture"
              width="500"
            />
            <div className="">{`${data[9].description}`}</div>
          </div>
        )
      case 'Seneka':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[10].entries[0].href.url}
              alt="missingpicture"
              width="500"
            />
            <div className="">{`${data[10].description}`}</div>
          </div>
        )
      case 'Oceanic':
        return (
          <div className="">
            <img
              className={'1'}
              src={data[11].entries[0].href.url}
              alt="missingpicture"
              width="500"
            />
            <div className="">{`${data[11].description}`}</div>
          </div>
        )
      default:
        return '';
    }
  };

  const handleUserData = (optionText) => {
    // Matches drop down form values with API data
    switch (formData) {
      case 'Arxyk':
        return `${data[0].name}`;
      case 'Fairbourne':
        return `${data[1].name}`;
      case 'Whitepine':
        return `${data[2].name}`;
      case 'Uruban':
        return `${data[3].name}`;
      case 'Ashahla':
        return `${data[4].name}`;
      case 'Egress':
        return `${data[5].name}`;
      case 'Medina':
        return `${data[6].name}`;
      case 'Medun':
        return `${data[7].name}`;
      case 'Karaj':
        return `${data[8].name}`;
      case 'Zemér':
        return `${data[9].name}`;
      case 'Seneka':
        return `${data[10].name}`;
      case 'Oceanic':
        return `${data[11].name}`;
      default:
        return '';
    }
  };

  handleUserData();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if user has selected an option and the stack isn't empty, add moon data
    if (formData !== 'default') {
      userList.homeland = handleUserData(formData);
      //go to religions page
      console.log(userList);
      navigate(`${baseUrl}/4`);
    } //Check if user has selected an option but there is already moon in stack
    else if (formData !== 'default' && userList.key === 'nation') {
      // replace race with new choice
      userList.homeland = handleUserData(formData);
      console.log('Nation has been replaced.');
      console.log(userList);
      //go to nations page
      navigate(`${baseUrl}/4`);
    } else if (!userList.moon || !userList.race) {
      navigate(`${baseUrl}`);
    }
  };

  return (
    <div className="d-flex">
      <div className="container col-10 col-lg-8">
        <form onSubmit={handleSubmit} className="d-flex row">
          <div className="col-12 col-lg-8">
            <p>From which homeland do you hail?</p>
            <select
              name="moonText"
              id="moonText"
              onChange={handleChange}
              value={formData}
            >
              
              <option value="">--Select an Option--</option>
              <option value="Arxyk">Arxyk</option>
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
              {userList.race !== ('Naga' || 'Sigri') ? (
                <option
                  value="Oceanic"
                  title="Seaborn Only"
                  disabled
                >{`Oceanic (Seaborn Only)`}</option>
              ) : (
                <option value="Oceanic">{`Oceanic`}</option>
              )}
            </select>
          </div>
          <div className="col-1"></div>
          <div className="col-6">
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
