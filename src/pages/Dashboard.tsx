import React, {useEffect, useState} from 'react';
import axios, {AxiosResponse} from 'axios';

import '../styles/dashboard.scss';
import SearchBlock from '../components/SearchBlock';
import Table from '../components/Table';
import {Site, Test} from '../types/Types';
import Button from '../components/Button';

const Dashboard: React.FC = () => {

    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState<Test[] | undefined>();
    const [sites, setSites] = useState<Site[] | undefined>();

    const filterData = data?.filter(el => inputValue ? el.name.includes(inputValue) : true)

    const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value)

    const fetchData = () => {
        axios.get('/tests')
            .then((res: AxiosResponse<Test[]>) => setData(res.data))
            .catch(e => console.error(e))
    }
    const fetchSites = () => {
        axios.get('/sites')
            .then((res: AxiosResponse<Site[]>) => setSites(res.data))
            .catch(e => console.error(e))
    }

    const resetInputValue = () => setInputValue('');

    useEffect(() => {
        fetchData();
        fetchSites();
    }, [])

    return (
        <div className='dashboard'>
            <h1 className='title'>Dashboard</h1>
            <SearchBlock
                dataLength={filterData?.length}
                changeValue={changeInputValue}
                value={inputValue}
            />
            {filterData && filterData.length > 0
                ? <Table
                    setData={setData}
                    data={filterData}
                    sites={sites}
                />
                : inputValue && <div className='noResultsBlock'>
                <p className='text'>
                    Your search did not match any results.
                </p>
                <Button
                    onClick={resetInputValue}
                    color='primary'
                    title='Reset'
                />
            </div>
            }
        </div>
    );
};

export default Dashboard;