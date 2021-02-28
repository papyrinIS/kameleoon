import React from 'react';
import cn from 'classnames';

import Button from './Button';
import {Site, Status, Test} from '../types/Types';
import {changeUrl} from '../commons/changeUrl';

type Props = {
    row: Test,
    sites: Site[] | undefined
};

const TableRow: React.FC<Props> = ({row: {id, name, siteId, status, type}, sites}: Props) => {

    return (
        <tr>
            <td className={cn(
                {
                    'colorFirstEl': siteId === 1,
                    'colorSecondEl': siteId === 2,
                    'colorThirdEl': siteId === 3,
                }
            )}>
                {name}
            </td>
            <td>
                {type}
            </td>
            <td className={cn({
                'gray': Status.DRAFT === status,
                'green': Status.ONLINE === status,
                'orange': Status.PAUSED === status,
                'red': Status.STOPPED === status
            })}>
                {status}
            </td>
            <td>
                {sites?.map((site: Site) => siteId === site.id ? changeUrl(site.url) : '')}
            </td>
            <td>
                {Status.DRAFT === status
                    ? <Button
                        color='draft'
                        link={`/finalize/${id}`}
                        title='finalize'
                    />
                    : <Button
                        color='primary'
                        link={`/results/${id}`}
                        title='results'
                    />
                }
            </td>
        </tr>
    );
};

export default TableRow;