import React from 'react';

import searchIcon from '../assets/Vector.png';

type Props = {
    value: string
    dataLength?: number
    changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void
};
const SearchBlock: React.FC<Props> = ({value, changeValue, dataLength = 0}: Props) => {
    return (
        <div className='searchBlock'>
            <div className='iconBlock'>
                <img src={searchIcon} alt='icon'/>
            </div>
            <input
                value={value}
                onChange={changeValue}
                className='input'
                placeholder='What test are you looking for?'
            />
            <div className='countSites'>{dataLength} test</div>
        </div>
    );
};

export default SearchBlock;