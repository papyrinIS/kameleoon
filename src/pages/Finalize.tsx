import React, {useEffect, useState} from 'react';
import axios, {AxiosResponse} from 'axios';
import {useParams} from 'react-router-dom';

import BackLink from '../components/BackLink';
import {Test} from '../types/Types';

const Finalize: React.FC = () => {

    const [name, setName] = useState('');
    const {id}: { id: string } = useParams();

    const fetchCurrentTest = () => {
        axios.get(`/tests/${id}`)
            .then(({data}:AxiosResponse<Test>) => setName(data.name))
            .catch( e => console.error(e.message))
    }

    useEffect( () => {
        fetchCurrentTest();
    }, [])

    return (
        <div className='otherPages'>
            <h1 className='titlePage'>Finalize</h1>
            <p className='nameTest'>{name}</p>
            <BackLink/>
        </div>
    );
};

export default Finalize;