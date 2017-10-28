import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Link extends PureComponent {

    onClick = e => {
        e.preventDefault();

        this.props.onClick();
    };

    render() {
        const {
            children,
            active
        } = this.props;

        if (active) {
            return <span>{children}</span>
        }

        return (
            <a onClick={this.onClick}>
                {children}
            </a>
        );
    }
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};