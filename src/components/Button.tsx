import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import '../styles/Button.scss';

type Props = {
    title?: string
    color?: 'primary' | 'draft'
    link?: string
    onClick?: (e:React.MouseEvent<HTMLElement>) => void
};
const Button: React.FC<Props> = ({title = 'Results', color = 'primary', link = '/', onClick}: Props) => {
    return (
        <Link to={link}>
            <button className={cn('button', color)} onClick={onClick}>
                {title}
            </button>
        </Link>
    );
};

export default Button;