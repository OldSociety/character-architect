import * as React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface LayoutProps {
  Moons?: any;
}

const MoonForm: React.FC<LayoutProps> = ({ Moons }) => {
  const [formData, setFormData] = useState('default')

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setFormData(event.target.value)
  }

  const handleText = (optionText: string) => {
    switch (formData) {
      case 'larimar':
        return Moons[0].description
      case 'udrethsol':
        return Moons[1].description
      case 'panshi':
        return Moons[2].description
      case 'nassenti':
        return Moons[3].description
      case 'zyry':
        return Moons[4].description
      case 'senshi':
        return Moons[5].description
      case 'othorleth':
        return Moons[6].description
      default:
        return ''
    }
  }

  let navigate = useNavigate()

  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (formData !== 'default') {
      handleDetails(formData)
      navigate('/nationform')
    }
  }

  return (
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
                <option value="larimar">Larimar</option>
                <option value="udrethsol">Udreth-sol</option>
                <option value="panshi">Pan-shi</option>
                <option value="nassenti">Nassenti</option>
                <option value="zyry">Zyry</option>
                <option value="senshi">Sen-shi</option>
                <option value="othorleth">Oth-orleth</option>
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
          <p/>
          <button type="submit" className="btn btn-outline-dark">
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default MoonForm
function handleDetails(formData: string) {
  throw new Error('Function not implemented.')
}


