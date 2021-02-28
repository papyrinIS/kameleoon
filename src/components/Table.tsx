import React, {useEffect, useState} from 'react';

import {Site, Test} from '../types/Types';
import TableRow from './TableRow';
import {sortOrder} from '../commons/Filter';
import arrow from '../assets/back.svg';

type Props = {
    data: Test[] | undefined,
    sites: Site[] | undefined,
    setData: (data: Test[] | undefined) => void
};
const Table: React.FC<Props> = ({data, sites, setData}: Props) => {

    const [sorting, setSorting] = useState({
        field: '',
        order: ''
    })

    const header = ['NAME', 'TYPE', 'STATUS', 'SITE'];

    const onSortingChange = async (field: string) => {

        const sortOrder: string = sorting.order === 'asc' ? 'desc' : 'asc';
        setSorting({
            field: field.toLowerCase(),
            order: sortOrder
        })
    }

    useEffect(() => {
        if (sorting.field) {
            const newData = sortOrder(data!, sites!, sorting.order, sorting.field)
            setData(newData)
        }
    }, [sorting])

    const dataElements = data?.map((row: Test) => <TableRow key={row.id} row={row} sites={sites}/>)

    return (
        <table className='table'>
            <thead>
            <tr>
                {header.map((el) => (
                    <th
                        onClick={() => onSortingChange(el)}
                        key={el}>
                        {el}
                        {sorting.field.toUpperCase() === el && (
                            sorting.order === 'asc'
                                ? <img src={arrow} alt='arrow' className='arrowDown'/>
                                : <img src={arrow} alt='arrow' className='arrowUp'/>
                        )}
                    </th>))}
                <th/>
            </tr>
            </thead>
            <tbody>
            {dataElements}
            </tbody>
        </table>
    );
};

export default Table;