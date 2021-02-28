export const changeUrl = (str: string) => {
    let newStr: string = '';
    if (str.includes('www')) newStr = str.replace(/www./, '');
    if (str.includes('https')) {
        if (newStr) str = newStr;
        newStr = str.replace(/https:\/\//, '');
    }
    if (str.includes('http')) {
        if (newStr) str = newStr;
        newStr = str.replace(/http:\/\//, '');
    }

    return newStr;
}