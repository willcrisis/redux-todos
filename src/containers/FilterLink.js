import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

export default class FilterLink extends PureComponent {
    render() {
        const {
            filter,
            children
        } = this.props;
        return (
            <NavLink
                to={filter === 'SHOW_ALL' ? '/' : `/${ filter }`}
                activeStyle={{
                    textDecoration: 'none',
                    color: 'black'
                }}>
                {children}
            </NavLink>
        );
    }
}