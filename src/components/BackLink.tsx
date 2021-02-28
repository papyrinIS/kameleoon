import React from 'react';
import {useHistory} from 'react-router-dom';

import back from '../assets/back.svg';

const BackLink: React.FC = () => {
    let history = useHistory();

    const backRedirect = () => history.push('/');

    return (
        <div onClick={backRedirect} className='backLink'>
            <img src={back} alt='back arrow'/>
            <p>Back</p>
        </div>
    );
};

export default BackLink;