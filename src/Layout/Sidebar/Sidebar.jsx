import React from 'react'

const Sidebar = ({userData}) => {


    return (
        <div className='col-lg-3 col-12 mb-5'>
            <ul style={{border:'1px solid black'}}>
                <li>
                Character Name: {userData[0].name}
                </li>
                <li>
                Guiding Moon: {userData[0].moon}
                </li>
                {/* <li>
                Star Sign: {userData.sign}
                </li> */}
                <li>Nationality: {userData[0].nation}
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
