import { Site, Test } from '../types/Types';
import {changeUrl} from './changeUrl';

export const sortOrder = (items:Test[], sites:Site[], order:string, field:string) => {

    const reversed = order === 'asc' ? 1 : -1;

    let itemsOrdered: Test[] = [];

    if(field === 'site') {
        let newSites = sites?.sort(
            (a, b) => reversed * changeUrl(a.url).localeCompare(changeUrl(b.url))
        )
        for (let i = 0; i < newSites!.length; i++) {
            const newArr = items?.filter(el => el.siteId === newSites![i].id)
            itemsOrdered = [...itemsOrdered, ...newArr!]
        }
    }
    if(field === 'name' || field === 'type'){
        itemsOrdered = items?.sort(
            (a, b) => reversed * a[field].localeCompare(b[field])
        )
    }
    if(field === 'status'){
        let orderStatus = order === 'asc'
            ? ['ONLINE', 'PAUSED', 'STOPPED', 'DRAFT']
            : ['DRAFT', 'STOPPED', 'PAUSED', 'ONLINE'];
        for (let i = 0; i < orderStatus!.length; i++) {
            const newArr = items?.filter(el => el.status === orderStatus[i])
            itemsOrdered = [...itemsOrdered!, ...newArr!]
        }
    }
    return itemsOrdered;
}